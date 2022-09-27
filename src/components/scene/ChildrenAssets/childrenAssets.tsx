import React, { CSSProperties } from 'react';
import { Character } from '../../../state/character';

import { ReactComponent as Child1 } from './Child1/default.svg';
import { ReactComponent as Child1Worried } from './Child1/worried.svg';
import { ReactComponent as Child1Happy } from './Child1/happy.svg';
import { ReactComponent as Child1Pain } from './Child1/pain.svg';
import { ReactComponent as Child1Scared } from './Child1/scared.svg';
import { ReactComponent as Child1Moon } from './Child1/moon.svg';
import { ReactComponent as Child1Sun } from './Child1/sun.svg';
import { ReactComponent as Child1HotSauce } from './Child1/hotSauce.svg';
import { ReactComponent as Child1IceCream } from './Child1/iceCream.svg';
import { ReactComponent as Child1MouthOpen } from './Child1/mouthOpen.svg';
import { ReactComponent as Child1LiftFeatherBody } from './Child1/liftFeather.svg';
import { ReactComponent as Child1LiftWeightBody } from './Child1/liftWeight.svg';
import Child1Breathe from './Child1/breathe.png';
import { ReactComponent as Child1HitFloor } from './Child1/hitFloor.svg';
import Child1Protection from './Child1/protection.svg';
import { ReactComponent as Child1HappyStanding } from './Child1/happyStanding.svg';
import { ReactComponent as Child1DigestiveEyesOpen } from './Child1/digestiveEyesOpen.svg';
import { ReactComponent as Child1DigestiveEyesClosed } from './Child1/digestiveEyesClosed.svg';

import { ReactComponent as Child2 } from './Child2/default.svg';
import { ReactComponent as Child2Worried } from './Child2/worried.svg';
import { ReactComponent as Child2Happy } from './Child2/happy.svg';
import { ReactComponent as Child2Pain } from './Child2/pain.svg';
import { ReactComponent as Child2Scared } from './Child2/scared.svg';
import { ReactComponent as Child2Moon } from './Child2/moon.svg';
import { ReactComponent as Child2Sun } from './Child2/sun.svg';
import { ReactComponent as Child2HotSauce } from './Child2/hotSauce.svg';
import { ReactComponent as Child2IceCream } from './Child2/iceCream.svg';
import { ReactComponent as Child2MouthOpen } from './Child2/mouthOpen.svg';
import { ReactComponent as Child2LiftFeatherBody } from './Child2/liftFeather.svg';
import { ReactComponent as Child2LiftWeightBody } from './Child2/liftWeight.svg';
import Child2Breathe from './Child2/breathe.svg';
import { ReactComponent as Child2HitFloor } from './Child2/hitFloor.svg';
import Child2Protection from './Child2/protection.svg';
import { ReactComponent as Child2HappyStanding } from './Child2/happyStanding.svg';
import { ReactComponent as Child2DigestiveEyesOpen } from './Child2/digestiveEyesOpen.svg';
import { ReactComponent as Child2DigestiveEyesClosed } from './Child2/digestiveEyesClosed.svg';

import Child3 from './Child3/default.png';
import { ReactComponent as Child3Worried } from './Child3/worried.svg';
import { ReactComponent as Child3Standing } from './Child3/standing.svg';
import { ReactComponent as Child3Happy } from './Child3/happy.svg';
import { ReactComponent as Child3Pain } from './Child3/pain.svg';
import { ReactComponent as Child3Scared } from './Child3/scared.svg';
import { ReactComponent as Child3Moon } from './Child3/moon.svg';
import { ReactComponent as Child3Sun } from './Child3/sun.svg';
import { ReactComponent as Child3HotSauce } from './Child3/hotSauce.svg';
import { ReactComponent as Child3IceCream } from './Child3/iceCream.svg';
import { ReactComponent as Child3MouthOpen } from './Child3/mouthOpen.svg';
import Child3LiftFeatherBody from './Child3/liftFeather.png';
import Child3LiftWeightBody from './Child3/liftWeight.png';
import Child3Breathe from './Child3/breathe.svg';
import { ReactComponent as Child3HitFloor } from './Child3/hitFloor.svg';
import Child3Protection from './Child3/protection.svg';
import { ReactComponent as Child3HappyStanding } from './Child3/happyStanding.svg';
import { ReactComponent as Child3DigestiveEyesOpen } from './Child3/digestiveEyesOpen.svg';
import { ReactComponent as Child3DigestiveEyesClosed } from './Child3/digestiveEyesClosed.svg';

import { ReactComponent as Child4 } from './Child4/default.svg';
import { ReactComponent as Child4Worried } from './Child4/worried.svg';
import { ReactComponent as Child4Happy } from './Child4/happy.svg';
import { ReactComponent as Child4Pain } from './Child4/pain.svg';
import { ReactComponent as Child4Scared } from './Child4/scared.svg';
import { ReactComponent as Child4Moon } from './Child4/moon.svg';
import { ReactComponent as Child4Sun } from './Child4/sun.svg';
import { ReactComponent as Child4HotSauce } from './Child4/hotSauce.svg';
import { ReactComponent as Child4IceCream } from './Child4/iceCream.svg';
import { ReactComponent as Child4MouthOpen } from './Child4/mouthOpen.svg';
import { ReactComponent as Child4LiftFeatherBody } from './Child4/liftFeather.svg';
import { ReactComponent as Child4LiftWeightBody } from './Child4/liftWeight.svg';
import Child4Breathe from './Child4/breathe.svg';
import { ReactComponent as Child4HitFloor } from './Child4/hitFloor.svg';
import Child4Protection from './Child4/protection.svg';
import { ReactComponent as Child4HappyStanding } from './Child4/happyStanding.svg';
import { ReactComponent as Child4DigestiveEyesOpen } from './Child4/digestiveEyesOpen.svg';
import { ReactComponent as Child4DigestiveEyesClosed } from './Child4/digestiveEyesClosed.svg';

import { ReactComponent as Child5 } from './Child5/default.svg';
import { ReactComponent as Child5Worried } from './Child5/worried.svg';
import { ReactComponent as Child5Happy } from './Child5/happy.svg';
import { ReactComponent as Child5Pain } from './Child5/pain.svg';
import { ReactComponent as Child5Scared } from './Child5/scared.svg';
import { ReactComponent as Child5Moon } from './Child5/moon.svg';
import { ReactComponent as Child5Sun } from './Child5/sun.svg';
import { ReactComponent as Child5HotSauce } from './Child5/hotSauce.svg';
import { ReactComponent as Child5IceCream } from './Child5/iceCream.svg';
import { ReactComponent as Child5MouthOpen } from './Child5/mouthOpen.svg';
import { ReactComponent as Child5LiftFeatherBody } from './Child5/liftFeather.svg';
import { ReactComponent as Child5LiftWeightBody } from './Child5/liftWeight.svg';
import Child5Breathe from './Child5/breathe.png';
import { ReactComponent as Child5HitFloor } from './Child5/hitFloor.svg';
import Child5Protection from './Child5/protection.svg';
import { ReactComponent as Child5HappyStanding } from './Child5/happyStanding.svg';
import { ReactComponent as Child5DigestiveEyesOpen } from './Child5/digestiveEyesOpen.svg';
import { ReactComponent as Child5DigestiveEyesClosed } from './Child5/digestiveEyesClosed.svg';

import { ReactComponent as Child6 } from './Child6/default.svg';
import { ReactComponent as Child6Worried } from './Child6/worried.svg';
import { ReactComponent as Child6Happy } from './Child6/happy.svg';
import { ReactComponent as Child6Pain } from './Child6/pain.svg';
import { ReactComponent as Child6Scared } from './Child6/scared.svg';
import { ReactComponent as Child6Moon } from './Child6/moon.svg';
import { ReactComponent as Child6Sun } from './Child6/sun.svg';
import { ReactComponent as Child6HotSauce } from './Child6/hotSauce.svg';
import { ReactComponent as Child6IceCream } from './Child6/iceCream.svg';
import { ReactComponent as Child6MouthOpen } from './Child6/mouthOpen.svg';
import { ReactComponent as Child6LiftFeatherBody } from './Child6/liftFeather.svg';
import { ReactComponent as Child6LiftWeightBody } from './Child6/liftWeight.svg';
import Child6Breathe from './Child6/breathe.svg';
import { ReactComponent as Child6HitFloor } from './Child6/hitFloor.svg';
import Child6Protection from './Child6/protection.svg';
import { ReactComponent as Child6HappyStanding } from './Child6/happyStanding.svg';
import { ReactComponent as Child6DigestiveEyesOpen } from './Child6/digestiveEyesOpen.svg';
import { ReactComponent as Child6DigestiveEyesClosed } from './Child6/digestiveEyesClosed.svg';

import { ReactComponent as SmockRaw } from '../XRayAssets/smock.svg';

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

const childStyle = { height: 984, width: 392, position: 'absolute', top: 0 };

const DefaultCharacters = {
  [Character.child1]: () => <Child1 height='984' width='392' />,
  [Character.child2]: () => <Child2 height='984' width='392' />,
  [Character.child3]: () => <img src={Child3} />,
  [Character.child4]: () => <Child4 height='984' width='392' />,
  [Character.child5]: () => <Child5 height='984' width='392' />,
  [Character.child6]: () => <Child6 height='984' width='392' />,
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

const SensoryStyle = { width: 784, height: 1942, position: 'absolute', top: 0 };
const SensoryHeadStyle = { position: 'absolute', width: 784, height: 616 };

const SensoryCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <Child1 style={SensoryStyle} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2 style={SensoryStyle} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <Child3Standing style={SensoryStyle} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4 style={SensoryStyle} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5 style={SensoryStyle} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6 style={SensoryStyle} />
    </span>
  ),
};

const HappySensoryCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <Child1 style={SensoryStyle} />
      <Child1Happy style={{ ...SensoryHeadStyle, top: 7 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2 style={SensoryStyle} />
      <Child2Happy style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <Child3Standing style={SensoryStyle} />
      <Child3Happy style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4 style={SensoryStyle} />
      <Child4Happy style={{ ...SensoryHeadStyle, left: 5, top: 2 }} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5 style={SensoryStyle} />
      <Child5Happy style={{ ...SensoryHeadStyle, left: 0, top: 2 }} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6 style={SensoryStyle} />
      <Child6Happy style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
};

const SensoryCharactersScared = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <Child1 style={SensoryStyle} />
      <Child1Scared style={{ ...SensoryHeadStyle, top: 7 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2 style={SensoryStyle} />
      <Child2Scared style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <Child3Standing style={SensoryStyle} />
      <Child3Scared style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4 style={SensoryStyle} />
      <Child4Scared style={{ ...SensoryHeadStyle, left: 5, top: 2 }} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5 style={SensoryStyle} />
      <Child5Scared style={{ ...SensoryHeadStyle, left: 0, top: 2 }} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6 style={SensoryStyle} />
      <Child6Scared style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
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
    <span style={{ position: 'relative' }}>
      <Child1 style={SensoryStyle} />
      <Child1Moon style={{ ...SensoryHeadStyle, top: 7 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2 style={SensoryStyle} />
      <Child2Moon style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <Child3Standing style={SensoryStyle} />
      <Child3Moon style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4 style={SensoryStyle} />
      <Child4Moon style={{ ...SensoryHeadStyle, left: 5, top: 2 }} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5 style={SensoryStyle} />
      <Child5Moon style={{ ...SensoryHeadStyle, left: 0, top: 2 }} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6 style={SensoryStyle} />
      <Child6Moon style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
};

const SunCharactersSensory = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <Child1 style={SensoryStyle} />
      <Child1Sun style={{ ...SensoryHeadStyle, top: 7 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2 style={SensoryStyle} />
      <Child2Sun style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <Child3Standing style={SensoryStyle} />
      <Child3Sun style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4 style={SensoryStyle} />
      <Child4Sun style={{ ...SensoryHeadStyle, left: 5, top: 2 }} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5 style={SensoryStyle} />
      <Child5Sun style={{ ...SensoryHeadStyle, left: 0, top: 2 }} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6 style={SensoryStyle} />
      <Child6Sun style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
};

const MouthOpenCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <Child1 style={SensoryStyle} />
      <Child1MouthOpen style={{ ...SensoryHeadStyle, top: 7 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2 style={SensoryStyle} />
      <Child2MouthOpen style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <Child3Standing style={SensoryStyle} />
      <Child3MouthOpen style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4 style={SensoryStyle} />
      <Child4MouthOpen style={{ ...SensoryHeadStyle, left: 5, top: 2 }} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5 style={SensoryStyle} />
      <Child5MouthOpen style={{ ...SensoryHeadStyle, left: 0, top: 2 }} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6 style={SensoryStyle} />
      <Child6MouthOpen style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
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
      <Child3Standing style={SensoryStyle} />
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
      <Child3Standing style={SensoryStyle} />
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
      <Child1 style={SensoryStyle} />
      <Child1HotSauce style={{ ...SensoryHeadStyle, top: 7 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2 style={SensoryStyle} />
      <Child2HotSauce style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <Child3Standing style={SensoryStyle} />
      <Child3HotSauce style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4 style={SensoryStyle} />
      <Child4HotSauce style={{ ...SensoryHeadStyle, left: 5, top: 2 }} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5 style={SensoryStyle} />
      <Child5HotSauce style={{ ...SensoryHeadStyle, left: 0, top: 2 }} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6 style={SensoryStyle} />
      <Child6HotSauce style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
};

const IceCreamCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <Child1 style={SensoryStyle} />
      <Child1IceCream style={{ ...SensoryHeadStyle, top: 7 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2 style={SensoryStyle} />
      <Child2IceCream style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <Child3Standing style={SensoryStyle} />
      <Child3IceCream style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4 style={SensoryStyle} />
      <Child4IceCream style={{ ...SensoryHeadStyle, left: 5, top: 2 }} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5 style={SensoryStyle} />
      <Child5IceCream style={{ ...SensoryHeadStyle, left: 0, top: 2 }} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6 style={SensoryStyle} />
      <Child6IceCream style={{ ...SensoryHeadStyle, left: 8, top: 2 }} />
    </span>
  ),
};

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

const LiftFeatherCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <Child1LiftFeatherBody style={liftFeatherStyle} />
      <Child1Happy style={{ ...vestibularHeadStyle, top: 7 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2LiftFeatherBody style={liftFeatherStyle} />
      <Child2Happy style={{ ...vestibularHeadStyle, top: 5, left: 2 }} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img
        src={Child3LiftFeatherBody}
        style={{
          ...liftFeatherStyle,
          width: 633,
          height: 756,
          top: 226,
          left: -95,
        }}
      />
      <Child3Happy
        style={{
          ...vestibularHeadStyle,
          top: 5,
          width: 306,
          height: 307,
          left: 70,
        }}
      />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4LiftFeatherBody style={liftFeatherStyle} />
      <Child4Happy style={{ ...vestibularHeadStyle, top: 5 }} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5LiftFeatherBody style={liftFeatherStyle} />
      <Child5Happy style={{ ...vestibularHeadStyle, top: 5 }} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6LiftFeatherBody style={liftFeatherStyle} />
      <Child6Happy style={{ ...vestibularHeadStyle, top: 5, left: 2 }} />
    </span>
  ),
};

const LiftWeightCharacters = {
  [Character.child1]: () => (
    <span style={{ position: 'relative' }}>
      <Child1LiftWeightBody style={liftFeatherStyle} />
      <Child1Pain style={{ ...vestibularHeadStyle, top: 8, left: -12 }} />
    </span>
  ),
  [Character.child2]: () => (
    <span style={{ position: 'relative' }}>
      <Child2LiftWeightBody style={liftFeatherStyle} />
      <Child2Pain style={{ ...vestibularHeadStyle, top: 5, left: -8 }} />
    </span>
  ),
  [Character.child3]: () => (
    <span style={{ position: 'relative' }}>
      <img
        src={Child3LiftWeightBody}
        style={{
          ...liftFeatherStyle,
          width: 633,
          height: 756,
          top: 226,
          left: -105,
        }}
      />
      <Child3Pain
        style={{
          ...vestibularHeadStyle,
          top: 5,
          width: 306,
          height: 307,
          left: 60,
        }}
      />
    </span>
  ),
  [Character.child4]: () => (
    <span style={{ position: 'relative' }}>
      <Child4LiftWeightBody style={liftFeatherStyle} />
      <Child4Pain style={{ ...vestibularHeadStyle, top: 5, left: -8 }} />
    </span>
  ),
  [Character.child5]: () => (
    <span style={{ position: 'relative' }}>
      <Child5LiftWeightBody style={liftFeatherStyle} />
      <Child5Pain style={{ ...vestibularHeadStyle, top: 5, left: -8 }} />
    </span>
  ),
  [Character.child6]: () => (
    <span style={{ position: 'relative' }}>
      <Child6LiftWeightBody style={liftFeatherStyle} />
      <Child6Pain style={{ ...vestibularHeadStyle, top: 5, left: -8 }} />
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
  [Character.child4]: () => <Child4HitFloor height='648' width='724' />,
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
  happy: HappyCharacters,
  digestiveEyesOpen: DigestiveEyesOpen,
  digestiveEyesClosed: DigestiveEyesClosed,
};
