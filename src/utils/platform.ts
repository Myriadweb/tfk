export const isElectron = (): boolean => {
  return !!(window && window.process && (window.process as any).type);
};

export const isPWA = (): boolean => {
  return window.matchMedia('(display-mode: standalone)').matches;
};

export const isIOS = (): boolean => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export const isSafari = (): boolean => {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};
