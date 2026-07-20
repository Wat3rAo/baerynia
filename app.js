// === BAERYNIA Main App ===

let currentCategory = 'all';
let cart = JSON.parse(localStorage.getItem('baerynia_cart') || '[]');

// === INIT ===
document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('header').innerHTML = renderHeader();
  await Auth.init();

  // Check URL params for category
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) { showPage(cat); } else { updateCartCount(); }

  // Scroll listener
  window.addEventListener('scroll', () => {
    document.body.classList.toggle('scrolled', window.scrollY > 56);
  });
});

// === PAGE NAVIGATION ===
function showPage(cat) {
  currentCategory = cat;
  const hero = document.getElementById('heroSection');
  const productSec = document.getElementById('productSection');
  const title = document.getElementById('sectionTitle');
  const lang = localStorage.getItem('baerynia_lang') || 'zh';

  const categoryNames = {
    en: {all:'ALL',outerwear:'OUTERWEAR',tops:'TOPS',bottoms:'BOTTOMS',accessories:'ACCESSORIES',footwear:'FOOTWEAR',bags:'BAGS'},
    zh: {all:'全部',outerwear:'外套',tops:'上装',bottoms:'下装',accessories:'配饰',footwear:'鞋履',bags:'包袋'},
    ja: {all:'すべて',outerwear:'アウター',tops:'トップス',bottoms:'ボトムス',accessories:'アクセサリー',footwear:'フットウェア',bags:'バッグ'}
  };

  hero.style.display = 'none';
  productSec.style.display = 'block';
  title.textContent = (categoryNames[lang] && categoryNames[lang][cat]) || cat.toUpperCase();
  renderProducts();
  window.scrollTo(0, 0);
}

// === PRODUCT RENDERING ===
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const filtered = currentCategory === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === currentCategory);
  const lang = localStorage.getItem('baerynia_lang') || 'zh';
  const addLabel = {en:'ADD TO BAG', zh:'加入购物袋', ja:'バッグに追加'}[lang] || '加入购物袋';
  const catNames = {
    en:{outerwear:'OUTERWEAR',tops:'TOPS',bottoms:'BOTTOMS',accessories:'ACCESSORIES',footwear:'FOOTWEAR',bags:'BAGS'},
    zh:{outerwear:'外套',tops:'上装',bottoms:'下装',accessories:'配饰',footwear:'鞋履',bags:'包袋'},
    ja:{outerwear:'アウター',tops:'トップス',bottoms:'ボトムス',accessories:'アクセサリー',footwear:'フットウェア',bags:'バッグ'}
  };

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-image"><img src="${p.img}" alt="${getProductName(p)}" loading="lazy"></div>
      <div class="product-info">
        <div>
          <div class="product-name">${getProductName(p)}</div>
          <div class="product-category">${(catNames[lang]||catNames.zh)[p.category]}</div>
        </div>
        <div class="product-price">${formatPrice(p.price)}</div>
      </div>
      <button class="product-add" onclick="addToCart(${p.id})">${addLabel}</button>
    </div>
  `).join('');
}

// === CART ===
function addToCart(id) {
  const existing = cart.find(x => x.id === id);
  if (existing) { existing.qty++; } else { cart.push({ id, qty: 1 }); }
  saveCart();
  updateCartCount();
  const lang = localStorage.getItem('baerynia_lang') || 'zh';
  showNotification({zh:'已加入购物袋', en:'Added to bag', ja:'バッグに追加しました'}[lang]);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('baerynia_cart', JSON.stringify(cart));
}

function updateCartCount() {
  const count = cart.reduce((s, x) => s + x.qty, 0);
  const el = document.getElementById('cartCount');
  if (el) el.textContent = count;
}

function updateCartUI() {
  updateCartCount();
  const itemsEl = document.getElementById('cartItems');
  const lang = localStorage.getItem('baerynia_lang') || 'zh';
  const removeLabel = {en:'Remove', zh:'移除', ja:'削除'}[lang];

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty">${{zh:'购物袋是空的',en:'Your bag is empty',ja:'バッグは空です'}[lang]}</div>`;
    document.getElementById('checkoutBtn').disabled = true;
    document.getElementById('cartTotal').textContent = '¥0';
    return;
  }

  itemsEl.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    return `<div class="cart-item">
      <img src="${p.img}" alt="${getProductName(p)}">
      <div class="cart-item-info">
        <div class="cart-item-name">${getProductName(p)}</div>
        <div class="cart-item-price">${formatPrice(p.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${p.id})">${removeLabel}</button>
        </div>
      </div>
    </div>`;
  }).join('');

  const total = cart.reduce((s, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return s + (p ? p.price * item.qty : 0);
  }, 0);
  document.getElementById('cartTotal').textContent = formatPrice(total);
  document.getElementById('checkoutBtn').disabled = false;
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  updateCartUI();
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

function goCheckout() {
  if (!Auth.isLoggedIn()) {
    const lang = localStorage.getItem('baerynia_lang') || 'zh';
    alert({zh:'请先登录后再结算', en:'Please login to checkout', ja:'チェックアウトにはログインが必要です'}[lang]);
    window.location.href = 'login.html?redirect=' + encodeURIComponent('checkout.html');
    return;
  }
  window.location.href = 'checkout.html';
}

// === SEARCH ===
function doSearch(query) {
  const resultsEl = document.getElementById('searchResults');
  const lang = localStorage.getItem('baerynia_lang') || 'zh';
  if (!query.trim()) { resultsEl.innerHTML = ''; return; }

  const q = query.toLowerCase();
  const results = PRODUCTS.filter(p =>
    getProductName(p).toLowerCase().includes(q) ||
    p.name.toLowerCase().includes(q) ||
    p.category.includes(q)
  );

  if (results.length === 0) {
    resultsEl.innerHTML = `<div class="search-no-results">${{zh:'未找到相关商品',en:'No results',ja:'結果なし'}[lang]}</div>`;
  } else {
    resultsEl.innerHTML = results.map(p => `
      <div class="search-result-card" onclick="showPage('${p.category}');toggleSearch();">
        <img src="${p.img}" alt="${getProductName(p)}">
        <div class="search-result-info">
          <h3>${getProductName(p)}</h3>
          <p>${formatPrice(p.price)}</p>
        </div>
      </div>
    `).join('');
  }
}

// === NOTIFICATION ===
function showNotification(msg) {
  const el = document.getElementById('notification');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2000);
}
