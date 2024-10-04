export const getTaskWord = (count: number): string => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${count} заданий`;
  }

  if (count === 0) {
    return "заданий нет";
  }

  if (lastDigit === 1) {
    return `${count} задание`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${count} задания`;
  }

  return `${count} заданий`;
};
