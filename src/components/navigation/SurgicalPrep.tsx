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
  const [delayStyle, delayApi] = useSpring(() => ({ opacity: 1 }));

  useEffect(() => {
    if (step === 9) {
      delayApi.set({ opacity: 1 });
    } else if (step === 4) {
      setShouldShowComponent(false);
    } else if (step === 5 && !shouldShowComponent) {
      setTimeout(() => setShouldShowComponent(true), 2000);
    }
  }, [step]);

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
        <div style={{ position: 'relative' }}>
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
              playSound('click');
              const newPumpValue = pumps + 1;
              addPump((pumps) => pumps + 1);
              if (newPumpValue < 3) return;

              setTimeout(() => {
                playSound('surgicalPrepAirRelease');
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
        <BlueBar style={{ height: 192 }}>
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
          style={{
            display: step != 12 && step != 8 && step != 15 ? 'block' : 'none',
          }}
        >
          {t(`${step}-mainText`)}
        </div>
        <div
          className='body-text'
          style={{ display: step != 12 && step != 8 ? 'block' : 'none' }}
        >
          <Trans i18nKey={t(`${step}-subText`)} />
        </div>
      </div>
      {stepComponentConfig[step] && stepComponentConfig[step]()}
    </animated.div>
  );
};

export default SurgicalPrep;
