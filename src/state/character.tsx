import React, { Context, Dispatch, SetStateAction } from 'react';

type Character =
  | 'child_1'
  | 'child_2'
  | 'child_3'
  | 'child_4'
  | 'child_5'
  | 'child_6'
  | 'child_7'
  | 'child_8';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const CharacterContext: Context<[string, Dispatch<SetStateAction<Character>>]> =
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  React.createContext(['child_1', () => {}]);

type CharacterContextProviderProps = {
  children: React.ReactNode;
};

export const useCharacterContext = () => {
  const cawk = React.useContext(CharacterContext);
  console.debug(cawk);
  return cawk;
};

export const CharacterContextProvider = ({
  children,
}: CharacterContextProviderProps) => {
  const [character, setCharacter] = React.useState<Character>('child_1');

  return (
    <CharacterContext.Provider value={[character, setCharacter]}>
      {children}
    </CharacterContext.Provider>
  );
};
