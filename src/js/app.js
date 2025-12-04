// Storage for original English text from HTML
const originalText = {};

// Translation data - hardcoded for reliability
const translations = {
  pl: {}
};

// Manual merge function - simpler and more reliable
function loadTranslations() {
  // Merge commonTranslations
  if (window.commonTranslations && window.commonTranslations.pl) {
    Object.assign(translations.pl, window.commonTranslations.pl);
  }

  // Merge homeTranslations
  if (window.homeTranslations && window.homeTranslations.pl) {
    Object.assign(translations.pl, window.homeTranslations.pl);
  }

  // Merge aboutTranslations (if exists)
  if (window.aboutTranslations && window.aboutTranslations.pl) {
    Object.assign(translations.pl, window.aboutTranslations.pl);
  }

  // Merge contactTranslations (if exists)
  if (window.contactTranslations && window.contactTranslations.pl) {
    Object.assign(translations.pl, window.contactTranslations.pl);
  }

  // Merge servicesTranslations (if exists)
  if (window.servicesTranslations && window.servicesTranslations.pl) {
    Object.assign(translations.pl, window.servicesTranslations.pl);
  }

  console.log('Loaded Polish translations:', Object.keys(translations.pl).length, 'keys');
  console.log('Translation keys:', Object.keys(translations.pl));
}

// Main language switching function
function setLanguage(lang) {
  let texts;

  if (lang === 'en') {
    texts = originalText;
  } else if (lang === 'pl') {
    texts = translations.pl;
  }

  if (!texts || Object.keys(texts).length === 0) {
    console.error(`Language "${lang}" not found or has no translations`);
    console.log('Available translations:', translations);
    return;
  }

  localStorage.setItem('language', lang);

  // Update all text elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (texts[key]) {
      element.textContent = texts[key];
      console.log(`Translated ${key}:`, texts[key]);
    } else {
      console.warn(`Missing translation for key: ${key}`);
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (texts[key]) {
      element.placeholder = texts[key];
    }
  });

  // Update button states
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;

  console.log(`✅ Language switched to: ${lang}`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Initializing translation system...');

  // Capture original English text
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    originalText[key] = element.textContent.trim();
  });

  console.log('📸 Captured English text:', originalText);

  // Load and merge all translations
  loadTranslations();

  // Apply saved language
  const savedLang = localStorage.getItem('language') || 'en';
  console.log('💭 Using language:', savedLang);

  setLanguage(savedLang);
});

// Merge offerTranslations (if exists)
if (window.offerTranslations && window.offerTranslations.pl) {
  Object.assign(translations.pl, window.offerTranslations.pl);
}

// Merge privacyTranslations (if exists)
if (window.privacyTranslations && window.privacyTranslations.pl) {
  Object.assign(translations.pl, window.privacyTranslations.pl);
}