import { v4 as uuid } from 'uuid';

export const getRandomPlayerColor = () => {
  return playerColors[Math.floor(Math.random() * playerColors.length)];
}

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const omitKeys = (obj: any, keys: string[]) => {
  const newObj = { ...obj };
  keys.forEach((key) => delete newObj[key]);
  return newObj;
}

export const newId = () : UUID => {
  return uuid();
}