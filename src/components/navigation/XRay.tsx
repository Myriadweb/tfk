import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
import Bear from './SharedAssets/bear.svg';
import Medal from './SharedAssets/medal.svg';
import SignCast from './XRayAssets/signCast.svg';
import Skeletal from './BodySystemsAssets/Skeletal.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react';
import { BlueBarContinue } from './BlueBarContinue';
import BlueBar from './UIComponents/BlueBar';

type Props = {
  path: Paths;
  prefix: Paths;
};

const XRay = ({ prefix }: Props) => {
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
      <BlueBar></BlueBar>
    ),
    1: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 2 });
        }}
      />
    ),
    2: () => (
      <BlueBar>
        <button className="continue-button"
          style={{
            borderRadius: 55,
            width: 109,
            height: 109,
            minWidth: 'auto',
            padding: 0
          }}
          onClick={() => {
            playSound('xRay');
            setStep({ step: 3 });
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </BlueBar>
    ),
    4: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeProcedure');
          setStep((oldState) => ({ ...oldState, step: 5, hideButtons: true }));
        }}
      />
    ),
    5: () => (
      <>
        <BlueBar style={{ height: 192 }}>
          <div className="nav-items-container" style={{ width: 592 }}>
            <NavigationButton
              image={SignCast}
              size={value === 'signature' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'signature' }))
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
        <button className="continue-button"
          style={{
            marginBottom: -50,
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
        <BlueBar style={{ height: 192 }}>
          <div className="nav-items-container">
            <NavigationButton
              image={Skeletal}
              size={'large'}
              onClick={() => {
                playSound('click');
                setStep({ step: 0 });
                navigate(Paths.BodySystems + '/' + Paths.Skeletal);
              }}
              text=''
            />
          </div>
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
    <animated.div className="nav-top">
      <div className='nav-header'>
        <div className='header-text'>{t(`${step}-mainText`)}</div>
        <div className='body-text'>{t(`${step}-subText`)}</div>
      </div>
      {stepComponentConfig[step] && stepComponentConfig[step]()}
    </animated.div>
  );
};

export default XRay;
