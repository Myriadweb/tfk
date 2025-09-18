import * as React from 'react';
import { useEffect } from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
import { Link, useNavigate } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { BlueBarContinue } from './BlueBarContinue';
import BlueBar from './UIComponents/BlueBar';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import Cardiovascular from './BodySystemsAssets/Cardiovascular.svg';
import BpPumpBase from './SharedAssets/bpCuffPumpBase.svg';
import BpPumpButton from './SharedAssets/bpCuffPumpButton.svg';
import BpPumpOneBar from './SharedAssets/bpCuffPumpOneBar.svg';
import BpPumpTwoBar from './SharedAssets/bpCuffPumpTwoBar.svg';
import BpPumpThreeBar from './SharedAssets/bpCuffPumpThreeBar.svg';
import Mask from './SurgicalPrepAssets/anesthesiaMask.png';
import JuiceBox from './SurgicalPrepAssets/juicebox.svg';
import Popsicle from './SurgicalPrepAssets/popsicle.svg';
import IceCream from './SurgicalPrepAssets/iceCream.svg';
import { ReactComponent as AwakeFace } from './SurgicalPrepAssets/sliderAwake.svg';
import { ReactComponent as AsleepFace } from './SurgicalPrepAssets/sliderAsleep.svg';

import { CustomSlider } from './CustomSlider';
import { Trans } from 'react-i18next';
import Tablet from "./IvAssets/iPad.svg";
import {SCALE_FACTORS, screenScale} from "../../utils/scaling";

const PUMPS_CONFIG = {
  1: BpPumpOneBar,
  2: BpPumpTwoBar,
  3: BpPumpThreeBar,
};

type Props = {
  path: Paths;
  prefix: Paths;
};

const SurgicalPrep = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const navigate = useNavigate();
  const [{ step, value }, setStep] = useGameContext();
  const [shouldShowComponent, setShouldShowComponent] = React.useState(true);
  const [pumps, addPump] = React.useState(0);
  const [, delayApi] = useSpring(() => ({ opacity: 1 }));

    React.useEffect(() => {
        (window as any).debugSetStep = setStep;
        (window as any).debugGetState = () => ({ step, value });
    }, [setStep, step, value]);

  useEffect(() => {
    if (step === 9) {
      delayApi.set({ opacity: 1 });
    } else if (step === 4) {
      setShouldShowComponent(false);
    } else if (step === 5 && !shouldShowComponent) {
      setTimeout(() => setShouldShowComponent(true), 2000);
    }
  }, [delayApi, shouldShowComponent, step]);

  const stepComponentConfig = {
    0: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 1 });
        }}
      />
    ),
    1: () => <BlueBar></BlueBar>,
    2: () => (
      <BlueBar>
        <div style={{ position: 'relative', transform: `scale(${SCALE_FACTORS.avg})` }}>
          <img src={BpPumpBase} />
          <button
            style={{
              position: 'absolute',
              left: 1,
              top: 6,
              background: 'transparent',
              border: 'none',
            }}
            onClick={() => {
              if (pumps >= 3) return;
              const newPumpValue = pumps + 1;
              if (pumps == 2) {
                playSound('surgicalPrepBloodPressurePumpAndRelease');
              } else {
                playSound('surgicalPrepBloodPressureSinglePump');
              }
              addPump((pumps) => pumps + 1);
              if (newPumpValue < 3) return;
              setTimeout(() => {
                setStep({ step: 3 });
              }, 800);
            }}
          >
            <img src={BpPumpButton} />
            {pumps && (
              <img
                src={PUMPS_CONFIG[pumps]}
                style={{
                  position: 'absolute',
                  left: 121,
                  top: 17,
                }}
              />
            )}
          </button>
        </div>
      </BlueBar>
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
    4: () => <BlueBar></BlueBar>,
    5: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 6 });
        }}
      />
    ),
    6: () => <BlueBar></BlueBar>,
    7: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          delayApi.set({ opacity: 0 });
          setStep({ step: 8 });
        }}
      />
    ),
    8: () => <BlueBar></BlueBar>,
    9: () => (
      <BlueBar>
        <NavigationButton
          image={Mask}
          size='small'
          onClick={() => setStep({ step: 10 })}
          text=''
        />
      </BlueBar>
    ),
    10: () => (
      <BlueBar>
        <AwakeFace style={{ marginRight: 60 }} />
        <CustomSlider
          callback={(value) => {
            if (value === 100) {
              setStep({ step: 11 });
            }
          }}
          width={261}
          height={26}
        />
        <AsleepFace style={{ marginLeft: 60 }} />
      </BlueBar>
    ),
    11: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 12 });
        }}
      />
    ),
    12: () => <BlueBar></BlueBar>,
    13: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeProcedure');
          setStep({ step: 14, hideButtons: true });
        }}
      />
    ),
    14: () => (
      <>
        <BlueBar style={{ height: screenScale.y(192) }}>
          <div className='nav-items-container' style={{ width: 592 }}>
            <NavigationButton
              image={JuiceBox}
              size={value === 'juicebox' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'juicebox' }))
              }
              text=''
            />
            <NavigationButton
              image={Popsicle}
              size={value === 'popsicle' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'popsicle' }))
              }
              text=''
            />
            <NavigationButton
              image={IceCream}
              size={value === 'icecream' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'icecream' }))
              }
              text=''
            />
          </div>
        </BlueBar>
        <button
          className='continue-button reward'
          style={{
            marginTop: 0,
          }}
          onClick={() => {
            if (!value) return; // if no value is selected, don't continue

            playSound('click');
            setStep((oldStep) => ({ ...oldStep, step: 15 }));
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </>
    ),
    15: () => (
      <>
          <BlueBar style={{ height: screenScale.y(192) }}>
              <div className='two-columns'>
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
                  <NavigationButton
                      image={Tablet}
                      size={'large'}
                      onClick={() => {
                          playSound('generalSelect');
                          setStep((oldStep) => ({ ...oldStep, step: 16 }));
                      }}
                      text=''
                  />
              </div>
          </BlueBar>
        <div className='links-container'
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
            className='link'
          >
            <img src='images/NavBar/proceduresButton.png' />
            <span>{t(`${step}-back`)}</span>
          </Link>
        </div>
      </>
    ),
      16: () => (
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
    <animated.div>
      <div className='nav-top'>
        <div
          className='header-text'
          style={{
            display: step != 12 && step != 8 && step != 15 ? 'block' : 'none',
          }}
        >
          {t(`${step}-mainText`)}
        </div>
          {step === 15 && (
              <div className='body-text two-columns'>
                  <div>
                      <Trans i18nKey={t(`${step}-subText`)} />
                  </div>
                  <div>
                      <Trans i18nKey={t(`${step}-subText2`)} />
                  </div>
              </div>
          )}
          {step !== 15 && (
              <div className='body-text'>
                  {step !== 3 && <Trans i18nKey={t(`${step}-subText`)} />}
              </div>
          )}
      </div>
      {stepComponentConfig[step] && stepComponentConfig[step]()}
    </animated.div>
  );
};

export default SurgicalPrep;
