// === BAERYNIA v2 - Main App (Japanese default) ===

let currentCategory = 'all';
let cart = JSON.parse(localStorage.getItem('baerynia_cart_v2') || '[]');

document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('header').innerHTML = renderHeader();
  await Auth.init();
  Auth.updateUI();

  var params = new URLSearchParams(window.location.search);
  var cat = params.get('cat');
  if (cat) showPage(cat); else updateCartCount();
});

// === PAGE NAV ===
function showPage(cat) {
  currentCategory = cat;
  document.getElementById('heroSection').style.display = 'none';
  document.getElementById('productSection').style.display = 'block';

  var lang = localStorage.getItem('baerynia_lang') || 'ja';
  var names = {
    en: {all:'ALL',outerwear:'OUTERWEAR',tops:'TOPS',bottoms:'BOTTOMS',accessories:'ACCESSORIES',footwear:'FOOTWEAR',basics:'BASICS'},
    zh: {all:'全部',outerwear:'外套',tops:'上装',bottoms:'下装',accessories:'配饰',footwear:'鞋履',basics:'基础'},
    ja: {all:'すべて',outerwear:'アウター',tops:'トップス',bottoms:'ボトムス',accessories:'アクセサリー',footwear:'フットウェア',basics:'ベーシック'}
  };
  var subs = {
    en: {all:'All items',outerwear:'Coats & Jackets',tops:'Shirts & Knits',bottoms:'Pants & Skirts',accessories:'Bags & More',footwear:'Shoes',basics:'Everyday Essentials'},
    zh: {all:'全商品',outerwear:'夹克与外套',tops:'衬衫与针织',bottoms:'裤装与裙装',accessories:'包袋与配饰',footwear:'鞋履',basics:'日常基础'},
    ja: {all:'全アイテム',outerwear:'コート・ジャケット',tops:'シャツ・ニット',bottoms:'パンツ・スカート',accessories:'バッグ・小物',footwear:'靴',basics:'日常のベーシック'}
  };

  document.getElementById('sectionTitle').textContent = (names[lang]||names.ja)[cat] || cat;
  document.getElementById('sectionSubtitle').textContent = (subs[lang]||subs.ja)[cat] || '';
  renderProducts();
  window.scrollTo(0, 0);
}

// === PRODUCTS ===
function renderProducts() {
  var grid = document.getElementById('productGrid');
  var filtered = currentCategory === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === currentCategory);
  var lang = localStorage.getItem('baerynia_lang') || 'ja';
  var catNames = {
    en:{outerwear:'OUTERWEAR',tops:'TOPS',bottoms:'BOTTOMS',accessories:'ACCESSORIES',footwear:'FOOTWEAR',basics:'BASICS'},
    zh:{outerwear:'外套',tops:'上装',bottoms:'下装',accessories:'配饰',footwear:'鞋履',basics:'基础'},
    ja:{outerwear:'アウター',tops:'トップス',bottoms:'ボトムス',accessories:'アクセサリー',footwear:'フットウェア',basics:'ベーシック'}
  };
  var addLabel = {en:'ADD TO BAG', zh:'加入购物袋', ja:'カートに追加'}[lang];

  grid.innerHTML = filtered.map(p => 
    '<div class="product-card">' +
      '<div class="product-image"><img src="' + p.img + '" alt="" loading="lazy"></div>' +
      '<div class="product-name">' + getProductName(p) + '</div>' +
      '<div class="product-category">' + (catNames[lang]||catNames.ja)[p.category] + '</div>' +
      '<div class="product-price">' + formatPrice(p.price) + '</div>' +
      '<button class="product-add" onclick="addToCart(' + p.id + ')">' + addLabel + '</button>' +
    '</div>'
  ).join('');
}

// === CART ===
function addToCart(id) {
  var existing = cart.find(x => x.id === id);
  if (existing) existing.qty++; else cart.push({ id, qty: 1 });
  saveCart(); updateCartCount();
  var lang = localStorage.getItem('baerynia_lang') || 'ja';
  showNotification({zh:'已加入购物袋', en:'Added to bag', ja:'カートに追加しました'}[lang]);
}

function removeFromCart(id) { cart = cart.filter(x => x.id !== id); saveCart(); updateCartUI(); }
function changeQty(id, delta) {
  var item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart(); updateCartUI();
}
function saveCart() { localStorage.setItem('baerynia_cart_v2', JSON.stringify(cart)); }
function updateCartCount() {
  var count = cart.reduce((s, x) => s + x.qty, 0);
  var el = document.getElementById('cartCount');
  if (el) el.textContent = count;
}

function updateCartUI() {
  updateCartCount();
  var itemsEl = document.getElementById('cartItems');
  var lang = localStorage.getItem('baerynia_lang') || 'ja';
  var removeLabel = {en:'Remove', zh:'移除', ja:'削除'}[lang];
  var emptyMsg = {zh:'购物袋是空的', en:'Your bag is empty', ja:'バッグは空です'}[lang];

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty">' + emptyMsg + '</div>';
    document.getElementById('checkoutBtn').disabled = true;
    document.getElementById('cartTotal').textContent = '¥0';
    return;
  }

  itemsEl.innerHTML = cart.map(item => {
    var p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    return '<div class="cart-item">' +
      '<img src="' + p.img + '" alt="">' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + getProductName(p) + '</div>' +
        '<div class="cart-item-price">' + formatPrice(p.price) + '</div>' +
        '<div class="cart-item-qty">' +
          '<button class="qty-btn" onclick="changeQty(' + p.id + ',-1)">−</button>' +
          '<span>' + item.qty + '</span>' +
          '<button class="qty-btn" onclick="changeQty(' + p.id + ',1)">+</button>' +
          '<button class="cart-item-remove" onclick="removeFromCart(' + p.id + ')">' + removeLabel + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  var total = cart.reduce((s, item) => {
    var p = PRODUCTS.find(x => x.id === item.id);
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
    window.location.href = 'login.html?redirect=' + encodeURIComponent('checkout.html');
    return;
  }
  window.location.href = 'checkout.html';
}

// === SEARCH ===
function doSearch(query) {
  var resultsEl = document.getElementById('searchResults');
  var lang = localStorage.getItem('baerynia_lang') || 'ja';
  if (!query.trim()) { resultsEl.innerHTML = ''; return; }
  var q = query.toLowerCase();
  var results = PRODUCTS.filter(p =>
    getProductName(p).toLowerCase().includes(q) ||
    p.name.toLowerCase().includes(q) ||
    (p.name_ja||'').toLowerCase().includes(q) ||
    (p.name_zh||'').toLowerCase().includes(q)
  );

  if (results.length === 0) {
    resultsEl.innerHTML = '<div class="search-no-results">' + ({zh:'未找到相关商品',en:'No results',ja:'該当する商品が見つかりません'}[lang]) + '</div>';
  } else {
    resultsEl.innerHTML = results.map(p =>
      '<div class="search-result-card" onclick="showPage(\'' + p.category + '\');toggleSearch();">' +
        '<img src="' + p.img + '" alt="">' +
        '<div class="search-result-info"><h3>' + getProductName(p) + '</h3><p>' + formatPrice(p.price) + '</p></div>' +
      '</div>'
    ).join('');
  }
}

function showNotification(msg) {
  var el = document.getElementById('notification');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2000);
}