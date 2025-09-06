import * as React from 'react';
import playSound, { Sounds } from '../../../sound';
import {screenScale} from "../../../utils/scaling";

type NavigationButtonProps = {
  image: string;
  size: 'small' | 'large';
  onClick: (...args: any) => void;
  text?: string;
  disabled?: boolean;
  sound?: Sounds;
};

const NavigationButton = ({
  image,
  size,
  text,
  onClick,
  disabled,
  sound,
}: NavigationButtonProps) => {
  const clickHandler = () => {
    if (disabled) return;
    playSound(sound ? sound : 'click');
    onClick();
  };

  return (
    <div onClick={clickHandler} className='nav-item'>
      <img
        className='nav-button-image'
        src={image}
        style={{
          width: size === 'small' ? screenScale.y(111) : screenScale.y(191),
          height: size === 'small' ? screenScale.y(111) : screenScale.y(191),
          opacity: disabled ? 0.5 : 1,
        }}
      />
      {text && <span className='nav-text'>{text}</span>}
    </div>
  );
};

export default NavigationButton;
