// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


// You can import translation files here or configure them later
import ar from './locales/ar.json';
import en from './locales/en.json';
import fr from './locales/fr.json';

const savedLanguage = localStorage.getItem('language') || 'fr';

i18n
  .use(initReactI18next)
  .init({
    lng: savedLanguage, // Initialize with the language from localStorage
    resources: {
      ar: { translation: ar },
      en: { translation: en },
      fr: { translation: fr },
    },
    fallbackLng: 'fr', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
