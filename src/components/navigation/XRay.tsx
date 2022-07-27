import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useProcedureContext } from '../../state/procedure';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';

type Props = {
  path: Paths;
  prefix: Paths;
};

const XRay = ({ path, prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const [{ step, value }, setStep] = useProcedureContext();

  const stepComponentConfig = {
    0: null,
    1: () => (
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
          marginTop: 20,
        }}
        onClick={() => setStep({ step: 2 })}
      >
        {t(`${step}-buttonText`)} <Arrow />
      </button>
    ),
  };

  return (
    <div>
      <span
        style={{
          display: 'block',
          fontSize: 40,
          color: '#FFF',
          fontFamily: 'LemonMilk',
          marginTop: 45,
          letterSpacing: 2,
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
          marginTop: 45,
          whiteSpace: 'pre',
        }}
      >
        {t(`${step}-subText`)}
      </span>
      {stepComponentConfig[step] && stepComponentConfig[step]()}
    </div>
  );
};

export default XRay;
