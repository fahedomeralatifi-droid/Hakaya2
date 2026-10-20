// ==========================================================================
// دار حكاية للعطور (HIKAYA Haute Parfumerie)
// 1. Firebase Configuration & Initialization
// Project: hekaya-perfume
// ==========================================================================

const firebaseConfig = {
  apiKey: "AIzaSyCLUeVbk9urEZIBLHYntjPALbTfOJRctq0",
  authDomain: "hekaya-perfume.firebaseapp.com",
  databaseURL: "https://hekaya-perfume-default-rtdb.firebaseio.com",
  projectId: "hekaya-perfume",
  storageBucket: "hekaya-perfume.firebasestorage.app",
  messagingSenderId: "826935993505",
  appId: "1:826935993505:web:0ba16d1f78fb0619bf7ce0"
};

// Safe Global Reference Holders
window.HIKAYA_FIREBASE_APP = null;
window.HIKAYA_FIREBASE_DB = null;
window.HIKAYA_IS_FIREBASE_READY = false;

// Initialize Firebase with fallback tolerance
(function initHikayaFirebase() {
  try {
    if (typeof firebase !== 'undefined') {
      if (!firebase.apps.length) {
        window.HIKAYA_FIREBASE_APP = firebase.initializeApp(firebaseConfig);
      } else {
        window.HIKAYA_FIREBASE_APP = firebase.app();
      }
      window.HIKAYA_FIREBASE_DB = firebase.database();
      window.HIKAYA_IS_FIREBASE_READY = true;
      console.log('✨ [HIKAYA] تم الاتصال بقاعدة بيانات Firebase بنجاح (hekaya-perfume)');
    } else {
      console.warn('⚠️ [HIKAYA] مكتبة Firebase لم تُحمّل بعد، يتم العمل بنظام التخزين المحلي التلقائي.');
    }
  } catch (error) {
    console.error('❌ [HIKAYA] تعذر تهيئة Firebase:', error);
    window.HIKAYA_IS_FIREBASE_READY = false;
  }
})();
