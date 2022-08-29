import React, { CSSProperties } from 'react';
import { Character } from '../../../state/character';

import { ReactComponent as Child1 } from './Child1/default.svg';
import { ReactComponent as Child1Neutral } from './Child1/defaultFace.svg';
import { ReactComponent as Child1Worried } from './Child1/worried.svg';
import { ReactComponent as Child1Happy } from './Child1/happy.svg';
import { ReactComponent as Child1Pain } from './Child1/pain.svg';
import { ReactComponent as Child1Scared } from './Child1/scared.svg';
import { ReactComponent as Child1Moon } from './Child1/moon.svg';
import { ReactComponent as Child1Sun } from './Child1/sun.svg';
import { ReactComponent as Child1HotSauce } from './Child1/hotSauce.svg';
import { ReactComponent as Child1IceCream } from './Child1/iceCream.svg';
import { ReactComponent as Child1MouthOpen } from './Child1/mouthOpen.svg';
import { ReactComponent as Child1MouthClosed } from './Child1/mouthClosed.svg';
import { ReactComponent as Child1LiftFeatherBody } from './Child1/liftFeather.svg';
import { ReactComponent as Child1LiftWeightBody } from './Child1/liftWeight.svg';

import { ReactComponent as Child2 } from './Child2/default.svg';
import { ReactComponent as Child2Worried } from './Child2/worried.svg';
import { ReactComponent as Child2Neutral } from './Child2/defaultFace.svg';
import { ReactComponent as Child2Happy } from './Child2/happy.svg';
import { ReactComponent as Child2Pain } from './Child2/pain.svg';
import { ReactComponent as Child2Scared } from './Child2/scared.svg';
import { ReactComponent as Child2Moon } from './Child2/moon.svg';
import { ReactComponent as Child2Sun } from './Child2/sun.svg';
import { ReactComponent as Child2HotSauce } from './Child2/hotSauce.svg';
import { ReactComponent as Child2IceCream } from './Child2/iceCream.svg';
import { ReactComponent as Child2MouthOpen } from './Child2/mouthOpen.svg';
import { ReactComponent as Child2MouthClosed } from './Child2/mouthClosed.svg';
import { ReactComponent as Child2LiftFeatherBody } from './Child2/liftFeather.svg';
import { ReactComponent as Child2LiftWeightBody } from './Child2/liftWeight.svg';

import Child3 from './Child3/default.png';
import { ReactComponent as Child3Worried } from './Child3/worried.svg';
import { ReactComponent as Child3Standing } from './Child3/standing.svg';
import { ReactComponent as Child3Neutral } from './Child3/defaultFace.svg';
import { ReactComponent as Child3Happy } from './Child3/happy.svg';
import { ReactComponent as Child3Pain } from './Child3/pain.svg';
import { ReactComponent as Child3Scared } from './Child3/scared.svg';
import { ReactComponent as Child3Moon } from './Child3/moon.svg';
import { ReactComponent as Child3Sun } from './Child3/sun.svg';
import { ReactComponent as Child3HotSauce } from './Child3/hotSauce.svg';
import { ReactComponent as Child3IceCream } from './Child3/iceCream.svg';
import { ReactComponent as Child3MouthOpen } from './Child3/mouthOpen.svg';
import { ReactComponent as Child3MouthClosed } from './Child3/mouthClosed.svg';
import Child3LiftFeatherBody from './Child3/liftFeather.png';
import Child3LiftWeightBody from './Child3/liftWeight.png';

import { ReactComponent as Child4 } from './Child4/default.svg';
import { ReactComponent as Child4Worried } from './Child4/worried.svg';
import { ReactComponent as Child4Neutral } from './Child4/defaultFace.svg';
import { ReactComponent as Child4Happy } from './Child4/happy.svg';
import { ReactComponent as Child4Pain } from './Child4/pain.svg';
import { ReactComponent as Child4Scared } from './Child4/scared.svg';
import { ReactComponent as Child4Moon } from './Child4/moon.svg';
import { ReactComponent as Child4Sun } from './Child4/sun.svg';
import { ReactComponent as Child4HotSauce } from './Child4/hotSauce.svg';
import { ReactComponent as Child4IceCream } from './Child4/iceCream.svg';
import { ReactComponent as Child4MouthOpen } from './Child4/mouthOpen.svg';
import { ReactComponent as Child4MouthClosed } from './Child4/mouthClosed.svg';
import { ReactComponent as Child4LiftFeatherBody } from './Child4/liftFeather.svg';
import { ReactComponent as Child4LiftWeightBody } from './Child4/liftWeight.svg';

import { ReactComponent as Child5 } from './Child5/default.svg';
import { ReactComponent as Child5Worried } from './Child5/worried.svg';
import { ReactComponent as Child5Neutral } from './Child5/defaultFace.svg';
import { ReactComponent as Child5Happy } from './Child5/happy.svg';
import { ReactComponent as Child5Pain } from './Child5/pain.svg';
import { ReactComponent as Child5Scared } from './Child5/scared.svg';
import { ReactComponent as Child5Moon } from './Child5/moon.svg';
import { ReactComponent as Child5Sun } from './Child5/sun.svg';
import { ReactComponent as Child5HotSauce } from './Child5/hotSauce.svg';
import { ReactComponent as Child5IceCream } from './Child5/iceCream.svg';
import { ReactComponent as Child5MouthOpen } from './Child5/mouthOpen.svg';
import { ReactComponent as Child5MouthClosed } from './Child5/mouthClosed.svg';
import { ReactComponent as Child5LiftFeatherBody } from './Child5/liftFeather.svg';
import { ReactComponent as Child5LiftWeightBody } from './Child5/liftWeight.svg';

import { ReactComponent as Child6 } from './Child6/default.svg';
import { ReactComponent as Child6Worried } from './Child6/worried.svg';
import { ReactComponent as Child6Neutral } from './Child6/defaultFace.svg';
import { ReactComponent as Child6Happy } from './Child6/happy.svg';
import { ReactComponent as Child6Pain } from './Child6/pain.svg';
import { ReactComponent as Child6Scared } from './Child6/scared.svg';
import { ReactComponent as Child6Moon } from './Child6/moon.svg';
import { ReactComponent as Child6Sun } from './Child6/sun.svg';
import { ReactComponent as Child6HotSauce } from './Child6/hotSauce.svg';
import { ReactComponent as Child6IceCream } from './Child6/iceCream.svg';
import { ReactComponent as Child6MouthOpen } from './Child6/mouthOpen.svg';
import { ReactComponent as Child6MouthClosed } from './Child6/mouthClosed.svg';
import { ReactComponent as Child6LiftFeatherBody } from './Child6/liftFeather.svg';
import { ReactComponent as Child6LiftWeightBody } from './Child6/liftWeight.svg';

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
};
