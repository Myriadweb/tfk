import { useTranslation } from 'react-i18next';
import React from 'react';
import { Language, useLanguageContext } from '../state/language';
import { useSpring, animated } from 'react-spring';

const langStyle = {
  fontSize: 20,
  color: '#FFF',
  fontFamily: 'LemonMilk',
  textUnderlineOffset: 5,
};

export const LanguageToggle = () => {
  const { t } = useTranslation('translation');
  const [lang, setLang] = useLanguageContext();
  const [toggleStyle, toggleApi] = useSpring(() => ({
    from: {
      left: lang === Language.en ? 70 : 120,
    },
    to: {
      left: lang === Language.en ? 70 : 120,
    },
  }));

  const handleLanguageChange = () => {
    toggleApi.start({
      to: [{ left: lang === Language.en ? 120 : 70 }],
      from: { left: lang === Language.en ? 70 : 120 },
    });

    setLang(lang === 'en' ? 'es' : 'en');
  };

  return (
    <div
      style={{
        position: 'absolute',
        right: 44,
        top: 383,
        display: 'flex',
        alignItems: 'center',
      }}
      onClick={handleLanguageChange}
    >
      <span
        style={{
          ...langStyle,
          marginRight: 15,
          textDecoration: lang === 'en' ? 'underline' : 'none',
        }}
      >
        {t(`common.navbar.en`)}
      </span>
      <img src='images/NavBar/languageToggleBase.png' />
      <animated.img
        src='images/NavBar/languageToggle.png'
        style={{
          position: 'absolute',
          ...toggleStyle,
        }}
      />
      <span
        style={{
          ...langStyle,
          marginLeft: 15,
          textDecoration: lang === 'es' ? 'underline' : 'none',
        }}
      >
        {t(`common.navbar.es`)}
      </span>
    </div>
  );
};
