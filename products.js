// === BAERYNIA v2 - Japanese Style Products ===
// Images are CSS-generated (no external CDN needed, works in China)

var COLORS = [
  '#2c2c2c','#1a1a2e','#3d3d3d','#4a4a4a',
  '#f5f0eb','#d4c5b2','#8b7d6b','#5c5c5c',
  '#e8ddd0','#c4b8a8','#6b5b4f','#3a3a3a',
  '#d9d0c5','#b8a898','#7a6b5d','#4d4d4d',
  '#e0d5c8','#c2b5a5','#6d5f52','#3e3e3e',
  '#d5cabb','#b5a898','#65584c','#454545'
];

function getProductImage(id) {
  var c = COLORS[(id-1) % COLORS.length];
  return 'data:image/svg+xml,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">' +
    '<rect width="600" height="800" fill="' + c + '"/>' +
    '<text x="300" y="380" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="28" font-weight="700" fill="rgba(255,255,255,0.3)">BAERYNIA</text>' +
    '<text x="300" y="420" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="16" fill="rgba(255,255,255,0.2)">No.' + String(id).padStart(2,"0") + '</text>' +
    '</svg>'
  );
}

window.PRODUCTS = [
  {id:1, name:"Yohji Oversized Coat", name_zh:"宽松剪裁大衣", name_ja:"オーバーサイズコート",
   category:"outerwear", price:29900},
  {id:2, name:"Premium Down Jacket", name_zh:"高级羽绒夹克", name_ja:"プレミアムダウンジャケット",
   category:"outerwear", price:24900},
  {id:3, name:"Wool blend Chester Coat", name_zh:"混纺切斯特大衣", name_ja:"ウールブレンドチェスターコート",
   category:"outerwear", price:18900},
  {id:4, name:"Lightweight Kimono Cardigan", name_zh:"轻量和风开衫", name_ja:"軽量和風カーディガン",
   category:"outerwear", price:8900},
  {id:5, name:"Premium Cotton T-Shirt", name_zh:"高级棉质T恤", name_ja:"プレミアムコットンTシャツ",
   category:"tops", price:2900},
  {id:6, name:"Oxford Button-Down Shirt", name_zh:"牛津纺纽扣衬衫", name_ja:"オックスフォードボタンシャツ",
   category:"tops", price:4900},
  {id:7, name:"Kasumi Knit Sweater", name_zh:"霞光针织毛衣", name_ja:"霞みニットセーター",
   category:"tops", price:7900},
  {id:8, name:"Asymmetric Hem Tunic", name_zh:"不对称下摆束腰衣", name_ja:"非対称ヘムチュニック",
   category:"tops", price:5900},
  {id:9, name:"Relaxed Fit Trousers", name_zh:"宽松休闲裤", name_ja:"リラックスフィットトラウザー",
   category:"bottoms", price:8900},
  {id:10, name:"Wide Culotte Skirt", name_zh:"阔腿裙裤", name_ja:"ワイドキュロットスカート",
   category:"bottoms", price:6900},
  {id:11, name:"Selvedge Denim Jeans", name_zh:"原色丹宁牛仔裤", name_ja:"セルヴィッジデニムジーンズ",
   category:"bottoms", price:9900},
  {id:12, name:"Pleated Midi Skirt", name_zh:"褶皱中裙", name_ja:"プリーツミディスカート",
   category:"bottoms", price:7900},
  {id:13, name:"Washi Canvas Tote", name_zh:"和纸帆布托特包", name_ja:"和紙キャンバストート",
   category:"accessories", price:4900},
  {id:14, name:"Minimalist Leather Belt", name_zh:"极简真皮腰带", name_ja:"ミニマルレザーベルト",
   category:"accessories", price:3900},
  {id:15, name:"Silk Kinchaku Bag", name_zh:"真丝锦袋包", name_ja:"シルク巾着バッグ",
   category:"accessories", price:6900},
  {id:16, name:"Linen Scarf", name_zh:"亚麻围巾", name_ja:"リネンスカーフ",
   category:"accessories", price:3900},
  {id:17, name:"Canvas Sneakers", name_zh:"帆布运动鞋", name_ja:"キャンバススニーカー",
   category:"footwear", price:5900},
  {id:18, name:"Leather Loafers", name_zh:"皮质乐福鞋", name_ja:"レザーローファー",
   category:"footwear", price:9900},
  {id:19, name:"Tabi Boots", name_zh:"分趾靴", name_ja:"足袋ブーツ",
   category:"footwear", price:12900},
  {id:20, name:"Platform Sandals", name_zh:"厚底凉鞋", name_ja:"プラットフォームサンダル",
   category:"footwear", price:7900},
  {id:21, name:"Heattech Leggings", name_zh:"发热打底裤", name_ja:"ヒートテックレギンス",
   category:"basics", price:2900},
  {id:22, name:"AIRism Tank Top", name_zh:"AIRism 背心", name_ja:"エアリズムタンクトップ",
   category:"basics", price:1900},
  {id:23, name:"UV Protection Cardigan", name_zh:"防晒开衫", name_ja:"UVカットカーディガン",
   category:"basics", price:3900},
  {id:24, name:"Seamless Inner", name_zh:"无缝内衣", name_ja:"シームレスインナー",
   category:"basics", price:1500},
];

// Add img to each product
PRODUCTS.forEach(function(p) { p.img = getProductImage(p.id); });

window.CATEGORIES = ["all", "outerwear", "tops", "bottoms", "accessories", "footwear", "basics"];

function getProductName(p) {
  var lang = localStorage.getItem('baerynia_lang') || 'ja';
  if (lang === 'zh') return p.name_zh || p.name_ja || p.name;
  if (lang === 'en') return p.name;
  return p.name_ja || p.name;
}

function formatPrice(price) {
  return '¥' + price.toLocaleString();
}