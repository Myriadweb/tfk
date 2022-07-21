import { ReactComponent as Arrow } from './SceneAssets/Arrow.svg';
import { animated, AnimatedProps, useSpring } from 'react-spring';
import * as React from 'react';
import { CSSProperties } from 'react';

type Props = {
  animatedStyle: CSSProperties;
  label: string;
  text: string;
  buttonText: string;
};

const ProceduresTextBox = ({
  animatedStyle,
  label,
  text,
  buttonText,
}: Props) => {
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
        {text}
        <button
          style={{
            marginTop: 17,
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
        >
          {buttonText} <Arrow />
        </button>
      </div>
    </animated.div>
  );
};

export default ProceduresTextBox;
