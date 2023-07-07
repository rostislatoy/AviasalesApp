export default function getStringToTransfer(num) {
  if (num === 1) {
    return `${num} ПЕРЕСАДКА`;
  }
  if (num > 1 && num < 5) {
    return `${num} ПЕРЕСАДКИ`;
  }
  if (num > 5 && num < 20) {
    return `${num} ПЕРЕСАДОК`;
  }

  return "БЕЗ ПЕРЕСАДОК";
}
