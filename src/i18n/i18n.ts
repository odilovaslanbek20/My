import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uzb from './locales/uzb.json';
import eng from './locales/eng.json';
import rus from './locales/rus.json';

const resources = {
    uzb: {translation: uzb},
    eng: {translation: eng},
    rus: {translation: rus}
}

const saveLanguage = localStorage.getItem('lang') || 'uzb'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: saveLanguage, 
    fallbackLng: "eng",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n