import React, { Context, Dispatch, SetStateAction } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const AnimateContext: Context<[string, Dispatch<SetStateAction<string>>]> =
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  React.createContext();

type AnimateContextProviderProps = {
  children: React.ReactNode;
};

export const useAnimateContext = () => {
  return React.useContext(AnimateContext);
};

export const AnimateContextProvider = ({
  children,
}: AnimateContextProviderProps) => {
  const [animationPath, setAnimationPath] = React.useState('');

  return (
    <AnimateContext.Provider value={[animationPath, setAnimationPath]}>
      {children}
    </AnimateContext.Provider>
  );
};
