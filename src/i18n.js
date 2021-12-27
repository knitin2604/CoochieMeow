import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

const detectionOptions = {
    order: ['path'],
    lookupFromPathIndex: 0,
};
const backendOptions = {
    loadPath: '/locales/{{lng}}/translation.json',
    crossDomain: true,
};

i18n
    .use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init({
        backendOptions,
        debug: true,
        fallbackLng: 'en',
        whitelist: ['ar', 'en', 'es', 'fr', 'gu'],
        detection: detectionOptions,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        react: {
            useSuspense: false //   <---- this will do the magic
        }
    });

export default i18n;