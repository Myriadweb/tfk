import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
import BreatheButton from './CardiovascularAssets/breatheButton.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react';
import ContinueButton from './UIComponents/ContinueButton';
import { ReactComponent as HeartbeatButton } from './CardiovascularAssets/heartbeatButton.svg';

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

const Cardiovascular = ({ prefix }: Props) => {
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
      <NavigationButton
        image={BreatheButton}
        size={'large'}
        onClick={() => {
          playSound('click');
          setStep({ step: 1 });
        }}
        text=''
      />
    ),
    3: () => (
      <ContinueButton
        text={t('continue')}
        onClick={() => {
          playSound('click');
          setStep({ step: 4 });
        }}
      />
    ),
    4: () => (
      <div style={{ height: '100%' }}>
        <HeartbeatButton
          onClick={() => {
            playSound('click');
            setStep({ step: 5 });
          }}
        />
        <span
          style={{
            display: 'block',
            fontFamily: 'LemonMilk',
            fontSize: 18,
            color: '#fff',
            marginTop: 14,
          }}
        >
          {t(`${step}-buttonText`)}
        </span>
      </div>
    ),
    7: () => (
      <ContinueButton
        text={t('continue')}
        onClick={() => {
          playSound('click');
          setStep({ step: 8 });
        }}
      />
    ),
    8: () => (
      <ContinueButton
        text={t('continue')}
        onClick={() => {
          playSound('click');
          setStep({ step: 9 });
        }}
      />
    ),
    9: () => (
      <ContinueButton
        text={t('continue')}
        onClick={() => {
          playSound('completeProcedure');
          navigate(`${Paths.BodySystems}/${prefix}`);
        }}
      />
    ),
  };

  return (
    <>
      <>
        <span
          style={{
            display: step !== 9 ? 'block' : 'none',
            fontSize: 20,
            color: '#FFF',
            fontFamily: 'LemonMilk',
            marginTop: 47,
            whiteSpace: 'pre',
            minHeight: 54,
            visibility: [1, 2].includes(step) ? 'hidden' : 'visible',
          }}
        >
          {t(`${step}-text`)}
        </span>
        {step === 9 && (
          <span
            style={{
              display: 'block',
              fontSize: 40,
              color: '#FFF',
              fontFamily: 'LemonMilk',
              marginTop: 40,
              letterSpacing: 2,
              fontWeight: 'bolder',
            }}
          >
            {t(`${step}-boldText`)}
          </span>
        )}
      </>
      {
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: step !== 9 ? 20 : 26,
            background: '#0E1F33',
            height: 191,
          }}
        >
          {stepComponentConfig[step] && stepComponentConfig[step]()}
        </div>
      }
    </>
  );
};

export default Cardiovascular;
