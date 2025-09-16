import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
import BreatheButton from './CardiovascularAssets/breatheButton.svg';
import { useNavigate } from 'react-router-dom';
import ContinueButton from './UIComponents/ContinueButton';
import { ReactComponent as HeartbeatButton } from './CardiovascularAssets/heartbeatButton.svg';
import { animated } from 'react-spring';
import { Trans } from 'react-i18next';

type Props = {
  path: Paths;
  prefix: Paths;
};

const Cardiovascular = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const navigate = useNavigate();
  const [{ step }, setStep] = useGameContext();

  React.useEffect(() => {
    (window as any).debugSetStep = setStep;
    (window as any).debugGetState = () => ({ step });
  }, [setStep, step]);

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
    5: () => (
      <div style={{ height: '100%' }}>
        <HeartbeatButton
          onClick={() => {
            playSound('click');
            setStep({ step: 6 });
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
    8: () => (
      <ContinueButton
        text={t('continue')}
        onClick={() => {
          playSound('click');
          setStep({ step: 9 });
        }}
      />
    ),
    10: () => (
      <ContinueButton
        text={t('continue')}
        onClick={() => {
          playSound('click');
          setStep({ step: 11 });
        }}
      />
    ),
    11: () => (
      <ContinueButton
        text={t('finish')}
        onClick={() => {
          playSound('completeProcedure');
          setStep({ step: 0 });
          navigate(`${Paths.BodySystems}/${prefix}`);
        }}
      />
    ),
  };

  return (
    <animated.div>
      <div className='nav-top'>
        <div
          className='body-text'
          style={{
            visibility: [1].includes(step) ? 'hidden' : 'visible',
            display: step === 11 ? 'none' : 'block',
          }}
        >
          <Trans i18nKey={t(`${step}-text`)} />
        </div>
        <div
          className='body-text bold-text'
          style={{
            display: step === 11 ? 'block' : 'none',
            fontWeight: 'bold',
          }}
        >
          {t(`${step}-boldText`)}
        </div>
      </div>
      <div className='nav-middle'>
        <div className='nav-items-container' style={{ height: 191 }}>
          {stepComponentConfig[step] && stepComponentConfig[step]()}
        </div>
      </div>
    </animated.div>
  );
};

export default Cardiovascular;
