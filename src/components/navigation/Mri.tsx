import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
import Music from './SharedAssets/music.svg';
import VR from './MriAssets/vr.svg';
import Nap from './MriAssets/nap.svg';
import Muscular from './BodySystemsAssets/Muscular.svg';
import { Link, useNavigate } from 'react-router-dom';
// import { useSpring, animated } from 'react-spring';
// import { useEffect } from 'react';
import Sticker from './SharedAssets/sticker.svg';
import Bear from './SharedAssets/bear.svg';
import Medal from './SharedAssets/medal.svg';
import BlueBar from './UIComponents/BlueBar';
import { BlueBarContinue } from './BlueBarContinue';
import { Trans } from 'react-i18next';
import Scrapbook from "./SharedAssets/scrapbook.svg";
import {screenScale} from "../../utils/scaling";

type Props = {
  path: Paths;
  prefix: Paths;
};

const distractionTextStyle = {
  fontFamily: 'LemonMilk',
  fontSize: screenScale.x(25),
  fontWeight: 'bold',
  letterSpacing: 1.24,
  marginTop: 12,
  color: '#fff',
};

const Mri = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const navigate = useNavigate();
  const [{ step, value }, setStep] = useGameContext();

  const stepComponentConfig = {
    0: () => (
      <BlueBar style={{
        height: screenScale.y(192),
      }}>
        <div className='nav-items-container' style={{ width: 592 }}>
          <div>
            <NavigationButton
              image={Nap}
              size={'small'}
              onClick={() => {
                setStep((oldState) => ({
                  ...oldState,
                  step: 1,
                  value: 'nap',
                }));
                playSound('mRISnoring');
              }}
              text=''
            />
            <span style={distractionTextStyle}> {t('nap')}</span>
          </div>
          <div>
            <NavigationButton
              image={VR}
              size={'small'}
              onClick={() => {
                setStep((oldState) => ({ ...oldState, step: 1, value: 'vr' }));
                playSound('mRIVR');
              }}
              text=''
            />
            <span style={distractionTextStyle}> {t('vr')}</span>
          </div>
          <div>
            <NavigationButton
              image={Music}
              size={'small'}
              onClick={() => {
                setStep((oldState) => ({
                  ...oldState,
                  step: 1,
                  value: 'music',
                }));
                playSound('hearingMusic');
              }}
              text=''
            />
            <span style={distractionTextStyle}> {t('music')}</span>
          </div>
        </div>
      </BlueBar>
    ),
    1: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep((old) => ({ ...old, step: 2 }));
        }}
      />
    ),
    2: () => (
      <BlueBar>
        <button
          style={{
            fontFamily: 'LemonMilk',
            fontSize: 20,
            color: '#fff',
            background: '#CD4845',
            border: '1px solid #000',
            borderRadius: 55,
            width: 109,
            height: 109,
          }}
          onClick={() => {
            playSound('xRay');
            setStep((old) => ({ ...old, step: 3 }));
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </BlueBar>
    ),
    3: () => <BlueBar />,
    4: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeProcedure');
          setStep((oldState) => ({ ...oldState, step: 5, hideButtons: true }));
        }}
      />
    ),
    5: () => (
      <>
        <BlueBar style={{ height: screenScale.y(192) }}>
          <div className='nav-items-container' style={{ width: 592 }}>
            <NavigationButton
              image={Sticker}
              size={value === 'sticker' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'sticker' }))
              }
              text=''
            />
            <NavigationButton
              image={Bear}
              size={value === 'doll' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'doll' }))
              }
              text=''
            />
            <NavigationButton
              image={Medal}
              size={value === 'medal' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'medal' }))
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
            setStep((oldState) => ({ ...oldState, step: 6 }));
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </>
    ),
    6: () => (
      <>
          <BlueBar style={{ height: screenScale.y(192) }}>
              <div className='two-columns'>
                  <NavigationButton
                      image={Muscular}
                      size={'large'}
                      onClick={() => {
                          playSound('generalSelect');
                          setStep({ step: 0 });
                          navigate(Paths.BodySystems + '/' + Paths.Muscular);
                      }}
                      text=''
                  />
                  <NavigationButton
                      image={Scrapbook}
                      size={'large'}
                      onClick={() => {
                          playSound('generalSelect');
                          setStep((oldStep) => ({ ...oldStep, step: 7 }));
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
      7: () => (
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
    <>
      <div className='nav-top'>
        <div
          className='header-text'
          style={{ display: ![3, 6].includes(step) ? 'block' : 'none' }}
        >
          {t(`${step}-mainText`)}
        </div>
          {step === 6 && (
              <div className='body-text two-columns'>
                  <div>
                      <Trans i18nKey={t(`${step}-subText`)} />
                  </div>
                  <div>
                      <Trans i18nKey={t(`${step}-subText2`)} />
                  </div>
              </div>
          )}
          {step !== 6 && (
              <div className='body-text'
                   style={{ display: step != 0 ? 'block' : 'none' }}
              >
                  <Trans i18nKey={t(`${step}-subText`)} />
              </div>
          )}
      </div>
      {stepComponentConfig[step] && stepComponentConfig[step]()}
    </>
  );
};

export default Mri;
