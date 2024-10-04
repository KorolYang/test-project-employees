export const dataFormat = (dateStr: string) => {
  const date = new Date(dateStr);

  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
