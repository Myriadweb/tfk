import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { Link, useNavigate } from 'react-router-dom';
import playSound from '../../sound';
import { animated, useSpring } from 'react-spring';
import ContinueButton from './UI/ContinueButton';
import BlueBar from './UI/BlueBar';
import BpPumpBase from './WellnessAssets/bpCuffPumpBase.svg';
import BpPumpButton from './WellnessAssets/bpCuffPumpButton.svg';
import BpPumpOneBar from './WellnessAssets/bpCuffPumpOneBar.svg';
import BpPumpTwoBar from './WellnessAssets/bpCuffPumpTwoBar.svg';
import BpPumpThreeBar from './WellnessAssets/bpCuffPumpThreeBar.svg';
import NavigationButton from './UI/NavigationButton';
import JumpRope from './WellnessAssets/jumpRope.svg';
import Basketball from './WellnessAssets/basketball.svg';
import Baseball from './WellnessAssets/baseball.svg';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import Cardiovascular from './BodySystemsAssets/Cardiovascular.svg';

const PUMPS_CONFIG = {
  1: BpPumpOneBar,
  2: BpPumpTwoBar,
  3: BpPumpThreeBar,
};

type Props = {
  path: Paths;
  prefix: Paths;
};

type BlueBarContinueProps = {
  text: string;
  onClick: (...args: any) => void;
};

const BlueBarContinue = ({ text, onClick }: BlueBarContinueProps) => (
  <BlueBar
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <ContinueButton text={text} onClick={onClick} />
  </BlueBar>
);

const Wellness = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const navigate = useNavigate();
  const [{ step, value }, setStep] = useGameContext();
  const [pumps, addPump] = React.useState(0);
  const [delayStyle, delayApi] = useSpring(() => ({ opacity: 1 }));

  const stepComponentConfig = {
    2: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 3 });
        }}
      />
    ),
    4: () => (
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
                setStep({ step: 5 });
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
    5: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 6 });
        }}
      />
    ),
    8: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 9 });
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
              image={JumpRope}
              size={value === 'jumpRope' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'jumpRope' }))
              }
              text=''
            />
            <NavigationButton
              image={Baseball}
              size={value === 'baseball' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'baseball' }))
              }
              text=''
            />
            <NavigationButton
              image={Basketball}
              size={value === 'basketball' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'basketball' }))
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
            setStep((oldState) => ({ ...oldState, step: 11 }));
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </>
    ),
    11: () => (
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
      {step < 11 && (
        <span
          style={{
            display: 'block',
            fontSize: 40,
            color: '#FFF',
            fontFamily: 'LemonMilk',
            marginTop: 30,
            letterSpacing: 2,
            fontWeight: 'bolder',
            visibility: [1, 7].includes(step) ? 'hidden' : 'visible',
            minHeight: 54,
          }}
        >
          {t(`${step}-mainText`)}
        </span>
      )}
      <span
        style={{
          display: 'block',
          fontSize: 20,
          color: '#FFF',
          fontFamily: 'LemonMilk',
          marginTop: step === 11 ? 45 : 12,
          whiteSpace: 'pre',
          minHeight: 54,
          visibility: [1, 7].includes(step) ? 'hidden' : 'visible',
        }}
      >
        {t(`${step}-subText`)}
      </span>
      {step === 11 && (
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

export default Wellness;
