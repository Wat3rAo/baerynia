// === BAERYNIA Auth Module ===

window.I18N = {
  en: { search:'SEARCH', all:'ALL', outerwear:'OUTERWEAR', tops:'TOPS', bottoms:'BOTTOMS',
    accessories:'ACCESSORIES', footwear:'FOOTWEAR', bags:'BAGS', bag:'BAG',
    add_to_bag:'ADD TO BAG', total:'Total', checkout:'CHECKOUT', shopping_bag:'SHOPPING BAG' },
  zh: { search:'搜索', all:'全部', outerwear:'外套', tops:'上装', bottoms:'下装',
    accessories:'配饰', footwear:'鞋履', bags:'包袋', bag:'购物袋',
    add_to_bag:'加入购物袋', total:'总计', checkout:'结算', shopping_bag:'购物袋' },
  ja: { search:'検索', all:'すべて', outerwear:'アウター', tops:'トップス', bottoms:'ボトムス',
    accessories:'アクセサリー', footwear:'フットウェア', bags:'バッグ', bag:'バッグ',
    add_to_bag:'バッグに追加', total:'合計', checkout:'チェックアウト', shopping_bag:'ショッピングバッグ' }
};

window.Auth = {
  currentUser: null,

  async init() {
    const { data: { session } } = await sb.auth.getSession();
    if (session) {
      this.currentUser = session.user;
      await this.loadProfile();
    }
    sb.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        this.currentUser = session.user;
        await this.loadProfile();
      } else {
        this.currentUser = null;
        this.profile = null;
      }
      this.updateUI();
    });
    this.updateUI();
  },

  async loadProfile() {
    if (!this.currentUser) return;
    const { data } = await sb
      .from('profiles').select('*').eq('id', this.currentUser.id).single();
    this.profile = data;
  },

  async register(email, password, fullName) {
    const { data, error } = await sb.auth.signUp({
      email, password,
      options: { data: { full_name: fullName } }
    });
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
    this.currentUser = null;
    this.profile = null;
    this.updateUI();
    window.location.href = 'index.html';
  },

  isLoggedIn() {
    return !!this.currentUser;
  },

  updateUI() {
    document.querySelectorAll('.auth-only').forEach(el => {
      el.style.display = this.isLoggedIn() ? '' : 'none';
    });
    document.querySelectorAll('.guest-only').forEach(el => {
      el.style.display = this.isLoggedIn() ? 'none' : '';
    });
    const userNameEl = document.getElementById('userName');
    if (userNameEl && this.profile) {
      userNameEl.textContent = this.profile.full_name || this.currentUser.email;
    }
  },

  requireLogin() {
    if (!this.isLoggedIn()) {
      window.location.href = 'login.html?redirect=' + encodeURIComponent(window.location.href);
      return false;
    }
    return true;
  }
};

// Common header/footer renderer
function renderHeader(activePage) {
  const lang = localStorage.getItem('baerynia_lang') || 'zh';
  const langLabel = { en: 'EN', zh: '中', ja: '日' };
  const T = (key) => (I18N[lang] && I18N[lang][key]) || key;

  return `
  <header class="header">
    <div class="logo"><a href="index.html">BAERYNIA</a></div>
    <nav class="nav">
      ${['all','outerwear','tops','bottoms','accessories','footwear','bags'].map(cat =>
        `<a href="index.html?cat=${cat}" ${activePage===cat?'class="active"':''}>${T(cat)}</a>`
      ).join('')}
    </nav>
    <div class="header-actions">
      <button onclick="toggleSearch()" class="header-btn">${T('search')}</button>
      <div class="lang-switcher">
        <button onclick="toggleLangDropdown()" class="header-btn" id="langBtn">${langLabel[lang]}</button>
        <div class="lang-dropdown" id="langDropdown">
          <button onclick="setLang('en')">English</button>
          <button onclick="setLang('zh')">中文</button>
          <button onclick="setLang('ja')">日本語</button>
        </div>
      </div>
      <div class="auth-only" style="display:none">
        <div class="user-menu" onclick="toggleUserMenu()">
          <button class="header-btn" id="userName">...</button>
          <div class="user-dropdown" id="userDropdown">
            <a href="account.html">${lang==='zh'?'我的账户':'My Account'}</a>
            <a href="orders.html">${lang==='zh'?'我的订单':'My Orders'}</a>
            <button onclick="Auth.logout()">${lang==='zh'?'退出':'Logout'}</button>
          </div>
        </div>
      </div>
      <div class="guest-only">
        <a href="login.html" class="header-btn">${lang==='zh'?'登录':'Login'}</a>
      </div>
      <button onclick="openCart()" class="header-btn cart-btn">
        ${T('bag')}<span class="cart-count" id="cartCount">0</span>
      </button>
    </div>
  </header>`;
}

function toggleUserMenu() {
  document.getElementById('userDropdown')?.classList.toggle('open');
}

function toggleLangDropdown() {
  document.getElementById('langDropdown')?.classList.toggle('open');
}

function setLang(lang) {
  localStorage.setItem('baerynia_lang', lang);
  location.reload();
}

function toggleSearch() {
  document.getElementById('searchOverlay')?.classList.toggle('open');
  if (document.getElementById('searchOverlay')?.classList.contains('open')) {
    document.getElementById('searchInput')?.focus();
  }
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-switcher')) {
    document.getElementById('langDropdown')?.classList.remove('open');
  }
  if (!e.target.closest('.user-menu')) {
    document.getElementById('userDropdown')?.classList.remove('open');
  }
});
