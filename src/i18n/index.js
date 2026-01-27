import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import en from "./locales/en.json";

const browserLang = navigator.language.split("-")[0];

const supportedLanguages = ["es", "en"];

const savedLang = localStorage.getItem("lang");

const defaultLang =
  savedLang || (supportedLanguages.includes(browserLang) ? browserLang : "es");

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: defaultLang,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
