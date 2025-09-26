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
import { Trans } from 'react-i18next';
import Tablet from "./IvAssets/iPad.svg";
import {screenScale} from "../../utils/scaling";

type Props = {
  path: Paths;
  prefix: Paths;
};

const XRay = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const navigate = useNavigate();
  const [{ step, value }, setStep] = useGameContext();
  const [, delayApi] = useSpring(() => ({ opacity: 1 }));

    useEffect(() => {
        (window as any).debugSetStep = setStep;
        (window as any).debugGetState = () => ({ step, value });
    }, [setStep, step, value]);

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
  });

  const stepComponentConfig = {
    0: () => <BlueBar></BlueBar>,
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
        <button
          className='start-button'
          onClick={() => {
            playSound('xRay_Machine');
            setStep({ step: 3 });
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </BlueBar>
    ),
    3: () => <BlueBar />,
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
        <BlueBar style={{ height: screenScale.y(192) }}>
          <div className='nav-items-container' style={{ width: 592 }}>
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
        <button
          className='continue-button reward'
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
          <BlueBar style={{ height: screenScale.y(192) }}>
              <div className='two-columns'>
                  <NavigationButton
                      image={Skeletal}
                      size={'large'}
                      onClick={() => {
                          playSound('generalSelect');
                          setStep({ step: 0 });
                          navigate(Paths.BodySystems + '/' + Paths.Skeletal);
                      }}
                      text=''
                  />
                  <NavigationButton
                      image={Tablet}
                      size={'large'}
                      onClick={() => {
                          playSound('generalSelect');
                          setStep((oldStep) => ({ ...oldStep, step: 7 }));
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
              playSound('generalSelect');
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
    7: () => (
          <>
              <BlueBar style={{ height: screenScale.y(192) }}>

              </BlueBar>
              <div className='links-container'
                  style={{
                      position: 'absolute',
                      left: 44,
                      top: screenScale.y(383),
                  }}
              >
                  <Link
                      to={`${Paths.Procedures}/${prefix}`}
                      onClick={() => {
                          playSound('click');
                          setStep({ step: 0 });
                      }}
                      className='link'
                  >
                      <img src='images/NavBar/proceduresButton.png' />
                      <span>{t(`${step}-back`)}</span>
                  </Link>
              </div>
          </>
      ),

  };

  return (
    <animated.div className='nav-top'>
      <div className='nav-header'>
        <div
          className='header-text'
          style={{
            display: ![3, 6].includes(step) ? 'block' : 'none',
            visibility: step === 3 ? 'hidden' : 'visible',
          }}
        >
          {t(`${step}-mainText`)}
        </div>
          {step === 6 && (
              <div className='body-text two-columns'>
                  <div>
                      <Trans i18nKey={t(`${step}-subText`)} />
                  </div>
                  <div>
                      <Trans i18nKey={t(`${step}-subText2`)} />
                  </div>
              </div>
          )}
          {step !== 6 && (
              <div className='body-text'>
                  {step !== 3 && <Trans i18nKey={t(`${step}-subText`)} />}
              </div>
          )}
      </div>
      {stepComponentConfig[step] && stepComponentConfig[step]()}
    </animated.div>
  );
};

export default XRay;
