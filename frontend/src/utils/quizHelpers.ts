export const correctPercentage = (
  correct: number,
  incoorrect: number,
  total: number,
): string =>
  `${Math.round((correct / total) * 100 - (incoorrect / total) * 100)} %`;
