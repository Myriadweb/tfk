import { ReactComponent as Arrow } from '../SceneAssets/Arrow.svg';
import { animated } from 'react-spring';
import * as React from 'react';
import { CSSProperties } from 'react';
import playSound from '../../../sound';
import { useGameContext } from '../../../state/game';

type Props = {
  animatedStyle?: CSSProperties;
  label: string;
  text: string;
  buttonText?: string;
  onClick?: () => void;
};

const ProceduresTextBox = ({
  animatedStyle = {},
  label,
  text,
  buttonText,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
}: Props) => {
  const [, setProcedureStep] = useGameContext();

  const clickHandler = () => {
    setProcedureStep({ step: 0 });
    playSound('click');
    onClick();
  };

  return (
    <animated.div className="procedures-box"
      style={{
        ...animatedStyle,
      }}
    >
      <div className="label">
        {label}
      </div>
      <div className="text">
        <span style={{ display: 'inline-block', marginBottom: 20 }}>
          {text}
        </span>
        {buttonText && (
          <button className="button"
            onClick={clickHandler}
          >
            {buttonText} <Arrow />
          </button>
        )}
      </div>
    </animated.div>
  );
};

export default ProceduresTextBox;
