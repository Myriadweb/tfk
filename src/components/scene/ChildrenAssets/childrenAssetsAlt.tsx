import React, {Component, CSSProperties} from 'react';
import { Character } from '../../../state/character';

// import default child assets first
import Child1Breathe from './Default/Child1/breathe.png';
import Child1DefaultFace from './Default/Child1/defaultFace.svg';
import { ReactComponent as Child1DigestiveEyesOpen } from './Default/Child1/digestiveEyesOpen.svg';
import { ReactComponent as Child1DigestiveEyesClosed } from './Default/Child1/digestiveEyesClosed.svg';
import Child1Happy from './Default/Child1/happy.svg';
import { ReactComponent as Child1Worried } from './Default/Child1/worried.svg';
import Child2Breathe from './Default/Child2/breathe.svg';
import Child2DefaultFace from './Default/Child2/defaultFace.svg';
import { ReactComponent as Child2DigestiveEyesOpen } from './Default/Child2/digestiveEyesOpen.svg';
import { ReactComponent as Child2DigestiveEyesClosed } from './Default/Child2/digestiveEyesClosed.svg';
import Child2Happy from './Default/Child2/happy.svg';
import { ReactComponent as Child2Worried } from './Default/Child2/worried.svg';
import Child3Breathe from './Default/Child3/breathe.svg';
import Child3DefaultFace from './Default/Child3/defaultFace.svg';
import { ReactComponent as Child3DigestiveEyesOpen } from './Default/Child3/digestiveEyesOpen.svg';
import { ReactComponent as Child3DigestiveEyesClosed } from './Default/Child3/digestiveEyesClosed.svg';
import Child3Happy from './Default/Child3/happy.svg';
import { ReactComponent as Child3Worried } from './Default/Child3/worried.svg';
import Child4Breathe from './Default/Child4/breathe.svg';
import Child4DefaultFace from './Default/Child4/defaultFace.svg';
import { ReactComponent as Child4DigestiveEyesOpen } from './Default/Child4/digestiveEyesOpen.svg';
import { ReactComponent as Child4DigestiveEyesClosed } from './Default/Child4/digestiveEyesClosed.svg';
import Child4Happy from './Default/Child4/happy.svg';
import { ReactComponent as Child4Worried } from './Default/Child4/worried.svg';
import Child5Breathe from './Default/Child5/breathe.png';
import Child5DefaultFace from './Default/Child5/defaultFace.svg';
import { ReactComponent as Child5DigestiveEyesOpen } from './Default/Child5/digestiveEyesOpen.svg';
import { ReactComponent as Child5DigestiveEyesClosed } from './Default/Child5/digestiveEyesClosed.svg';
import Child5Happy from './Default/Child5/happy.svg';
import { ReactComponent as Child5Worried } from './Default/Child5/worried.svg';
import Child6Breathe from './Default/Child6/breathe.svg';
import Child6DefaultFace from './Default/Child6/defaultFace.svg';
import { ReactComponent as Child6DigestiveEyesOpen } from './Default/Child6/digestiveEyesOpen.svg';
import { ReactComponent as Child6DigestiveEyesClosed } from './Default/Child6/digestiveEyesClosed.svg';
import Child6Happy from './Default/Child6/happy.svg';
import { ReactComponent as Child6Worried } from './Default/Child6/worried.svg';

import { ReactComponent as SmockRaw } from '../XRayAssets/smock.svg';
import { ReactComponent } from '*.svg';
import Child3 from "./Child3/default.png";

const Location = process.env.REACT_APP_LOCATION;
let locationAssets: any;
if (Location === 'Atlanta') {
    locationAssets = require('./Atlanta');
}
else if (Location === 'Phoenix') {
    locationAssets = require('./Phoenix');
}
else if (Location === 'Richmond') {
    locationAssets = require('./Richmond');
}
else {
    locationAssets = require('./Dimaggio');
}

const convertToComponent = (asset: any): typeof ReactComponent => {
  const { component } = asset;
  return component as typeof ReactComponent;
}

export const Child3Standing = () => (
  <locationAssets.Child3StandingDefault height='984' width='392' />
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
  [Character.child1]: () => <locationAssets.Child1 height='984' width='392' />,
  [Character.child2]: () => <locationAssets.Child2 height='984' width='392' />,
  [Character.child3]: () => <img src={locationAssets.Child3} />,
  [Character.child4]: () => <locationAssets.Child4 height='984' width='392' />,
  [Character.child5]: () => <locationAssets.Child5 height='984' width='392' />,
  [Character.child6]: () => <locationAssets.Child6 height='984' width='392' />,
};

const DefaultCharactersRaster = {
  [Character.child1]: () => <img height='984' width='392' src={locationAssets.Child1Raster} />,
  [Character.child2]: () => <img height='984' width='392' src={locationAssets.Child2Raster} />,
  [Character.child3]: () => <img src={locationAssets.Child3} height='984' width='633' />,
  [Character.child4]: () => <img height='984' width='392' src={locationAssets.Child4Raster} />,
  [Character.child5]: () => <img height='984' width='392' src={locationAssets.Child5Raster} />,
  [Character.child6]: () => <img height='984' width='392' src={locationAssets.Child6Raster} />,
};

const WorriedCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child1 style={childStyle} />
      <Child1Worried
        style={{ position: 'absolute', width: 392, height: 327 }}
      />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child2 style={childStyle} />
      <Child2Worried
        style={{ position: 'absolute', width: 392, height: 327 }}
      />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child3} style={{ position: 'absolute' }} />
      <Child3Worried
        style={{ position: 'absolute', width: 633, height: 327 }}
      />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child4 style={childStyle} />
      <Child4Worried
        style={{ position: 'absolute', width: 392, height: 327 }}
      />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child5 style={childStyle} />
      <Child5Worried
        style={{ position: 'absolute', width: 392, height: 327 }}
      />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child6 style={childStyle} />
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
      <locationAssets.Child1SensoryDefault />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child2SensoryDefault />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child3SensoryDefault />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child4SensoryDefault />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child5SensoryDefault />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child6SensoryDefault />
    </span>
  ),
};

const HappySensoryCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child1happySensory} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child2happySensory} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child3happySensory} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child4happySensory} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child5happySensory} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child6happySensory} />
    </span>
  ),
};

const SensoryCharactersScared = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child1Scared} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child2Scared} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child3Scared} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child4Scared} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child5Scared} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child6Scared} />
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
      <img src={locationAssets.Child1Moon} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child2Moon} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child3Moon} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child4Moon} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child5Moon} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child6Moon} />
    </span>
  ),
};

const SunCharactersSensory = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child1Sun} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child2Sun} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child3Sun} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child4Sun} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child5Sun} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child6Sun} />
    </span>
  ),
};

const MouthOpenCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child1MouthOpen} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child2MouthOpen} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child3MouthOpen} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child4MouthOpen} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child5MouthOpen} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child6MouthOpen} />
    </span>
  ),
};

const DigestiveEyesOpen = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child1 style={SensoryStyle} />
      <Child1DigestiveEyesOpen style={{ ...SensoryHeadStyle, top: 7 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child2 style={SensoryStyle} />
      <Child2DigestiveEyesOpen
        style={{ ...SensoryHeadStyle, left: 8, top: 2 }}
      />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child3StandingDefault style={SensoryStyle} />
      <Child3DigestiveEyesOpen
        style={{ ...SensoryHeadStyle, left: 8, top: 2 }}
      />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child4 style={SensoryStyle} />
      <Child4DigestiveEyesOpen
        style={{ ...SensoryHeadStyle, left: 5, top: 2 }}
      />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child5 style={SensoryStyle} />
      <Child5DigestiveEyesOpen
        style={{ ...SensoryHeadStyle, left: 0, top: 2 }}
      />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child6 style={SensoryStyle} />
      <Child6DigestiveEyesOpen
        style={{ ...SensoryHeadStyle, left: 8, top: 2 }}
      />
    </span>
  ),
};

const DigestiveEyesClosed = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child1 style={SensoryStyle} />
      <Child1DigestiveEyesClosed style={{ ...SensoryHeadStyle, top: 7 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child2 style={SensoryStyle} />
      <Child2DigestiveEyesClosed
        style={{ ...SensoryHeadStyle, left: 8, top: 2 }}
      />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child3StandingDefault style={SensoryStyle} />
      <Child3DigestiveEyesClosed
        style={{ ...SensoryHeadStyle, left: 8, top: 2 }}
      />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child4 style={SensoryStyle} />
      <Child4DigestiveEyesClosed
        style={{ ...SensoryHeadStyle, left: 5, top: 2 }}
      />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child5 style={SensoryStyle} />
      <Child5DigestiveEyesClosed
        style={{ ...SensoryHeadStyle, left: 0, top: 2 }}
      />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <locationAssets.Child6 style={SensoryStyle} />
      <Child6DigestiveEyesClosed
        style={{ ...SensoryHeadStyle, left: 8, top: 2 }}
      />
    </span>
  ),
};

const HotSauceCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child1HotSauce} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child2HotSauce} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child3HotSauce} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child4HotSauce} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child5HotSauce} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child6HotSauce} />
    </span>
  ),
};

const IceCreamCharacters = {
  [Character.child1]: () => (
    <span>
      <img src={locationAssets.Child1IceCream} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child2IceCream} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child3IceCream} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child4IceCream} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child5IceCream} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child6IceCream} />
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
      <img src={locationAssets.Child1LiftFeather} height='984' width='392' />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child2LiftFeather} height='984' width='392' />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child3LiftFeather} height='984' width='392' />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child4LiftFeather} height='984' width='392' />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child5LiftFeather} height='984' width='392' />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child6LiftFeather} height='984' width='392' />
    </span>
  ),
};

const LiftWeightCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child1LiftWeight} height='984' width='392' />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child2LiftWeight} height='984' width='392' />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child3LiftWeight} height='984' width='392' />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child4LiftWeight} height='984' width='392' />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child5LiftWeight} height='984' width='392' />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <img src={locationAssets.Child6LiftWeight} height='984' width='392' />
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
  [Character.child1]: locationAssets.Child1HappyStanding,
  [Character.child2]: locationAssets.Child2HappyStanding,
  [Character.child3]: locationAssets.Child3HappyStanding,
  [Character.child4]: locationAssets.Child4HappyStanding,
  [Character.child5]: locationAssets.Child5HappyStanding,
  [Character.child6]: locationAssets.Child6HappyStanding,
};

const HitFloorCharacters = {
  [Character.child1]: () => <locationAssets.Child1HitFloor height='648' width='724' />,
  [Character.child2]: () => <locationAssets.Child2HitFloor height='648' width='724' />,
  [Character.child3]: () => <locationAssets.Child3HitFloor height='648' width='724' />,
  [Character.child4]: () => (
    <img src={locationAssets.Child4HitFloor} height='648' width='724' />
  ),
  [Character.child5]: () => <locationAssets.Child5HitFloor height='648' width='724' />,
  [Character.child6]: () => <locationAssets.Child6HitFloor height='648' width='724' />,
};

const ProtectionCharacters = {
  [Character.child1]: locationAssets.Child1Protection,
  [Character.child2]: locationAssets.Child2Protection,
  [Character.child3]: locationAssets.Child3Protection,
  [Character.child4]: locationAssets.Child4Protection,
  [Character.child5]: locationAssets.Child5Protection,
  [Character.child6]: locationAssets.Child6Protection,
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
