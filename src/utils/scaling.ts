import { DEVICE } from '../config';

// Device configuration object
const BASE_WIDTH = 1080;
const BASE_HEIGHT = 1920;

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
  'surface-pro': {
    baseWidth: 1080,
    baseHeight: 1920,
    targetWidth: 960,
    targetHeight: 1440,
  },
} as const

// Get current device from environment
const device = (DEVICE as keyof typeof DEVICE_CONFIGS) || 'desktop';
const config = DEVICE_CONFIGS[device];

// calculate viewport dimensions
const viewportWidth = DEVICE !== 'desktop' ? window.innerWidth : BASE_WIDTH;
const viewportHeight = DEVICE !== 'desktop' ? window.innerHeight : BASE_HEIGHT;
console.log('viewportWidth', viewportWidth);
console.log('viewportHeight', viewportHeight);

// Calculate scale factors dynamically
const scaleX = viewportWidth / BASE_WIDTH;
const scaleY = viewportHeight / BASE_HEIGHT;
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
      ? value + (viewportWidth - screenScale.y(viewportWidth)) / 2
      : value - (viewportWidth - screenScale.y(viewportWidth)) / 2,
  top: (value: number, direction: '+' | '-' = '+') =>
    direction === '+'
      ? value + (viewportHeight - screenScale.y(viewportHeight)) / 2
      : value - (viewportHeight - screenScale.y(viewportHeight)) / 2,
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
