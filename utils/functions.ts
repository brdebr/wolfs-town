export const getRandomPlayerColor = () => {
  return playerColors[Math.floor(Math.random() * playerColors.length)];
}