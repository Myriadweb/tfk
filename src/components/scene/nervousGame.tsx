import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactComponent as Background } from './NervousAssets/bg.svg';
import { ReactComponent as LeftHemi } from './NervousAssets/leftHemisphere.svg';
import Still1 from './NervousAssets/06B_Teammates_Systems_Nervous.png';
import Still2 from './NervousAssets/06C_Teammates_Systems_Nervous.png';
import Still3 from './NervousAssets/06D_Teammates_Systems_Nervous.png';
import Still4 from './NervousAssets/06J_Teammates_Systems_Nervous.png';
import Still5 from './NervousAssets/06Q_Teammates_Systems_Nervous.png';

import { Paths } from '../../types/Paths';
import {animated} from "react-spring";

import {useGameContext} from "../../state/game";

export default function NervousGame() {
  const location = useLocation();
  const [{ value }, setGameState] = useGameContext();
  if (!location.search) {
    return <Navigate to={'/' + Paths.BodySystems + '/' + Paths.Nervous} />;
  }

  return (
    <>
      {value != 1 && (
        <animated.img
          src={Still1}
          className='still still1'
          style={{
            opacity: 1
          }}
        ></animated.img>
      )}
      {value != 2 && (
        <animated.img
          src={Still2}
          className='still still2'
        />
      )}
      {value != 3 && (
        <animated.img
          src={Still3}
          className='still still3'
        />
      )}
      {value != 4 && (
        <animated.img
          src={Still4}
          className='still still4'
        />
      )}
      {value != 5 && (
        <animated.img
          src={Still5}
          className='still still5'
        />
      )}
    </>
  );
}
