import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../../state/game';
import { animated } from 'react-spring';
import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import { Paths } from '../../types/Paths';
import Cap from '../navigation/EegAssets/cap.svg';
import Bear from '../navigation/SharedAssets/bear.svg';
import Medal from '../navigation/SharedAssets/medal.svg';
import PlaceLeads from '../navigation/EegAssets/place_leads.svg';
import PlaceStickies from '../navigation/EegAssets/place_stickies.svg';
import SignCast from './XRayAssets/signCast.svg';

type Props = {
  path: Paths;
  prefix: Paths;
};

export default function Eeg({ prefix }: Props) {
  const t = useNavBarTranslation(prefix);
  const navigate = useNavigate();
  const [{ step, value }, setStep] = useGameContext();

  const handleNavigationButtonClick = (index: number) => {
    //setStep((oldState) => ({ ...oldState, step: 2, value: [...oldState.value, 5] }))
    setStep((oldState) => {
      const newValue = [...oldState.value, index];
      const newStep = newValue.length === 5 ? 2 : oldState.step;
      return { step: newStep, value: newValue };
    });
  };

  const stepComponentConfig = {
    0: () => (
      <button
        className='nav-button'
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 1, value: [] });
        }}
      >
        {t(`${step}-buttonText`)} <Arrow />
      </button>
    ),
    1: () => (
      <div className='nav-items-container'>
        <NavigationButton
          image={PlaceStickies}
          size='small'
          disabled={value.includes(1)}
          onClick={() => handleNavigationButtonClick(1)}
          text=''
        />
        <NavigationButton
          image={PlaceStickies}
          size='small'
          disabled={value.includes(2)}
          onClick={() => handleNavigationButtonClick(2)}
          text=''
        />
        <NavigationButton
          image={PlaceStickies}
          size='small'
          disabled={value.includes(3)}
          onClick={() => handleNavigationButtonClick(3)}
          text=''
        />
        <NavigationButton
          image={PlaceStickies}
          size='small'
          disabled={value.includes(4)}
          onClick={() => handleNavigationButtonClick(4)}
          text=''
        />
        <NavigationButton
          image={PlaceStickies}
          size='small'
          disabled={value.includes(5)}
          onClick={() => handleNavigationButtonClick(5)}
          text=''
        />
      </div>
    ),
    2: () => (
      <button
        className='nav-button'
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 3, value: [] });
        }}
      >
        {t(`${step}-buttonText`)} <Arrow />
      </button>
    ),
  };

  return (
    <animated.div>
      <div className='nav-top'>
        <div className='main-text'>{t(`${step}-mainText`)}</div>
        <div className='sub-text'>{t(`${step}-subText`)}</div>
      </div>
      <div className='nav-middle'>
        {stepComponentConfig[step] && stepComponentConfig[step]()}
      </div>
    </animated.div>
  );
}
