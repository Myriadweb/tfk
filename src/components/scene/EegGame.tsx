import * as React from 'react';
import { ReactComponent as Child } from './EegAssets/child.svg';
import { ReactComponent as BG } from './EegAssets/BG.svg';
import { ReactComponent as EegMonitor } from './EegAssets/eegMonitor.svg';
import { useGameContext } from '../../state/game';
import { ReactComponent as Row1 } from '../scene/EegAssets/row1.svg';
import { ReactComponent as Row2 } from '../scene/EegAssets/row2.svg';
import { ReactComponent as Row3 } from '../scene/EegAssets/row3.svg';
import { ReactComponent as Row4 } from '../scene/EegAssets/row4.svg';
import { ReactComponent as Row5 } from '../scene/EegAssets/row5.svg';
import { ReactComponent as StickyDotsRowRef } from '../scene/EegAssets/stickyDotsRef.svg';
import { ReactComponent as LeadsHeadRef } from '../scene/EegAssets/leadsHeadReference.svg';
import { ReactComponent as LeadsHeadRow1 } from '../scene/EegAssets/leadsHeadRow1.svg';
import { ReactComponent as LeadsHeadRow2 } from '../scene/EegAssets/leadsHeadRow2.svg';
import { ReactComponent as LeadsHeadRow3 } from '../scene/EegAssets/leadsHeadRow3.svg';
import { ReactComponent as LeadsHeadRow4 } from '../scene/EegAssets/leadsHeadRow4.svg';
import { ReactComponent as LeadsHeadRow5 } from '../scene/EegAssets/leadsHeadRow5.svg';
import { ReactComponent as LeadsHeadMachineRow1 } from '../scene/EegAssets/leadsMachineRow1.svg';
import { ReactComponent as LeadsHeadMachineRow2 } from '../scene/EegAssets/leadsMachineRow2.svg';
import { ReactComponent as LeadsHeadMachineRow3 } from '../scene/EegAssets/leadsMachineRow3.svg';
import { ReactComponent as LeadsHeadMachineRow4 } from '../scene/EegAssets/leadsMachineRow4.svg';
import { ReactComponent as LeadsHeadMachineRow5 } from '../scene/EegAssets/leadsMachineRow5.svg';
import { ReactComponent as LeadsHeadMachineRef } from '../scene/EegAssets/leadsMachineReference.svg';
import { ReactComponent as HeadCap } from '../scene/EegAssets/headCap.svg';
import { ReactComponent as PrinterBottom } from '../scene/EegAssets/printerBottom.svg';
import { ReactComponent as PrinterPrintoutMiddle } from '../scene/EegAssets/printerPrintoutMiddle.svg';
import { ReactComponent as PrinterTop } from '../scene/EegAssets/printerTop.svg';
import { ReactComponent as Child6FullBody } from '../scene/ChildrenAssets/Child6/fullBody.svg';
import Doll from './SharedAssets/doll.png';
import Medal from './SharedAssets/medal.png';
import Sticker from './SharedAssets/sticker.svg';
import playSound from '../../sound';

import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react';

export default function EegGame() {
  const [{ step, value }, setGameState] = useGameContext();
  const [printoutStyle, printoutApi] = useSpring(() => ({
    transform: 'translateY(0px)',
  }));
  useEffect(() => {
    if (step === 7) {
      playSound('eEGMachine');
      printoutApi.start({
        transform: 'translateY(457px)',
        config: { duration: 3000 },
        onRest: () => setGameState({ step: 8 }),
      });
    }
  });

  if (value && value.length === 5) {
    //setStep( { step: 2 })
    console.log('all buttons clicked');
  }
  const shouldShowDots = (index: number) => {
    return (value && value.includes(index)) || step > 1;
  };
  const shouldShowLeads = (index: number) => {
    return (value && value.includes(index)) || step > 3;
  };
  const shouldShowComponent = (index: number, stepValue: number) => {
    return (value && value.includes(index)) || step > stepValue;
  };

  return (
    <div className='game'>
      {step < 7 && (
        <>
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
              top: 75,
            }}
          />
          <div
            className='child-container'
            style={{
              position: 'absolute',
              left: 0,
              top: step === 0 ? -40 : 400,
            }}
          >
            <Child
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            {step > 0 && step < 6 && (
              <div className='sticky-dots-container'>
                <StickyDotsRowRef
                  className='sticky-dots'
                  style={{
                    left: 10,
                    opacity: 0,
                  }}
                />
                <Row1
                  className='sticky-dots'
                  style={{
                    top: 155,
                    left: 25,
                    display: shouldShowDots(1) ? 'block' : 'none',
                  }}
                />
                <Row2
                  className='sticky-dots'
                  style={{
                    top: 25,
                    left: 110,
                    display: shouldShowDots(2) ? 'block' : 'none',
                  }}
                />
                <Row3
                  className='sticky-dots'
                  style={{
                    top: 0,
                    left: 260,
                    display: shouldShowDots(3) ? 'block' : 'none',
                  }}
                />
                <Row4
                  className='sticky-dots'
                  style={{
                    top: 25,
                    left: 400,
                    display: shouldShowDots(4) ? 'block' : 'none',
                  }}
                />
                <Row5
                  className='sticky-dots'
                  style={{
                    top: 150,
                    left: 500,
                    display: shouldShowDots(5) ? 'block' : 'none',
                  }}
                />
              </div>
            )}
            {step > 2 && step < 7 && (
              <>
                <div className='leads-machine-container'>
                  <LeadsHeadMachineRef
                    style={{ top: 0, left: 0, opacity: 0 }}
                  />
                  <LeadsHeadMachineRow1
                    style={{
                      top: 0,
                      left: 0,
                      display: shouldShowLeads(1) ? 'block' : 'none',
                    }}
                  />
                  <LeadsHeadMachineRow2
                    style={{
                      top: 0,
                      left: 37,
                      display: shouldShowLeads(2) ? 'block' : 'none',
                    }}
                  />
                  <LeadsHeadMachineRow3
                    style={{
                      top: 0,
                      left: 74,
                      display: shouldShowLeads(3) ? 'block' : 'none',
                    }}
                  />
                  <LeadsHeadMachineRow4
                    style={{
                      top: 0,
                      left: 110,
                      display: shouldShowLeads(4) ? 'block' : 'none',
                    }}
                  />
                  <LeadsHeadMachineRow5
                    style={{
                      top: 0,
                      left: 150,
                      display: shouldShowLeads(5) ? 'block' : 'none',
                    }}
                  />
                </div>
                <div className='leads-head-container'>
                  <LeadsHeadRef style={{ top: 0, left: 0, opacity: 0 }} />
                  <LeadsHeadRow1
                    style={{
                      top: -12,
                      left: 23,
                      display: shouldShowLeads(1) ? 'block' : 'none',
                    }}
                  />
                  <LeadsHeadRow2
                    style={{
                      top: -7,
                      left: 116,
                      display: shouldShowLeads(2) ? 'block' : 'none',
                    }}
                  />
                  <LeadsHeadRow3
                    style={{
                      top: -7,
                      left: 319,
                      display: shouldShowLeads(3) ? 'block' : 'none',
                    }}
                  />
                  <LeadsHeadRow4
                    style={{
                      top: -10,
                      left: 465,
                      display: shouldShowLeads(4) ? 'block' : 'none',
                    }}
                  />
                  <LeadsHeadRow5
                    style={{
                      top: -6,
                      left: 525,
                      display: shouldShowLeads(5) ? 'block' : 'none',
                    }}
                  />
                </div>
                <div className='cap-container'>
                  <HeadCap
                    style={{
                      top: 0,
                      left: 0,
                      display: shouldShowComponent(6, 5) ? 'block' : 'none',
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </>
      )}
      {[7, 8].includes(step) && (
        <>
          <PrinterBottom
            style={{ position: 'absolute', top: 757, left: 171 }}
          />
          <animated.div
            style={{
              position: 'absolute',
              top: 300,
              left: 275,
              ...printoutStyle,
            }}
          >
            <PrinterPrintoutMiddle />
          </animated.div>
          <PrinterTop style={{ position: 'absolute', top: 267, left: 171 }} />
        </>
      )}
      {step >= 9 && (
        <>
          <Child6FullBody
            style={{
              position: 'absolute',
              left: '50%',
              bottom: 20,
              height: '80%',
              transform: 'translate(-50%, 0)',
            }}
          />
          {value === 'sticker' && (
            <animated.img
              src={Sticker}
              style={{
                position: 'absolute',
                left: 420,
                top: 600,
              }}
            ></animated.img>
          )}
          {value === 'doll' && (
            <animated.img
              src={Doll}
              style={{
                position: 'absolute',
                left: 273,
                top: 645,
              }}
            />
          )}
          {value === 'medal' && (
            <animated.img
              src={Medal}
              style={{
                position: 'absolute',
                left: '50%',
                top: 575,
                transform: 'translate(-50%, 0)',
              }}
            />
          )}
        </>
      )}
    </div>
  );
}
