export const levelToBouty = (level: number): number => {
  return ((level - 1) / 0.0111) ** 2;
};

export default levelToBouty;
