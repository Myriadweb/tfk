import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useCharacterContext } from '../../state/character';
import { Characters, sensoryChildWidth } from './ChildrenAssets/childrenAssets';
import { Paths } from '../../types/Paths';

export default function CardiovascularGame() {
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();

  if (!location.search) {
    return (
      <Navigate to={'/' + Paths.BodySystems + '/' + Paths.Cardiovascular} />
    );
  }

  const ChildComponent = Characters.sensory[selectedCharacter];
  const width = sensoryChildWidth;

  return (
    <>
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
    </>
  );
}
