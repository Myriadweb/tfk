import React, { Context } from 'react';
import i18next from 'i18next';

export enum Language {
  'en' = 'en',
  'es' = 'es',
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
// @ts-ignore
const LanguageContext: Context<any> = React.createContext();
type LanguageContextProviderProps = {
  children: React.ReactNode;
};

export const useLanguageContext = () => {
  return React.useContext(LanguageContext);
};

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [language, setLanguage] = React.useState<Language>(Language.en);

  const handleLanguageChange = (lang: Language) => {
    i18next.changeLanguage(lang).then(() => {
      setLanguage(lang);
    })
  }

  return (
    <LanguageContext.Provider value={[language, handleLanguageChange]}>
      {children}
    </LanguageContext.Provider>
  );
};
