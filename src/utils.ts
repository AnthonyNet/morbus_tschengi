const formatDate = (date: string): string => {
  return new Date(date).toLocaleString("en-UK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export { formatDate };
