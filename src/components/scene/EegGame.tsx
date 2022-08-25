import * as React from 'react';
import { ReactComponent as Child } from './EegAssets/child.svg';
import { ReactComponent as BG } from './EegAssets/BG.svg';
import { ReactComponent as EegMonitor } from './EegAssets/eegMonitor.svg';
import {useGameContext} from '../../state/game';
import { ReactComponent as Row1 } from '../scene/EegAssets/row1.svg';
import { ReactComponent as Row2 } from '../scene/EegAssets/row2.svg';
import { ReactComponent as Row3 } from '../scene/EegAssets/row3.svg';
import { ReactComponent as Row4 } from '../scene/EegAssets/row4.svg';
import { ReactComponent as Row5 } from '../scene/EegAssets/row5.svg';
import { ReactComponent as LeadsHeadRef } from '../scene/EegAssets/leadsHeadReference.svg';

export default function EegGame() {
  const [{ step, value }, setStep] = useGameContext();
  console.log(value);
  if (value && value.length === 5) {
    //setStep( { step: 2 })
    console.log('all buttons clicked')
  }
  const shouldShowDots = (index: number) => {
    return value && value.includes(index) || step > 1;
  }

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
          top: 71,
        }}
      />
      <div className='child-container' style={{
        position: 'absolute',
        left: 0,
        top: step === 0 ? -40 : 400,
      }}>
        <Child
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        {
          step > 0 && step < 6 &&
            <div className='sticky-dots-container'>
              <Row1 className='sticky-dots'
                style={{
                  top: 130,
                  left: 40,
                  display: shouldShowDots(1) ? 'block' : 'none',
                }}
              />
              <Row2 className='sticky-dots'
                style={{
                  top: 40,
                  left: 120,
                  display: shouldShowDots(2) ? 'block' : 'none',
                }}
              />
              <Row3 className='sticky-dots'
                style={{
                  top: 0,
                  left: 260,
                  display: shouldShowDots(3) ? 'block' : 'none',
                }}
              />
              <Row4 className='sticky-dots'
                style={{
                  top: 40,
                  left: 400,
                  display: shouldShowDots(4) ? 'block' : 'none',
                }}
              />
              <Row5 className='sticky-dots'
                style={{
                  top: 130,
                  left: 500,
                  display: shouldShowDots(5) ? 'block' : 'none',
                }}
              />
            </div>
        }
        {
          step > 2 && step < 6 &&
          <div className='leads-head-container'>
              <LeadsHeadRef className='leads-head'
              />
          </div>
        }

      </div>
    </div>
  );
}
