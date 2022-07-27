import React, { Context, Dispatch, SetStateAction } from 'react';

type Procedure = {
  step: number,
  value?: string,
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ProcedureContext: Context<[Procedure, Dispatch<SetStateAction<Procedure>>]> =
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  React.createContext();

type ProcedureContextProviderProps = {
  children: React.ReactNode;
};

export const useProcedureContext = () => {
  return React.useContext(ProcedureContext);
};

export const ProcedureContextProvider = ({
  children,
}: ProcedureContextProviderProps) => {
  const [procedurePath, setProcedurePath] = React.useState({ step: 0 });

  return (
    <ProcedureContext.Provider value={[procedurePath, setProcedurePath]}>
      {children}
    </ProcedureContext.Provider>
  );
};
