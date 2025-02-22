export const getDaysUntilBirthday = (birthdate: string) => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const nextBirthday = new Date(birthdate);
  const localBirthday = new Date(nextBirthday.getTime() - nextBirthday.getTimezoneOffset() * 60000);
  localBirthday.setFullYear(currentYear);

  if (localBirthday < today) {
    localBirthday.setFullYear(currentYear + 1);
  }

  const diffInTime = localBirthday.getTime() - today.getTime();
  const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));

  return diffInDays;
};

export const getBirthdayMessage = (daysUntilBirthday: number): string => {
  switch (daysUntilBirthday) {
    case 0:
      return "сегодня";
    case 1:
      return "завтра";
    case 365:
      return "сегодня";
    default:
      if (daysUntilBirthday >= 2 && daysUntilBirthday <= 4) {
        return `через ${daysUntilBirthday} дня`;
      }
      if (daysUntilBirthday >= 5 || daysUntilBirthday === 0) {
        return `через ${daysUntilBirthday} дней`;
      }
      return `через ${daysUntilBirthday} день`;
  }
};
