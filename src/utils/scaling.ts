// Device configuration object
const DEVICE_CONFIGS = {
  desktop: {
    baseWidth: 1080,
    baseHeight: 1920,
    targetWidth: 1080,
    targetHeight: 1920,
  },
  'ipad-pro-13': {
    baseWidth: 1080,
    baseHeight: 1920,
    targetWidth: 1032, // 2064 / 2
    targetHeight: 1360, // 2752 / 2
  },
  'ipad-pro-11': {
    baseWidth: 1080,
    baseHeight: 1920,
    targetWidth: 950, // Example values
    targetHeight: 1300,
  },
  // Easy to add more devices
  'android-tablet': {
    baseWidth: 1080,
    baseHeight: 1920,
    targetWidth: 1000,
    targetHeight: 1400,
  },
} as const;

// Get current device from environment
const device =
  (process.env.REACT_APP_DEVICE as keyof typeof DEVICE_CONFIGS) || 'desktop';
const config = DEVICE_CONFIGS[device];

// Calculate scale factors dynamically
const scaleX = config.targetWidth / config.baseWidth;
const scaleY = config.targetHeight / config.baseHeight;
const scaleAvg = (scaleX + scaleY) / 2;

export const SCALE_FACTORS = {
  x: scaleX,
  y: scaleY,
  avg: scaleAvg,
};

export const screenScale = {
  x: (value: number) => Math.round(value * SCALE_FACTORS.x),
  y: (value: number) => Math.round(value * SCALE_FACTORS.y),
  avg: (value: number) => Math.round(value * SCALE_FACTORS.avg),
  both: (x: number, y: number) => ({
    x: Math.round(x * SCALE_FACTORS.x),
    y: Math.round(y * SCALE_FACTORS.y),
  }),
};

export const elementPosition = {
  left: (value: number, direction: '+' | '-' = '+') =>
    direction === '+'
      ? value + (config.targetWidth - screenScale.y(config.targetWidth)) / 2
      : value - (config.targetWidth - screenScale.y(config.targetWidth)) / 2,
  top: (value: number, direction: '+' | '-' = '+') =>
    direction === '+'
      ? value + (config.targetHeight - screenScale.y(config.targetHeight)) / 2
      : value - (config.targetHeight - screenScale.y(config.targetHeight)) / 2,
};

// Function to set CSS custom properties
export const setCSSScaleVariables = () => {
  const root = document.documentElement;
  root.style.setProperty('--scale-x', SCALE_FACTORS.x.toString());
  root.style.setProperty('--scale-y', SCALE_FACTORS.y.toString());
  root.style.setProperty('--scale-avg', SCALE_FACTORS.avg.toString());
};

// Export current device info for debugging
export const getCurrentDevice = () => ({
  device,
  config,
  scaleFactors: SCALE_FACTORS,
});
