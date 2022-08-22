import * as React from 'react';
import { ReactComponent as Arrow } from '../../scene/SceneAssets/Arrow.svg';

type Props = {
  text: string;
  onClick: (...args: any) => void;
};

const ContinueButton = ({ onClick, text }: Props) => {
  return (
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
      }}
      onClick={onClick}
    >
      {text} <Arrow />
    </button>
  );
};

export default ContinueButton;
