export const getRandomPlayerColor = () => {
  return playerColors[Math.floor(Math.random() * playerColors.length)];
}

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}