// === BAERYNIA v2 - Auth Module (Japanese default) ===

window.I18N = {
  en: { search:'SEARCH', all:'ALL', outerwear:'OUTERWEAR', tops:'TOPS', bottoms:'BOTTOMS',
    accessories:'ACCESSORIES', footwear:'FOOTWEAR', basics:'BASICS', bag:'BAG',
    login:'Login', my_account:'My Account', my_orders:'My Orders', logout:'Logout' },
  zh: { search:'搜索', all:'全部', outerwear:'外套', tops:'上装', bottoms:'下装',
    accessories:'配饰', footwear:'鞋履', basics:'基础', bag:'购物袋',
    login:'登录', my_account:'我的账户', my_orders:'我的订单', logout:'退出' },
  ja: { search:'検索', all:'すべて', outerwear:'アウター', tops:'トップス', bottoms:'ボトムス',
    accessories:'アクセサリー', footwear:'フットウェア', basics:'ベーシック', bag:'バッグ',
    login:'ログイン', my_account:'マイページ', my_orders:'注文履歴', logout:'ログアウト' }
};

window.Auth = {
  currentUser: null, profile: null,

  async init() {
    const { data: { session } } = await sb.auth.getSession();
    if (session) { this.currentUser = session.user; await this.loadProfile(); }
    sb.auth.onAuthStateChange(async (event, session) => {
      if (session) { this.currentUser = session.user; await this.loadProfile(); }
      else { this.currentUser = null; this.profile = null; }
      this.updateUI();
    });
    this.updateUI();
  },

  async loadProfile() {
    if (!this.currentUser) return;
    const { data } = await sb.from('profiles').select('*').eq('id', this.currentUser.id).single();
    this.profile = data;
  },

  async register(email, password, fullName) {
    const { data, error } = await sb.auth.signUp({ email, password,
      options: { data: { full_name: fullName } } });
    if (error) throw error;
    return data;
  },

  async login(email, password) {
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },

  async logout() {
    await sb.auth.signOut();
    this.currentUser = null; this.profile = null;
    this.updateUI();
  },

  isLoggedIn() { return !!this.currentUser; },

  updateUI() {
    document.querySelectorAll('.auth-only').forEach(el => { el.style.display = this.isLoggedIn() ? '' : 'none'; });
    document.querySelectorAll('.guest-only').forEach(el => { el.style.display = this.isLoggedIn() ? 'none' : ''; });
    var el = document.getElementById('userName');
    if (el && this.profile) el.textContent = this.profile.full_name || this.currentUser.email;
  },

  requireLogin() {
    if (!this.isLoggedIn()) {
      window.location.href = 'login.html?redirect=' + encodeURIComponent(window.location.href);
      return false;
    }
    return true;
  }
};

function renderHeader(activePage) {
  var lang = localStorage.getItem('baerynia_lang') || 'ja';
  var langLabel = { en: 'EN', zh: '中', ja: 'JA' };
  var T = function(key) { return (I18N[lang] && I18N[lang][key]) || key; };

  return '<header class="header">' +
    '<div class="logo"><a href="index.html">BAERYNIA</a></div>' +
    '<nav class="nav">' +
      CATEGORIES.map(function(cat) {
        return '<a href="index.html?cat=' + cat + '" ' + (activePage===cat?'class="active"':'') + '>' + T(cat) + '</a>';
      }).join('') +
    '</nav>' +
    '<div class="header-actions">' +
      '<button onclick="toggleSearch()" class="header-btn">' + T('search') + '</button>' +
      '<div class="lang-switcher"><button onclick="toggleLangDropdown()" class="header-btn" id="langBtn">' + langLabel[lang] + '</button>' +
        '<div class="lang-dropdown" id="langDropdown">' +
          '<button onclick="setLang(\'en\')">English</button>' +
          '<button onclick="setLang(\'zh\')">中文</button>' +
          '<button onclick="setLang(\'ja\')">日本語</button>' +
        '</div>' +
      '</div>' +
      '<div class="auth-only" style="display:none"><div class="user-menu" onclick="toggleUserMenu()">' +
        '<button class="header-btn" id="userName">...</button>' +
        '<div class="user-dropdown" id="userDropdown">' +
          '<a href="account.html">' + T('my_account') + '</a>' +
          '<a href="orders.html">' + T('my_orders') + '</a>' +
          '<button onclick="Auth.logout()">' + T('logout') + '</button>' +
        '</div>' +
      '</div></div>' +
      '<div class="guest-only"><a href="login.html" class="header-btn">' + T('login') + '</a></div>' +
      '<button onclick="openCart()" class="header-btn">' + T('bag') + '<span class="cart-count" id="cartCount">0</span></button>' +
    '</div>' +
  '</header>';
}

function toggleUserMenu() { document.getElementById('userDropdown')?.classList.toggle('open'); }
function toggleLangDropdown() { document.getElementById('langDropdown')?.classList.toggle('open'); }
function setLang(lang) { localStorage.setItem('baerynia_lang', lang); location.reload(); }
function toggleSearch() {
  var o = document.getElementById('searchOverlay');
  if (o) { o.classList.toggle('open'); if (o.classList.contains('open')) { document.getElementById('searchInput')?.focus(); } }
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-switcher')) document.getElementById('langDropdown')?.classList.remove('open');
  if (!e.target.closest('.user-menu')) document.getElementById('userDropdown')?.classList.remove('open');
});