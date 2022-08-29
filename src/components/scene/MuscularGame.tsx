import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactComponent as ArmRelaxed } from './MuscularAssets/armRelaxed.svg';

import { Paths } from '../../types/Paths';

export default function MuscularGame() {
  const location = useLocation();

  if (!location.search) {
    if (!location.search) {
      return <Navigate to={'/' + Paths.BodySystems + '/' + Paths.Muscular} />;
    }
  }

  return (
    <>
      <ArmRelaxed
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
