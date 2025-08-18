// Current dimensions: 1080h x 820w -> Target: 1180h x 820w
export const SCALE_FACTORS = {
    x:  0.759,    // 820/1080
    y: 0.614,  // 1180/1920
    avg: 0.686 // Average for fonts/general scaling
};

export const screenScale = {
    x: (value: number) => Math.round(value * SCALE_FACTORS.x),
    y: (value: number) => Math.round(value * SCALE_FACTORS.y),
    avg: (value: number) => Math.round(value * SCALE_FACTORS.avg),
    both: (x: number, y: number) => ({
        x: Math.round(x * SCALE_FACTORS.x),
        y: Math.round(y * SCALE_FACTORS.y)
    })
};
