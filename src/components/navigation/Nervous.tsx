import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import playSound from '../../sound';
import { ReactComponent as ArmButton } from './MuscularAssets/armButton.svg';
import { ReactComponent as LegButton } from './MuscularAssets/legButton.svg';
import { useGameContext } from '../../state/game';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';

type Props = {
  prefix: Paths;
};

const Nervous = ({ prefix }: Props) => {
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
        <button
          className='nav-button'
          onClick={() => {
            setGameState({ value: 1 });
          }}
        ></button>
      </div>
    </>
  );
};

export default Nervous;
