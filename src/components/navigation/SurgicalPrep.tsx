import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
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
import BpPumpBase from './SharedAssets/bpCuffPumpBase.svg';
import BpPumpButton from './SharedAssets/bpCuffPumpButton.svg';
import BpPumpOneBar from './SharedAssets/bpCuffPumpOneBar.svg';
import BpPumpTwoBar from './SharedAssets/bpCuffPumpTwoBar.svg';
import BpPumpThreeBar from './SharedAssets/bpCuffPumpThreeBar.svg';
import Mask from './SurgicalPrepAssets/Teammates_Procedures_SurgicalPrep_BottomMenu_AnesthesiaMask_Button.png';

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
  const [pumps, addPump] = React.useState(0);
  const [delayStyle, delayApi] = useSpring(() => ({ opacity: 1 }));

  useEffect(() => {
    if (step === 9) {
      delayApi.set({ opacity: 1 });
    }
    if (step === 9) {
      delayApi.set({ opacity: 1 });
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
    2: () => (
      <BlueBar
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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

              const newPumpValue = pumps + 1;
              addPump((pumps) => pumps + 1);
              if (newPumpValue < 3) return;

              setTimeout(() => {
                playSound('completeStep');
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
    5: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 6 });
        }}
      />
    ),
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
    9: () => (
      <BlueBar
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
            image={Mask}
            size='small'
            onClick={() => setStep({ step: 10 })}
            text=''
          />
        </div>
      </BlueBar>
    ),
    10: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 11 });
        }}
      />
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
    13: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 13 });
        }}
      />
    ),
    14: () => (
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
            setStep((oldStep) => ({ ...oldStep, step: 11 }));
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </>
    ),
    15: () => (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 49,
            background: '#0E1F33',
            height: 192,
          }}
        >
          <NavigationButton
            image={Cardiovascular}
            size={'large'}
            onClick={() => {
              playSound('click');
              setStep({ step: 0 });
              navigate(Paths.BodySystems + '/' + Paths.Cardiovascular);
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

  return (
    <>
      <animated.div style={delayStyle}>
        <span
          style={{
            display: step !== 15 ? 'block' : 'none',
            fontSize: 40,
            color: '#FFF',
            fontFamily: 'LemonMilk',
            marginTop: 30,
            letterSpacing: 2,
            fontWeight: 'bolder',
            minHeight: 54,
            visibility: step !== 12 ? 'visible' : 'hidden',
          }}
        >
          {t(`${step}-mainText`)}
        </span>
        <span
          style={{
            display: 'block',
            fontSize: 20,
            color: '#FFF',
            fontFamily: 'LemonMilk',
            marginTop: step !== 15 ? 12 : 45,
            whiteSpace: 'pre',
            minHeight: 54,
            visibility: step !== 12 ? 'visible' : 'hidden',
          }}
        >
          {t(`${step}-subText`)}
        </span>
      </animated.div>
      {step === 15 && (
        <span
          style={{
            fontSize: 20,
            color: '#FFF',
            fontFamily: 'LemonMilk',
            whiteSpace: 'pre',
            fontWeight: 'bold',
          }}
        >
          {t(`${step}-boldText`)}
        </span>
      )}
      {stepComponentConfig[step] ? stepComponentConfig[step]() : <BlueBar />}
    </>
  );
};

export default SurgicalPrep;
