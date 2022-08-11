import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import playSound from '../../sound';
import NavigationButton from './NavigationButton';
import Medal from './XRayAssets/medal.svg';
import Bear from './XRayAssets/bear.svg';
import SignCast from './XRayAssets/signCast.svg';
import Skeletal from './BodySystemsAssets/Skeletal.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react';

type Props = {
  path: Paths;
  prefix: Paths;
};

const XRay = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const navigate = useNavigate();
  const [{ step, value }, setStep] = useGameContext();
  const [delayStyle, delayApi] = useSpring(() => ({ opacity: 1 }));

  useEffect(() => {
    if (step === 2) {
      delayApi.start({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000,
        config: {
          duration: 100,
        },
      });
    }
  }, [step]);

  const stepComponentConfig = {
    0: null,
    1: () => (
      <button
        style={{
          fontFamily: 'LemonMilk',
          fontSize: 20,
          color: '#fff',
          background: '#CD4845',
          border: '1px solid #000',
          borderRadius: 12,
          width: 241,
          height: 65,
          marginTop: 20,
        }}
        onClick={() => {
          playSound('completeStep');
          setStep({ step: 2 });
        }}
      >
        {t(`${step}-buttonText`)} <Arrow />
      </button>
    ),
    2: () => (
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
          marginTop: 20,
        }}
        onClick={() => {
          playSound('xRay');
          setStep({ step: 3 });
        }}
      >
        {t(`${step}-buttonText`)} <Arrow />
      </button>
    ),
    4: () => (
      <button
        style={{
          fontFamily: 'LemonMilk',
          fontSize: 20,
          color: '#fff',
          background: '#CD4845',
          border: '1px solid #000',
          borderRadius: 12,
          width: 241,
          height: 65,
          marginTop: 20,
        }}
        onClick={() => {
          playSound('completeProcedure');
          setStep((oldState) => ({ ...oldState, step: 5, hideButtons: true }));
        }}
      >
        {t(`${step}-buttonText`)} <Arrow />
      </button>
    ),
    5: () => (
      <>
        <div
          style={{
            marginTop: 12,
            background: '#0E1F33',
            height: 192,
          }}
        >
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
              image={SignCast}
              size={value === 'signature' ? 'large' : 'small'}
              onClick={() =>
                setStep((oldState) => ({ ...oldState, value: 'signature' }))
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
        </div>
        <button
          style={{
            fontFamily: 'LemonMilk',
            fontSize: 20,
            color: '#fff',
            background: '#CD4845',
            border: '1px solid #000',
            borderRadius: 12,
            width: 241,
            height: 65,
            marginTop: 20,
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 49,
            background: '#0E1F33',
            height: 192,
          }}
        >
          <NavigationButton
            image={Skeletal}
            size={'large'}
            onClick={() => {
              playSound('click');
              setStep({ step: 0 });
              navigate(Paths.BodySystems + '/' + Paths.Skeletal);
            }}
            text=''
          />
        </div>

        <div
          style={{
            position: 'absolute',
            left: 44,
            top: 383,
          }}
        >
          <Link
            to={`${Paths.Procedures}/${prefix}`}
            onClick={() => {
              playSound('click');
              setStep({ step: 0 });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src='images/NavBar/proceduresButton.png' />
            <span
              style={{
                fontSize: 20,
                color: '#FFF',
                fontFamily: 'LemonMilk',
                marginLeft: 15,
                whiteSpace: 'pre',
                textAlign: 'left',
              }}
            >
              {t(`${step}-back`)}
            </span>
          </Link>
        </div>
      </>
    ),
  };

  return (
    <animated.div style={delayStyle}>
      {step < 6 && (
        <span
          style={{
            display: 'block',
            fontSize: 40,
            color: '#FFF',
            fontFamily: 'LemonMilk',
            marginTop: 45,
            letterSpacing: 2,
            fontWeight: 'bolder',
          }}
        >
          {t(`${step}-mainText`)}
        </span>
      )}
      <span
        style={{
          display: 'block',
          fontSize: 20,
          color: '#FFF',
          fontFamily: 'LemonMilk',
          marginTop: step !== 5 ? 45 : 12,
          whiteSpace: 'pre',
        }}
      >
        {t(`${step}-subText`)}
      </span>
      {step === 6 && (
        <span
          style={{
            fontSize: 20,
            color: '#FFF',
            fontFamily: 'LemonMilk',
            whiteSpace: 'pre',
            fontWeight: 'bold',
          }}
        >
          {t(`${step}-boldText`)}
        </span>
      )}
      {stepComponentConfig[step] && stepComponentConfig[step]()}
    </animated.div>
  );
};

export default XRay;
