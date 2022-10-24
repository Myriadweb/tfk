import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import playSound from '../../sound';
import { ReactComponent as ArmButton } from './MuscularAssets/armButton.svg';
import { ReactComponent as LegButton } from './MuscularAssets/legButton.svg';
import { useGameContext } from '../../state/game';

type Props = {
  prefix: Paths;
};

const Muscular = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const [{ value }, setGameState] = useGameContext();

  return (
    <>
      <div
        style={{
          height: 169,
          background: '#0E1F33',
          paddingTop: 20,
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: 20,
            color: '#FFF',
            fontFamily: 'LemonMilk',
          }}
        >
          {t('chooseMuscle')}
        </span>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 12,
          }}
        >
          <LegButton
            style={{
              opacity: value === 'leg' ? 0.3 : 1,
              marginRight: 22,
            }}
            onClick={() => {
              if (value !== 'leg') {
                playSound('click');
                setGameState({ step: 0, value: 'leg' });
              }
            }}
          />
          <ArmButton
            style={{
              opacity: value === 'arm' || !value ? 0.3 : 1,
            }}
            onClick={() => {
              if (value !== 'arm') {
                playSound('click');
                setGameState({ step: 0, value: 'arm' });
              }
            }}
          />
        </div>
      </div>
      <span
        style={{
          display: 'block',
          marginTop: 13,
          fontSize: 40,
          color: '#FFF',
          fontFamily: 'LemonMilk',
          fontWeight: 'bolder',
        }}
      >
        {t(value || 'arm')}
      </span>
      <span
        style={{
          display: 'block',
          maxWidth: 470,
          marginTop: 12,
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: 20,
          color: '#FFF',
          fontFamily: 'LemonMilk',
        }}
      >
        {t(`${value || 'arm'}Description`)}
      </span>
    </>
  );
};

export default Muscular;
