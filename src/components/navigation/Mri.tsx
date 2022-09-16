import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
import Music from './SharedAssets/music.svg';
import VR from './MriAssets/vr.svg';
import Nap from './MriAssets/nap.svg';
import Muscular from './BodySystemsAssets/Muscular.svg';
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
        <div className='nav-items-container' style={{ width: 592 }}>
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
      </>
    ),
    1: () => (
      <button
        className='continue-button'
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
    ),
    2: () => (
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
    ),
    4: () => (
      <button
        className='continue-button'
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
        <div className='nav-items-container' style={{ width: 592 }}>
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
        <button
          className='continue-button'
          style={{
            position: 'absolute',
            bottom: 50,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          onClick={() => {
            if (!value) return; // if no value is selected, don't continue

            playSound('click');
            setStep((oldState) => ({ ...oldState, step: 6 }));
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </>
    ),
    6: () => (
      <>
        <div className='nav-items-container'>
          <NavigationButton
            image={Muscular}
            size={'large'}
            onClick={() => {
              playSound('click');
              setStep({ step: 0 });
              navigate(Paths.BodySystems + '/' + Paths.Muscular);
            }}
            text=''
          />
        </div>

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

  if (step === 3) return null;

  return (
    <animated.div style={delayStyle}>
      <div className='nav-top'>
        <div
          className='header-text'
          style={{ display: step != 6 ? 'block' : 'none' }}
        >
          {t(`${step}-mainText`)}
        </div>
        <div
          className='body-text'
          style={{ display: step != 0 ? 'block' : 'none' }}
        >
          {t(`${step}-subText`)}
          {step === 6 && (
            <span className='bold-text'>t(`${step}-boldText`)</span>
          )}
        </div>
      </div>
      <div className='nav-middle' style={{ padding: step < 5 ? 20 : 0 }}>
        {stepComponentConfig[step] && stepComponentConfig[step]()}
      </div>
    </animated.div>
  );
};

export default Mri;
