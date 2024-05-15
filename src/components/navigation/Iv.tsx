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
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import Cardiovascular from './BodySystemsAssets/Cardiovascular.svg';
import { Trans } from 'react-i18next';

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
  const [shouldShowComponent, setShouldShowComponent] = React.useState(true);
  const [, delayApi] = useSpring(() => ({ opacity: 1 }));

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
    } else if (step === 6) {
      //delayApi.set({ opacity: 0 });
      //setShouldShowComponent(false);
    } else if (step === 7) {
      delayApi.start({
        opacity: 1,
        delay: 2000,
        config: {
          duration: 1,
        },
        onRest: () => setShouldShowComponent(true),
      });
    }
  }, [delayApi, step]);

  const stepComponentConfig = {
    0: () => (
      <>
        <div className='nav-middle' style={{ height: 192 }}>
          <div className='nav-items-container' style={{ width: 592 }}>
            <div>
              <NavigationButton
                image={Tablet}
                size={'small'}
                onClick={() => {
                  setStep((oldState) => ({
                    ...oldState,
                    step: 1,
                    value: 'tablet',
                  }));
                  playSound('iVTablet');
                }}
                text=''
              />
              <span style={distractionTextStyle}> {t('tablet')}</span>
            </div>
            <div>
              <NavigationButton
                image={Bubbles}
                size={'small'}
                onClick={() => {
                  setStep((oldState) => ({
                    ...oldState,
                    step: 1,
                    value: 'bubbles',
                  }));
                  playSound('iVBubbles');
                }}
                text=''
              />
              <span style={distractionTextStyle}> {t('bubbles')}</span>
            </div>
            <div>
              <NavigationButton
                image={Music}
                size={'small'}
                onClick={() => {
                  setStep((oldState) => ({
                    ...oldState,
                    step: 1,
                    value: 'music',
                  }));
                  playSound('iVHeadphones');
                }}
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
    5: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 6 });
        }}
      />
    ),
    6: () => <BlueBar />,
    7: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 8 });
        }}
      />
    ),
    9: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeProcedure');
          setStep({ step: 10, hideButtons: true });
        }}
      />
    ),
    10: () => (
      <>
        <BlueBar
          style={{
            height: 192,
          }}
        >
          <div
            style={{
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              height: '100%',
              width: 592,
            }}
          >
            <NavigationButton
              image={Sticker}
              size={value === 'sticker' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'sticker' }))
              }
              text=''
            />
            <NavigationButton
              image={Bear}
              size={value === 'doll' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'doll' }))
              }
              text=''
            />
            <NavigationButton
              image={Medal}
              size={value === 'medal' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'medal' }))
              }
              text=''
            />
          </div>
        </BlueBar>
        <button
          className='continue-button reward'
          onClick={() => {
            if (!value) return; // if no value is selected, don't continue

            playSound('click');
            setStep((oldStep) => ({ ...oldStep, step: 11 }));
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </>
    ),
    11: () => (
      <>
        <BlueBar style={{ height: 192 }}>
          <NavigationButton
            image={Cardiovascular}
            size={'large'}
            onClick={() => {
              playSound('generalSelect');
              setStep({ step: 0 });
              navigate(Paths.BodySystems + '/' + Paths.Cardiovascular);
            }}
            text=''
          />
        </BlueBar>

        <div
          style={{
            position: 'absolute',
            left: 44,
            top: 383,
          }}
        >
          <Link
            to={`${Paths.Procedures}/${prefix}`}
            onClick={() => {
              playSound('click');
              setStep({ step: 0 });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src='images/NavBar/proceduresButton.png' />
            <span
              style={{
                fontSize: 20,
                color: '#FFF',
                fontFamily: 'LemonMilk',
                marginLeft: 15,
                whiteSpace: 'pre',
                textAlign: 'left',
              }}
            >
              {t(`${step}-back`)}
            </span>
          </Link>
        </div>
      </>
    ),
  };

  return (
    <animated.div>
      <div className='nav-top'>
        <div
          className='header-text'
          style={{ display: step != 11 ? 'block' : 'none' }}
        >
          {t(`${step}-mainText`)}
        </div>
        <div
          className='body-text'
          style={{ display: step != 0 ? 'block' : 'none' }}
        >
          <Trans i18nKey={t(`${step}-subText`)} />
        </div>
      </div>
      {shouldShowComponent && stepComponentConfig[step] ? (
        stepComponentConfig[step]()
      ) : (
        <BlueBar />
      )}
    </animated.div>
  );
};

export default Iv;
