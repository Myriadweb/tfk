import * as React from 'react';

export const labelStyle = {
  background: '#30619C',
  border: '#FFF 3px solid',
  fontSize: 30,
  letterSpacing: 1.49,
  padding: '8px 15px 10px',
  color: '#FFF',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  fontFamily: 'LemonMilk',
  fontWeight: 'bold',
  whiteSpace: 'pre',
} as React.CSSProperties;

export const columnLabelStyle = {
  ...labelStyle,
  padding: '8px 17px 10px',
  transform: 'translate(0, 0)',
  letterSpacing: 1.5,
  fontSize: 32,
};

export const columnLabelStyleLeft = {
  ...columnLabelStyle,
  left: 38,
};
export const columnLabelStyleRight = {
  ...columnLabelStyle,
  right: 38,
};
