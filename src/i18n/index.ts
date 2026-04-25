import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ruCommon from "./locales/ru/common.json";
import enCommon from "./locales/en/common.json";
import kzCommon from "./locales/kz/common.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      common: ruCommon,
    },
    en: {
      common: enCommon,
    },
    kz: {
      common: kzCommon,
    },
  },
  lng: "ru",
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
