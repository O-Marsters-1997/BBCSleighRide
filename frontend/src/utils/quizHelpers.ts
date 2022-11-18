export const correctPercentage = (correct: number, total: number): string => {
  const res = Math.round((correct / total) * 100);
  return !res ? "0%" : `${res}%`;
};
