import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import playSound from '../../sound';
import { ReactComponent as ArmButton } from './MuscularAssets/armButton.svg';
import { ReactComponent as LegButton } from './MuscularAssets/legButton.svg';
import { useGameContext } from '../../state/game';
import {screenScale} from "../../utils/scaling";

type Props = {
  prefix: Paths;
};

const Muscular = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const [{ value }, setGameState] = useGameContext();

  return (
    <>
      <div className='nav-middle' style={{ paddingTop: 10 }}>
        <div className='body-text'>
          {t('chooseMuscle')}
        </div>
        <div className='nav-middle-container' style={{ paddingBottom: 0 }}>
          <LegButton
            style={{
              opacity: value === 'leg' ? 0.3 : 1,
              marginRight: 22,
              height: screenScale.avg(100),
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
              height: screenScale.avg(100),
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
      <div>
        <div className='header-text'>
          {t(value || 'arm')}
        </div>
        <div className='body-text more-width'>
          {t(`${value || 'arm'}Description`)}
        </div>
      </div>
    </>
  );
};

export default Muscular;
