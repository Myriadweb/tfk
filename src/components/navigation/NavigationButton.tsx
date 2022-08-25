import * as React from 'react';
import playSound from '../../sound';

type NavigationButtonProps = {
  image: string;
  size: 'small' | 'large';
  onClick: (...args: any) => void;
  text?: string;
  disabled?: boolean;
};

const NavigationButton = ({
  image,
  size,
  text,
  onClick,
  disabled,
}: NavigationButtonProps) => {
  const clickHandler = () => {
    if (disabled) return;
    playSound('click');
    onClick();
  };

  return (
    <div onClick={clickHandler} style={{ position: 'relative' }}>
      <img
        src={image}
        style={{
          width: size === 'small' ? 111 : 191,
          height: size === 'small' ? 111 : 191,
          opacity: disabled ? 0.5 : 1,
        }}
      />
      {text && (
        <span
          style={{
            fontFamily: 'LemonMilk',
            fontWeight: 'bold',
            color: '#FFF',
            fontSize: 25,
            letterSpacing: 1.24,
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: `calc(50% + 130px)`,
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default NavigationButton;
