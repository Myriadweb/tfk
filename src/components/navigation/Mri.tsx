import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import playSound from '../../sound';
import NavigationButton from './NavigationButton';
import Music from './SharedAssets/music.svg';
import VR from './MriAssets/vr.svg';
import Nap from './MriAssets/nap.svg';
import Skeletal from './BodySystemsAssets/Skeletal.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react';
import Sticker from './SharedAssets/sticker.svg';
import Bear from './SharedAssets/bear.svg';
import Medal from './SharedAssets/medal.svg';

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

const Mri = ({ prefix }: Props) => {
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
                image={Nap}
                size={'small'}
                onClick={() =>
                  setStep((oldState) => ({
                    ...oldState,
                    step: 1,
                    value: 'nap',
                  }))
                }
                text=''
              />
              <span style={distractionTextStyle}> {t('nap')}</span>
            </div>
            <div>
              <NavigationButton
                image={VR}
                size={'small'}
                onClick={() =>
                  setStep((oldState) => ({ ...oldState, step: 1, value: 'vr' }))
                }
                text=''
              />
              <span style={distractionTextStyle}> {t('vr')}</span>
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
      <div
        style={{
          marginTop: 13,
          background: '#0E1F33',
          padding: '33px 0',
        }}
      >
        <button
          style={{
            fontFamily: 'LemonMilk',
            fontSize: 20,
            color: '#fff',
            background: '#CD4845',
            border: '1px solid #000',
            borderRadius: 12,
            width: 241,
            height: 65,
          }}
          onClick={() => {
            playSound('completeStep');
            delayApi.start({
              opacity: 0,
              config: {
                duration: 1,
              },
            });
            setStep((old) => ({ ...old, step: 2 }));
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </div>
    ),
    2: () => (
      <div
        style={{
          marginTop: 13,
          background: '#0E1F33',
          padding: '5px 0',
        }}
      >
        <button
          style={{
            fontFamily: 'LemonMilk',
            fontSize: 20,
            color: '#fff',
            background: '#CD4845',
            border: '1px solid #000',
            borderRadius: 55,
            width: 109,
            height: 109,
          }}
          onClick={() => {
            playSound('xRay');
            setStep((old) => ({ ...old, step: 3 }));
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </div>
    ),
    4: () => (
      <button
        style={{
          fontFamily: 'LemonMilk',
          fontSize: 20,
          color: '#fff',
          background: '#CD4845',
          border: '1px solid #000',
          borderRadius: 12,
          width: 241,
          height: 65,
          marginTop: 20,
        }}
        onClick={() => {
          playSound('completeProcedure');
          setStep((oldState) => ({ ...oldState, step: 5, hideButtons: true }));
        }}
      >
        {t(`${step}-buttonText`)} <Arrow />
      </button>
    ),
    5: () => (
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
        </div>
        <button
          style={{
            fontFamily: 'LemonMilk',
            fontSize: 20,
            color: '#fff',
            background: '#CD4845',
            border: '1px solid #000',
            borderRadius: 12,
            width: 241,
            height: 65,
            marginTop: 20,
          }}
          onClick={() => {
            if (!value) return; // if no value is selected, don't continue

            playSound('click');
            setStep({ step: 0 });
            navigate(`${Paths.Procedures}/${Paths.Mri}`);
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </>
    ),
  };

  if (step === 3) return null;

  return (
    <animated.div style={delayStyle}>
      <>
        <span
          style={{
            display: 'block',
            fontSize: 40,
            color: '#FFF',
            fontFamily: 'LemonMilk',
            marginTop: 30,
            letterSpacing: 2,
            fontWeight: 'bolder',
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
            }}
          >
            {t(`${step}-subText`)}
          </span>
        )}
      </>
      {stepComponentConfig[step] && stepComponentConfig[step]()}
    </animated.div>
  );
};

export default Mri;
