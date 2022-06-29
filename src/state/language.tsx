import React, { Context } from 'react';

type Language = 'en' | 'es';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const LanguageContext: Context<any> = React.createContext(['en', () => {}]);
type LanguageContextProviderProps = {
  children: React.ReactNode;
};

export const useLanguageContext = () => {
  return React.useContext(LanguageContext);
};

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [language, setLanguage] = React.useState<Language>('en');
  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};
