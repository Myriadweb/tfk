import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useCharacterContext } from '../../state/character';
import { Characters, sensoryChildWidth } from './ChildrenAssets/childrenAssets';
import { Paths } from '../../types/Paths';
import Still1 from './DigestiveAssets/07B_Teammates_Systems_Digestive.png';
import Still2 from './DigestiveAssets/07D_Teammates_Systems_Digestive.png';
import Still3 from './DigestiveAssets/07F_Teammates_Systems_Digestive.png';
import Still4 from './DigestiveAssets/07H_Teammates_Systems_Digestive.png';
import Still5 from './DigestiveAssets/07I_Teammates_Systems_Digestive.png';
import Still6 from './DigestiveAssets/07J_Teammates_Systems_Digestive.png';
import Still7 from './DigestiveAssets/07K_Teammates_Systems_Digestive.png';
import Still8 from './DigestiveAssets/07L_Teammates_Systems_Digestive.png';
import Still9 from './DigestiveAssets/07M_Teammates_Systems_Digestive.png';
import Still10 from './DigestiveAssets/07N_Teammates_Systems_Digestive.png';
import { animated } from 'react-spring';

export default function DigestiveGame() {
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();

  if (!location.search) {
    return <Navigate to={'/' + Paths.BodySystems + '/' + Paths.Digestive} />;
  }

  const ChildComponent = Characters.mouthOpen[selectedCharacter];
  const width = sensoryChildWidth;

  return (
    <>
      <animated.img
        src={Still1}
        className='still still1'
        style={{
          opacity: 1,
        }}
      ></animated.img>
      <animated.img src={Still2} className='still still2' />
      <animated.img src={Still3} className='still still3' />
      <animated.img src={Still4} className='still still4' />
      <animated.img src={Still5} className='still still5' />
      <animated.img src={Still6} className='still still6' />
      <animated.img src={Still7} className='still still7' />
      <animated.img src={Still8} className='still still8' />
      <animated.img src={Still9} className='still still9' />
      <animated.img src={Still10} className='still still10' />
    </>
  );
}
