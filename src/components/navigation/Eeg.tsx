import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../../state/game';
import { animated } from 'react-spring';
import playSound from '../../sound';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import { Paths } from '../../types/Paths';

type Props = {
  path: Paths;
  prefix: Paths;
};

export default function Eeg({ prefix }: Props) {
  const t = useNavBarTranslation(prefix);
  const navigate = useNavigate();
  const [{ step, value }, setStep] = useGameContext();

  const stepComponentConfig = {
    0: () => (
      <div
        style={{
          marginTop: 50,
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
            setStep({ step: 1 });
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </div>
    ),
  };

  return (
    <animated.div>
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
      </>
      {stepComponentConfig[step] && stepComponentConfig[step]()}
    </animated.div>
  );
}
