// project/src/hooks/useDebugStep.ts
import { useEffect } from 'react';

export function useDebugStep(setStep: any, step: any, value: any) {
  useEffect(() => {
    (window as any).debugSetStep = setStep;
    (window as any).debugGetState = () => ({ step, value });
  }, [setStep, step, value]);
}
