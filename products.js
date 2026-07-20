// === BAERYNIA v2 - Japanese Style Products ===

window.PRODUCTS = [
  {id:1, name:"Yohji Oversized Coat", name_zh:"宽松剪裁大衣", name_ja:"オーバーサイズコート",
   category:"outerwear", price:29900, img:"https://picsum.photos/seed/bn01/600/800"},
  {id:2, name:"Premium Down Jacket", name_zh:"高级羽绒夹克", name_ja:"プレミアムダウンジャケット",
   category:"outerwear", price:24900, img:"https://picsum.photos/seed/bn02/600/800"},
  {id:3, name:"Wool blend Chester Coat", name_zh:"混纺切斯特大衣", name_ja:"ウールブレンドチェスターコート",
   category:"outerwear", price:18900, img:"https://picsum.photos/seed/bn03/600/800"},
  {id:4, name:"Lightweight Kimono Cardigan", name_zh:"轻量和风开衫", name_ja:"軽量和風カーディガン",
   category:"outerwear", price:8900, img:"https://picsum.photos/seed/bn04/600/800"},

  {id:5, name:"Premium Cotton T-Shirt", name_zh:"高级棉质T恤", name_ja:"プレミアムコットンTシャツ",
   category:"tops", price:2900, img:"https://picsum.photos/seed/bn05/600/800"},
  {id:6, name:"Oxford Button-Down Shirt", name_zh:"牛津纺纽扣衬衫", name_ja:"オックスフォードボタンシャツ",
   category:"tops", price:4900, img:"https://picsum.photos/seed/bn06/600/800"},
  {id:7, name:"Kasumi Knit Sweater", name_zh:"霞光针织毛衣", name_ja:"霞みニットセーター",
   category:"tops", price:7900, img:"https://picsum.photos/seed/bn07/600/800"},
  {id:8, name:"Asymmetric Hem Tunic", name_zh:"不对称下摆束腰衣", name_ja:"非対称ヘムチュニック",
   category:"tops", price:5900, img:"https://picsum.photos/seed/bn08/600/800"},

  {id:9, name:"Relaxed Fit Trousers", name_zh:"宽松休闲裤", name_ja:"リラックスフィットトラウザー",
   category:"bottoms", price:8900, img:"https://picsum.photos/seed/bn09/600/800"},
  {id:10, name:"Wide Culotte Skirt", name_zh:"阔腿裙裤", name_ja:"ワイドキュロットスカート",
   category:"bottoms", price:6900, img:"https://picsum.photos/seed/bn10/600/800"},
  {id:11, name:"Selvedge Denim Jeans", name_zh:"原色丹宁牛仔裤", name_ja:"セルヴィッジデニムジーンズ",
   category:"bottoms", price:9900, img:"https://picsum.photos/seed/bn11/600/800"},
  {id:12, name:"Pleated Midi Skirt", name_zh:"褶皱中裙", name_ja:"プリーツミディスカート",
   category:"bottoms", price:7900, img:"https://picsum.photos/seed/bn12/600/800"},

  {id:13, name:"Washi Canvas Tote", name_zh:"和纸帆布托特包", name_ja:"和紙キャンバストート",
   category:"accessories", price:4900, img:"https://picsum.photos/seed/bn13/600/800"},
  {id:14, name:"Minimalist Leather Belt", name_zh:"极简真皮腰带", name_ja:"ミニマルレザーベルト",
   category:"accessories", price:3900, img:"https://picsum.photos/seed/bn14/600/800"},
  {id:15, name:"Silk Kinchaku Bag", name_zh:"真丝锦袋包", name_ja:"シルク巾着バッグ",
   category:"accessories", price:6900, img:"https://picsum.photos/seed/bn15/600/800"},
  {id:16, name:"Linen Scarf", name_zh:"亚麻围巾", name_ja:"リネンスカーフ",
   category:"accessories", price:3900, img:"https://picsum.photos/seed/bn16/600/800"},

  {id:17, name:"Canvas Sneakers", name_zh:"帆布运动鞋", name_ja:"キャンバススニーカー",
   category:"footwear", price:5900, img:"https://picsum.photos/seed/bn17/600/800"},
  {id:18, name:"Leather Loafers", name_zh:"皮质乐福鞋", name_ja:"レザーローファー",
   category:"footwear", price:9900, img:"https://picsum.photos/seed/bn18/600/800"},
  {id:19, name:"Tabi Boots", name_zh:"分趾靴", name_ja:"足袋ブーツ",
   category:"footwear", price:12900, img:"https://picsum.photos/seed/bn19/600/800"},
  {id:20, name:"Platform Sandals", name_zh:"厚底凉鞋", name_ja:"プラットフォームサンダル",
   category:"footwear", price:7900, img:"https://picsum.photos/seed/bn20/600/800"},

  {id:21, name:"Heattech Leggings", name_zh:"发热打底裤", name_ja:"ヒートテックレギンス",
   category:"basics", price:2900, img:"https://picsum.photos/seed/bn21/600/800"},
  {id:22, name:"AIRism Tank Top", name_zh:"AIRism 背心", name_ja:"エアリズムタンクトップ",
   category:"basics", price:1900, img:"https://picsum.photos/seed/bn22/600/800"},
  {id:23, name:"UV Protection Cardigan", name_zh:"防晒开衫", name_ja:"UVカットカーディガン",
   category:"basics", price:3900, img:"https://picsum.photos/seed/bn23/600/800"},
  {id:24, name:"Seamless Inner", name_zh:"无缝内衣", name_ja:"シームレスインナー",
   category:"basics", price:1500, img:"https://picsum.photos/seed/bn24/600/800"},
];

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