import * as React from 'react';
import { ReactComponent as Arrow } from '../../scene/SceneAssets/Arrow.svg';

type Props = {
  text: string;
  onClick: (...args: any) => void;
};

const ContinueButton = ({ onClick, text }: Props) => {
  return (
    <button
      className='continue-button'
      onClick={onClick}
      style={{ marginTop: 0 }}
    >
      {text} <Arrow />
    </button>
  );
};

export default ContinueButton;
