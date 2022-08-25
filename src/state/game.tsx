import React, { Context, Dispatch, SetStateAction } from 'react';

type Game = {
  step: number;
  value?: any;
  hideButtons?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const GameContext: Context<[Game, Dispatch<SetStateAction<Game>>]> =
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  React.createContext();

type GameContextProviderProps = {
  children: React.ReactNode;
};

export const useGameContext = () => {
  return React.useContext(GameContext);
};

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [gamePath, setGamePath] = React.useState({ step: 0 });

  return (
    <GameContext.Provider value={[gamePath, setGamePath]}>
      {children}
    </GameContext.Provider>
  );
};
