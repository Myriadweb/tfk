import { useTranslation } from 'react-i18next';
import React from 'react';
import { Language, useLanguageContext } from '../state/language';
import { useSpring, animated } from 'react-spring';
import { useAnimateContext } from '../state/animate';
import playSound from '../sound';
import { screenScale } from '../utils/scaling';

const langStyle = {
  fontSize: 20,
  color: '#FFF',
  fontFamily: 'LemonMilk',
  textUnderlineOffset: 5,
  height: screenScale.y(44),
};

export const LanguageToggle = () => {
  const { t } = useTranslation('translation');
  const [lang, setLang] = useLanguageContext();
  const [, setAnimation] = useAnimateContext();
  const [toggleStyle, toggleApi] = useSpring(() => ({
    from: {
      left: lang === Language.en ? 70 : 120,
    },
    to: {
      left: lang === Language.en ? 70 : 120,
    },
  }));

  const handleLanguageChange = () => {
    playSound('click');
    toggleApi.start({
      to: [
        {
          left:
            lang === Language.en ? screenScale.avg(120) : screenScale.avg(70),
        },
      ],
      from: {
        left: lang === Language.en ? screenScale.avg(70) : screenScale.avg(120),
      },
    });

    setAnimation('');

    setLang(lang === 'en' ? 'es' : 'en');
  };

  return (
    <div className='language-toggle-container' onClick={handleLanguageChange}>
      <span
        style={{
          ...langStyle,
          marginRight: 15,
          textDecoration: lang === 'en' ? 'underline' : 'none',
        }}
      >
        {t(`common.navbar.en`)}
      </span>
      <img
        src='images/NavBar/languageToggleBase.png'
        style={{ height: screenScale.y(66) }}
      />
      <animated.img
        src='images/NavBar/languageToggle.png'
        className='language-toggle-button'
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
