// Current dimensions: 1080h x 820w -> Target: 1180h x 820w
export const SCALE_FACTORS = {
  x: 0.955, // 1032/1080 (2064 / 2 = 1032)
  y: 0.717, // 1376/1920 (2752 / 2 = 1376)
  avg: 0.835, // Average for fonts/general scaling
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
