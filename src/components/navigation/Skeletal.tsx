import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { Trans } from 'react-i18next';

type Props = {
  path: Paths;
  prefix: Paths;
};

const Skeletal = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const [{ value }] = useGameContext();

  const isDone = value === 'done';
  const isReset = value === 'reset';

  return (
    <>
      <div className='nav-top'>
        <div className='body-text'>
          <span style={{ visibility: isReset ? 'hidden' : 'visible' }}>
           <Trans i18nKey={t('selectPath')} />
          </span>
          <span className='bold-text' style={{ display: isDone ? 'block' : 'none' }}>
            <Trans i18nKey={t('greatjob')}  />
          </span>
        </div>
      </div>
      <div className='nav-middle'>
        <div className='nav-middle-container'>
          {value && (
            <>
              <div className='header-text'>
                {t(`${value}.title`)}
              </div>
              <div className='description'>
                <Trans i18nKey={t(`${value}.description`)} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Skeletal;
