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

type Props = {
  prefix: Paths;
};

const Digestive = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const [{ step }, setGameState] = useGameContext();
  const navigate = useNavigate();

  const stepComponentConfig = {
    1: () => (
      <NavigationButton
        image={ChewButton}
        size={'large'}
        onClick={() => {
          playSound('click');
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
          playSound('click');
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
          playSound('click');
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
          playSound('click');
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
            top: 130,
            transform: 'translateX(-50%)',
            left: 540,
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
          navigate('/' + Paths.BodySystems + '/' + Paths.Digestive);
        }}
      />
    ),
  };

  return (
    <>
      <span
        style={{
          display: 'block',
          fontSize: step !== 16 ? 20 : 40,
          color: '#FFF',
          fontFamily: 'LemonMilk',
          marginTop: step !== 16 ? 47 : 40,
          whiteSpace: 'pre',
          minHeight: 54,
          visibility: [6, 7, 9, 10, 12, 14].includes(step)
            ? 'hidden'
            : 'visible',
        }}
      >
        <Trans i18nKey={step !== 16 ? t(`${step}-text`) : t('goodJob')} />
      </span>
      {
        <div
          style={{
            position: 'absolute',
            width: 1080,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            background: '#0E1F33',
            height: 191,
            top: 121,
          }}
        >
          {stepComponentConfig[step] && stepComponentConfig[step]()}
        </div>
      }
    </>
  );
};

export default Digestive;
