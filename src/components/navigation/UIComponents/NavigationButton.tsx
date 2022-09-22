import * as React from 'react';
import playSound from '../../../sound';

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
    <div onClick={clickHandler} className='nav-item'>
      <img
        className='nav-button-image'
        src={image}
        style={{
          width: size === 'small' ? 111 : 191,
          height: size === 'small' ? 111 : 191,
          opacity: disabled ? 0.5 : 1,
        }}
      />
      {text && <span className='nav-text'>{text}</span>}
    </div>
  );
};

export default NavigationButton;
