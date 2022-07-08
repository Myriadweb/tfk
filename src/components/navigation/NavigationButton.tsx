import * as React from 'react';
import { Link } from 'react-router-dom';

type NavigationButtonProps = {
  image: string;
  size: 'small' | 'large';
  alt: string;
  link: string;
  text?: string;
};

const NavigationButton = ({
  image,
  size,
  alt,
  link,
  text,
}: NavigationButtonProps) => (
  <Link to={link} style={{ position: 'relative' }}>
    <img
      src={image}
      alt={alt}
      style={{
        width: size === 'small' ? 111 : 191,
        height: size === 'small' ? 111 : 191,
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
  </Link>
);

export default NavigationButton;
