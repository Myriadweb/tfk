import { ReactComponent as Arrow } from './SceneAssets/Arrow.svg';
import { animated } from 'react-spring';
import * as React from 'react';
import { CSSProperties } from 'react';
import playSound from '../../sound';
import { useProcedureContext } from '../../state/procedure';
import { set } from 'husky';

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
  const [, setProcedureStep] = useProcedureContext();

  const clickHandler = () => {
    setProcedureStep({ step: 0 });
    playSound('click');
    onClick();
  };

  return (
    <animated.div
      style={{
        position: 'absolute',
        right: 28,
        bottom: 32,
        ...animatedStyle,
      }}
    >
      <div
        style={{
          display: 'inline-block',
          background: '#30619C',
          border: '#FFF 3px solid',
          borderBottom: 'none',
          fontSize: 30,
          letterSpacing: 1.49,
          padding: '8px 15px 6px',
          color: '#FFF',
          fontFamily: 'LemonMilk',
          fontWeight: 'bold',
          zIndex: -1,
        }}
      >
        {label}
      </div>
      <div
        style={{
          background: '#103159',
          border: '#FFF 3px solid',
          borderRadius: '15px',
          padding: '20px 53px 0 48px',
          fontSize: 17,
          color: '#FFF',
          fontFamily: 'LemonMilk',
          whiteSpace: 'pre-wrap',
          margin: 0,
          zIndex: 1,
        }}
      >
        <span style={{ display: 'inline-block', marginBottom: 20 }}>{text}</span>
        {buttonText && (
          <button
            style={{
              height: 65,
              borderRadius: '15px',
              marginBottom: 21,
              background: '#CD4845',
              fontSize: 20,
              color: '#FFF',
              fontFamily: 'LemonMilk',
              fontWeight: 'bold',
              display: 'block',
              padding: '0 20px',
              width: '100%',
            }}
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
