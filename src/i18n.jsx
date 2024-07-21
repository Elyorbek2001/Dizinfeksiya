// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpBackend from 'i18next-https-backend';
// import { LanguageDetector } from "i18next-browser-LanguageDetector";
// import uzTranslation from '../public/locals/uz.json'
// import enTranslation from '../public/locals/en.json'
// import ruTranslation from '../public/locals/ru.json'




// i18n
//     .use(HttpBackend)
//     // tilni aniqlash
//     .use(LanguageDetector)
//     // boglash
//     .use(initReactI18next)
//     .init({
//         fallbacking: 'uz',
//         lng: i18n.language,
//         debug: true,
//         reources: {
//             uz: { translation: uzTranslation },
//             en: { translation: enTranslation },
//             ru: { translation: ruTranslation }
//         }

//     })
// export default i18n;









// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import laungageDetector from 'i18next-browser-languagedetector';
// import uzTranslation from './locals/uz.json'
// import enTranslation from './locals/en.json'
// import ruTranslation from './locals/ru.json'

// const laungage = localStorage.getItem('i18nextLng') || 'uz'

// i18n
//     .use(Backend)
//     // tilni aniqlab berish
//     .use(laungageDetector)
//     // bog'lash
//     .use(initReactI18next)
//     .init({
//         fallbackLng: 'en',
//         lng: laungage,
//         debug: true,
//         resources: {
//             uz: { translation: uzTranslation },
//             en: { translation: enTranslation },
//             ru: { translation: ruTranslation },
//         }
//     })

// export default i18n;