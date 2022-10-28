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
    <div>
      <span
        style={{
          display: isDone ? 'none' : 'block',
          fontSize: 20,
          color: '#FFF',
          fontFamily: 'LemonMilk',
          marginTop: 39,
          whiteSpace: 'pre',
          visibility: isReset ? 'hidden' : 'visible',
        }}
      >
        {t('selectPath')}
      </span>
      <span
        className='bold-text body-text'
        style={{
          display: isDone ? 'block' : 'none',
          marginTop: 32,
        }}
      >
        <Trans i18nKey={t('greatjob')} />
      </span>
      <div
        style={{
          marginTop: 28,
          background: '#0E1F33',
          height: 191,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          whiteSpace: 'pre',
          color: '#FFF',
          fontFamily: 'LemonMilk',
        }}
      >
        {value && (
          <>
            <span
              style={{
                fontSize: 40,
                fontWeight: 700,
                margin: '19px 0 7px',
                letterSpacing: 2,
                display: isDone || isReset ? 'none' : 'block',
              }}
            >
              {t(`${value}.title`)}
            </span>
            <span
              style={{
                fontSize: 20,
                marginTop: isDone ? 27 : 'none',
                visibility: isReset ? 'hidden' : 'visible',
                width: 750,
                whiteSpace: 'initial',
              }}
            >
              <Trans i18nKey={t(`${value}.description`)} />
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Skeletal;
