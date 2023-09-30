// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/Languages/{{lng}}/{{ns}}.json', // Ruta para cargar traducciones
    },
    fallbackLng: 'en', // Idioma predeterminado
    debug: true, // Modo depuración
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
