// ==========================================================================
// دار حكاية للعطور (HIKAYA Haute Parfumerie)
// 6. Master Application Engine (Core Logic & Realtime State)
// ==========================================================================

// --- 1. DEFAULT DATA DEFINITIONS ---

const INITIAL_PRODUCTS = [
  {
    id: 'hk-01',
    name: 'دهن عود ملكي معتق',
    frenchName: 'Dehn Al Oud Royal Vintage',
    category: 'oud',
    categoryName: 'دهن عود',
    priceYER: 75000,
    priceSAR: 182,
    oldPriceYER: 110000,
    oldPriceSAR: 266,
    discount: '-32%',
    image: 'assets/images/bottles_3d/royal_oud.png',
    rating: 4.9,
    reviewsCount: 38,
    badge: 'الأكثر طلباً 👑',
    stock: 14,
    description: 'دهن عود هندي كلكاسي معتق 25 عاماً بنفحات بخورية خشبية عميقة تأسر الحواس وتمنحك حضوراً ملكياً مهيباً.',
    durability: 'ثبات يتجاوز 72 ساعة وفوحان ملكي آسر',
    notes: {
      top: 'دهن العود الكمبودي والزعفران الأصيل',
      heart: 'خشب الأرز والورد الطائفي النادر',
      base: 'خشب العود المعتق والعنبر الرمادي'
    }
  },
  {
    id: 'hk-02',
    name: 'إكسير الذهب الباريسي',
    frenchName: 'Élixir Doré de Paris',
    category: 'men',
    categoryName: 'رجالي فخم',
    priceYER: 85000,
    priceSAR: 206,
    oldPriceYER: 125000,
    oldPriceSAR: 303,
    discount: '-32%',
    image: 'assets/images/bottles_3d/hero_perfume.png',
    rating: 4.8,
    reviewsCount: 42,
    badge: 'إصدار خاص ✨',
    stock: 9,
    description: 'توليفة ساحرة تجمع بين الباتشولي الفاخر والعنبر المشع بلمسة فرنسية باريسية غاية في الأناقة والجاذبية.',
    durability: 'ثبات يتجاوز 48 ساعة وفوحان واسع الانتشار',
    notes: {
      top: 'البرغموت الإيطالي واللافندر الملكي',
      heart: 'الهيل النيبالي وحبوب التونكا',
      base: 'الباتشولي الإندونيسي والعنبر المشع'
    }
  },
  {
    id: 'hk-03',
    name: 'مسك الحرير النقي',
    frenchName: 'Musc Pur de Soie',
    category: 'musk',
    categoryName: 'مسك صافي',
    priceYER: 48000,
    priceSAR: 116,
    oldPriceYER: 68000,
    oldPriceSAR: 165,
    discount: '-29%',
    image: 'assets/images/bottles_3d/silk_musk.png',
    rating: 5.0,
    reviewsCount: 56,
    badge: 'ناعم ومنعش 🌸',
    stock: 18,
    description: 'نقاء المسك الأبيض الصافي الممتزج بنعومة الحرير والزهور الباردة ليمنحك شعوراً فائقاً بالنظافة والفخامة.',
    durability: 'ثبات يدوم طوال اليوم بنعومة مخملية هادئة',
    notes: {
      top: 'الزنبق الأبيض ونفحات القطن النقي',
      heart: 'الياسمين الدمشقي والبودرة الناعمة',
      base: 'المسك الأبيض الصافي وخشب الصندل'
    }
  },
  {
    id: 'hk-04',
    name: 'نور العنبر والذهب',
    frenchName: 'Ambre Impérial & Or',
    category: 'oud',
    categoryName: 'دهن عود وعنبر',
    priceYER: 95000,
    priceSAR: 230,
    oldPriceYER: 140000,
    oldPriceSAR: 339,
    discount: '-32%',
    image: 'assets/images/bottles_3d/amber_royal.png',
    rating: 4.9,
    reviewsCount: 29,
    badge: 'عطر الملوك 👑',
    stock: 8,
    description: 'شذى العنبر الرمادي الأصيل مع دفقات الزعفران والعود المعتّق في مزيج أسطوري يليق بأصحاب الذوق الرفيع.',
    durability: 'ثبات يدوم 72 ساعة بفوحان فخم ومؤثر',
    notes: {
      top: 'الزعفران الإيراني الممتاز والقرفة الحارة',
      heart: 'العنبر الرمادي واللبان الظفاري',
      base: 'العود البورمي والجلود المدبوغة الفاخرة'
    }
  },
  {
    id: 'hk-05',
    name: 'روز فخم إمبريال',
    frenchName: 'Rose Somptueuse Impériale',
    category: 'women',
    categoryName: 'نسائي حصري',
    priceYER: 59000,
    priceSAR: 143,
    oldPriceYER: 85000,
    oldPriceSAR: 206,
    discount: '-30%',
    image: 'assets/images/bottles_3d/french_rose.png',
    rating: 4.8,
    reviewsCount: 34,
    badge: 'حصري للسيدات 🌹',
    stock: 12,
    description: 'باقة رومانسية مخملية من ورود غراس الفرنسية مع لمسات الفانيليا والمسك لحضور أنثوي مفعم بالرقة والدلال.',
    durability: 'ثبات يدوم 36 ساعة بفوحان زهري منعش',
    notes: {
      top: 'توت العليق وزهر البرتقال التونسي',
      heart: 'ورد غراس والفاوانيا الوردية',
      base: 'فانيليا مدغشقر والمسك الحريري'
    }
  },
  {
    id: 'hk-06',
    name: 'دهن عود هندي سوبر',
    frenchName: 'Pure Indian Oud Super',
    category: 'oud',
    categoryName: 'دهن عود',
    priceYER: 120000,
    priceSAR: 291,
    oldPriceYER: 175000,
    oldPriceSAR: 424,
    discount: '-31%',
    image: 'assets/images/bottles_3d/oud_tola.png',
    rating: 5.0,
    reviewsCount: 21,
    badge: 'تولة ملكية 💎',
    stock: 6,
    description: 'تولة ملكية نادرة من خشب العود الهندي الطبيعي القديم، برائحة بخورية قوية تدوم لأيام على الثياب والمجالس.',
    durability: 'ثبات استثنائي يتجاوز 5 أيام في الملابس',
    notes: {
      top: 'دخان العود البخوري الحاد',
      heart: 'الخشب العتيق والصمغ الطبيعي',
      base: 'العود الهندي الأصيل والدهن الكلكاسي'
    }
  }
];

// Default Bank Accounts (Fully editable from Admin Panel & Syncable with Firebase)
const DEFAULT_BANKS = {
  kuraimi: {
    id: 'kuraimi',
    name: 'بنك الكريمي للتمويل الأصغر الإسلامي',
    shortName: 'بنك الكريمي',
    accountNumber: '3004892150',
    accountName: 'دار حكاية للعطور الفاخرة',
    phone: '777889900',
    notes: 'يرجى كتابة رقم الطلب في خانة الغرض / البيان عند التحويل عبر الكريمي جو.'
  },
  qutaibi: {
    id: 'qutaibi',
    name: 'بنك القطيبي الإسلامي (قطيبي باي)',
    shortName: 'بنك القطيبي',
    accountNumber: '122849031',
    accountName: 'دار حكاية للعطور - عدن',
    phone: '777889900',
    notes: 'التحويل متاح لحظياً عبر تطبيق قطيبي باي أو شبكة القطيبي للحوالات.'
  },
  shilin: {
    id: 'shilin',
    name: 'محفظة شلن الإلكترونية',
    shortName: 'محفظة شلن',
    accountNumber: '777889900',
    accountName: 'حكاية (HIKAYA)',
    phone: '777889900',
    notes: 'الدفع فوري عبر مسح كود المحفظة أو التحويل لرقم الهاتف.'
  }
};

// Safe Standard Bank Info Helpers (Replacing old Proxy for full backward compatibility)
function getBankAccounts() {
  try {
    const stored = localStorage.getItem('hikaya_bank_accounts');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('⚠️ LocalStorage error loading banks:', e);
  }
  return DEFAULT_BANKS;
}

function saveBankAccountsLocally(banks) {
  try {
    localStorage.setItem('hikaya_bank_accounts', JSON.stringify(banks));
  } catch (e) {
    console.warn('⚠️ LocalStorage error saving banks:', e);
  }
  BANK_ACCOUNTS = banks;
}

function getBankInfo(bankKey) {
  const banks = getBankAccounts();
  return banks[bankKey] || DEFAULT_BANKS[bankKey] || {
    id: bankKey,
    name: bankKey,
    shortName: bankKey,
    accountNumber: '',
    accountName: '',
    phone: '',
    notes: ''
  };
}

let BANK_ACCOUNTS = getBankAccounts();

// Default Demonstration Orders
const INITIAL_ORDERS = [
  {
    id: 'HK-2026-9041',
    customerName: 'محمد أحمد بازرعة',
    phone: '777123456',
    city: 'عدن - المعلا، الشارع الرئيسي',
    items: [
      { name: 'دهن عود ملكي معتق', size: 'تولة ملكية', qty: 1, price: 75000 }
    ],
    totalYER: 75000,
    totalSAR: 185,
    currency: 'YER',
    bank: 'kuraimi',
    paymentType: 'direct',
    transferNumber: 'TRX-998241',
    receiptImage: 'assets/images/royal_oud.jpg',
    status: 'pending',
    date: '2026-10-15 14:25',
    adminNotes: 'طلب مستعجل للتوصيل قبل المساء'
  },
  {
    id: 'HK-2026-9038',
    customerName: 'فاطمة الكاف',
    phone: '733987654',
    city: 'عدن - خورمكسر، حي السفارات',
    items: [
      { name: 'مسك الحرير النقي', size: '100 مل', qty: 2, price: 96000 },
      { name: 'روز فخم إمبريال', size: '50 مل', qty: 1, price: 59000 }
    ],
    totalYER: 155000,
    totalSAR: 385,
    currency: 'YER',
    bank: 'qutaibi',
    paymentType: 'unified',
    transferNumber: 'HT-8842109',
    receiptImage: 'assets/images/silk_musk.jpg',
    status: 'approved',
    date: '2026-10-15 11:10',
    adminNotes: 'تم التأكد من السند وإرسال الشحنة للتوصيل'
  },
  {
    id: 'HK-2026-9022',
    customerName: 'عبدالرحمن العولقي',
    phone: '711554433',
    city: 'عدن - كريتر، بالقرب من الصهاريج',
    items: [
      { name: 'إكسير الذهب الباريسي', size: '100 مل', qty: 1, price: 85000 }
    ],
    totalYER: 85000,
    totalSAR: 210,
    currency: 'YER',
    bank: 'shilin',
    paymentType: 'direct',
    transferNumber: 'SH-55102',
    receiptImage: 'assets/images/hero_perfume.jpg',
    status: 'shipped',
    date: '2026-10-14 18:40',
    adminNotes: 'المندوب استلم الشحنة للتسليم'
  }
];

// App State Container
const AppState = {
  products: [...INITIAL_PRODUCTS],
  cart: [],
  wishlist: [],
  orders: [...INITIAL_ORDERS],
  currency: 'SAR', // Official default is SAR
  exchangeRate: 413, // 413 YER per 1 SAR (official rate in Aden)
  activeFilter: 'all',
  selectedProductForDetail: null,
  currentInspectingOrder: null,
  checkoutBank: 'kuraimi',
  checkoutPaymentType: 'direct',
  uploadedReceipt: null
};

// --- 2. LOCAL STORAGE & FIREBASE SYNC ---

function loadStoredState() {
  try {
    const storedRate = localStorage.getItem('hikaya_exchange_rate');
    if (storedRate && !isNaN(parseFloat(storedRate))) {
      AppState.exchangeRate = parseFloat(storedRate);
    } else {
      AppState.exchangeRate = 413;
    }

    const storedCurrency = localStorage.getItem('hikaya_currency');
    if (storedCurrency) {
      AppState.currency = storedCurrency;
    } else {
      AppState.currency = 'SAR'; // Default to SAR
    }

    const storedCart = localStorage.getItem('hikaya_cart');
    if (storedCart) AppState.cart = JSON.parse(storedCart);

    const storedWishlist = localStorage.getItem('hikaya_wishlist');
    if (storedWishlist) AppState.wishlist = JSON.parse(storedWishlist);

    const storedProducts = localStorage.getItem('hikaya_products');
    if (storedProducts) {
      AppState.products = JSON.parse(storedProducts);
      // Migrate any legacy .jpg paths to transparent 3D cutouts & verify SAR price
      AppState.products.forEach(p => {
        if (p.image && p.image.endsWith('.jpg') && !p.image.includes('/uploads/') && !p.image.includes('data:')) {
          p.image = p.image.replace('assets/images/', 'assets/images/bottles_3d/').replace('.jpg', '.png');
        }
        if (!p.priceSAR || isNaN(p.priceSAR)) {
          p.priceSAR = Math.round(p.priceYER / AppState.exchangeRate);
        }
      });
    }

    const storedOrders = localStorage.getItem('hikaya_orders');
    if (storedOrders) {
      AppState.orders = JSON.parse(storedOrders);
    }
  } catch (err) {
    console.warn('⚠️ Error reading state from LocalStorage:', err);
  }

  // Cross-device server sync for orders placed via mobile-app
  const ordersApiBase = window.location.protocol === 'file:' ? 'http://localhost:8080' : '';
  fetch(ordersApiBase + '/api/orders?t=' + Date.now())
    .then(r => r.json())
    .then(serverOrders => {
      if (Array.isArray(serverOrders) && serverOrders.length > 0) {
        const existingIds = new Set(AppState.orders.map(o => o.id));
        let added = false;
        serverOrders.forEach(so => {
          if (!existingIds.has(so.id)) {
            AppState.orders.unshift(so);
            existingIds.add(so.id);
            added = true;
          }
        });
        if (added) {
          saveState();
          if (typeof renderAdminOrders === 'function') renderAdminOrders();
          if (typeof renderAdminKPIs === 'function') renderAdminKPIs();
        }
      }
    })
    .catch(e => {});

  // Update Currency Toggle UI
  updateCurrencyToggleUI();

  // Initialize Firebase Realtime Sync
  initFirebaseSync();
}

function saveState() {
  try {
    localStorage.setItem('hikaya_currency', AppState.currency);
    localStorage.setItem('hikaya_exchange_rate', AppState.exchangeRate);
    localStorage.setItem('hikaya_cart', JSON.stringify(AppState.cart));
    localStorage.setItem('hikaya_wishlist', JSON.stringify(AppState.wishlist));
    localStorage.setItem('hikaya_products', JSON.stringify(AppState.products));
    localStorage.setItem('hikaya_orders', JSON.stringify(AppState.orders));
  } catch (err) {
    console.warn('⚠️ Error persisting state to LocalStorage:', err);
  }
}

// Connect & Listen to Firebase Realtime Database
function initFirebaseSync() {
  if (typeof HikayaFirebaseService === 'undefined' || !HikayaFirebaseService.isAvailable()) {
    console.log('ℹ️ [HIKAYA] يعمل النظام محلياً مع دعم التخزين الدائم');
    return;
  }

  // 1. Seed initial data if Firebase is newly deployed
  HikayaFirebaseService.seedInitialDataIfEmpty(INITIAL_PRODUCTS, DEFAULT_BANKS, INITIAL_ORDERS);

  // 2. Realtime listener for Products
  HikayaFirebaseService.subscribeToProducts(firebaseProducts => {
    if (firebaseProducts && firebaseProducts.length > 0) {
      AppState.products = firebaseProducts;
      saveState();
      renderFeaturedProducts();
      renderShopProducts();
      renderAdminProducts();
    }
  });

  // 3. Realtime listener for Orders
  HikayaFirebaseService.subscribeToOrders(firebaseOrders => {
    if (firebaseOrders) {
      AppState.orders = firebaseOrders;
      saveState();
      renderAdminOrders();
      renderAdminKPIs();
    }
  });

  // 4. Realtime listener for Bank Accounts
  HikayaFirebaseService.subscribeToBanks(firebaseBanks => {
    if (firebaseBanks) {
      saveBankAccountsLocally(firebaseBanks);
      renderCheckoutBank();
      if (typeof loadBankFields === 'function') loadBankFields();
    }
  });

  // 5. Realtime listener for Exchange Rate (SAR / YER)
  HikayaFirebaseService.subscribeToExchangeRate(firebaseRate => {
    if (firebaseRate && !isNaN(firebaseRate)) {
      AppState.exchangeRate = Number(firebaseRate);
      localStorage.setItem('hikaya_exchange_rate', firebaseRate);
      renderAll();
      if (typeof updateExchangeUI === 'function') updateExchangeUI();
    }
  });
}

// --- 3. PRICE & CURRENCY UTILITIES ---

// Official Saudi Riyal Symbol (SAMA Emblem provided by User)
function getSARSymbolHTML(size = 'sm') {
  const sizeClass = size === 'lg' ? 'w-5 h-5' : size === 'md' ? 'w-4 h-4' : size === 'xs' ? 'w-3 h-3' : 'w-3.5 h-3.5';
  return `<img src="assets/images/sar_symbol_gold.png" alt="ر.س" class="sar-symbol-img ${sizeClass}" />`;
}

// Conversion Helpers
function convertYerToSar(yer) {
  const rate = AppState.exchangeRate || 413;
  if (!yer || isNaN(yer)) return 0;
  return Math.round(Number(yer) / rate);
}

function convertSarToYer(sar) {
  const rate = AppState.exchangeRate || 413;
  if (!sar || isNaN(sar)) return 0;
  return Math.round(Number(sar) * rate);
}

// HTML Price Formatter: English Digits + Official Golden SAR Symbol
function formatPrice(yer, sar) {
  const rate = AppState.exchangeRate || 413;
  const numYer = Number(yer) || 0;
  const numSar = (sar !== undefined && sar !== null && !isNaN(sar) && sar > 0)
    ? Number(sar)
    : Math.round(numYer / rate);

  if (AppState.currency === 'SAR') {
    return `<span class="inline-flex items-center gap-1 font-mono font-bold tracking-tight text-gold">${getSARSymbolHTML('sm')}<span>${numSar.toLocaleString('en-US')}</span></span>`;
  } else {
    return `<span class="inline-flex items-center gap-1 font-mono font-bold tracking-tight text-gold"><span>${numYer.toLocaleString('en-US')}</span> <span class="font-heading text-xs font-normal text-gold">ر.ي</span></span>`;
  }
}

// Plaintext Price Formatter (for WhatsApp URLs, invoice titles, etc.)
function formatPriceText(yer, sar) {
  const rate = AppState.exchangeRate || 413;
  const numYer = Number(yer) || 0;
  const numSar = (sar !== undefined && sar !== null && !isNaN(sar) && sar > 0)
    ? Number(sar)
    : Math.round(numYer / rate);

  if (AppState.currency === 'SAR') {
    return `${numSar.toLocaleString('en-US')} ر.س`;
  } else {
    return `${numYer.toLocaleString('en-US')} ر.ي`;
  }
}

function toggleCurrency() {
  AppState.currency = AppState.currency === 'SAR' ? 'YER' : 'SAR';
  localStorage.setItem('hikaya_currency', AppState.currency);
  updateCurrencyToggleUI();
  renderAll();
  showToast(`تم تحويل العملة المعروضة إلى: ${AppState.currency === 'SAR' ? 'الريال السعودي (ر.س) 👑' : 'الريال اليمني (ر.ي)'}`);
}

function updateCurrencyToggleUI() {
  const headerEl = document.getElementById('headerCurrencyText');
  if (headerEl) {
    if (AppState.currency === 'SAR') {
      headerEl.innerHTML = `
        <img src="assets/images/sar_symbol_gold.png" alt="ر.س" class="w-3.5 h-3.5 object-contain filter drop-shadow" />
        <span class="font-extrabold text-gold">ر.س</span>
      `;
    } else {
      headerEl.innerHTML = `
        <span class="font-extrabold text-gold">ر.ي</span>
      `;
    }
  }
  document.querySelectorAll('.currency-toggle-btn').forEach(btn => {
    const isSar = AppState.currency === 'SAR';
    btn.title = `العملة الحالية: ${isSar ? 'الريال السعودي (الرسمي)' : 'الريال اليمني'} - انقر للتبديل`;
  });
}

// Dynamic Time-based Greeting
function getDynamicGreeting() {
  const hour = new Date().getHours();
  if (hour >= 4 && hour < 12) {
    return 'صباح الخير ونفحات المسك الفاخر ✨ مرحباً بك في دار حكاية للعطور الملكية';
  } else if (hour >= 12 && hour < 17) {
    return 'مساء الخير والجمال ✨ أهلاً بك في عالم حكاية للعطور الراقية';
  } else {
    return 'مساء الأناقة والعود المعتق 🌙 تسوّق نخبة العطور المستوحاة من أرقى دور العالم';
  }
}

// Update Greeting Ribbon
function renderGreeting() {
  const el = document.getElementById('dynamicGreetingText');
  if (el) el.textContent = getDynamicGreeting();
}

// Update Cart Badge Count
function updateCartBadges() {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-badge-count').forEach(badge => {
    badge.textContent = totalCount.toLocaleString('en-US');
    badge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  });

  const wishlistCount = AppState.wishlist.length;
  document.querySelectorAll('.wishlist-badge-count').forEach(badge => {
    badge.textContent = wishlistCount.toLocaleString('en-US');
    badge.style.display = wishlistCount > 0 ? 'inline-flex' : 'none';
  });
}

// --- 4. PRODUCT RENDERING & SHOP CARDS ---

function renderProductCardHTML(p) {
  const isWish = AppState.wishlist.includes(p.id);
  const currentPrice = formatPrice(p.priceYER, p.priceSAR);
  const oldPrice = formatPrice(p.oldPriceYER, p.oldPriceSAR);

  // Secondary currency indicator
  const secondaryPrice = AppState.currency === 'SAR'
    ? `<span class="text-[9px] text-gray-400 font-mono">(${Number(p.priceYER).toLocaleString('en-US')} ر.ي)</span>`
    : `<span class="text-[9px] text-gray-400 font-mono">(${getSARSymbolHTML('xs')} ${convertYerToSar(p.priceYER).toLocaleString('en-US')})</span>`;

  return `
    <div class="product-card-ui group cursor-pointer" data-id="${p.id}" onclick="openProductDetail('${p.id}')">
      <!-- Top badges: Discount & Luxury Wishlist Button -->
      <div class="flex items-center justify-between z-10 relative mb-1">
        <span class="badge-discount-float">${p.discount}</span>
        <button onclick="toggleWishlist('${p.id}', event)" class="w-7 h-7 rounded-full bg-white/95 border border-gray-200 flex items-center justify-center text-rose-500 hover:scale-110 active:scale-95 transition-transform shadow-xs" title="إضافة للمفضلة">
          <svg class="w-3.5 h-3.5 ${isWish ? 'fill-rose-500 stroke-rose-500' : 'stroke-gray-400 fill-none'}" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <!-- 3D Cutout Floating Bottle Presentation with Floating Circular (+) Add Button -->
      <div class="relative h-36 sm:h-44 flex items-center justify-center bg-[#FDFCFB] rounded-2xl overflow-hidden mb-2 shadow-inner">
        <div class="bottle-3d-aura opacity-30"></div>
        <img 
          src="${p.image}" 
          alt="${p.name}" 
          class="h-32 sm:h-40 w-auto object-contain filter drop-shadow-[0_10px_16px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105" 
          loading="lazy" 
        />
        <!-- Floating Circular (+) Add Button (كما في التطبيق المعتمد) -->
        <button type="button" onclick="addToCart('${p.id}', 1, event)" class="floating-add-btn" title="أضف للسلة">
          +
        </button>
      </div>

      <!-- Perfume Details & Price Area -->
      <div class="space-y-1 text-right flex-grow flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-[10px] mb-0.5">
            <span class="text-hk-gold-deep font-heading font-bold">${p.categoryName}</span>
            <span class="text-amber-500 font-mono font-bold">★ ${p.rating.toLocaleString('en-US')}</span>
          </div>
          <h3 class="text-xs sm:text-sm font-heading font-black text-gray-950 truncate group-hover:text-hk-gold-deep transition-colors">
            ${p.name}
          </h3>
          <p class="text-[9px] sm:text-[10px] text-gray-500 line-clamp-1 mt-0.5 font-sans">
            ${p.description}
          </p>
        </div>

        <div class="mt-2 pt-2 border-t border-gray-100 flex items-baseline justify-between">
          <div class="flex items-baseline gap-1">
            <span class="text-xs sm:text-base font-heading font-black text-hk-gold-deep">${currentPrice}</span>
          </div>
          <div class="flex flex-col items-end">
            <span class="text-[9px] sm:text-[10px] text-gray-400 line-through font-mono">${oldPrice}</span>
            ${secondaryPrice}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFeaturedProducts() {
  const container = document.getElementById('featuredProductsGrid');
  if (!container) return;
  // Show best 6 perfumes
  container.innerHTML = AppState.products.slice(0, 6).map(renderProductCardHTML).join('');
}

function renderShopProducts() {
  const container = document.getElementById('shopProductsGrid');
  if (!container) return;

  let list = AppState.products;
  if (AppState.activeFilter !== 'all') {
    list = list.filter(p => p.category === AppState.activeFilter);
  }

  const query = (document.getElementById('shopSearchInput')?.value || '').trim().toLowerCase();
  if (query) {
    list = list.filter(p => p.name.toLowerCase().includes(query) || p.frenchName.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
  }

  const sortVal = document.getElementById('shopSortSelect')?.value || 'featured';
  if (sortVal === 'price-low') {
    list.sort((a, b) => a.priceYER - b.priceYER);
  } else if (sortVal === 'price-high') {
    list.sort((a, b) => b.priceYER - a.priceYER);
  } else if (sortVal === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-gray-400 glass-card p-6">
        <span class="text-3xl block mb-2">🌸</span>
        <p class="text-sm font-heading">لم نجد أي عطور تطابق بحثك حالياً.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(renderProductCardHTML).join('');
}

function filterShopCategory(cat, btn) {
  AppState.activeFilter = cat;
  document.querySelectorAll('.category-chip').forEach(b => {
    b.classList.remove('bg-burgundy', 'border-gold', 'text-gold', 'shadow-gold-soft');
    b.classList.add('border-gold/30', 'text-gray-300');
  });
  if (btn) {
    btn.classList.add('bg-burgundy', 'border-gold', 'text-gold', 'shadow-gold-soft');
    btn.classList.remove('border-gold/30', 'text-gray-300');
  }
  renderShopProducts();
}

// --- 5. CART DRAWER & MILLILITER ENGINE ---

function renderCart() {
  const cartContainer = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartEmptyState = document.getElementById('cartEmptyState');
  const cartFilledState = document.getElementById('cartFilledState');

  if (!cartContainer) return;

  if (!AppState.cart || AppState.cart.length === 0) {
    if (cartEmptyState) {
      cartEmptyState.style.display = 'block';
      cartEmptyState.classList.remove('hidden');
    }
    if (cartFilledState) {
      cartFilledState.style.display = 'none';
      cartFilledState.classList.add('hidden');
    }
    cartContainer.innerHTML = '';
    return;
  }

  // Cart has items: Hide empty state completely!
  if (cartEmptyState) {
    cartEmptyState.style.display = 'none';
    cartEmptyState.classList.add('hidden');
  }
  if (cartFilledState) {
    cartFilledState.style.display = 'block';
    cartFilledState.classList.remove('hidden');
  }

  let subtotalYER = 0;
  let subtotalSAR = 0;

  cartContainer.innerHTML = AppState.cart.map(item => {
    const prod = AppState.products.find(p => p.id === item.id);
    if (!prod) return '';

    const unitYER = item.priceYER || prod.priceYER;
    const unitSAR = item.priceSAR || prod.priceSAR;
    const itemTotalYER = unitYER * item.qty;
    const itemTotalSAR = unitSAR * item.qty;
    subtotalYER += itemTotalYER;
    subtotalSAR += itemTotalSAR;

    const key = item.cartItemId || item.id;
    const displaySize = item.selectedSize || (item.ml ? `${item.ml} مل` : '100 مل');

    return `
      <div class="glass-card p-3 sm:p-4 flex items-center justify-between gap-3 border-gold/25 relative group text-right">
        <img src="${prod.image}" alt="${prod.name}" class="w-14 h-14 sm:w-16 sm:h-16 object-contain bg-black/50 p-1 rounded-lg border border-gold/30 flex-shrink-0" />
        <div class="flex-1 text-right min-w-0">
          <h4 class="font-bold text-ivory text-xs sm:text-sm truncate">${prod.name}</h4>
          <span class="text-[11px] text-gold/90 font-semibold block mt-0.5">${displaySize}</span>
          <span class="text-xs sm:text-sm font-heading font-bold text-gold">${formatPrice(itemTotalYER, itemTotalSAR)}</span>
        </div>
        <div class="flex items-center gap-1.5 flex-shrink-0">
          <div class="flex items-center border border-gold/40 rounded-lg bg-black/60 p-0.5">
            <button type="button" onclick="updateCartItemQty('${key}', -1)" class="w-6 h-6 rounded text-gold flex items-center justify-center hover:bg-gold/20 font-bold text-xs" title="تقليل الكمية">-</button>
            <span class="font-bold font-mono text-xs px-2 text-ivory">${item.qty}</span>
            <button type="button" onclick="updateCartItemQty('${key}', 1)" class="w-6 h-6 rounded text-gold flex items-center justify-center hover:bg-gold/20 font-bold text-xs" title="زيادة الكمية">+</button>
          </div>
          <button type="button" onclick="removeFromCart('${key}', event)" class="w-8 h-8 rounded-lg border border-red-500/50 bg-red-950/40 text-red-400 hover:bg-red-900/60 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md" title="حذف العطر من السلة">
            <svg class="w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (cartSubtotalEl) cartSubtotalEl.innerHTML = formatPrice(subtotalYER, subtotalSAR);
  if (cartTotalEl) cartTotalEl.innerHTML = formatPrice(subtotalYER, subtotalSAR);
}

// Open Product Detail Modal (Single definition & Clean Milliliter Box)
function openProductDetail(productId) {
  const prod = AppState.products.find(p => p.id === productId);
  if (!prod) return;
  AppState.selectedProductForDetail = prod;

  const modal = document.getElementById('productDetailModal');
  if (!modal) return;

  const setEl = (id, val, isImg = false, isHTML = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isImg) el.src = val;
    else if (isHTML) el.innerHTML = val;
    else el.textContent = val;
  };

  setEl('detailImage', prod.image, true);
  setEl('detailName', prod.name);
  setEl('detailFrench', prod.frenchName);
  setEl('detailCategory', prod.categoryName);
  setEl('detailBadge', prod.badge);
  setEl('detailDesc', prod.description);
  setEl('detailDurability', prod.durability);
  setEl('detailRating', `★ ${prod.rating.toLocaleString('en-US')} (${(prod.reviewsCount || 25).toLocaleString('en-US')} تقييم موثق)`);
  setEl('detailPrice', formatPrice(prod.priceYER, prod.priceSAR), false, true);
  setEl('detailOldPrice', formatPrice(prod.oldPriceYER, prod.oldPriceSAR), false, true);

  // Initialize Custom Milliliters (الملي) Box
  window.currentDetailSelectedMl = 100;
  window.currentDetailSelectedSize = '100 مل';
  const mlInput = document.getElementById('customMlInput');
  if (mlInput) mlInput.value = ''; // Empty box for customer input as requested!
  
  const perMlYER = Math.round(prod.priceYER / 100);
  setEl('detailPerMlNotice', `سعر الملي: ${formatPriceText(perMlYER, convertYerToSar(perMlYER))}`);

  // Render suggested quick ml chips
  const sizeContainer = document.getElementById('detailSizesContainer');
  if (sizeContainer) {
    const suggestedMls = [30, 50, 100, 150, 200];
    sizeContainer.innerHTML = suggestedMls.map(ml => `
      <button type="button" data-ml="${ml}" onclick="setMlPreset(${ml})" class="ml-preset-chip px-3 py-1 rounded-full border text-xs font-bold transition-all ${ml === 100 ? 'border-gold bg-burgundy text-gold shadow-gold-soft' : 'border-gold/30 bg-gold/10 text-gold hover:bg-gold hover:text-black'}">
        ${ml} مل
      </button>
    `).join('');
  }

  // Fragrance Pyramid Notes
  if (prod.notes) {
    setEl('noteTop', prod.notes.top || '-');
    setEl('noteHeart', prod.notes.heart || '-');
    setEl('noteBase', prod.notes.base || '-');
  }

  // Direct WhatsApp order button in detail modal
  const waDetailBtn = document.getElementById('detailWhatsAppBtn');
  if (waDetailBtn) {
    const msg = encodeURIComponent(`مرحباً دار حكاية للعطور 👑\nأود الاستفسار وطلب عطر "${prod.name}" (${prod.frenchName})\nالسعر الرسمي: ${formatPriceText(prod.priceYER, prod.priceSAR)}\nهل التوصيل متوفر في عدن اليوم؟`);
    waDetailBtn.href = `https://wa.me/967777889900?text=${msg}`;
  }

  const qtyInput = document.getElementById('detailQty');
  if (qtyInput) qtyInput.value = 1;

  modal.classList.add('active');
}

// Handle customer typing custom milliliters (Live proportional calculation)
function handleCustomMlInput(val) {
  const prod = AppState.selectedProductForDetail;
  if (!prod) return;

  const setEl = (id, text, isImg = false, isHTML = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isImg) el.src = text;
    else if (isHTML) el.innerHTML = text;
    else el.textContent = text;
  };

  let ml = parseInt(val);

  // Update visual state of preset chips
  document.querySelectorAll('.ml-preset-chip').forEach(btn => {
    if (btn.dataset.ml == ml) {
      btn.classList.add('bg-burgundy', 'border-gold', 'shadow-gold-soft');
      btn.classList.remove('bg-gold/10', 'border-gold/30');
    } else {
      btn.classList.remove('bg-burgundy', 'border-gold', 'shadow-gold-soft');
      btn.classList.add('bg-gold/10', 'border-gold/30');
    }
  });

  if (isNaN(ml) || ml <= 0) {
    window.currentDetailSelectedMl = 100;
    window.currentDetailSelectedSize = '100 مل';
    setEl('detailPrice', formatPrice(prod.priceYER, prod.priceSAR), false, true);
    setEl('detailOldPrice', formatPrice(prod.oldPriceYER, prod.oldPriceSAR), false, true);
    const perMlYER = Math.round(prod.priceYER / 100);
    setEl('detailPerMlNotice', `سعر الملي: ${formatPriceText(perMlYER, convertYerToSar(perMlYER))}`);
    return;
  }

  window.currentDetailSelectedMl = ml;
  window.currentDetailSelectedSize = `${ml} مل (تعبئة خاصة)`;

  const unitPriceYER = Math.round((prod.priceYER / 100) * ml);
  const unitPriceSAR = convertYerToSar(unitPriceYER);
  const oldPriceYER = Math.round(((prod.oldPriceYER || prod.priceYER * 1.35) / 100) * ml);
  const oldPriceSAR = convertYerToSar(oldPriceYER);

  setEl('detailPrice', formatPrice(unitPriceYER, unitPriceSAR), false, true);
  setEl('detailOldPrice', formatPrice(oldPriceYER, oldPriceSAR), false, true);
  setEl('detailPerMlNotice', `${ml} مل بقيمة ${formatPriceText(unitPriceYER, unitPriceSAR)}`);

  // Update WhatsApp link with the selected custom ml
  const waDetailBtn = document.getElementById('detailWhatsAppBtn');
  if (waDetailBtn) {
    const msg = encodeURIComponent(`مرحباً دار حكاية للعطور 👑\nأود طلب عطر "${prod.name}" بحجم مخصص (${ml} مل)\nالسعر الإجمالي: ${formatPriceText(unitPriceYER, unitPriceSAR)}\nهل متاح التوصيل في عدن؟`);
    waDetailBtn.href = `https://wa.me/967777889900?text=${msg}`;
  }
}

// Preset Quick Chips Setter
function setMlPreset(ml) {
  const input = document.getElementById('customMlInput');
  if (input) input.value = ml;
  handleCustomMlInput(ml);
}

function closeProductDetail() {
  const modal = document.getElementById('productDetailModal');
  if (modal) modal.classList.remove('active');
}

// Switch tabs inside Product Detail Modal (Single fixed implementation)
function switchDetailTab(tabKey, btn) {
  document.querySelectorAll('.detail-tab-btn').forEach(b => {
    b.classList.remove('text-gold', 'border-b-2', 'border-gold');
    b.classList.add('text-gray-400', 'border-transparent');
  });
  if (btn) {
    btn.classList.add('text-gold', 'border-b-2', 'border-gold');
    btn.classList.remove('text-gray-400', 'border-transparent');
  }

  document.querySelectorAll('.detail-tab-content').forEach(c => {
    c.classList.add('hidden');
    c.classList.remove('block');
  });

  const activeContent = document.getElementById(`tabContent${tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}`);
  if (activeContent) {
    activeContent.classList.remove('hidden');
    activeContent.classList.add('block');
  }
}

// Toggle Wishlist from Detail Modal
function toggleDetailWishlist(btn) {
  if (!AppState.selectedProductForDetail) return;
  toggleWishlist(AppState.selectedProductForDetail.id);
  const isWish = AppState.wishlist.includes(AppState.selectedProductForDetail.id);
  if (btn) {
    const svg = btn.querySelector('svg');
    if (svg) {
      if (isWish) {
        svg.setAttribute('fill', 'currentColor');
        btn.classList.add('text-rose-600');
        btn.classList.remove('text-gray-400');
      } else {
        svg.setAttribute('fill', 'none');
        btn.classList.remove('text-rose-600');
        btn.classList.add('text-gray-400');
      }
    }
  }
}

// Add to Cart from Detail Modal
function addDetailToCart() {
  const prod = AppState.selectedProductForDetail;
  if (!prod) return;
  const qty = parseInt(document.getElementById('detailQty').value) || 1;
  const ml = window.currentDetailSelectedMl || 100;
  const sizeName = window.currentDetailSelectedSize || `${ml} مل`;
  const unitPriceYER = Math.round((prod.priceYER / 100) * ml);
  const unitPriceSAR = Math.round((prod.priceSAR / 100) * ml);

  addToCart(prod.id, qty, null, sizeName, ml, unitPriceYER, unitPriceSAR);
  closeProductDetail();
  openCartDrawer();
}

// Add Item to Cart
function addToCart(productId, qty = 1, event = null, size = null, ml = 100, customPriceYER = null, customPriceSAR = null) {
  if (event) event.stopPropagation();
  const prod = AppState.products.find(p => p.id === productId);
  if (!prod) return;

  const finalMl = ml || 100;
  const finalSize = size || `${finalMl} مل`;
  const finalYER = customPriceYER || Math.round((prod.priceYER / 100) * finalMl);
  const finalSAR = customPriceSAR || Math.round((prod.priceSAR / 100) * finalMl);

  // Check if same product with same ml volume already exists in cart
  const existing = AppState.cart.find(item => item.id === productId && item.ml === finalMl);
  if (existing) {
    existing.qty += qty;
  } else {
    const cartItemId = 'citem_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
    AppState.cart.push({
      cartItemId: cartItemId,
      id: productId,
      qty: qty,
      selectedSize: finalSize,
      ml: finalMl,
      priceYER: finalYER,
      priceSAR: finalSAR
    });
  }

  saveState();
  updateCartBadges();
  renderCart();
  showToast(`تمت إضافة "${prod.name} (${finalSize})" إلى حقيبة التسوق ✨`);
}

function updateCartItemQty(cartId, change) {
  const item = AppState.cart.find(i => (i.cartItemId ? i.cartItemId === cartId : i.id === cartId));
  if (!item) return;
  item.qty += change;
  if (item.qty <= 0) {
    AppState.cart = AppState.cart.filter(i => (i.cartItemId ? i.cartItemId !== cartId : i.id !== cartId));
    showToast('تم حذف المنتج من السلة 🗑️');
  }
  saveState();
  updateCartBadges();
  renderCart();
}

function removeFromCart(cartId, event = null) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  AppState.cart = AppState.cart.filter(item => (item.cartItemId ? item.cartItemId !== cartId : item.id !== cartId));
  saveState();
  updateCartBadges();
  renderCart();
  showToast('تم حذف المنتج من السلة 🗑️');
}

function toggleWishlist(productId, event = null) {
  if (event) event.stopPropagation();
  if (AppState.wishlist.includes(productId)) {
    AppState.wishlist = AppState.wishlist.filter(id => id !== productId);
    showToast('تمت إزالة العطر من المفضلة');
  } else {
    AppState.wishlist.push(productId);
    showToast('أُضيف إلى قائمة أمنياتك الملكية ❤️');
  }
  saveState();
  updateCartBadges();
  renderFeaturedProducts();
  renderShopProducts();
}

// Cart Drawer open/close
function openCartDrawer() {
  renderCart();
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (drawer) {
    drawer.classList.add('open', 'active');
  }
  if (backdrop) {
    backdrop.classList.remove('hidden');
    requestAnimationFrame(() => {
      backdrop.classList.add('opacity-100');
    });
  }
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (drawer) {
    drawer.classList.remove('open', 'active');
  }
  if (backdrop) {
    backdrop.classList.remove('opacity-100');
    setTimeout(() => {
      backdrop.classList.add('hidden');
    }, 300);
  }
  document.body.style.overflow = '';
}

// --- 6. CHECKOUT MODAL & ORDER SUBMISSION ---

function openCheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast('سلة التسوق فارغة! أضف عطرك المفضل أولاً 🌸');
    return;
  }
  closeCartDrawer();

  // Reset form views
  const formView = document.getElementById('checkoutFormView');
  const successView = document.getElementById('checkoutSuccessView');
  if (formView) formView.classList.remove('hidden');
  if (successView) successView.classList.add('hidden');

  // Compute Total
  let subtotalYER = 0;
  let subtotalSAR = 0;
  AppState.cart.forEach(item => {
    const prod = AppState.products.find(p => p.id === item.id);
    const unitYER = item.priceYER || (prod ? prod.priceYER : 0);
    const unitSAR = item.priceSAR || (prod ? prod.priceSAR : 0);
    subtotalYER += unitYER * item.qty;
    subtotalSAR += unitSAR * item.qty;
  });

  const totalEl = document.getElementById('checkoutOrderTotal');
  if (totalEl) totalEl.innerHTML = formatPrice(subtotalYER, subtotalSAR);

  // Render initial Bank info
  selectCheckoutBank(AppState.checkoutBank || 'kuraimi');

  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.add('active');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.remove('active');
}

function selectCheckoutBank(bankId) {
  AppState.checkoutBank = bankId;
  const banks = getBankAccounts();
  const bank = banks[bankId] || DEFAULT_BANKS[bankId];

  // Update Buttons Active State
  document.querySelectorAll('.bank-pill-btn').forEach(btn => {
    if (btn.dataset.bank === bankId) {
      btn.classList.add('bg-burgundy', 'border-gold', 'text-gold', 'shadow-gold-soft');
      btn.classList.remove('border-gold/30', 'text-gray-300');
    } else {
      btn.classList.remove('bg-burgundy', 'border-gold', 'text-gold', 'shadow-gold-soft');
      btn.classList.add('border-gold/30', 'text-gray-300');
    }
  });

  // Populate Bank Details Box
  renderCheckoutBank();
}

function renderCheckoutBank() {
  const banks = getBankAccounts();
  const bank = banks[AppState.checkoutBank] || DEFAULT_BANKS.kuraimi;

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl('checkoutBankBadge', bank.name);
  setEl('checkoutBankHolderName', bank.accountName || 'دار حكاية للعطور');
  setEl('checkoutBankAccountNumber', bank.accountNumber);
  setEl('checkoutBankPhone', bank.phone || '+967 777 889 900');
  setEl('checkoutBankNote', bank.notes || '-');
}

function copyBankAccountNumber() {
  const banks = getBankAccounts();
  const bank = banks[AppState.checkoutBank] || DEFAULT_BANKS.kuraimi;
  navigator.clipboard.writeText(bank.accountNumber);
  showToast(`تم نسخ رقم حساب ${bank.shortName}: ${bank.accountNumber} 📋`);
}

function setPaymentType(type) {
  AppState.checkoutPaymentType = type;
  const directRadio = document.getElementById('payTypeDirectRadio');
  const unifiedRadio = document.getElementById('payTypeUnifiedRadio');
  const transferWrapper = document.getElementById('transferNumberInputWrapper');

  if (type === 'direct') {
    if (directRadio) directRadio.classList.add('border-gold', 'bg-gold/20');
    if (unifiedRadio) unifiedRadio.classList.remove('border-gold', 'bg-gold/20');
    if (transferWrapper) transferWrapper.classList.add('hidden');
  } else {
    if (unifiedRadio) unifiedRadio.classList.add('border-gold', 'bg-gold/20');
    if (directRadio) directRadio.classList.remove('border-gold', 'bg-gold/20');
    if (transferWrapper) transferWrapper.classList.remove('hidden');
  }
}

function handleReceiptUpload(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      AppState.uploadedReceipt = e.target.result;
      const previewBox = document.getElementById('receiptPreviewBox');
      const placeholder = document.getElementById('receiptPlaceholder');
      const thumb = document.getElementById('receiptPreviewThumb');
      const fname = document.getElementById('receiptFileName');

      if (thumb) thumb.src = e.target.result;
      if (fname) fname.textContent = file.name;
      if (previewBox) {
        previewBox.classList.remove('hidden');
        previewBox.classList.add('flex');
      }
      if (placeholder) placeholder.classList.add('hidden');
      showToast('تم إرفاق صورة السند بنجاح 📎');
    };
    reader.readAsDataURL(file);
  }
}

function simulateReceiptUpload() {
  AppState.uploadedReceipt = 'assets/images/royal_oud.jpg';
  const previewBox = document.getElementById('receiptPreviewBox');
  const placeholder = document.getElementById('receiptPlaceholder');
  const thumb = document.getElementById('receiptPreviewThumb');
  const fname = document.getElementById('receiptFileName');

  if (thumb) thumb.src = 'assets/images/royal_oud.jpg';
  if (fname) fname.textContent = 'سند_تحويل_تجريبي.jpg';
  if (previewBox) {
    previewBox.classList.remove('hidden');
    previewBox.classList.add('flex');
  }
  if (placeholder) placeholder.classList.add('hidden');
  showToast('تم إرفاق سند افتراضي للتجربة 📎');
}

// Order Form Submission (Saves locally + Syncs to Firebase)
async function submitOrderForm(event) {
  if (event) event.preventDefault();

  const nameInput = document.getElementById('checkoutCustomerName');
  const phoneInput = document.getElementById('checkoutCustomerPhone');
  const cityInput = document.getElementById('checkoutCustomerCity');
  const transferNum = document.getElementById('checkoutTransferNumber')?.value.trim();

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const city = cityInput ? cityInput.value.trim() : 'عدن';

  if (!name || !phone) {
    showToast('يرجى كتابة الاسم الكامل ورقم الهاتف لتأكيد الطلب ⚠️');
    return;
  }

  let totalYER = 0;
  let totalSAR = 0;
  const items = AppState.cart.map(item => {
    const prod = AppState.products.find(p => p.id === item.id);
    const unitYER = item.priceYER || (prod ? prod.priceYER : 0);
    const unitSAR = item.priceSAR || (prod ? prod.priceSAR : 0);
    const lineTotal = unitYER * item.qty;
    totalYER += lineTotal;
    totalSAR += (unitSAR * item.qty);
    return {
      name: prod ? prod.name : 'عطر فاخر',
      size: item.selectedSize || (item.ml ? `${item.ml} مل` : '100 مل'),
      qty: item.qty,
      price: lineTotal
    };
  });

  const orderId = 'HK-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);

  const newOrder = {
    id: orderId,
    customerName: name,
    phone: phone,
    city: city || 'عدن',
    items: items,
    totalYER: totalYER,
    totalSAR: totalSAR,
    currency: AppState.currency,
    bank: AppState.checkoutBank,
    paymentType: AppState.checkoutPaymentType,
    transferNumber: transferNum || 'إيداع مباشر',
    receiptImage: AppState.uploadedReceipt || 'assets/images/royal_oud.jpg',
    status: 'pending',
    date: new Date().toISOString().replace('T', ' ').substring(0, 16),
    adminNotes: 'طلب جديد عبر المتجر الإلكتروني'
  };

  // 1. Save to Local State
  AppState.orders.unshift(newOrder);
  AppState.cart = [];
  AppState.uploadedReceipt = null;
  saveState();
  updateCartBadges();
  renderCart();

  // 2. Realtime Sync with Firebase Database
  if (typeof HikayaFirebaseService !== 'undefined' && HikayaFirebaseService.isAvailable()) {
    HikayaFirebaseService.saveOrder(newOrder);
  }

  // 3. Show Success Screen
  const formView = document.getElementById('checkoutFormView');
  const successView = document.getElementById('checkoutSuccessView');
  if (formView) formView.classList.add('hidden');
  if (successView) successView.classList.remove('hidden');

  const setEl = (id, text, isImg = false, isHTML = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isImg) el.src = text;
    else if (isHTML) el.innerHTML = text;
    else el.textContent = text;
  };

  setEl('successOrderId', orderId);
  setEl('successOrderTotal', formatPrice(totalYER, totalSAR), false, true);
  const bankObj = getBankInfo(newOrder.bank);
  setEl('successBankName', bankObj.name);

  // Configure Success WhatsApp & Invoice Buttons
  const waBtn = document.getElementById('successWhatsAppBtn');
  if (waBtn) {
    const itemsText = items.map(i => `• ${i.name} (${i.size}) × ${i.qty.toLocaleString('en-US')}`).join('\n');
    const msg = encodeURIComponent(
      `مرحباً دار حكاية للعطور (HIKAYA) 👑\nأود تأكيد طلبي رقم: ${orderId}\n\nالاسم: ${name}\nالهاتف: ${phone}\nالعنوان: ${city}\n\nالعطور المطلوبة:\n${itemsText}\n\nالمبلغ الإجمالي: ${formatPriceText(totalYER, totalSAR)}\nطريقة الدفع: ${bankObj.shortName} (${newOrder.paymentType === 'direct' ? 'إيداع مباشر' : 'حوالة: ' + (transferNum || '-')})\n\nتم إرفاق صورة السند في المتجر، يرجى تأكيد استلام الطلب والشحن. شكراً لكم!`
    );
    waBtn.href = `https://wa.me/967777889900?text=${msg}`;
  }

  const invoiceBtn = document.getElementById('successInvoiceBtn');
  if (invoiceBtn) {
    invoiceBtn.onclick = () => openInvoiceModal(orderId);
  }

  showToast(`تم استلام طلبك رقم ${orderId} بنجاح! 👑`);
}

// --- 7. ADMIN DASHBOARD: ORDERS, KPIS & PRODUCTS ---

let currentOrdersFilter = 'all';
let currentOrdersSearchQuery = '';

function setOrdersFilter(status, btn) {
  currentOrdersFilter = status;
  document.querySelectorAll('.orders-filter-btn').forEach(b => {
    b.classList.remove('bg-burgundy', 'border-gold', 'text-gold', 'shadow-gold-soft');
    b.classList.add('border-gold/30', 'text-gray-300');
  });
  if (btn) {
    btn.classList.add('bg-burgundy', 'border-gold', 'text-gold', 'shadow-gold-soft');
    btn.classList.remove('border-gold/30', 'text-gray-300');
  }
  renderAdminOrders(currentOrdersFilter, currentOrdersSearchQuery);
}

function handleAdminOrdersSearch(query) {
  currentOrdersSearchQuery = (query || '').trim().toLowerCase();
  renderAdminOrders(currentOrdersFilter, currentOrdersSearchQuery);
}

function toggleReceiptZoom(imgEl) {
  if (!imgEl) return;
  imgEl.classList.toggle('max-h-64');
  imgEl.classList.toggle('max-h-none');
  imgEl.classList.toggle('scale-125');
  imgEl.classList.toggle('cursor-zoom-in');
  imgEl.classList.toggle('cursor-zoom-out');
}

// Unified Master Admin Orders Rendering (Mobile Luxury Cards + Desktop Table)
function renderAdminOrders(filterStatus = currentOrdersFilter, searchQuery = currentOrdersSearchQuery) {
  currentOrdersFilter = filterStatus || 'all';
  currentOrdersSearchQuery = searchQuery || '';

  // 1. Update Filter Badge Counts
  const allCount = AppState.orders.length;
  const pendingCount = AppState.orders.filter(o => o.status === 'pending').length;
  const approvedCount = AppState.orders.filter(o => o.status === 'approved').length;
  const shippedCount = AppState.orders.filter(o => o.status === 'shipped' || o.status === 'delivered').length;
  const rejectedCount = AppState.orders.filter(o => o.status === 'rejected').length;

  const setCount = (id, count) => {
    const el = document.getElementById(id);
    if (el) el.textContent = count;
  };
  setCount('countFilterAll', allCount);
  setCount('countFilterPending', pendingCount);
  setCount('countFilterApproved', approvedCount);
  setCount('countFilterShipped', shippedCount);
  setCount('countFilterRejected', rejectedCount);

  // 2. Filter & Search List
  let list = AppState.orders;
  if (currentOrdersFilter !== 'all') {
    if (currentOrdersFilter === 'shipped') {
      list = list.filter(o => o.status === 'shipped' || o.status === 'delivered');
    } else {
      list = list.filter(o => o.status === currentOrdersFilter);
    }
  }
  if (currentOrdersSearchQuery) {
    list = list.filter(o => {
      const q = currentOrdersSearchQuery;
      return (o.id || '').toLowerCase().includes(q) ||
             (o.customerName || '').toLowerCase().includes(q) ||
             (o.phone || '').includes(q) ||
             (o.city || '').toLowerCase().includes(q) ||
             (o.transferNumber || '').toLowerCase().includes(q);
    });
  }

  // 3. Status Badges Definition
  const statusBadges = {
    pending: '<span class="badge-status pending text-[11px] py-0.5 px-2.5">⏳ قيد المراجعة</span>',
    approved: '<span class="badge-status approved text-[11px] py-0.5 px-2.5">✅ معتمد ومسدد</span>',
    shipped: '<span class="badge-status shipped text-[11px] py-0.5 px-2.5">🚚 جاري الشحن</span>',
    delivered: '<span class="badge-status delivered text-[11px] py-0.5 px-2.5">📦 تم التسليم</span>',
    rejected: '<span class="badge-status rejected text-[11px] py-0.5 px-2.5">❌ سند مرفوض</span>'
  };

  const mobileContainer = document.getElementById('adminOrdersCardsMobile');
  const desktopTbody = document.getElementById('adminOrdersTbody') || document.getElementById('adminOrdersTableBody');
  const emptyState = document.getElementById('adminOrdersEmptyState');

  // Handle Empty State
  if (list.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (mobileContainer) mobileContainer.innerHTML = '';
    if (desktopTbody) desktopTbody.innerHTML = '';
    return;
  } else {
    if (emptyState) emptyState.classList.add('hidden');
  }

  // 4. Render Mobile Cards (Dedicated Smartphone View)
  if (mobileContainer) {
    mobileContainer.innerHTML = list.map(o => {
      const bObj = getBankInfo(o.bank);
      const bName = bObj.shortName || bObj.name || o.bank;
      const safeImg = o.receiptImage || 'assets/images/royal_oud.jpg';
      const cleanPhone = (o.phone || '').replace(/^0/, '');
      const waNotice = encodeURIComponent(
        `عزيزنا العميل ${o.customerName} من دار "حكاية" للعطور 👑\nبخصوص طلبك رقم ${o.id} بقيمة ${o.totalYER.toLocaleString('ar-YE')} ر.ي.\nيسعدنا التواصل معك!`
      );

      let actionButtons = `
        <button onclick="inspectOrder('${o.id}')" class="px-3 py-2 rounded-xl bg-gold/15 border border-gold/40 text-gold text-xs font-bold hover:bg-gold/30 flex items-center justify-center gap-1">
          <span>🔍 فحص السند</span>
        </button>
        <button onclick="openInvoiceModal('${o.id}')" class="px-3 py-2 rounded-xl bg-black/60 border border-gold/30 text-gray-200 text-xs hover:text-gold flex items-center justify-center gap-1">
          <span>🧾 فاتورة</span>
        </button>
      `;

      if (o.status === 'pending') {
        actionButtons += `
          <button onclick="updateOrderStatus('${o.id}', 'approved')" class="btn-action-success flex-1 py-2 text-xs flex items-center justify-center gap-1">
            <span>اعتماد السند ✅</span>
          </button>
          <button onclick="openRejectModal('${o.id}')" class="btn-action-danger py-2 px-3 text-xs flex items-center justify-center gap-1">
            <span>رفض ❌</span>
          </button>
        `;
      } else if (o.status === 'approved') {
        actionButtons += `
          <button onclick="updateOrderStatus('${o.id}', 'shipped')" class="px-3 py-2 rounded-xl bg-purple-900/50 border border-purple-500/50 text-purple-300 font-bold text-xs flex-1 flex items-center justify-center gap-1 hover:bg-purple-800/50">
            <span>بدء الشحن 🚚</span>
          </button>
        `;
      } else if (o.status === 'shipped') {
        actionButtons += `
          <button onclick="updateOrderStatus('${o.id}', 'delivered')" class="px-3 py-2 rounded-xl bg-emerald-900/50 border border-emerald-500/50 text-emerald-300 font-bold text-xs flex-1 flex items-center justify-center gap-1 hover:bg-emerald-800/50">
            <span>تم التسليم 📦</span>
          </button>
        `;
      }

      return `
        <div class="glass-card p-4 border border-gold/40 shadow-xl space-y-3 relative text-right">
          <!-- Top Order Header -->
          <div class="flex items-center justify-between border-b border-gold/15 pb-2.5">
            <div class="flex items-center gap-1.5">
              <span class="font-mono font-black text-sm text-gold">${o.id}</span>
              <button onclick="navigator.clipboard.writeText('${o.id}'); showToast('تم نسخ رقم الطلب: ${o.id}');" class="text-gray-400 hover:text-gold text-xs p-1" title="نسخ رقم الطلب">📋</button>
            </div>
            <div>
              ${statusBadges[o.status] || `<span class="badge-status">${o.status}</span>`}
            </div>
          </div>

          <!-- Customer Identity Box -->
          <div class="bg-black/40 rounded-xl p-3 border border-gold/20 space-y-2">
            <div class="flex items-center justify-between">
              <span class="font-heading font-bold text-sm text-ivory">${o.customerName}</span>
              <span class="text-[10px] text-gray-400 font-mono">${o.date}</span>
            </div>
            <div class="text-xs text-gray-300 flex items-center gap-1">
              <span>📍</span>
              <span>${o.city || 'عدن'}</span>
            </div>
            <!-- Quick Contact Strip -->
            <div class="flex items-center gap-2 pt-1.5 border-t border-gold/10">
              <a href="https://wa.me/967${cleanPhone}?text=${waNotice}" target="_blank" class="flex-1 py-1.5 px-2 rounded-lg bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs flex items-center justify-center gap-1 hover:bg-emerald-900/80">
                <span>💬 واتساب (${o.phone})</span>
              </a>
              <a href="tel:${o.phone}" class="py-1.5 px-3 rounded-lg bg-black/60 border border-gold/30 text-gold text-xs flex items-center justify-center gap-1 hover:bg-gold/10">
                <span>📞 اتصال</span>
              </a>
            </div>
          </div>

          <!-- Fragrance Items Ordered -->
          <div class="space-y-1 text-xs">
            <span class="text-gray-400 text-[11px] block">العطور المطلوبة:</span>
            <div class="space-y-1 bg-black/30 p-2.5 rounded-lg border border-gold/10">
              ${o.items.map(item => `
                <div class="flex items-center justify-between text-[11px]">
                  <span class="text-ivory font-semibold">• ${item.name} ${item.size ? `(${item.size})` : ''} × ${Number(item.qty || 1).toLocaleString('en-US')}</span>
                  <span class="text-gold font-mono font-bold">${Number(item.price || 0).toLocaleString('en-US')} ر.ي</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Payment & Financials -->
          <div class="grid grid-cols-2 gap-2 text-xs bg-burgundy/20 border border-gold/25 p-2.5 rounded-xl">
            <div>
              <span class="text-[10px] text-gray-400 block">المبلغ الإجمالي:</span>
              <span class="font-heading font-black text-sm text-gold">${Number(o.totalYER || 0).toLocaleString('en-US')} ر.ي</span>
              <span class="text-[10px] text-gold-light font-mono flex items-center gap-1 mt-0.5">${getSARSymbolHTML('xs')} ${Number(o.totalSAR || convertYerToSar(o.totalYER)).toLocaleString('en-US')}</span>
            </div>
            <div class="text-left">
              <span class="text-[10px] text-gray-400 block">طريقة التحويل / البنك:</span>
              <span class="font-bold text-ivory text-[11px] block">${bName}</span>
              <span class="text-[10px] text-gold-light/80 font-mono block">${o.paymentType === 'direct' ? 'إيداع مباشر' : `حوالة: ${o.transferNumber || '-'}`}</span>
            </div>
          </div>

          <!-- Receipt Image Preview & Zoom Action -->
          <div class="flex items-center justify-between gap-3 p-2 rounded-xl bg-black/50 border border-gold/30">
            <div class="flex items-center gap-2.5">
              <img 
                src="${safeImg}" 
                onerror="this.onerror=null; this.src='assets/images/royal_oud.jpg';" 
                onclick="inspectOrder('${o.id}')" 
                class="w-12 h-12 object-cover rounded-lg border border-gold/50 cursor-pointer shadow-md hover:scale-105 transition-transform" 
                title="انقر لتكبير السند" 
              />
              <div>
                <span class="text-xs font-bold text-ivory block">إشعار التحويل / السند المرفق</span>
                <span class="text-[10px] text-gray-400 block">انقر على الصورة للفحص والتكبير</span>
              </div>
            </div>
            <button onclick="inspectOrder('${o.id}')" class="px-2.5 py-1.5 rounded-lg border border-gold/50 bg-gold/15 text-gold text-xs font-bold hover:bg-gold/30 flex items-center gap-1 shrink-0">
              <span>🔍 تكبير</span>
            </button>
          </div>

          ${o.adminNotes ? `<div class="text-[11px] text-amber-300/90 bg-amber-950/30 p-2 rounded-lg border border-amber-500/20">📝 ملاحظة: ${o.adminNotes}</div>` : ''}

          <!-- Touch-friendly Action Bar -->
          <div class="pt-2 border-t border-gold/15 flex flex-wrap items-center gap-2">
            ${actionButtons}
          </div>
        </div>
      `;
    }).join('');
  }

  // 5. Render Desktop Table Rows
  if (desktopTbody) {
    desktopTbody.innerHTML = list.map(o => {
      const bObj = getBankInfo(o.bank);
      const bName = bObj.shortName || bObj.name || o.bank;
      const safeImg = o.receiptImage || 'assets/images/royal_oud.jpg';
      const cleanPhone = (o.phone || '').replace(/^0/, '');
      const itemsSummary = o.items.map(i => `${i.name} ${i.size ? `(${i.size})` : ''} (x${i.qty})`).join('، ');

      let desktopActions = `
        <button onclick="inspectOrder('${o.id}')" class="px-2 py-1 rounded bg-gold/15 text-gold text-[10px] hover:bg-gold/30" title="فحص وتكبير السند">فحص 🔍</button>
        <button onclick="openInvoiceModal('${o.id}')" class="px-2 py-1 rounded bg-gold/10 text-gold text-[10px] hover:bg-gold/20" title="طباعة الفاتورة">فاتورة 🧾</button>
      `;

      if (o.status === 'pending') {
        desktopActions += `
          <button onclick="updateOrderStatus('${o.id}', 'approved')" class="btn-action-success text-[10px] py-1 px-2" title="اعتماد فوري">اعتماد ✅</button>
          <button onclick="openRejectModal('${o.id}')" class="btn-action-danger text-[10px] py-1 px-2" title="رفض السند">رفض ❌</button>
        `;
      } else if (o.status === 'approved') {
        desktopActions += `
          <button onclick="updateOrderStatus('${o.id}', 'shipped')" class="px-2 py-1 rounded bg-purple-900/50 border border-purple-500/40 text-purple-300 text-[10px] hover:bg-purple-800/50" title="بدء الشحن">شحن 🚚</button>
        `;
      } else if (o.status === 'shipped') {
        desktopActions += `
          <button onclick="updateOrderStatus('${o.id}', 'delivered')" class="px-2 py-1 rounded bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 text-[10px] hover:bg-emerald-800/50" title="تم التسليم">تسليم 📦</button>
        `;
      }

      return `
        <tr class="hover:bg-gold/5 transition-colors border-b border-gold/10">
          <td class="p-3 font-mono font-bold text-gold">${o.id}</td>
          <td class="p-3">
            <span class="font-bold text-ivory block">${o.customerName}</span>
            <div class="flex items-center gap-1.5 mt-0.5">
              <a href="https://wa.me/967${cleanPhone}" target="_blank" class="text-emerald-400 hover:underline text-[10px] font-mono flex items-center gap-0.5">
                <span>💬</span> <span>${o.phone}</span>
              </a>
            </div>
            <span class="text-[10px] text-gray-400 block">${o.city || 'عدن'}</span>
          </td>
          <td class="p-3 text-[11px] text-gray-300 max-w-xs truncate" title="${itemsSummary}">
            ${itemsSummary}
          </td>
          <td class="p-3 font-bold text-ivory font-heading">
            <div>${Number(o.totalYER || 0).toLocaleString('en-US')} ر.ي</div>
            <div class="text-[11px] text-gold font-mono flex items-center gap-1 mt-0.5">${getSARSymbolHTML('xs')} ${Number(o.totalSAR || convertYerToSar(o.totalYER)).toLocaleString('en-US')}</div>
          </td>
          <td class="p-3 text-xs">
            <span class="text-gold font-bold block">${bName}</span>
            <span class="text-[10px] text-gray-400 font-mono block">${o.paymentType === 'direct' ? 'إيداع مباشر' : `حوالة: ${o.transferNumber || '-'}`}</span>
          </td>
          <td class="p-3 text-center">
            <img 
              src="${safeImg}" 
              onerror="this.onerror=null; this.src='assets/images/royal_oud.jpg';" 
              onclick="inspectOrder('${o.id}')" 
              class="w-10 h-10 object-cover rounded border border-gold/40 cursor-pointer hover:scale-125 transition-transform mx-auto shadow" 
              title="انقر لتكبير السند" 
            />
          </td>
          <td class="p-3">${statusBadges[o.status] || `<span class="badge-status">${o.status}</span>`}</td>
          <td class="p-3 text-gray-400 text-[10px] font-mono">${o.date}</td>
          <td class="p-3 text-center">
            <div class="flex items-center justify-center gap-1.5 flex-wrap">
              ${desktopActions}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }
}

// Fixed alias linking renderOrdersTable directly to renderAdminOrders
function renderOrdersTable(filterStatus = 'all') {
  renderAdminOrders(filterStatus);
}

// Order Inspection Modal (Enhanced with Safe Fallback & Instant Full-Screen Zoom)
function inspectOrder(orderId) {
  const order = AppState.orders.find(o => o.id === orderId);
  if (!order) return;
  AppState.currentInspectingOrder = order;

  const modal = document.getElementById('orderDetailModal');
  if (!modal) return;

  const bankObj = getBankInfo(order.bank);
  const bankName = bankObj.name || bankObj.shortName || order.bank;

  document.getElementById('inspectOrderId').textContent = order.id;
  document.getElementById('inspectCustomerName').textContent = order.customerName;
  document.getElementById('inspectCustomerPhone').textContent = order.phone;
  document.getElementById('inspectCustomerCity').textContent = order.city || 'عدن';
  document.getElementById('inspectBankName').textContent = bankName;
  document.getElementById('inspectTransferNum').textContent = order.transferNumber || (order.paymentType === 'direct' ? 'إيداع مباشر' : 'غير مدخل');
  
  const receiptImg = document.getElementById('inspectReceiptImg');
  if (receiptImg) {
    receiptImg.src = order.receiptImage || 'assets/images/royal_oud.jpg';
    receiptImg.onerror = function() {
      this.onerror = null;
      this.src = 'assets/images/royal_oud.jpg';
    };
    receiptImg.className = 'w-full max-h-64 object-contain rounded mx-auto cursor-zoom-in transition-all duration-300';
  }

  const inspectTotalEl = document.getElementById('inspectTotal');
  if (inspectTotalEl) {
    const sarVal = Number(order.totalSAR || convertYerToSar(order.totalYER));
    inspectTotalEl.innerHTML = `<span class="font-mono">${Number(order.totalYER || 0).toLocaleString('en-US')} ر.ي</span> <span class="text-xs text-gold flex items-center gap-1 font-mono">(${getSARSymbolHTML('xs')} ${sarVal.toLocaleString('en-US')})</span>`;
  }

  const itemsList = document.getElementById('inspectItemsList');
  if (itemsList) {
    itemsList.innerHTML = order.items.map(i => `
      <li class="flex justify-between py-1 border-b border-gold/10 text-xs">
        <span>${i.name} ${i.size ? `(${i.size})` : ''} × ${Number(i.qty || 1).toLocaleString('en-US')}</span>
        <span class="text-gold font-bold font-mono">${Number(i.price || 0).toLocaleString('en-US')} ر.ي</span>
      </li>
    `).join('');
  }

  // Pre-fill WhatsApp Approve Button
  const waMsg = encodeURIComponent(
    `عزيزنا العميل ${order.customerName} ✨\nيسعدنا إبلاغك في دار "حكاية" للعطور بأنه تم اعتماد طلبك رقم ${order.id} بنجاح!\nجاري تجهيز الشحنة الفاخرة للتوصيل في ${order.city || 'عدن'}.\nشكراً لاختيارك الفخامة!`
  );
  const waBtn = document.getElementById('inspectApproveWaBtn');
  if (waBtn) {
    waBtn.href = `https://wa.me/967${(order.phone || '').replace(/^0/, '')}?text=${waMsg}`;
  }

  modal.classList.add('active');
}

function closeOrderInspect() {
  const modal = document.getElementById('orderDetailModal');
  if (modal) modal.classList.remove('active');
}

// Update Order Status (Syncs to Firebase + Local State)
function updateOrderStatus(orderId, newStatus) {
  const order = AppState.orders.find(o => o.id === orderId);
  if (!order) return;
  order.status = newStatus;
  saveState();
  renderAdminOrders(currentOrdersFilter, currentOrdersSearchQuery);
  renderAdminKPIs();

  // Sync to Firebase Realtime Database
  if (typeof HikayaFirebaseService !== 'undefined' && HikayaFirebaseService.isAvailable()) {
    HikayaFirebaseService.updateOrderStatus(orderId, newStatus, order.adminNotes);
  }

  if (newStatus === 'approved') {
    showToast(`تم اعتماد الطلب ${orderId} بنجاح ✅`);
  } else if (newStatus === 'rejected') {
    showToast(`تم رفض الطلب ${orderId} ❌`);
  } else if (newStatus === 'shipped') {
    showToast(`تم تحديث الطلب ${orderId} إلى جاري الشحن 🚚`);
  } else if (newStatus === 'delivered') {
    showToast(`تم تأكيد تسليم الطلب ${orderId} بنجاح 📦`);
  } else {
    showToast(`تم تحديث حالة الطلب إلى "${newStatus}"`);
  }
}

// Printable Official Luxury Invoice Modal
function openInvoiceModal(orderId) {
  const targetId = orderId || (AppState.currentInspectingOrder ? AppState.currentInspectingOrder.id : (AppState.orders[0] ? AppState.orders[0].id : null));
  const order = AppState.orders.find(o => o.id === targetId) || AppState.orders[0];
  if (!order) return;

  const modal = document.getElementById('invoiceModal');
  if (!modal) return;

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl('invNumber', `INV-${order.id}`);
  setEl('invDate', `التاريخ: ${order.date || '2026-10-15'}`);
  setEl('invStatus', order.status === 'approved' ? 'الحالة: معتمد ومسدد ✅' : (order.status === 'shipped' ? 'الحالة: تم الشحن 🚚' : 'الحالة: قيد المراجعة ⏳'));
  setEl('invCustomerName', order.customerName || '-');
  setEl('invCustomerPhone', order.phone || '-');
  setEl('invCustomerCity', order.city || 'عدن');

  const bankObj = getBankInfo(order.bank);
  setEl('invBankName', bankObj.name);
  setEl('invTransferNum', `رقم الحوالة/الإشعار: ${order.transferNumber || 'إيداع مباشر'}`);

  const tableBody = document.getElementById('invItemsTable');
  if (tableBody) {
    tableBody.innerHTML = order.items.map(item => `
      <tr class="border-b border-gray-100">
        <td class="p-2.5 font-bold">${item.name} ${item.size ? `(${item.size})` : ''}</td>
        <td class="p-2.5 text-center font-mono font-bold">${Number(item.qty || 1).toLocaleString('en-US')}</td>
        <td class="p-2.5 font-mono">${Math.round(item.price / (item.qty || 1)).toLocaleString('en-US')} ر.ي</td>
        <td class="p-2.5 text-left font-mono font-bold text-[#8C6D3F]">${Number(item.price || 0).toLocaleString('en-US')} ر.ي</td>
      </tr>
    `).join('');
  }

  const sarVal = Number(order.totalSAR || convertYerToSar(order.totalYER));
  const invTotalEl = document.getElementById('invTotal');
  if (invTotalEl) {
    invTotalEl.innerHTML = `<span class="font-mono font-bold">${Number(order.totalYER || 0).toLocaleString('en-US')} ر.ي</span> <span class="text-xs text-[#8C6D3F] font-mono">(${getSARSymbolHTML('xs')} ${sarVal.toLocaleString('en-US')})</span>`;
  }

  modal.classList.add('active');
}

function closeInvoiceModal() {
  const modal = document.getElementById('invoiceModal');
  if (modal) modal.classList.remove('active');
}

// Safe Print Invoice Function (Resolves orderId bug)
function printOrderInvoice(orderId) {
  const resolvedId = orderId || (AppState.currentInspectingOrder ? AppState.currentInspectingOrder.id : (AppState.orders[0] ? AppState.orders[0].id : null));
  openInvoiceModal(resolvedId);
  setTimeout(() => {
    window.print();
  }, 300);
}

// Rejection Reason Modal Logic
let orderPendingRejectionId = null;

function openRejectModal(orderId) {
  orderPendingRejectionId = orderId;
  const modal = document.getElementById('rejectModal');
  if (modal) modal.classList.add('active');
}

function closeRejectModal() {
  const modal = document.getElementById('rejectModal');
  if (modal) modal.classList.remove('active');
}

function confirmRejectOrder() {
  if (!orderPendingRejectionId) return;
  const order = AppState.orders.find(o => o.id === orderPendingRejectionId);
  if (!order) return;

  const reasonRadio = document.querySelector('input[name="rejectReasonRadio"]:checked');
  const customNotes = document.getElementById('rejectCustomNotes') ? document.getElementById('rejectCustomNotes').value.trim() : '';
  const reasonText = reasonRadio ? reasonRadio.value : 'صورة السند غير واضحة أو غير مقروءة';
  const fullReason = customNotes ? `${reasonText} (${customNotes})` : reasonText;

  order.status = 'rejected';
  order.adminNotes = `سبب الرفض: ${fullReason}`;
  saveState();
  renderAdminOrders();
  renderAdminKPIs();
  closeRejectModal();
  closeOrderInspect();

  // Sync to Firebase
  if (typeof HikayaFirebaseService !== 'undefined' && HikayaFirebaseService.isAvailable()) {
    HikayaFirebaseService.updateOrderStatus(order.id, 'rejected', order.adminNotes);
  }

  showToast(`تم رفض السند للطلب ${order.id} ❌`);

  // Pre-fill WhatsApp message to explain politely to the customer
  const waMsg = encodeURIComponent(
    `عزيزنا العميل ${order.customerName} من دار "حكاية" للعطور 👑\n\nنعتذر لإبلاغك بأنه تعذر اعتماد إشعار السند لطلبك رقم ${order.id} للأسباب التالية:\n⚠️ ${fullReason}\n\nيرجى إعادة إرسال صورة السند الواضحة أو مراجعة عملية التحويل هنا حتى نتمكن من شحن طلبك في أقرب وقت. شكراً لتفهمك!`
  );
  window.open(`https://wa.me/967${(order.phone || '').replace(/^0/, '')}?text=${waMsg}`, '_blank');
}

// Unified Admin Products Table Rendering (Resolves conflict bug)
function renderAdminProducts() {
  const tbody = document.getElementById('adminProductsTbody') || document.getElementById('adminProductsTableBody');
  if (!tbody) return;

  tbody.innerHTML = AppState.products.map(p => `
    <tr class="hover:bg-gold/5 transition-colors border-b border-gold/10">
      <td class="p-3">
        <img src="${p.image}" class="w-10 h-10 rounded-lg object-contain bg-black/60 border border-gold/30" />
      </td>
      <td class="p-3 font-bold text-ivory">
        <div>${p.name}</div>
        <div class="text-[10px] text-gray-400 font-latin">${p.frenchName}</div>
      </td>
      <td class="p-3 text-gold text-xs">${p.categoryName}</td>
      <td class="p-3 font-mono font-bold text-ivory">${Number(p.priceYER).toLocaleString('en-US')} ر.ي</td>
      <td class="p-3 font-mono text-gold flex items-center gap-1">${getSARSymbolHTML('xs')} ${Number(p.priceSAR || convertYerToSar(p.priceYER)).toLocaleString('en-US')}</td>
      <td class="p-3">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold ${p.stock < 10 ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30' : 'bg-emerald-900/40 text-emerald-300 border border-emerald-500/30'}">
          ${p.stock} قطعة
        </span>
      </td>
      <td class="p-3 text-center">
        <button onclick="deleteProduct('${p.id}')" class="text-red-400 hover:text-red-200 text-sm p-1" title="حذف العطر">✕</button>
      </td>
    </tr>
  `).join('');
}

// Alias for full backwards compatibility
function renderAdminProductsTable() {
  renderAdminProducts();
}

function deleteProduct(productId) {
  if (confirm('هل أنت متأكد من حذف هذا العطر من الكتالوج؟')) {
    AppState.products = AppState.products.filter(p => p.id !== productId);
    saveState();
    renderAdminProducts();
    renderFeaturedProducts();
    renderShopProducts();

    if (typeof HikayaFirebaseService !== 'undefined' && HikayaFirebaseService.isAvailable()) {
      HikayaFirebaseService.deleteProduct(productId);
    }
    showToast('تم حذف العطر من الكتالوج بنجاح');
  }
}

// Add Product Modal
function openAddProductModal() {
  const modal = document.getElementById('addProductModal');
  if (modal) modal.classList.add('active');
}

function closeAddProductModal() {
  const modal = document.getElementById('addProductModal');
  if (modal) modal.classList.remove('active');
}

function saveNewProduct(event) {
  if (event) event.preventDefault();

  const name = document.getElementById('newProdName').value.trim();
  const priceYER = parseInt(document.getElementById('newProdPriceYER').value) || 60000;
  const rate = AppState.exchangeRate || 413;
  let priceSAR = parseInt(document.getElementById('newProdPriceSAR').value);
  if (!priceSAR || isNaN(priceSAR)) {
    priceSAR = Math.round(priceYER / rate);
  }
  const category = document.getElementById('newProdCategory').value;
  const stock = parseInt(document.getElementById('newProdStock').value) || 10;
  const desc = document.getElementById('newProdDesc').value.trim();

  const categoryNames = {
    oud: 'دهن عود',
    musk: 'مسك صافي',
    men: 'رجالي',
    women: 'نسائي'
  };

  const newProd = {
    id: 'hk-' + Date.now().toString().slice(-4),
    name: name,
    frenchName: 'Parfum de Luxe HIKAYA',
    category: category,
    categoryName: categoryNames[category] || 'عطر فاخر',
    priceYER: priceYER,
    priceSAR: priceSAR,
    oldPriceYER: Math.round(priceYER * 1.35),
    oldPriceSAR: Math.round(priceSAR * 1.35),
    discount: '-35%',
    image: 'assets/images/bottles_3d/royal_oud.png',
    rating: 5.0,
    reviewsCount: 1,
    badge: 'جديد ✨',
    stock: stock,
    description: desc,
    durability: 'ثبات يدوم 48 ساعة',
    notes: {
      top: 'اللافندر والبرغموت',
      heart: 'خشب الصندل والعود',
      base: 'العنبر والمسك'
    }
  };

  AppState.products.unshift(newProd);
  saveState();
  renderAdminProducts();
  renderFeaturedProducts();
  renderShopProducts();
  closeAddProductModal();

  if (typeof HikayaFirebaseService !== 'undefined' && HikayaFirebaseService.isAvailable()) {
    HikayaFirebaseService.saveProduct(newProd);
  }

  showToast(`تمت إضافة عطر "${name}" إلى الكتالوج بنجاح ✨`);
}

// Admin KPIs Calculation
function renderAdminKPIs() {
  const totalSalesYER = AppState.orders
    .filter(o => o.status !== 'rejected')
    .reduce((sum, o) => sum + (o.totalYER || 0), 0);

  const totalOrders = AppState.orders.length;
  const pendingOrders = AppState.orders.filter(o => o.status === 'pending').length;
  const approvedOrders = AppState.orders.filter(o => o.status === 'approved' || o.status === 'shipped' || o.status === 'delivered').length;

  const updateText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  const updateHTML = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  };

  const totalSalesSAR = convertYerToSar(totalSalesYER);
  const formattedSales = `<span class="inline-flex items-center gap-1 font-mono">${getSARSymbolHTML('sm')} ${totalSalesSAR.toLocaleString('en-US')}</span> <span class="text-xs text-gray-400 font-mono">(${totalSalesYER.toLocaleString('en-US')} ر.ي)</span>`;
  updateHTML('adminKpiSales', formattedSales);
  updateHTML('kpiTotalSales', formattedSales);

  updateText('adminKpiOrders', totalOrders.toLocaleString('en-US'));
  updateText('kpiTotalOrders', totalOrders.toLocaleString('en-US'));

  updateText('adminKpiPending', pendingOrders.toLocaleString('en-US'));
  updateText('kpiPendingOrders', pendingOrders.toLocaleString('en-US'));

  updateText('adminKpiApproved', approvedOrders.toLocaleString('en-US'));
  updateText('kpiApprovedOrders', approvedOrders.toLocaleString('en-US'));
}

// --- 8. EXCHANGE RATE MANAGEMENT SYSTEM (SAR / YER) ---

function saveExchangeRateSetting(newRate = null) {
  const input = document.getElementById('settingExchangeRateInput');
  const rate = newRate || (input ? parseFloat(input.value) : 413);
  if (isNaN(rate) || rate <= 0) {
    showToast('يرجى كتابة سعر صرف صحيح (مثلاً: 413) ⚠️');
    return;
  }

  AppState.exchangeRate = rate;
  localStorage.setItem('hikaya_exchange_rate', rate);

  // Recalculate all products SAR prices based on the new exchange rate
  AppState.products.forEach(p => {
    p.priceSAR = Math.round(p.priceYER / rate);
    if (p.oldPriceYER) {
      p.oldPriceSAR = Math.round(p.oldPriceYER / rate);
    }
  });
  saveState();

  // Realtime Sync to Firebase
  if (typeof HikayaFirebaseService !== 'undefined' && HikayaFirebaseService.isAvailable()) {
    HikayaFirebaseService.saveExchangeRate(rate);
    AppState.products.forEach(p => HikayaFirebaseService.saveProduct(p));
  }

  renderAll();
  updateExchangeUI();
  showToast(`تم حفظ وتثبيت سعر الصرف: 1 ر.س = ${rate} ر.ي وتحديث كافة الأسعار 👑`);
}

function updateExchangeUI() {
  const rate = AppState.exchangeRate || 413;
  const rateInput = document.getElementById('settingExchangeRateInput');
  if (rateInput) rateInput.value = rate;

  const noticeEl = document.getElementById('adminAddProdRateNotice');
  if (noticeEl) noticeEl.textContent = rate;

  const quickChips = document.querySelectorAll('.rate-preset-btn');
  quickChips.forEach(btn => {
    if (parseFloat(btn.dataset.rate) === rate) {
      btn.classList.add('bg-burgundy', 'border-gold', 'text-gold');
    } else {
      btn.classList.remove('bg-burgundy', 'border-gold', 'text-gold');
    }
  });

  runSimCalc();
  renderExchangePreviewTable();
}

function runSimCalc() {
  const simYerInput = document.getElementById('simYerInput');
  const simSarResult = document.getElementById('simSarResult');
  const simFormulaText = document.getElementById('simFormulaText');
  const rate = AppState.exchangeRate || 413;

  const yer = simYerInput ? (parseFloat(simYerInput.value) || 0) : 100000;
  const sar = Math.round(yer / rate);

  if (simSarResult) {
    simSarResult.innerHTML = `${getSARSymbolHTML('md')} <span>${sar.toLocaleString('en-US')}</span>`;
  }
  if (simFormulaText) {
    simFormulaText.textContent = `${yer.toLocaleString('en-US')} ر.ي ÷ ${rate} = ${sar.toLocaleString('en-US')} ر.س`;
  }
}

function renderExchangePreviewTable() {
  const tbody = document.getElementById('exchangePreviewTbody');
  if (!tbody) return;

  const rate = AppState.exchangeRate || 413;
  tbody.innerHTML = AppState.products.slice(0, 6).map(p => {
    const calcSar = Math.round(p.priceYER / rate);
    return `
      <tr class="border-b border-gold/10 hover:bg-gold/5">
        <td class="p-2.5 font-bold text-ivory flex items-center gap-2">
          <img src="${p.image}" class="w-8 h-8 rounded object-contain bg-black/60 p-0.5" />
          <span>${p.name}</span>
        </td>
        <td class="p-2.5 font-mono text-gray-300">${Number(p.priceYER).toLocaleString('en-US')} ر.ي</td>
        <td class="p-2.5 font-mono font-bold text-gold flex items-center gap-1">${getSARSymbolHTML('xs')} ${calcSar.toLocaleString('en-US')}</td>
      </tr>
    `;
  }).join('');
}

function setupPriceAutoCalculation() {
  const yerInput = document.getElementById('newProdPriceYER');
  const sarInput = document.getElementById('newProdPriceSAR');
  if (yerInput && sarInput) {
    yerInput.addEventListener('input', () => {
      const yer = parseFloat(yerInput.value);
      const rate = AppState.exchangeRate || 413;
      if (!isNaN(yer) && yer > 0) {
        sarInput.value = Math.round(yer / rate);
      }
    });
    sarInput.addEventListener('input', () => {
      const sar = parseFloat(sarInput.value);
      const rate = AppState.exchangeRate || 413;
      if (!isNaN(sar) && sar > 0) {
        yerInput.value = Math.round(sar * rate);
      }
    });
  }
}

// Sales Chart for Admin
function renderAdminSalesChart() {
  const canvas = document.getElementById('adminSalesChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = (canvas.width = canvas.parentElement.clientWidth || 600);
  const h = (canvas.height = 180);

  ctx.clearRect(0, 0, w, h);

  // Gradient Background under curve
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, 'rgba(184, 148, 95, 0.35)');
  grad.addColorStop(1, 'rgba(184, 148, 95, 0)');

  const points = [
    { x: w * 0.05, y: h * 0.8 },
    { x: w * 0.2, y: h * 0.65 },
    { x: w * 0.35, y: h * 0.7 },
    { x: w * 0.5, y: h * 0.4 },
    { x: w * 0.65, y: h * 0.5 },
    { x: w * 0.8, y: h * 0.25 },
    { x: w * 0.95, y: h * 0.15 }
  ];

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    const cx = (points[i - 1].x + points[i].x) / 2;
    const cy = (points[i - 1].y + points[i].y) / 2;
    ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, cx, cy);
  }
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
  ctx.strokeStyle = '#B8945F';
  ctx.lineWidth = 3;
  ctx.shadowColor = 'rgba(184, 148, 95, 0.6)';
  ctx.shadowBlur = 12;
  ctx.stroke();

  // Fill gradient
  ctx.lineTo(points[points.length - 1].x, h);
  ctx.lineTo(points[0].x, h);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Dots
  points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#F3E5AB';
    ctx.fill();
  });
}

// Master Render All Components
function renderAll() {
  renderGreeting();
  updateCurrencyToggleUI();
  updateCartBadges();
  renderFeaturedProducts();
  renderShopProducts();
  renderCart();
  renderAdminOrders();
  renderAdminProducts();
  renderAdminKPIs();
  updateExchangeUI();
}

// Toast System
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// DOM Ready Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  loadStoredState();
  renderAll();

  // Setup Shop Search
  const shopSearch = document.getElementById('shopSearchInput');
  if (shopSearch) {
    shopSearch.addEventListener('input', () => renderShopProducts());
  }

  // Setup Price live calculation in Add Product Modal
  setupPriceAutoCalculation();

  // Setup Simulator Calculator if on Admin
  const simInput = document.getElementById('simYerInput');
  if (simInput) {
    simInput.addEventListener('input', runSimCalc);
  }

  // Close modals on escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeProductDetail();
      closeCartDrawer();
      closeCheckoutModal();
      closeOrderInspect();
      closeRejectModal();
      closeInvoiceModal();
      closeAddProductModal();
    }
  });
});

// Explicit Global Window Bindings for Inline HTML Handlers
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQty = updateCartItemQty;
window.toggleCurrency = toggleCurrency;
window.openProductDetail = openProductDetail;
window.closeProductDetail = closeProductDetail;
window.handleCustomMlInput = handleCustomMlInput;
window.setMlPreset = setMlPreset;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.openInvoiceModal = openInvoiceModal;
window.closeInvoiceModal = closeInvoiceModal;
window.printOrderInvoice = printOrderInvoice;
window.saveExchangeRateSetting = saveExchangeRateSetting;
window.runSimCalc = runSimCalc;
window.convertYerToSar = convertYerToSar;
window.convertSarToYer = convertSarToYer;
window.formatPrice = formatPrice;
window.formatPriceText = formatPriceText;

