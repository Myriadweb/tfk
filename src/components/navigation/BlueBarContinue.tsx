import BlueBar from './UIComponents/BlueBar';
import ContinueButton from './UIComponents/ContinueButton';
import * as React from 'react';

type BlueBarContinueProps = {
  text: string;
  onClick: (...args: any) => void;
};
export const BlueBarContinue = ({ text, onClick }: BlueBarContinueProps) => (
  <BlueBar
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <ContinueButton text={text} onClick={onClick} />
  </BlueBar>
);
