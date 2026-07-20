# BAERYNIA E-commerce

## 快速开始

### 1. 注册 Supabase
1. 访问 https://supabase.com 用 GitHub 登录
2. 创建项目，命名为 `baerynia`
3. 复制 **Project URL** 和 **anon key**（Settings → API）

### 2. 配置
编辑 `supabase-client.js`，替换：
```js
const SUPABASE_URL = 'https://你的项目ID.supabase.co';
const SUPABASE_ANON_KEY = '你的anon_key';
```

### 3. 创建数据库
在 Supabase Dashboard → SQL Editor 中，粘贴运行 `database.sql` 的全部内容。

### 4. 启用邮箱认证
Supabase Dashboard → Authentication → Providers → 确认 Email 已启用（默认开启）。

### 5. 部署
推送到 GitHub 后 Vercel/GitHub Pages 自动部署。

## 文件说明
- `index.html` - 首页（商品浏览）
- `login.html` - 登录
- `register.html` - 注册
- `account.html` - 账户（个人信息、收货地址）
- `orders.html` - 订单管理
- `checkout.html` - 结算
- `database.sql` - 数据库 Schema
- `supabase-client.js` - Supabase 配置
- `auth.js` - 认证逻辑
- `products.js` - 商品数据
- `app.js` - 主逻辑
- `style.css` - 样式
