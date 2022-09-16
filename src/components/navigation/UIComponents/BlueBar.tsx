import * as React from 'react';

type Props = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const BlueBar = ({ children = null, style }: Props) => {
  return (
    <div
      className='blue-bar'
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default BlueBar;
