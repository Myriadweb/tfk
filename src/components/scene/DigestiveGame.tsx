import React, { CSSProperties } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useCharacterContext } from '../../state/character';
import { Characters, sensoryChildWidth } from './ChildrenAssets/childrenAssets';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import Apple from './DigestiveAssets/apple.svg';
import IceCream from './DigestiveAssets/iceCream.svg';
import ChewMeterBlank from './DigestiveAssets/chewMeterBlank.svg';
import ChewMeter1 from './DigestiveAssets/chewMeter1.svg';
import ChewMeter2 from './DigestiveAssets/chewMeter2.svg';
import ChewMeter3 from './DigestiveAssets/chewMeter3.svg';
import BG from './DigestiveAssets/bg.png';
import DigestiveSystem from './DigestiveAssets/digestiveSystem.svg';
import Oval from './DigestiveAssets/oval.png';
import StomachLines from './DigestiveAssets/stomachLeaderLine.svg';
import StomachOverlay from './DigestiveAssets/stomachOverlay.png';
import SmallIntestineLine from './DigestiveAssets/smallIntestineLeaderLine.svg';
import SmallIntestineOverlay from './DigestiveAssets/smallIntestineOverlay.png';
import Vomit from './DigestiveAssets/vomit.svg';
import WasteBlueBox from './DigestiveAssets/wasteBlueBox.svg';
import LargeIntestineLine from './DigestiveAssets/largelIntestineLeaderLine.svg';
import Waste from './DigestiveAssets/waste.svg';
import Animation from '../../animations/digestive1.webm';

import { useSpring, animated } from 'react-spring';
import { columnLabelStyle } from './common';
import { Trans, useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import playSound from '../../sound';

const STEP_TO_CHILD_CONFIG = {
  0: 'mouthOpen',
  1: 'digestiveEyesOpen',
};

export default function DigestiveGame() {
  const [selectedCharacter] = useCharacterContext();
  const [{ step }, setGameState] = useGameContext();
  const location = useLocation();
  const { t } = useTranslation('translation');
  const [appleStyle, appleApi] = useSpring(() => ({
    transform: 'translate(0px, 0px)',
  }));
  const [iceCreamStyle, iceCreamApi] = useSpring(() => ({
    transform: 'translate(0px, 0px)',
  }));
  const [bodySystemStyle, bodySystemApi] = useSpring(
    () =>
      ({
        position: 'absolute',
        top: 282,
        left: 533,
        width: 787,
        height: 1813,
        transform: 'translate(-50%, 0px) scale(1)',
      } as CSSProperties)
  );
  const [ovalStyle, ovalApi] = useSpring(
    () =>
      ({
        transform: 'translate(-38px, 0px)',
      } as CSSProperties)
  );
  const [stomachStyle, stomachApi] = useSpring(() => ({
    opacity: 0,
  }));
  const [stomachOverlaysStyle, stomachOverlaysApi] = useSpring(() => ({
    opacity: 0,
  }));
  const [blueBoxOverlaysStyle, blueBoxOverlaysApi] = useSpring(() => ({
    opacity: 0,
  }));
  const [smallIntestineStyle, smallIntestineApi] = useSpring(() => ({
    opacity: 0,
  }));
  const [smallIntestineOverlaysStyle, smallIntestineOverlaysApi] = useSpring(
    () => ({
      opacity: 0,
    })
  );
  const [largeIntestineStyle, largeIntestineApi] = useSpring(() => ({
    opacity: 0,
  }));

  const onAppleClick = () => {
    appleApi.start({
      transform: 'translate(134px, -300px)',
      onRest: () => setGameState({ step: 1 }),
    });
  };

  const onIceCreamClick = () => {
    iceCreamApi.start({
      transform: 'translate(-100px, -200px)',
      onRest: () => setGameState({ step: 1 }),
    });
  };

  React.useEffect(() => {
    if (step === 6) {
      bodySystemApi.start({
        to: [
          {
            transform: 'translate(-50%, -166px) scale(1.5)',
            config: {
              duration: 1000,
            },
          },
          {
            transform: 'translate(-50%, -283px) scale(1.5)',
            config: {
              duration: 500,
            },
          },
          {
            transform: 'translate(-50%, -363px) scale(1.5)',
            onRest: () => {
              playSound('digestionStomachGurgle');
              stomachApi({ opacity: 1 });
              stomachOverlaysApi({ opacity: 1 });
              blueBoxOverlaysApi({ opacity: 1 });
              setGameState({ step: 7 });
            },
          },
        ],
      });
      ovalApi.start({
        delay: 1000,
        to: [
          {
            transform: 'translate(80px, 0px)',
            config: {
              duration: 500,
            },
          },
        ],
      });
    } else if (step === 8) {
      stomachOverlaysApi.start({ opacity: 0 });
      blueBoxOverlaysApi.start({ opacity: 0 });
    } else if (step === 9) {
      stomachApi.start({
        opacity: 0,
        onRest: () => {
          bodySystemApi.start({
            to: [
              {
                transform: 'translate(-50%, -389px) scale(1.5)',
                config: {
                  duration: 500,
                },
              },
              {
                transform: 'translate(-50%, -590px) scale(1.5)',
                delay: 500,
                config: {
                  duration: 500,
                },
              },
            ],
          });
          ovalApi.start({
            to: [
              {
                transform: 'translate(-215px, 0px)',
                config: {
                  duration: 1000,
                },
              },
              {
                transform: 'translate(-111px, 0px)',
                config: {
                  duration: 1000,
                },
                delay: 500,
                onRest: () => setGameState({ step: 10 }),
              },
            ],
          });
        },
      });
    } else if (step === 10) {
      blueBoxOverlaysApi.start({ opacity: 1 });
      smallIntestineOverlaysApi.start({ opacity: 1 });
      smallIntestineApi.start({ opacity: 1 });
    } else if (step === 11) {
      blueBoxOverlaysApi.start({ opacity: 0 });
      smallIntestineOverlaysApi.start({ opacity: 0 });
    } else if (step === 12) {
      smallIntestineApi.start({ opacity: 0 });
      ovalApi.start({
        to: [
          { transform: 'translate(-270px, 0px)' },
          { transform: 'translate(-270px, -76px)' },
          { transform: 'translate(173px, -76px)' },
        ],
        onRest: () => setGameState({ step: 13 }),
      });
    } else if (step === 13) {
      largeIntestineApi.start({ opacity: 1 });
    } else if (step === 14) {
      ovalApi.start({
        to: [
          { transform: 'translate(173px, 140px)' },
          { transform: 'translate(-53px, 140px)' },
          { transform: 'translate(-53px, 242px)' },
        ],
        onRest: () => setGameState({ step: 15 }),
      });
    }
  });

  if (!location.search) {
    return <Navigate to={'/' + Paths.BodySystems + '/' + Paths.Digestive} />;
  }

  const childAsset = STEP_TO_CHILD_CONFIG[step] || 'digestiveEyesClosed';

  const ChildComponent = Characters[childAsset][selectedCharacter];
  console.log('ChildComponent', childAsset)
  const width = sensoryChildWidth;

  return (
    <>
      {step < 5 && (
        <div
          style={{
            position: 'absolute',
            left: 540,
            top: 271,
            transform: `translate(-${width / 2}px, 0)`,
          }}
        >
          <ChildComponent />
        </div>
      )}
      {step >= 5 && <img src={BG} />}
      {step >= 5 && step < 16 && (
        <>
          <animated.img src={DigestiveSystem} style={bodySystemStyle} />
          <animated.img
            src={StomachOverlay}
            style={{
              position: 'absolute',
              top: -200,
              left: 0,
              ...stomachOverlaysStyle,
            }}
          />
          <animated.img
            src={SmallIntestineOverlay}
            style={{
              position: 'absolute',
              top: -164,
              left: 0,
              ...smallIntestineOverlaysStyle,
            }}
          />
          <animated.div
            style={{
              position: 'absolute',
              top: -427,
              left: -17,
              ...stomachStyle,
            }}
          >
            <ReactPlayer
              playing
              loop
              url={Animation}
              width='100%'
              height='100%'
            />
          </animated.div>
          <animated.img
            src={StomachLines}
            style={{
              position: 'absolute',
              top: 447,
              left: 343,
              ...stomachStyle,
            }}
          />
          <animated.img
            src={SmallIntestineLine}
            style={{
              position: 'absolute',
              top: 660,
              left: 562,
              ...smallIntestineStyle,
            }}
          />
          <animated.img
            src={LargeIntestineLine}
            style={{
              position: 'absolute',
              top: 765,
              left: 210,
              ...largeIntestineStyle,
            }}
          />
          <animated.span
            style={{
              ...columnLabelStyle,
              ...stomachStyle,
              top: 385,
              left: 245,
            }}
          >
            {t('digestive.scene.stomach')}
          </animated.span>
          <animated.span
            style={{
              ...columnLabelStyle,
              ...smallIntestineStyle,
              padding: '8px 0 10px',
              top: 616,
              right: 37,
              width: 208,
            }}
          >
            {t('digestive.scene.smallIntestine')}
          </animated.span>
          <animated.span
            style={{
              ...columnLabelStyle,
              ...largeIntestineStyle,
              padding: '8px 0 10px',
              top: 803,
              left: 30,
              width: 203,
            }}
          >
            {t('digestive.scene.largeIntestine')}
          </animated.span>
          <animated.img
            src={Oval}
            style={{
              position: 'absolute',
              left: 540,
              top: 655,
              ...ovalStyle,
            }}
          />
          <animated.div
            style={{
              ...columnLabelStyle,
              ...blueBoxOverlaysStyle,
              background: '#103159',
              borderRadius: 18.5,
              height: 315,
              top: 900,
              left: 540,
              width: 448,
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <img
              src={[7, 8].includes(step) ? Vomit : WasteBlueBox}
              style={{
                marginTop: 37,
              }}
            />
            <div
              style={{
                border: '1px white solid',
                marginTop: 18.5,
                width: 45,
              }}
            />
            <span
              style={{
                marginTop: 27,
                fontFamily: 'LemonMilk',
                fontSize: 20,
                fontWeight: 400,
                maxWidth: 470,
                whiteSpace: 'initial',
              }}
            >
              <Trans i18nKey={`digestive.scene.${step}-blueBox`} />
            </span>
          </animated.div>
        </>
      )}
      {step === 16 && (
        <img
          src={Waste}
          style={{
            position: 'absolute',
            transform: 'translateX(-50%)',
            left: 540,
            top: 940,
          }}
        />
      )}
      {step === 0 && (
        <>
          <animated.img
            src={Apple}
            style={{
              position: 'absolute',
              top: 1003,
              left: 283,
              ...appleStyle,
            }}
            onClick={() => onAppleClick()}
          />
          <animated.img
            src={IceCream}
            style={{
              position: 'absolute',
              top: 945,
              left: 560,
              ...iceCreamStyle,
            }}
            onClick={() => onIceCreamClick()}
          />
        </>
      )}
      {step >= 1 && step <= 4 && (
        <>
          <img
            src='images/Sensory/bottomOverlay.png'
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}
          />
          <img
            src={ChewMeterBlank}
            style={{
              position: 'absolute',
              transform: 'translateX(-50%)',
              left: 540,
              top: 1100,
            }}
          />
        </>
      )}
      {[2, 3, 4].includes(step) && (
        <img
          src={ChewMeter1}
          style={{
            position: 'absolute',
            transform: 'translateX(-50%)',
            left: 593,
            top: 1107,
          }}
        />
      )}
      {[3, 4].includes(step) && (
        <img
          src={ChewMeter2}
          style={{
            position: 'absolute',
            transform: 'translateX(-50%)',
            left: 593,
            top: 1107,
          }}
        />
      )}
      {step === 4 && (
        <img
          src={ChewMeter3}
          style={{
            position: 'absolute',
            transform: 'translateX(-50%)',
            left: 593,
            top: 1107,
          }}
        />
      )}
    </>
  );
}
