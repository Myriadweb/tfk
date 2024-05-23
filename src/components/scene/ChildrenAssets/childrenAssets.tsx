import React, { CSSProperties } from 'react';
import { Character } from '../../../state/character';

import { ReactComponent as Child1 } from './Child1/sensoryDefault.svg';
import Child1Raster from './Child1/sensoryDefault.svg';
import { ReactComponent as Child1Worried } from './Child1/worried.svg';
import Child1Scared from './Child1/scared.svg';
import Child1Moon from './Child1/moon.svg';
import Child1Sun from './Child1/sun.svg';
import Child1HotSauce from './Child1/hotSauce.svg';
import Child1IceCream from './Child1/iceCream.svg';
import Child1MouthOpen from './Child1/mouthOpen.svg';
import Child1LiftFeather from './Child1/proprioceptionGood.svg';
import Child1LiftWeight from './Child1/proprioceptionBad.svg';
import Child1Breathe from './Child1/breathe.png';
import { ReactComponent as Child1HitFloor } from './Child1/hitFloor.svg';
import Child1Protection from './Child1/protection.svg';
import { ReactComponent as Child1SensoryDefault } from './Child1/sensoryDefault.svg';
import Child1happySensory from './Child1/happySensory.svg';
import { ReactComponent as Child1HappyStanding } from './Child1/happyStanding.svg';
import { ReactComponent as Child1DigestiveEyesOpen } from './Child1/digestiveEyesOpen.svg';
import { ReactComponent as Child1DigestiveEyesClosed } from './Child1/digestiveEyesClosed.svg';

import { ReactComponent as Child2 } from './Child2/default.svg';
import Child2Raster from './Child2/default.svg';
import { ReactComponent as Child2Worried } from './Child2/worried.svg';
import Child2Scared from './Child2/scared.svg';
import Child2Moon from './Child2/moon.svg';
import Child2Sun from './Child2/sun.svg';
import Child2HotSauce from './Child2/hotSauce.svg';
import Child2IceCream from './Child2/iceCream.svg';
import Child2MouthOpen from './Child2/mouthOpen.svg';
import Child2LiftFeather from './Child2/proprioceptionGood.svg';
import Child2LiftWeight from './Child2/proprioceptionBad.svg';
import Child2Breathe from './Child2/breathe.svg';
import { ReactComponent as Child2HitFloor } from './Child2/hitFloor.svg';
import Child2Protection from './Child2/protection.svg';
import { ReactComponent as Child2HappyStanding } from './Child2/happyStanding.svg';
import { ReactComponent as Child2DigestiveEyesOpen } from './Child2/digestiveEyesOpen.svg';
import { ReactComponent as Child2DigestiveEyesClosed } from './Child2/digestiveEyesClosed.svg';
import { ReactComponent as Child2SensoryDefault } from './Child2/sensoryDefault.svg';
import Child2happySensory from './Child2/happySensory.svg';

import Child3 from './Child3/default.png';
import { ReactComponent as Child3Worried } from './Child3/worried.svg';
import { ReactComponent as Child3StandingDefault } from './Child3/happyStanding.svg';
import Child3Scared from './Child3/scared.svg';
import Child3Moon from './Child3/moon.svg';
import Child3Sun from './Child3/sun.svg';
import Child3HotSauce from './Child3/hotSauce.svg';
import Child3IceCream from './Child3/iceCream.svg';
import Child3MouthOpen from './Child3/mouthOpen.svg';
import Child3LiftFeather from './Child3/proprioceptionGood.svg';
import Child3LiftWeight from './Child3/proprioceptionBad.svg';
import Child3Breathe from './Child3/breathe.svg';
import { ReactComponent as Child3HitFloor } from './Child3/hitFloor.svg';
import Child3Protection from './Child3/protection.svg';
import { ReactComponent as Child3HappyStanding } from './Child3/happyStanding.svg';
import { ReactComponent as Child3DigestiveEyesOpen } from './Child3/digestiveEyesOpen.svg';
import { ReactComponent as Child3DigestiveEyesClosed } from './Child3/digestiveEyesClosed.svg';
import { ReactComponent as Child3SensoryDefault } from './Child3/sensoryDefault.svg';
import Child3happySensory from './Child3/happySensory.svg';

import { ReactComponent as Child4 } from './Child4/default.svg';
import Child4Raster from './Child4/default.svg';
import { ReactComponent as Child4Worried } from './Child4/worried.svg';
import Child4Scared from './Child4/scared.svg';
import Child4Moon from './Child4/moon.svg';
import Child4Sun from './Child4/sun.svg';
import Child4HotSauce from './Child4/hotSauce.svg';
import Child4IceCream from './Child4/iceCream.svg';
import Child4MouthOpen from './Child4/mouthOpen.svg';
import Child4LiftFeather from './Child4/proprioceptionGood.svg';
import Child4LiftWeight from './Child4/proprioceptionBad.svg';
import Child4Breathe from './Child4/breathe.svg';
import Child4HitFloor from './Child4/hitFloor.svg';
import Child4Protection from './Child4/protection.svg';
import { ReactComponent as Child4HappyStanding } from './Child4/happyStanding.svg';
import { ReactComponent as Child4DigestiveEyesOpen } from './Child4/digestiveEyesOpen.svg';
import { ReactComponent as Child4DigestiveEyesClosed } from './Child4/digestiveEyesClosed.svg';
import { ReactComponent as Child4SensoryDefault } from './Child4/sensoryDefault.svg';
import Child4happySensory from './Child4/happySensory.svg';

import { ReactComponent as Child5 } from './Child5/default.svg';
import Child5Raster from './Child5/default.svg';
import { ReactComponent as Child5Worried } from './Child5/worried.svg';
import Child5Scared from './Child5/scared.svg';
import Child5Moon from './Child5/moon.svg';
import Child5Sun from './Child5/sun.svg';
import Child5HotSauce from './Child5/hotSauce.svg';
import Child5IceCream from './Child5/iceCream.svg';
import Child5MouthOpen from './Child5/mouthOpen.svg';
import Child5LiftFeather from './Child5/proprioceptionGood.svg';
import Child5LiftWeight from './Child5/proprioceptionBad.svg';
import Child5Breathe from './Child5/breathe.png';
import { ReactComponent as Child5HitFloor } from './Child5/hitFloor.svg';
import Child5Protection from './Child5/protection.svg';
import { ReactComponent as Child5HappyStanding } from './Child5/happyStanding.svg';
import { ReactComponent as Child5DigestiveEyesOpen } from './Child5/digestiveEyesOpen.svg';
import { ReactComponent as Child5DigestiveEyesClosed } from './Child5/digestiveEyesClosed.svg';
import { ReactComponent as Child5SensoryDefault } from './Child5/sensoryDefault.svg';
import Child5happySensory from './Child5/happySensory.svg';

import { ReactComponent as Child6 } from './Child6/default.svg';
import Child6Raster from './Child6/default.svg';
import { ReactComponent as Child6Worried } from './Child6/worried.svg';
import Child6Scared from './Child6/scared.svg';
import Child6Moon from './Child6/moon.svg';
import Child6Sun from './Child6/sun.svg';
import Child6HotSauce from './Child6/hotSauce.svg';
import Child6IceCream from './Child6/iceCream.svg';
import Child6MouthOpen from './Child6/mouthOpen.svg';
import Child6LiftFeather from './Child6/proprioceptionGood.svg';
import Child6LiftWeight from './Child6/proprioceptionBad.svg';
import Child6Breathe from './Child6/breathe.svg';
import { ReactComponent as Child6HitFloor } from './Child6/hitFloor.svg';
import Child6Protection from './Child6/protection.svg';
import { ReactComponent as Child6HappyStanding } from './Child6/happyStanding.svg';
import { ReactComponent as Child6DigestiveEyesOpen } from './Child6/digestiveEyesOpen.svg';
import { ReactComponent as Child6DigestiveEyesClosed } from './Child6/digestiveEyesClosed.svg';
import { ReactComponent as Child6SensoryDefault } from './Child6/sensoryDefault.svg';
import Child6happySensory from './Child6/happySensory.svg';

import { ReactComponent as SmockRaw } from '../XRayAssets/smock.svg';
import { ReactComponent } from '*.svg';

export const Child3Standing = () => (
  <Child3StandingDefault height='984' width='392' />
);

const childWidthInternal = {
  [Character.child3]: 633,
};

export const childWidth = new Proxy(childWidthInternal, {
  get(object, prop) {
    return object[prop] || 392;
  },
});

export const sensoryChildWidth = 784;

const Smock = () => (
  <SmockRaw style={{ position: 'absolute', top: 332, left: 66 }} />
);

const childStyle: CSSProperties = {
  height: 984,
  width: 392,
  position: 'absolute',
  top: 0,
};

const DefaultCharacters = {
  [Character.child1]: () => <Child1 height='984' width='392' />,
  [Character.child2]: () => <Child2 height='984' width='392' />,
  [Character.child3]: () => <img src={Child3} height='984' />,
  [Character.child4]: () => <Child4 height='984' width='392' />,
  [Character.child5]: () => <Child5 height='984' width='392' />,
  [Character.child6]: () => <Child6 height='984' width='392' />,
};

const DefaultCharactersRaster = {
  [Character.child1]: () => <img height='984' width='392' src={Child1Raster} />,
  [Character.child2]: () => <img height='984' width='392' src={Child2Raster} />,
  [Character.child3]: () => <img src={Child3} height='984' />,
  [Character.child4]: () => <img height='984' width='392' src={Child4Raster} />,
  [Character.child5]: () => <img height='984' width='392' src={Child5Raster} />,
  [Character.child6]: () => <img height='984' width='392' src={Child6Raster} />,
};

const WorriedCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <Child1 style={childStyle} />
      <Child1Worried
        style={{ position: 'absolute', width: 392, height: 327 }}
      />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2 style={childStyle} />
      <Child2Worried
        style={{ position: 'absolute', width: 392, height: 327 }}
      />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child3} style={{ position: 'absolute' }} />
      <Child3Worried
        style={{ position: 'absolute', width: 633, height: 327 }}
      />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4 style={childStyle} />
      <Child4Worried
        style={{ position: 'absolute', width: 392, height: 327 }}
      />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5 style={childStyle} />
      <Child5Worried
        style={{ position: 'absolute', width: 392, height: 327 }}
      />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6 style={childStyle} />
      <Child6Worried
        style={{ position: 'absolute', width: 392, height: 327 }}
      />
    </span>
  ),
};

const SensoryStyle: CSSProperties = {
  width: 784,
  height: 1942,
  position: 'absolute',
  top: 0,
};
const SensoryHeadStyle: CSSProperties = {
  position: 'absolute',
  width: 784,
  height: 616,
};

const SensoryCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <Child1SensoryDefault />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2SensoryDefault />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <Child3SensoryDefault />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4SensoryDefault />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5SensoryDefault />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6SensoryDefault />
    </span>
  ),
};

const HappySensoryCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child1happySensory} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child2happySensory} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child3happySensory} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child4happySensory} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child5happySensory} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child6happySensory} />
    </span>
  ),
};

const SensoryCharactersScared = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child1Scared} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child2Scared} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child3Scared} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child4Scared} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child5Scared} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child6Scared} />
    </span>
  ),
};

const SmockCharacters = {
  [Character.child1]: () => {
    const Child1 = WorriedCharacters[Character.child1];

    return (
      <span style={{ position: 'relative' }}>
        <Child1 />
        <Smock />
      </span>
    );
  },
  [Character.child2]: () => {
    const Child2 = WorriedCharacters[Character.child2];

    return (
      <span style={{ position: 'relative' }}>
        <Child2 />
        <Smock />
      </span>
    );
  },
  [Character.child3]: () => {
    const Child3 = WorriedCharacters[Character.child3];

    return (
      <span style={{ position: 'relative' }}>
        <Child3 />
        <SmockRaw style={{ position: 'absolute', top: 328, left: 188 }} />
      </span>
    );
  },
  [Character.child4]: () => {
    const Child4 = WorriedCharacters[Character.child4];

    return (
      <span style={{ position: 'relative' }}>
        <Child4 />
        <Smock />
      </span>
    );
  },
  [Character.child5]: () => {
    const Child5 = WorriedCharacters[Character.child5];

    return (
      <span style={{ position: 'relative' }}>
        <Child5 />
        <Smock />
      </span>
    );
  },
  [Character.child6]: () => {
    const Child6 = WorriedCharacters[Character.child6];

    return (
      <span style={{ position: 'relative' }}>
        <Child6 />
        <Smock />
      </span>
    );
  },
};

const MoonCharactersSensory = {
  [Character.child1]: () => (
    <span>
      <img src={Child1Moon} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child2Moon} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child3Moon} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child4Moon} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child5Moon} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child6Moon} />
    </span>
  ),
};

const SunCharactersSensory = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child1Sun} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child2Sun} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child3Sun} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child4Sun} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child5Sun} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child6Sun} />
    </span>
  ),
};

const MouthOpenCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child1MouthOpen} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child2MouthOpen} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child3MouthOpen} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child4MouthOpen} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child5MouthOpen} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child6MouthOpen} />
    </span>
  ),
};

const DigestiveEyesOpen = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <Child1 style={SensoryStyle} />
      <Child1DigestiveEyesOpen style={{ ...SensoryHeadStyle, top: 7 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2 style={SensoryStyle} />
      <Child2DigestiveEyesOpen
        style={{ ...SensoryHeadStyle, left: 8, top: 2 }}
      />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <Child3StandingDefault style={SensoryStyle} />
      <Child3DigestiveEyesOpen
        style={{ ...SensoryHeadStyle, left: 8, top: 2 }}
      />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4 style={SensoryStyle} />
      <Child4DigestiveEyesOpen
        style={{ ...SensoryHeadStyle, left: 5, top: 2 }}
      />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5 style={SensoryStyle} />
      <Child5DigestiveEyesOpen
        style={{ ...SensoryHeadStyle, left: 0, top: 2 }}
      />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6 style={SensoryStyle} />
      <Child6DigestiveEyesOpen
        style={{ ...SensoryHeadStyle, left: 8, top: 2 }}
      />
    </span>
  ),
};

const DigestiveEyesClosed = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <Child1 style={SensoryStyle} />
      <Child1DigestiveEyesClosed style={{ ...SensoryHeadStyle, top: 7 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2 style={SensoryStyle} />
      <Child2DigestiveEyesClosed
        style={{ ...SensoryHeadStyle, left: 8, top: 2 }}
      />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <Child3StandingDefault style={SensoryStyle} />
      <Child3DigestiveEyesClosed
        style={{ ...SensoryHeadStyle, left: 8, top: 2 }}
      />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4 style={SensoryStyle} />
      <Child4DigestiveEyesClosed
        style={{ ...SensoryHeadStyle, left: 5, top: 2 }}
      />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5 style={SensoryStyle} />
      <Child5DigestiveEyesClosed
        style={{ ...SensoryHeadStyle, left: 0, top: 2 }}
      />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6 style={SensoryStyle} />
      <Child6DigestiveEyesClosed
        style={{ ...SensoryHeadStyle, left: 8, top: 2 }}
      />
    </span>
  ),
};

const HotSauceCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child1HotSauce} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child2HotSauce} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child3HotSauce} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child4HotSauce} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child5HotSauce} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child6HotSauce} />
    </span>
  ),
};

const IceCreamCharacters = {
  [Character.child1]: () => (
    <span>
      <img src={Child1IceCream} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child2IceCream} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child3IceCream} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child4IceCream} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child5IceCream} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child6IceCream} />
    </span>
  ),
};

/*
const liftFeatherStyle = {
  width: 439,
  height: 687,
  position: 'absolute',
  top: 289,
  left: -10,
} as CSSProperties;
const vestibularHeadStyle = {
  position: 'absolute',
  width: 439,
  height: 307,
  top: 0,
};
 */

const LiftFeatherCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child1LiftFeather} height='984' width='392' />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child2LiftFeather} height='984' width='392' />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child3LiftFeather} height='984' width='392' />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child4LiftFeather} height='984' width='392' />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child5LiftFeather} height='984' width='392' />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child6LiftFeather} height='984' width='392' />
    </span>
  ),
};

const LiftWeightCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child1LiftWeight} height='984' width='392' />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child2LiftWeight} height='984' width='392' />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child3LiftWeight} height='984' width='392' />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child4LiftWeight} height='984' width='392' />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child5LiftWeight} height='984' width='392' />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={Child6LiftWeight} height='984' width='392' />
    </span>
  ),
};

const BreathingHead = {
  [Character.child1]: () => (
    <img
      src={Child1Breathe}
      style={{
        position: 'relative',
        width: 784,
        height: 616,
        top: 8,
      }}
    />
  ),
  [Character.child2]: () => (
    <img
      src={Child2Breathe}
      style={{
        position: 'relative',
        width: 667,
        height: 586,
        top: 30,
        left: 65,
      }}
    />
  ),
  [Character.child3]: () => (
    <img
      src={Child3Breathe}
      style={{
        position: 'relative',
        width: 611,
        height: 614,
        top: 0,
        left: 92,
      }}
    />
  ),
  [Character.child4]: () => (
    <img
      src={Child4Breathe}
      style={{
        position: 'relative',
        width: 695,
        height: 614,
        top: 6,
        left: 52,
      }}
    />
  ),
  [Character.child5]: () => (
    <img
      src={Child5Breathe}
      style={{
        position: 'relative',
        width: 744,
        height: 614,
        top: 0,
        left: 19,
      }}
    />
  ),
  [Character.child6]: () => (
    <img
      src={Child6Breathe}
      style={{
        position: 'relative',
        width: 617,
        height: 614,
        top: 0,
        left: 92,
      }}
    />
  ),
};

const HappyCharacters = {
  [Character.child1]: Child1HappyStanding,
  [Character.child2]: Child2HappyStanding,
  [Character.child3]: Child3HappyStanding,
  [Character.child4]: Child4HappyStanding,
  [Character.child5]: Child5HappyStanding,
  [Character.child6]: Child6HappyStanding,
};

const HitFloorCharacters = {
  [Character.child1]: () => <Child1HitFloor height='648' width='724' />,
  [Character.child2]: () => <Child2HitFloor height='648' width='724' />,
  [Character.child3]: () => <Child3HitFloor height='648' width='724' />,
  [Character.child4]: () => (
    <img src={Child4HitFloor} height='648' width='724' />
  ),
  [Character.child5]: () => <Child5HitFloor height='648' width='724' />,
  [Character.child6]: () => <Child6HitFloor height='648' width='724' />,
};

const ProtectionCharacters = {
  [Character.child1]: Child1Protection,
  [Character.child2]: Child2Protection,
  [Character.child3]: Child3Protection,
  [Character.child4]: Child4Protection,
  [Character.child5]: Child5Protection,
  [Character.child6]: Child6Protection,
};

export const Characters: {
  default: { [key in Character]: React.FC };
  defaultRaster: { [key in Character]: React.FC };
  worried: { [key in Character]: React.FC };
  smock: { [key in Character]: React.FC };
  sensory: { [key in Character]: React.FC };
  happySensory: { [key in Character]: React.FC };
  scaredSensory: { [key in Character]: React.FC };
  moon: { [key in Character]: React.FC };
  sun: { [key in Character]: React.FC };
  mouthOpen: { [key in Character]: React.FC };
  hotSauce: { [key in Character]: React.FC };
  iceCream: { [key in Character]: React.FC };
  liftFeather: { [key in Character]: React.FC };
  liftWeight: { [key in Character]: React.FC };
  breathe: { [key in Character]: React.FC };
  hitFloor: { [key in Character]: React.FC };
  protection: { [key in Character]: string };
  happy: { [key in Character]: string };
  digestiveEyesOpen: { [key in Character]: React.FC };
  digestiveEyesClosed: { [key in Character]: React.FC };
} = {
  default: DefaultCharacters,
  defaultRaster: DefaultCharactersRaster,
  worried: WorriedCharacters,
  sensory: SensoryCharacters,
  smock: SmockCharacters,
  happySensory: HappySensoryCharacters,
  scaredSensory: SensoryCharactersScared,
  moon: MoonCharactersSensory,
  sun: SunCharactersSensory,
  mouthOpen: MouthOpenCharacters,
  hotSauce: HotSauceCharacters,
  iceCream: IceCreamCharacters,
  liftFeather: LiftFeatherCharacters,
  liftWeight: LiftWeightCharacters,
  breathe: BreathingHead,
  hitFloor: HitFloorCharacters,
  protection: ProtectionCharacters,
  // @ts-ignore
  happy: HappyCharacters,
  digestiveEyesOpen: DigestiveEyesOpen,
  digestiveEyesClosed: DigestiveEyesClosed,
};
