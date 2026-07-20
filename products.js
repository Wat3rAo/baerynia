// === BAERYNIA Products Data ===

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

const CATEGORIES = ["all", "outerwear", "tops", "bottoms", "accessories", "footwear", "bags"];

function getProductName(p) {
  const lang = localStorage.getItem('baerynia_lang') || 'zh';
  if (lang === 'zh') return p.name_zh || p.name;
  if (lang === 'ja') return p.name_ja || p.name;
  return p.name;
}

function formatPrice(price) {
  return '¥' + price.toLocaleString();
}
