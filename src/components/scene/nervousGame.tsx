import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactComponent as Background } from './NervousAssets/bg.svg';
import { ReactComponent as LeftHemi } from './NervousAssets/leftHemisphere.svg';

import { Paths } from '../../types/Paths';

export default function NervousGame() {
  const location = useLocation();

  if (!location.search) {
    return <Navigate to={'/' + Paths.BodySystems + '/' + Paths.Nervous} />;
  }

  return (
    <>
      <Background style={{ position: 'absolute', left: 0, top: 0 }} />
      <LeftHemi
        style={{
          position: 'absolute',
          left: 540,
          top: 271,
          transform: `translate(-50%, 0)`,
        }}
      />
    </>
  );
}
