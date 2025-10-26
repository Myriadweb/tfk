import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { Link, useNavigate } from 'react-router-dom';
import playSound from '../../sound';
import BlueBar from './UIComponents/BlueBar';
import BpPumpBase from './SharedAssets/bpCuffPumpBase.svg';
import BpPumpButton from './SharedAssets/bpCuffPumpButton.svg';
import BpPumpOneBar from './SharedAssets/bpCuffPumpOneBar.svg';
import BpPumpTwoBar from './SharedAssets/bpCuffPumpTwoBar.svg';
import BpPumpThreeBar from './SharedAssets/bpCuffPumpThreeBar.svg';
import NavigationButton from './UIComponents/NavigationButton';
import JumpRope from './WellnessAssets/jumpRope.svg';
import Basketball from './WellnessAssets/basketball.svg';
import Baseball from './WellnessAssets/baseball.svg';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import Cardiovascular from './BodySystemsAssets/Cardiovascular.svg';
import { BlueBarContinue } from './BlueBarContinue';
import { Trans } from 'react-i18next';
import { animated } from 'react-spring';
import Scrapbook from "./SharedAssets/scrapbook.svg";
import { screenScale, SCALE_FACTORS } from "../../utils/scaling";

const PUMPS_CONFIG = {
  1: BpPumpOneBar,
  2: BpPumpTwoBar,
  3: BpPumpThreeBar,
};

type Props = {
  path: Paths;
  prefix: Paths;
};

const Wellness = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const navigate = useNavigate();
  const [{ step, value }, setStep] = useGameContext();
  const [pumps, addPump] = React.useState(0);

  const stepComponentConfig = {
    2: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 3 });
        }}
      />
    ),
    4: () => (
      <BlueBar
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'relative', transform: `scale(${SCALE_FACTORS.avg})` }}>
          <img src={BpPumpBase} />
          <button
            style={{
              position: 'absolute',
              left: 1,
              top: 6,
              background: 'transparent',
              border: 'none',
              padding: 0
            }}
            onClick={() => {
              if (pumps >= 3) return;

              const newPumpValue = pumps + 1;
              if (pumps == 2) {
                playSound('surgicalPrepBloodPressurePumpAndRelease');
              } else {
                playSound('surgicalPrepBloodPressureSinglePump');
              }
              addPump((pumps) => pumps + 1);
              if (newPumpValue < 3) return;

              setTimeout(() => {
                setStep({ step: 5 });
              }, 800);
            }}
          >
            <img src={BpPumpButton} style={{ paddingLeft: 6 }} />
            {pumps > 0 && (
              <img
                src={PUMPS_CONFIG[pumps]}
                style={{
                  position: 'absolute',
                  left: 121,
                  top: 17,
                }}
              />
            )}
          </button>
        </div>
      </BlueBar>
    ),
    5: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 6 });
        }}
      />
    ),
    8: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 9 });
        }}
      />
    ),
    9: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeProcedure');
          setStep({ step: 10, hideButtons: true });
        }}
      />
    ),
    10: () => (
      <>
        <BlueBar style={{ height: screenScale.y(192) }}>
          <div
            style={{
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              height: '100%',
              width: 592,
            }}
          >
            <NavigationButton
              image={JumpRope}
              size={value === 'jumpRope' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'jumpRope' }))
              }
              text=''
            />
            <NavigationButton
              image={Baseball}
              size={value === 'baseball' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'baseball' }))
              }
              text=''
            />
            <NavigationButton
              image={Basketball}
              size={value === 'basketball' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'basketball' }))
              }
              text=''
            />
          </div>
        </BlueBar>
        <button
          className='continue-button reward'
          style={{
            marginTop: 0,
          }}
          onClick={() => {
            if (!value) return; // if no value is selected, don't continue

            playSound('click');
            setStep((oldState) => ({ ...oldState, step: 11 }));
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </>
    ),
    11: () => (
      <>
          <BlueBar style={{ height: screenScale.y(192) }}>
              <div className='two-columns'>
                  <NavigationButton
                      image={Cardiovascular}
                      size={'large'}
                      onClick={() => {
                          playSound('generalSelect');
                          setStep({ step: 0 });
                          navigate(Paths.BodySystems + '/' + Paths.Cardiovascular);
                      }}
                      text=''
                  />
                  <NavigationButton
                      image={Scrapbook}
                      size={'large'}
                      onClick={() => {
                          playSound('generalSelect');
                          setStep((oldStep) => ({ ...oldStep, step: 12 }));
                      }}
                      text=''
                  />
              </div>
          </BlueBar>
        <div className='links-container'
          style={{
            position: 'absolute',
            left: 44,
            top: 383,
          }}
        >
          <Link
            to={`${Paths.Procedures}/${prefix}`}
            onClick={() => {
              playSound('generalSelect');
              setStep({ step: 0 });
            }}
            className='link'
          >
            <img src='images/NavBar/proceduresButton.png' />
            <span>{t(`${step}-back`)}</span>
          </Link>
        </div>
      </>
    ),
      12: () => (
          <>
              <BlueBar style={{ height: screenScale.y(192) }}>

              </BlueBar>
              <div className='links-container'
                   style={{
                       position: 'absolute',
                       left: 44,
                       top: screenScale.y(383),
                   }}
              >
                  <Link
                      to={`${Paths.Procedures}/${prefix}`}
                      onClick={() => {
                          playSound('click');
                          setStep({ step: 0 });
                      }}
                      className='link'
                  >
                      <img src='images/NavBar/proceduresButton.png' />
                      <span>{t(`${step}-back`)}</span>
                  </Link>
              </div>
          </>
      ),
  };

  return (
    <animated.div>
      <div className='nav-top'>
        <div className='header-text'>{t(`${step}-mainText`)}</div>
          {step === 11 && (
              <div className='body-text two-columns'>
                  <div>
                      <Trans i18nKey={t(`${step}-subText`)} />
                  </div>
                  <div>
                      <Trans i18nKey={t(`${step}-subText2`)} />
                  </div>
              </div>
          )}
          {step !== 11 && (
              <div className='body-text'>
                  <Trans i18nKey={t(`${step}-subText`)} />
              </div>
          )}
      </div>
      {stepComponentConfig[step] ? stepComponentConfig[step]() : <BlueBar />}
    </animated.div>
  );
};

export default Wellness;
