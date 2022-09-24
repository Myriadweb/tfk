import React, { Context, Dispatch, SetStateAction } from 'react';

export enum Character {
  'child1',
  'child2',
  'child3',
  'child4',
  'child5',
  'child6',
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const CharacterContext: Context<[number, Dispatch<SetStateAction<Character>>]> =
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
