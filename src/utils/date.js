export const convertDate = (unixTime) => {
  const date = new Date(unixTime * 1000);
  return date;
}

export const convertDateString = (unixTime) => {
  const date = new Date(unixTime * 1000);
  return date.toDateString();
}
