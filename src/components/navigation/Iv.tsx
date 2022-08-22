import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';

import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
import Music from './SharedAssets/music.svg';
import Tablet from './IvAssets/iPad.svg';
import Bubbles from './IvAssets/bubbles.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react';
import Sticker from './SharedAssets/sticker.svg';
import Bear from './SharedAssets/bear.svg';
import Medal from './SharedAssets/medal.svg';
import { BlueBarContinue } from './BlueBarContinue';
import BlueBar from './UIComponents/BlueBar';

type Props = {
  path: Paths;
  prefix: Paths;
};

const distractionTextStyle = {
  fontFamily: 'LemonMilk',
  fontSize: 25,
  fontWeight: 'bold',
  letterSpacing: 1.24,
  marginTop: 12,
  color: '#fff',
};

const Iv = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const navigate = useNavigate();
  const [{ step, value }, setStep] = useGameContext();
  const [delayStyle, delayApi] = useSpring(() => ({ opacity: 1 }));

  useEffect(() => {
    if (step === 2) {
      delayApi.start({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000,
        config: {
          duration: 100,
        },
      });
    }
  }, [step]);

  const stepComponentConfig = {
    0: () => (
      <>
        <div
          style={{
            marginTop: 12,
            background: '#0E1F33',
            height: 192,
          }}
        >
          <div
            style={{
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'start',
              height: '100%',
              width: 592,
              paddingTop: 19,
            }}
          >
            <div>
              <NavigationButton
                image={Tablet}
                size={'small'}
                onClick={() =>
                  setStep((oldState) => ({
                    ...oldState,
                    step: 1,
                    value: 'tablet',
                  }))
                }
                text=''
              />
              <span style={distractionTextStyle}> {t('tablet')}</span>
            </div>
            <div>
              <NavigationButton
                image={Bubbles}
                size={'small'}
                onClick={() =>
                  setStep((oldState) => ({
                    ...oldState,
                    step: 1,
                    value: 'bubbles',
                  }))
                }
                text=''
              />
              <span style={distractionTextStyle}> {t('bubbles')}</span>
            </div>
            <div>
              <NavigationButton
                image={Music}
                size={'small'}
                onClick={() =>
                  setStep((oldState) => ({
                    ...oldState,
                    step: 1,
                    value: 'music',
                  }))
                }
                text=''
              />
              <span style={distractionTextStyle}> {t('music')}</span>
            </div>
          </div>
        </div>
      </>
    ),
    1: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          delayApi.set({ opacity: 0 });
          playSound('completeStep');
          setStep({ step: 2 });
        }}
      />
    ),
    3: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 4 });
        }}
      />
    ),
  };

  return (
    <>
      <animated.div style={delayStyle}>
        <span
          style={{
            display: 'block',
            fontSize: 40,
            color: '#FFF',
            fontFamily: 'LemonMilk',
            marginTop: 30,
            letterSpacing: 2,
            fontWeight: 'bolder',
            minHeight: 54,
          }}
        >
          {t(`${step}-mainText`)}
        </span>
        {step !== 0 && (
          <span
            style={{
              display: 'block',
              fontSize: 20,
              color: '#FFF',
              fontFamily: 'LemonMilk',
              marginTop: 12,
              whiteSpace: 'pre',
              minHeight: 54,
            }}
          >
            {t(`${step}-subText`)}
          </span>
        )}
      </animated.div>
      {stepComponentConfig[step] ? stepComponentConfig[step]() : <BlueBar />}
    </>
  );
};

export default Iv;
