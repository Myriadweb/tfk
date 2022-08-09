import React, { Context, Dispatch, SetStateAction } from 'react';
import { ReactComponent as Child1 } from '../components/scene/SharedAssets/child1.svg';
import { ReactComponent as Child2 } from '../components/scene/SharedAssets/child2.svg';
import Child3 from '../components/scene/SharedAssets/child3.png';
import { ReactComponent as Child4 } from '../components/scene/SharedAssets/child4.svg';
import { ReactComponent as Child5 } from '../components/scene/SharedAssets/child5.svg';
import { ReactComponent as SmockRaw } from '../components/scene/XRayAssets/smock.svg';
import { ReactComponent as Child1Worried } from '../components/scene/SharedAssets/1Worried.svg';
import { ReactComponent as Child2Worried } from '../components/scene/SharedAssets/2Worried.svg';
import { ReactComponent as Child3Worried } from '../components/scene/SharedAssets/3Worried.svg';
import { ReactComponent as Child4Worried } from '../components/scene/SharedAssets/4Worried.svg';
import { ReactComponent as Child5Worried } from '../components/scene/SharedAssets/5Worried.svg';

export enum Character {
  'child1',
  'child2',
  'child3',
  'child4',
  'child5',
}

const childWidthInternal = {
  [Character.child3]: 633,
};

export const childWidth = new Proxy(childWidthInternal, {
  get(object, prop) {
    return object[prop] || 392;
  },
});

const Smock = () => (
  <SmockRaw style={{ position: 'absolute', top: 332, left: 66 }} />
);

const childStyle = { height: 984, width: 392, position: 'absolute', top: 0 };

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
};

export const Characters: {
  default: { [key in Character]: React.FC };
  worried: { [key in Character]: React.FC };
  smock: { [key in Character]: React.FC };
} = {
  default: {
    [Character.child1]: () => <Child1 height='984' width='392' />,
    [Character.child2]: () => <Child2 height='984' width='392' />,
    [Character.child3]: () => <img src={Child3} />,
    [Character.child4]: () => <Child4 height='984' width='392' />,
    [Character.child5]: () => <Child5 height='984' width='392' />,
  },
  worried: WorriedCharacters,
  smock: {
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
  },
};

export const CharacterArray = Object.values(Character).slice(
  0,
  Object.values(Character).length / 2
);

// eslint-disable-next-line @typescript-eslint/no-empty-function
const CharacterContext: Context<
  [Character, Dispatch<SetStateAction<Character>>]
> =
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  React.createContext();

type CharacterContextProviderProps = {
  children: React.ReactNode;
};

export const useCharacterContext = () => {
  return React.useContext(CharacterContext);
};

export const CharacterContextProvider = ({
  children,
}: CharacterContextProviderProps) => {
  const [character, setCharacter] = React.useState(Character.child1);

  return (
    <CharacterContext.Provider value={[character, setCharacter]}>
      {children}
    </CharacterContext.Provider>
  );
};
