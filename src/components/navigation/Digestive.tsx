import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
import ChewButton from './DigestiveAssets/chewButton.svg';
import SwallowButton from './DigestiveAssets/swallowButton.svg';
import ContinueButton from './UIComponents/ContinueButton';
import { Trans } from 'react-i18next';
import { ReactComponent as Apple } from './DigestiveAssets/stomachSliderApple.svg';
import { CustomSlider } from './CustomSlider';
import { ReactComponent as Dissolve } from './DigestiveAssets/stomachSliderDissolve.svg';
import WasteButton from './DigestiveAssets/wasteButton.svg';
import { useNavigate } from 'react-router-dom';
import { animated } from 'react-spring';
import {screenScale} from "../../utils/scaling";
import {useDebugStep} from "../../hooks/useDebugStep";

type Props = {
  prefix: Paths;
};

const Digestive = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const [{ step, value }, setGameState] = useGameContext();
  const navigate = useNavigate();
  useDebugStep(setGameState, step, value);

  const stepComponentConfig = {
    1: () => (
      <NavigationButton
        image={ChewButton}
        size={'large'}
        onClick={() => {
          playSound('digestionChewing');
          setGameState({ step: 2 });
        }}
        text=''
      />
    ),
    2: () => (
      <NavigationButton
        image={ChewButton}
        size={'large'}
        onClick={() => {
          playSound('digestionChewing');
          setGameState({ step: 3 });
        }}
        text=''
      />
    ),
    3: () => (
      <NavigationButton
        image={ChewButton}
        size={'large'}
        onClick={() => {
          playSound('digestionChewing');
          setGameState({ step: 4 });
        }}
        text=''
      />
    ),
    4: () => (
      <NavigationButton
        image={ChewButton}
        size={'large'}
        onClick={() => {
          playSound('click');
          setGameState({ step: 5 });
        }}
        text=''
      />
    ),
    5: () => (
      <NavigationButton
        image={SwallowButton}
        size={'large'}
        onClick={() => {
          playSound('digestionSwallow');
          setGameState({ step: 6 });
        }}
        text=''
      />
    ),
    7: () => (
      <ContinueButton
        text={t('continue')}
        onClick={() => {
          playSound('click');
          setGameState({ step: 8 });
        }}
      />
    ),
    8: () => (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'flex-start',
          marginTop: 32,
        }}
      >
        <Apple style={{ marginRight: 60 }} />
        <div>
          <CustomSlider
            callback={(value) => {
              if (value === 100) {
                setGameState({ step: 9 });
              }
            }}
            width={261}
            height={26}
          />
        </div>
        <span
          style={{
            position: 'absolute',
            color: 'white',
            top: 100,
            transform: 'translateX(-50%)',
            left: '50%',
            fontSize: 22,
          }}
        >
          {t('dissolving')}
        </span>
        <Dissolve style={{ marginLeft: 60 }} />
      </div>
    ),
    10: () => (
      <ContinueButton
        text={t('continue')}
        onClick={() => {
          playSound('click');
          setGameState({ step: 11 });
        }}
      />
    ),
    11: () => (
      <div>
        <CustomSlider
          callback={(value) => {
            if (value === 100) {
              setGameState({ step: 12 });
            }
          }}
          width={261}
          height={26}
        />
      </div>
    ),
    13: () => (
      <div>
        <CustomSlider
          callback={(value) => {
            if (value === 100) {
              setGameState({ step: 14 });
            }
          }}
          width={261}
          height={26}
        />
      </div>
    ),
    15: () => (
      <NavigationButton
        image={WasteButton}
        size={'large'}
        onClick={() => {
          playSound('click');
          setGameState({ step: 16 });
        }}
        text=''
      />
    ),
    16: () => (
      <ContinueButton
        text={t('finish')}
        onClick={() => {
          playSound('completeProcedure');
          setGameState({ step: 0 });
          navigate(Paths.BodySystems + '/' + Paths.Digestive);
        }}
      />
    ),
  };

  return (
    <animated.div>
      <div className='nav-top'>
        <div
          className='body-text body-text-digestive'
          style={{
            maxWidth: 470,
            margin: 'auto',
            whiteSpace: 'initial',
            fontSize: step !== 16 ? 20 : 40,
            fontWeight: step !== 16 ? 'normal' : 'bold',
            visibility: [6, 7, 9, 10, 12, 14].includes(step)
              ? 'hidden'
              : 'visible',
          }}
        >
          <Trans i18nKey={step !== 16 ? t(`${step}-text`) : t('goodJob')} />
        </div>
      </div>
      <div className='nav-middle'>
        <div className='nav-items-container' style={{ height: screenScale.y(191) }}>
          {stepComponentConfig[step] && stepComponentConfig[step]()}
        </div>
      </div>
    </animated.div>
  );
};

export default Digestive;
