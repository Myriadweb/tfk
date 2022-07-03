import React, { Context, Dispatch, SetStateAction } from 'react';

export enum Character {
  'child_1',
  'child_2',
  'child_3',
  'child_4',
  'child_5',
  'child_6',
  'child_7',
  'child_8',
}

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
  const [character, setCharacter] = React.useState(Character.child_1);

  return (
    <CharacterContext.Provider value={[character, setCharacter]}>
      {children}
    </CharacterContext.Provider>
  );
};
