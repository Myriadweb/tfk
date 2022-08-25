import * as React from 'react';

type Props = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const BlueBar = ({ children = null, style }: Props) => {
  return (
    <div
      style={{
        marginTop: 13,
        background: '#0E1F33',
        height: 130,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default BlueBar;
