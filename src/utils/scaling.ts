// Current dimensions: 1080h x 820w -> Target: 1180h x 820w
export const SCALE_FACTORS = {
  x: 1, // 820/1080
  y: 1, // 1180/1920
  avg: 1, // Average for fonts/general scaling
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
