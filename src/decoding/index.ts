export const levelToBouty = (level: number): number => {
    return ((level - 1) / 0.0111) ** 2;
};

export function decodeMinimapCoords(x: number, y: number): { x: number, y: number } {
    return {
        x: 128 * x - 16384 + 64,
        y: clamp(128 * y - 16384, -8192, 8192) + 64
    };
}

function clamp(value: number, lower: number, upper: number) {
    if (value <= lower) {
        return lower;
    }
    if (value >= upper) {
        return upper;
    }
    return value;
}

export default levelToBouty;
