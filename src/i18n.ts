import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Language } from './state/language';
import { Translation } from './types/Translation';
import en from './translations/en';
import es from './translations/es';

interface ProjectOptions extends InitOptions {
  resources: {
    [key in Language]?: Translation;
  };
}

const options: ProjectOptions = {
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    [Language.en]: en,
    [Language.es]: es,
  },
};

for (const language in options.resources) {
  if (Language[language] === undefined) {
    throw new Error(`Language ${language} is not defined in Language enum`);
  }
}

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(options);

export default i18n;
