import * as React from 'react';
import { useNavBarTranslation, useLocationNavigate, useLocationPath } from '../../hooks';
import {Link, useNavigate} from 'react-router-dom';
import { useGameContext } from '../../state/game';
import { animated } from 'react-spring';
import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import { Paths } from '../../types/Paths';
import Bear from '../navigation/SharedAssets/bear.svg';
import Medal from '../navigation/SharedAssets/medal.svg';
import Sticker from '../navigation/SharedAssets/sticker.svg';
import PlaceLeads from '../navigation/EegAssets/place_leads.svg';
import PlaceStickies from '../navigation/EegAssets/place_stickies.svg';
import PlaceCap from '../navigation/EegAssets/cap.svg';
import Nervous from './BodySystemsAssets/Nervous.svg';
import { BlueBarContinue } from './BlueBarContinue';
import BlueBar from './UIComponents/BlueBar';
import { Trans } from 'react-i18next';
import Scrapbook from "./SharedAssets/scrapbook.svg";
import {screenScale} from "../../utils/scaling";

type Props = {
  path: Paths;
  prefix: Paths;
};

export default function Eeg({ prefix }: Props) {
  const t = useNavBarTranslation(prefix);
  const navigate = useLocationNavigate()
  const buildPath = useLocationPath(); // ADD THIS for Link components
  const [{ step, value }, setStep] = useGameContext();

  const handleNavigationButtonClick = (index: number) => {
    //setStep((oldState) => ({ ...oldState, step: 2, value: [...oldState.value, 5] }))
    setStep((oldState) => {
      const newValue = [...oldState.value, index];
      const newStep = newValue.length === 5 ? oldState.step + 1 : oldState.step;
      return { step: newStep, value: newValue };
    });
  };

  const stepComponentConfig = {
    0: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 1, value: [] });
        }}
      />
    ),
    1: () => (
      <BlueBar>
        <NavigationButton
          image={PlaceStickies}
          size='small'
          disabled={value.includes(1)}
          onClick={() => handleNavigationButtonClick(1)}
          sound='eEGTabs'
          text=''
        />
        <NavigationButton
          image={PlaceStickies}
          size='small'
          disabled={value.includes(2)}
          onClick={() => handleNavigationButtonClick(2)}
          sound='eEGTabs'
          text=''
        />
        <NavigationButton
          image={PlaceStickies}
          size='small'
          disabled={value.includes(3)}
          onClick={() => handleNavigationButtonClick(3)}
          sound='eEGTabs'
          text=''
        />
        <NavigationButton
          image={PlaceStickies}
          size='small'
          disabled={value.includes(4)}
          onClick={() => handleNavigationButtonClick(4)}
          sound='eEGTabs'
          text=''
        />
        <NavigationButton
          image={PlaceStickies}
          size='small'
          disabled={value.includes(5)}
          onClick={() => handleNavigationButtonClick(5)}
          sound='eEGTabs'
          text=''
        />
      </BlueBar>
    ),
    2: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 3, value: [] });
        }}
      />
    ),
    3: () => (
      <BlueBar>
        <NavigationButton
          image={PlaceLeads}
          size='small'
          disabled={value.includes(1)}
          onClick={() => handleNavigationButtonClick(1)}
          sound='eEGAttachElectrodes'
          text=''
        />
        <NavigationButton
          image={PlaceLeads}
          size='small'
          disabled={value.includes(2)}
          onClick={() => handleNavigationButtonClick(2)}
          sound='eEGAttachElectrodes'
          text=''
        />
        <NavigationButton
          image={PlaceLeads}
          size='small'
          disabled={value.includes(3)}
          onClick={() => handleNavigationButtonClick(3)}
          sound='eEGAttachElectrodes'
          text=''
        />
        <NavigationButton
          image={PlaceLeads}
          size='small'
          disabled={value.includes(4)}
          onClick={() => handleNavigationButtonClick(4)}
          sound='eEGAttachElectrodes'
          text=''
        />
        <NavigationButton
          image={PlaceLeads}
          size='small'
          disabled={value.includes(5)}
          onClick={() => handleNavigationButtonClick(5)}
          sound='eEGAttachElectrodes'
          text=''
        />
      </BlueBar>
    ),
    4: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 5, value: [] });
        }}
      />
    ),
    5: () => (
      <BlueBar>
        <NavigationButton
          image={PlaceCap}
          size='small'
          disabled={value.includes(1)}
          onClick={() => setStep({ step: 6 })}
          sound='eEGSock'
          text=''
        />
      </BlueBar>
    ),
    6: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 7, value: [] });
        }}
      />
    ),
    7: () => <BlueBar />,
    8: () => (
      <BlueBarContinue
        text={t(`${step}-buttonText`)}
        onClick={() => {
          playSound('completeProcedure');
          setStep({ step: 9, hideButtons: true });
        }}
      />
    ),
    9: () => (
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
            playSound('completeStep');
            setStep((oldStep) => ({
              ...oldStep,
              step: 10,
            }));
          }}
        >
          {t(`${step}-buttonText`)} <Arrow />
        </button>
      </>
    ),
    10: () => (
        <>
            <BlueBar style={{ height: screenScale.y(192) }}>
                <div className='two-columns'>
                    <NavigationButton
                        image={Nervous}
                        size={'large'}
                        onClick={() => {
                            playSound('generalSelect');
                            setStep({ step: 0 });
                            navigate(Paths.BodySystems + '/' + Paths.Nervous);
                        }}
                        text=''
                    />
                    <NavigationButton
                        image={Scrapbook}
                        size={'large'}
                        onClick={() => {
                            playSound('generalSelect');
                            setStep((oldStep) => ({ ...oldStep, step: 11 }));
                        }}
                        text=''
                    />
                </div>
            </BlueBar>
            <div className='links-container'
                 style={{
                     position: 'absolute',
                     left: 44,
                     top: screenScale.y(383),
                 }}
            >
                <Link
                    to={buildPath(`${Paths.Procedures}/${prefix}`)}
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
      11: () => (
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
        <div className='header-text'>{step != 10 && t(`${step}-mainText`)}</div>
          {step === 10 && (
              <div className='body-text two-columns'>
                  <div>
                      <Trans i18nKey={t(`${step}-subText`)} />
                  </div>
                  <div>
                      <Trans i18nKey={t(`${step}-subText2`)} />
                  </div>
              </div>
          )}
          {step !== 10 && (
              <div className='body-text'>
                  <Trans i18nKey={t(`${step}-subText`)} />
              </div>
          )}
      </div>
      {stepComponentConfig[step] && stepComponentConfig[step]()}
    </animated.div>
  );
}
