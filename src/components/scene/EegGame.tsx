import * as React from 'react';
import { ReactComponent as Child } from './EegAssets/child.svg';
import { ReactComponent as BG } from './EegAssets/BG.svg';
import { ReactComponent as EegMonitor } from './EegAssets/eegMonitor.svg';
import {useGameContext} from '../../state/game';

export default function EegGame() {
  const [{ step, value }, setStep] = useGameContext();


  return (
    <div className='game'>
      <BG
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <EegMonitor
        style={{
          position: 'absolute',
          transform: 'translateX(-50%)',
          left: 540,
          top: 70,
        }}
      />
      <Child
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          top: step === 0 ? -1320 : -896,
        }}
      />
    </div>
  );
}
