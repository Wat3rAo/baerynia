// === BAERYNIA - App Logic ===

// --- I18N ---
const I18N = {
  en: {
    search: "SEARCH", shop_now: "SHOP NOW", hero_subtitle: "FALL / WINTER 2026 COLLECTION",
    shopping_bag: "SHOPPING BAG", total: "Total", checkout: "CHECKOUT",
    customer_care: "Customer Care", contact: "Contact", shipping: "Shipping", returns: "Returns", faq: "FAQ",
    about: "About", our_story: "Our Story", sustainability: "Sustainability", careers: "Careers",
    legal: "Legal", privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookies",
    follow: "Follow",
    all: "ALL", outerwear: "OUTERWEAR", tops: "TOPS", bottoms: "BOTTOMS", accessories: "ACCESSORIES",
    footwear: "FOOTWEAR", bags: "BAGS",
    add_to_bag: "ADD TO BAG", sold_out: "SOLD OUT",
    empty_cart: "Your shopping bag is empty.",
    no_results: "No results found.",
    added_to_bag: "Added to bag",
    search_placeholder: "SEARCH...",
    checkout_msg: "Thank you for your purchase. This is a demo store.",
    qty: "Qty", remove: "Remove",
  },
  zh: {
    search: "搜索", shop_now: "立即选购", hero_subtitle: "2026 秋冬系列",
    shopping_bag: "购物袋", total: "总计", checkout: "结账",
    customer_care: "客户服务", contact: "联系我们", shipping: "配送信息", returns: "退换货", faq: "常见问题",
    about: "关于", our_story: "品牌故事", sustainability: "可持续发展", careers: "招贤纳士",
    legal: "法律条款", privacy: "隐私政策", terms: "服务条款", cookies: "Cookie 政策",
    follow: "关注我们",
    all: "全部", outerwear: "外套", tops: "上装", bottoms: "下装", accessories: "配饰",
    footwear: "鞋履", bags: "包袋",
    add_to_bag: "加入购物袋", sold_out: "已售罄",
    empty_cart: "购物袋是空的。",
    no_results: "未找到相关商品。",
    added_to_bag: "已加入购物袋",
    search_placeholder: "搜索...",
    checkout_msg: "感谢您的购买。这是一个演示商店。",
    qty: "数量", remove: "移除",
  },
  ja: {
    search: "検索", shop_now: "今すぐ購入", hero_subtitle: "2026 秋冬コレクション",
    shopping_bag: "ショッピングバッグ", total: "合計", checkout: "チェックアウト",
    customer_care: "カスタマーケア", contact: "お問い合わせ", shipping: "配送", returns: "返品・交換", faq: "よくある質問",
    about: "について", our_story: "ブランドストーリー", sustainability: "サステナビリティ", careers: "採用情報",
    legal: "法的情報", privacy: "プライバシーポリシー", terms: "利用規約", cookies: "Cookie ポリシー",
    follow: "フォロー",
    all: "すべて", outerwear: "アウター", tops: "トップス", bottoms: "ボトムス", accessories: "アクセサリー",
    footwear: "フットウェア", bags: "バッグ",
    add_to_bag: "バッグに追加", sold_out: "完売",
    empty_cart: "ショッピングバッグは空です。",
    no_results: "結果が見つかりませんでした。",
    added_to_bag: "バッグに追加しました",
    search_placeholder: "検索...",
    checkout_msg: "ご購入ありがとうございます。これはデモストアです。",
    qty: "数量", remove: "削除",
  }
};

// --- CATEGORIES ---
const CATEGORIES = ["all", "outerwear", "tops", "bottoms", "accessories", "footwear", "bags"];

// --- PRODUCTS ---
const PRODUCTS = [
  {id:1, name:"Oversized Wool Coat", name_zh:"宽松羊毛大衣", name_ja:"オーバーサイズウールコート",
   category:"outerwear", price:12800, img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"},
  {id:2, name:"Structured Blazer", name_zh:"结构西装外套", name_ja:"ストラクチャードブレザー",
   category:"outerwear", price:9800, img:"https://images.unsplash.com/photo-1632149877166-f75d41470b3f?w=600&q=80"},
  {id:3, name:"Leather Biker Jacket", name_zh:"皮质机车夹克", name_ja:"レザーバイクジャケット",
   category:"outerwear", price:15600, img:"https://images.unsplash.com/photo-1621222746924-91f1e9f7e6a8?w=600&q=80"},
  {id:4, name:"Padded Parka", name_zh:"填充派克大衣", name_ja:"パデッドパーカー",
   category:"outerwear", price:11200, img:"https://images.unsplash.com/photo-1605518216938-7c5253891147?w=600&q=80"},

  {id:5, name:"Cotton Oversized Tee", name_zh:"宽松棉质T恤", name_ja:"コットンオーバーサイズTシャツ",
   category:"tops", price:3200, img:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80"},
  {id:6, name:"Silk Button Shirt", name_zh:"丝质纽扣衬衫", name_ja:"シルクボタンシャツ",
   category:"tops", price:5800, img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80"},
  {id:7, name:"Knit Turtleneck", name_zh:"针织高领毛衣", name_ja:"ニートタートルネック",
   category:"tops", price:4500, img:"https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80"},
  {id:8, name:"Technical Hoodie", name_zh:"机能风帽衫", name_ja:"テクニカルフーディー",
   category:"tops", price:4900, img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"},

  {id:9, name:"Wide-Leg Trousers", name_zh:"阔腿西裤", name_ja:"ワイドレッグトラウザー",
   category:"bottoms", price:6800, img:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae67?w=600&q=80"},
  {id:10, name:"Pleated Skirt", name_zh:"百褶半身裙", name_ja:"プリーツスカート",
   category:"bottoms", price:5200, img:"https://images.unsplash.com/photo-1614178542597-fc6e4b6c7e44?w=600&q=80"},
  {id:11, name:"Denim Straight Jeans", name_zh:"直筒牛仔裤", name_ja:"デニムストレートジーンズ",
   category:"bottoms", price:4800, img:"https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80"},
  {id:12, name:"Cargo Pants", name_zh:"工装裤", name_ja:"カーゴパンツ",
   category:"bottoms", price:5600, img:"https://images.unsplash.com/photo-1614178687020-c8b4a4f6f4f6?w=600&q=80"},

  {id:13, name:"Square Sunglasses", name_zh:"方形太阳镜", name_ja:"スクエアサングラス",
   category:"accessories", price:2800, img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80"},
  {id:14, name:"Leather Belt", name_zh:"真皮皮带", name_ja:"レザーベルト",
   category:"accessories", price:2200, img:"https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=80"},
  {id:15, name:"Wool Scarf", name_zh:"羊毛围巾", name_ja:"ウールスカーフ",
   category:"accessories", price:3500, img:"https://images.unsplash.com/photo-1601371153797-fc9d33d4d27d?w=600&q=80"},
  {id:16, name:"Minimalist Watch", name_zh:"极简手表", name_ja:"ミニマリストウォッチ",
   category:"accessories", price:8800, img:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80"},

  {id:17, name:"Chunky Sneakers", name_zh:"厚底运动鞋", name_ja:"チャンキースニーカー",
   category:"footwear", price:7800, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"},
  {id:18, name:"Leather Boots", name_zh:"真皮靴", name_ja:"レザーブーツ",
   category:"footwear", price:9200, img:"https://images.unsplash.com/photo-1605812860427-4024433bcd70?w=600&q=80"},
  {id:19, name:"Platform Loafers", name_zh:"厚底乐福鞋", name_ja:"プラットフォームローファー",
   category:"footwear", price:6800, img:"https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&q=80"},
  {id:20, name:"Socks Set", name_zh:"袜子套装", name_ja:"ソックスセット",
   category:"footwear", price:1200, img:"https://images.unsplash.com/photo-1586350977771-2a13b5953c97?w=600&q=80"},

  {id:21, name:"Structured Tote Bag", name_zh:"结构托特包", name_ja:"ストラクチャードトートバッグ",
   category:"bags", price:11200, img:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80"},
  {id:22, name:"Mini Crossbody", name_zh:"迷你斜挎包", name_ja:"ミニクロスボディ",
   category:"bags", price:8800, img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80"},
  {id:23, name:"Shoulder Bag", name_zh:"单肩包", name_ja:"ショルダーバッグ",
   category:"bags", price:9500, img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80"},
  {id:24, name:"Backpack", name_zh:"双肩包", name_ja:"バックパック",
   category:"bags", price:7800, img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80"},
];

// --- STATE ---
let currentLang = "en";
let currentCategory = "all";
let cart = [];

// --- CURRENCY ---
const CURRENCY = { en: "¥", zh: "¥", ja: "¥" };

// --- INIT ---
function init() {
  renderNav();
  renderProducts();
  applyI18n();
  // Scroll listener
  window.addEventListener("scroll", function() {
    document.body.classList.toggle("scrolled", window.scrollY > 56);
  });
  // Close lang dropdown on outside click
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".lang-switcher")) {
      document.getElementById("langDropdown").classList.remove("open");
    }
  });
}

// --- NAV ---
function renderNav() {
  const nav = document.getElementById("nav");
  nav.innerHTML = CATEGORIES.map(function(cat) {
    return '<a href="#" onclick="showPage(\'' + cat + '\');return false;" data-i18n="' + cat + '">' +
           I18N[currentLang][cat] + '</a>';
  }).join("");
}

// --- I18N ---
function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    var key = el.getAttribute("data-i18n");
    if (I18N[currentLang][key]) {
      el.textContent = I18N[currentLang][key];
    }
  });
  // Update lang button
  var langLabels = { en: "EN", zh: "中", ja: "日" };
  document.getElementById("langBtn").textContent = langLabels[currentLang];
  // Update search placeholder
  var si = document.getElementById("searchInput");
  if (si) si.placeholder = I18N[currentLang]["search_placeholder"];
  // Re-render nav and products
  renderNav();
  if (document.getElementById("productSection").style.display !== "none") {
    renderProducts();
    document.getElementById("sectionTitle").textContent = I18N[currentLang][currentCategory] || currentCategory.toUpperCase();
  }
  // Update html lang
  document.documentElement.lang = currentLang;
}

function setLang(lang) {
  currentLang = lang;
  applyI18n();
  document.getElementById("langDropdown").classList.remove("open");
}

function toggleLangDropdown() {
  document.getElementById("langDropdown").classList.toggle("open");
}

// --- PRODUCTS ---
function getProductName(p) {
  if (currentLang === "zh") return p.name_zh || p.name;
  if (currentLang === "ja") return p.name_ja || p.name;
  return p.name;
}

function formatPrice(price) {
  return CURRENCY[currentLang] + price.toLocaleString();
}

function renderProducts() {
  var grid = document.getElementById("productGrid");
  var filtered = currentCategory === "all" ? PRODUCTS : PRODUCTS.filter(function(p) {
    return p.category === currentCategory;
  });
  grid.innerHTML = filtered.map(function(p) {
    return '<div class="product-card" onclick="event.stopPropagation()">' +
      '<div class="product-image"><img src="' + p.img + '" alt="' + getProductName(p) + '" loading="lazy"></div>' +
      '<div class="product-info">' +
        '<div><div class="product-name">' + getProductName(p) + '</div>' +
        '<div class="product-category" data-i18n="' + p.category + '">' + I18N[currentLang][p.category] + '</div></div>' +
        '<div class="product-price">' + formatPrice(p.price) + '</div>' +
      '</div>' +
      '<button class="product-add" onclick="addToCart(' + p.id + ')" data-i18n="add_to_bag">' + I18N[currentLang]["add_to_bag"] + '</button>' +
    '</div>';
  }).join("");
}

// --- PAGE NAVIGATION ---
function showPage(cat) {
  currentCategory = cat;
  var hero = document.getElementById("heroSection");
  var productSec = document.getElementById("productSection");
  var title = document.getElementById("sectionTitle");

  if (cat === "home") {
    hero.style.display = "flex";
    productSec.style.display = "none";
    window.scrollTo(0, 0);
  } else {
    hero.style.display = "none";
    productSec.style.display = "block";
    title.textContent = I18N[currentLang][cat] || cat.toUpperCase();
    renderProducts();
    window.scrollTo(0, 0);
  }
}

// --- CART ---
function addToCart(id) {
  var p = PRODUCTS.find(function(x) { return x.id === id; });
  if (!p) return;
  var existing = cart.find(function(x) { return x.id === id; });
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: id, qty: 1 });
  }
  updateCartUI();
  showNotification(I18N[currentLang]["added_to_bag"]);
}

function removeFromCart(id) {
  cart = cart.filter(function(x) { return x.id !== id; });
  updateCartUI();
}

function changeQty(id, delta) {
  var item = cart.find(function(x) { return x.id === id; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    updateCartUI();
  }
}

function updateCartUI() {
  var count = cart.reduce(function(s, x) { return s + x.qty; }, 0);
  document.getElementById("cartCount").textContent = count;

  var itemsEl = document.getElementById("cartItems");
  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty">' + I18N[currentLang]["empty_cart"] + '</div>';
    document.getElementById("checkoutBtn").disabled = true;
  } else {
    itemsEl.innerHTML = cart.map(function(item) {
      var p = PRODUCTS.find(function(x) { return x.id === item.id; });
      return '<div class="cart-item">' +
        '<img src="' + p.img + '" alt="' + getProductName(p) + '">' +
        '<div class="cart-item-info">' +
          '<div class="cart-item-name">' + getProductName(p) + '</div>' +
          '<div class="cart-item-price">' + formatPrice(p.price) + '</div>' +
          '<div class="cart-item-qty">' +
            '<button class="qty-btn" onclick="changeQty(' + p.id + ',-1)">−</button>' +
            '<span>' + item.qty + '</span>' +
            '<button class="qty-btn" onclick="changeQty(' + p.id + ',1)">+</button>' +
            '<button class="cart-item-remove" onclick="removeFromCart(' + p.id + ')">' + I18N[currentLang]["remove"] + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join("");
    document.getElementById("checkoutBtn").disabled = false;
  }

  var total = cart.reduce(function(s, item) {
    var p = PRODUCTS.find(function(x) { return x.id === item.id; });
    return s + p.price * item.qty;
  }, 0);
  document.getElementById("cartTotal").textContent = formatPrice(total);
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  updateCartUI();
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
}

function checkout() {
  alert(I18N[currentLang]["checkout_msg"]);
  cart = [];
  updateCartUI();
  closeCart();
}

// --- SEARCH ---
function toggleSearch() {
  var overlay = document.getElementById("searchOverlay");
  overlay.classList.toggle("open");
  if (overlay.classList.contains("open")) {
    var input = document.getElementById("searchInput");
    input.value = "";
    input.focus();
    doSearch("");
  }
}

function doSearch(query) {
  var resultsEl = document.getElementById("searchResults");
  if (!query.trim()) {
    resultsEl.innerHTML = "";
    return;
  }
  var q = query.toLowerCase();
  var results = PRODUCTS.filter(function(p) {
    var name = getProductName(p).toLowerCase();
    var cat = I18N[currentLang][p.category].toLowerCase();
    return name.indexOf(q) !== -1 || cat.indexOf(q) !== -1 || p.name.toLowerCase().indexOf(q) !== -1;
  });
  if (results.length === 0) {
    resultsEl.innerHTML = '<div class="search-no-results">' + I18N[currentLang]["no_results"] + '</div>';
  } else {
    resultsEl.innerHTML = results.map(function(p) {
      return '<div class="search-result-card" onclick="showPage(\'' + p.category + '\');toggleSearch();">' +
        '<img src="' + p.img + '" alt="' + getProductName(p) + '">' +
        '<div class="search-result-info">' +
          '<h3>' + getProductName(p) + '</h3>' +
          '<p>' + formatPrice(p.price) + ' · ' + I18N[currentLang][p.category] + '</p>' +
        '</div>' +
      '</div>';
    }).join("");
  }
}

// --- NOTIFICATION ---
function showNotification(msg) {
  var el = document.getElementById("notification");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(function() { el.classList.remove("show"); }, 2000);
}

// --- START ---
init();
