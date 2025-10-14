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

export const isDesktopApp = (): boolean => {
  // Check for Electron
  if (window && window.process && (window.process as any).type) {
    return true;
  }

  // Check for Tauri (newer versions use __TAURI_INTERNALS__)
  if (
    window &&
    ((window as any).__TAURI_INTERNALS__ ||
      (window as any).__TAURI_EVENT_PLUGIN_INTERNALS__)
  ) {
    return true;
  }

  return false;
};

export const isTauri = (): boolean => {
  return !!(window && (window as any).__TAURI__);
};
