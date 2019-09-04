import { MAP_SIZE } from '../types/server';

const clamp = (value: number, lower: number, upper: number): number => {
  if (value <= lower) {
    return lower;
  }

  if (value >= upper) {
    return upper;
  }

  return value;
};

export const levelToBouty = (level: number): number => {
  return ((level - 1) / 0.0111) ** 2;
};

export const decodeMinimapCoords = (x: number, y: number): { x: number; y: number } => {
  return {
    x: 128 * x - MAP_SIZE.WIDTH / 2 + 64,
    y: clamp(128 * y - MAP_SIZE.HEIGHT, -MAP_SIZE.HEIGHT / 2, MAP_SIZE.HEIGHT / 2) + 64,
  };
};

export default levelToBouty;
