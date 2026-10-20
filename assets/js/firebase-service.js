// ==========================================================================
// دار حكاية للعطور (HIKAYA Haute Parfumerie)
// 2. Firebase Database Service Layer
// Realtime Database Service with offline fallback
// ==========================================================================

const HikayaFirebaseService = {
  isAvailable() {
    return window.HIKAYA_IS_FIREBASE_READY && window.HIKAYA_FIREBASE_DB !== null;
  },

  getDb() {
    return window.HIKAYA_FIREBASE_DB;
  },

  // Seed default data if database is brand new and empty
  async seedInitialDataIfEmpty(defaultProducts, defaultBanks, defaultOrders) {
    if (!this.isAvailable()) return;

    try {
      const prodSnapshot = await this.getDb().ref('products').once('value');
      if (!prodSnapshot.exists()) {
        console.log('📦 [HIKAYA Firebase] تهيئة المنتجات الستة الافتراضية في قاعدة البيانات...');
        const productsMap = {};
        defaultProducts.forEach(p => {
          productsMap[p.id] = p;
        });
        await this.getDb().ref('products').set(productsMap);
      }

      const banksSnapshot = await this.getDb().ref('settings/banks').once('value');
      if (!banksSnapshot.exists()) {
        console.log('🏦 [HIKAYA Firebase] تهيئة بيانات الحسابات البنكية الافتراضية...');
        await this.getDb().ref('settings/banks').set(defaultBanks);
      }

      const ordersSnapshot = await this.getDb().ref('orders').once('value');
      if (!ordersSnapshot.exists() && defaultOrders && defaultOrders.length > 0) {
        console.log('📜 [HIKAYA Firebase] تهيئة طلبات العرض الافتراضية...');
        const ordersMap = {};
        defaultOrders.forEach(o => {
          ordersMap[o.id] = o;
        });
        await this.getDb().ref('orders').set(ordersMap);
      }

      const storeSnapshot = await this.getDb().ref('settings/store').once('value');
      if (!storeSnapshot.exists()) {
        await this.getDb().ref('settings/store').set({
          brandNameArabic: 'حكاية',
          brandNameLatin: 'HIKAYA',
          tagline: 'لكل عبق حكاية تروى • عطور ملكية فاخرة',
          contactPhone: '777889900',
          currencyExchangeRate: 405
        });
      }
    } catch (err) {
      console.warn('⚠️ [HIKAYA Firebase] خطأ أثناء فحص أو تهيئة البيانات الأولية:', err);
    }
  },

  // Realtime listeners
  subscribeToProducts(callback) {
    if (!this.isAvailable()) return null;
    const ref = this.getDb().ref('products');
    ref.on('value', snapshot => {
      const val = snapshot.val();
      if (val) {
        const list = Object.keys(val).map(key => {
          const item = val[key];
          if (item && item.image && item.image.endsWith('.jpg') && !item.image.includes('/uploads/') && !item.image.includes('data:')) {
            item.image = item.image.replace('assets/images/', 'assets/images/bottles_3d/').replace('.jpg', '.png');
          }
          if (item && !Array.isArray(item.images)) {
            item.images = item.image ? [item.image] : ['assets/images/bottles_3d/royal_oud.png'];
          }
          return item;
        });
        callback(list);
      } else {
        callback([]);
      }
    }, err => {
      console.warn('⚠️ [HIKAYA Firebase] Products listener error:', err);
    });
    return ref;
  },

  async getProductsOnce() {
    if (!this.isAvailable()) return null;
    try {
      const snapshot = await this.getDb().ref('products').once('value');
      const val = snapshot.val();
      if (val) {
        return Object.keys(val).map(key => {
          const item = val[key];
          if (item && item.image && item.image.endsWith('.jpg') && !item.image.includes('/uploads/') && !item.image.includes('data:')) {
            item.image = item.image.replace('assets/images/', 'assets/images/bottles_3d/').replace('.jpg', '.png');
          }
          if (item && !Array.isArray(item.images)) {
            item.images = item.image ? [item.image] : ['assets/images/bottles_3d/royal_oud.png'];
          }
          return item;
        });
      }
      return [];
    } catch (e) {
      console.warn('⚠️ [HIKAYA Firebase] getProductsOnce error:', e);
      return null;
    }
  },

  subscribeToOrders(callback) {
    if (!this.isAvailable()) return null;
    const ref = this.getDb().ref('orders');
    ref.on('value', snapshot => {
      const val = snapshot.val();
      if (val) {
        const list = Object.keys(val).map(key => val[key]);
        // Sort descending by date/id
        list.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        callback(list);
      } else {
        callback([]);
      }
    }, err => {
      console.warn('⚠️ [HIKAYA Firebase] Orders listener error:', err);
    });
    return ref;
  },

  subscribeToBanks(callback) {
    if (!this.isAvailable()) return null;
    const ref = this.getDb().ref('settings/banks');
    ref.on('value', snapshot => {
      const val = snapshot.val();
      if (val) {
        callback(val);
      }
    }, err => {
      console.warn('⚠️ [HIKAYA Firebase] Banks listener error:', err);
    });
    return ref;
  },

  subscribeToStoreSettings(callback) {
    if (!this.isAvailable()) return null;
    const ref = this.getDb().ref('settings/store');
    ref.on('value', snapshot => {
      const val = snapshot.val();
      if (val) {
        callback(val);
      }
    });
    return ref;
  },

  // Mutations
  async saveOrder(orderData) {
    if (!this.isAvailable()) return false;
    try {
      await this.getDb().ref(`orders/${orderData.id}`).set(orderData);
      console.log(`✅ [HIKAYA Firebase] تم حفظ الطلب ${orderData.id} بنجاح`);
      return true;
    } catch (err) {
      console.error(`❌ [HIKAYA Firebase] تعذر حفظ الطلب ${orderData.id}:`, err);
      return false;
    }
  },

  async updateOrderStatus(orderId, status, adminNotes = null) {
    if (!this.isAvailable()) return false;
    try {
      const updates = { status: status };
      if (adminNotes !== null) {
        updates.adminNotes = adminNotes;
      }
      await this.getDb().ref(`orders/${orderId}`).update(updates);
      console.log(`✅ [HIKAYA Firebase] تم تحديث حالة الطلب ${orderId} إلى ${status}`);
      return true;
    } catch (err) {
      console.error(`❌ [HIKAYA Firebase] تعذر تحديث حالة الطلب ${orderId}:`, err);
      return false;
    }
  },

  async saveBankAccounts(banksData) {
    if (!this.isAvailable()) return false;
    try {
      await this.getDb().ref('settings/banks').set(banksData);
      console.log('✅ [HIKAYA Firebase] تم حفظ بيانات الحسابات البنكية في Firebase بنجاح');
      return true;
    } catch (err) {
      console.error('❌ [HIKAYA Firebase] تعذر حفظ بيانات الحسابات البنكية:', err);
      return false;
    }
  },

  async saveProduct(productData) {
    if (!this.isAvailable()) return false;
    try {
      await this.getDb().ref(`products/${productData.id}`).set(productData);
      console.log(`✅ [HIKAYA Firebase] تم حفظ المنتج ${productData.id} بنجاح`);
      return true;
    } catch (err) {
      console.error(`❌ [HIKAYA Firebase] تعذر حفظ المنتج:`, err);
      return false;
    }
  },

  async saveAllProducts(productsList) {
    if (!this.isAvailable()) return false;
    try {
      const map = {};
      if (Array.isArray(productsList)) {
        productsList.forEach(p => {
          if (p && p.id) map[p.id] = p;
        });
      }
      await this.getDb().ref('products').set(map);
      console.log('✅ [HIKAYA Firebase] تم حفظ وتحديث قائمة المنتجات كاملة في Firebase بنجاح');
      return true;
    } catch (err) {
      console.error('❌ [HIKAYA Firebase] تعذر حفظ قائمة المنتجات كاملة:', err);
      return false;
    }
  },

  async deleteProduct(productId) {
    if (!this.isAvailable()) return false;
    try {
      await this.getDb().ref(`products/${productId}`).remove();
      console.log(`✅ [HIKAYA Firebase] تم حذف المنتج ${productId} بنجاح`);
      return true;
    } catch (err) {
      console.error(`❌ [HIKAYA Firebase] تعذر حذف المنتج:`, err);
      return false;
    }
  },

  async saveExchangeRate(rate) {
    if (!this.isAvailable()) return false;
    try {
      await this.getDb().ref('settings/store/exchangeRate').set(rate);
      await this.getDb().ref('settings/rates/yer_to_sar').set(rate);
      console.log(`✅ [HIKAYA Firebase] تم حفظ سعر الصرف (${rate}) بنجاح`);
      return true;
    } catch (err) {
      console.error('❌ [HIKAYA Firebase] تعذر حفظ سعر الصرف:', err);
      return false;
    }
  },

  subscribeToExchangeRate(callback) {
    if (!this.isAvailable()) return null;
    const ref = this.getDb().ref('settings/store/exchangeRate');
    ref.on('value', snapshot => {
      const val = snapshot.val();
      if (val !== null && !isNaN(val)) {
        callback(Number(val));
      }
    });
    return ref;
  }
};

window.HikayaFirebaseService = HikayaFirebaseService;
