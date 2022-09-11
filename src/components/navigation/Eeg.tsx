import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../../state/game';
import { animated } from 'react-spring';
import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import { Paths } from '../../types/Paths';
import Bear from '../navigation/SharedAssets/bear.svg';
import Medal from '../navigation/SharedAssets/medal.svg';
import Sticker from '../navigation/SharedAssets/sticker.svg';
import PlaceLeads from '../navigation/EegAssets/place_leads.svg';
import PlaceStickies from '../navigation/EegAssets/place_stickies.svg';
import PlaceCap from '../navigation/EegAssets/cap.svg';
import Nervous from './BodySystemsAssets/Nervous.svg';

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
      const newStep = newValue.length === 5 ? oldState.step + 1 : oldState.step;
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
    3: () => (
      <div className='nav-items-container'>
        <NavigationButton
          image={PlaceLeads}
          size='small'
          disabled={value.includes(1)}
          onClick={() => handleNavigationButtonClick(1)}
          text=''
        />
        <NavigationButton
          image={PlaceLeads}
          size='small'
          disabled={value.includes(2)}
          onClick={() => handleNavigationButtonClick(2)}
          text=''
        />
        <NavigationButton
          image={PlaceLeads}
          size='small'
          disabled={value.includes(3)}
          onClick={() => handleNavigationButtonClick(3)}
          text=''
        />
        <NavigationButton
          image={PlaceLeads}
          size='small'
          disabled={value.includes(4)}
          onClick={() => handleNavigationButtonClick(4)}
          text=''
        />
        <NavigationButton
          image={PlaceLeads}
          size='small'
          disabled={value.includes(5)}
          onClick={() => handleNavigationButtonClick(5)}
          text=''
        />
      </div>
    ),
    4: () => (
      <button
        className='nav-button'
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 5, value: [] });
        }}
      >
        {t(`${step}-buttonText`)} <Arrow />
      </button>
    ),
    5: () => (
      <div className='nav-items-container'>
        <NavigationButton
          image={PlaceCap}
          size='small'
          disabled={value.includes(1)}
          onClick={() => setStep({ step: 6 })}
          text=''
        />
      </div>
    ),
    6: () => (
      <button
        className='nav-button'
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 7, value: [] });
        }}
      >
        {t(`${step}-buttonText`)} <Arrow />
      </button>
    ),
    7: () => (
      <button
        className='nav-button'
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 8, hideButtons: true });
        }}
      >
        {t(`${step}-buttonText`)} <Arrow />
      </button>
    ),
    8: () => (
      <>
        <div className='nav-items-container'>
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
        <button
          className='nav-button'
          style={{
            position: 'absolute',
            bottom: 50,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          onClick={() => {
            if (!value) return; // if no value is selected, don't continue
            playSound('click');
            setStep((oldStep) => ({ ...oldStep, step: 9, hideButtons: false }));
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </>
    ),
    9: () => (
      <NavigationButton
        image={Nervous}
        size={'large'}
        onClick={() => {
          playSound('click');
          setStep({ step: 0 });
          navigate(Paths.BodySystems + '/' + Paths.Nervous);
        }}
        text=''
      />
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
