import { Role } from './types';

export const appTitle = 'Wolfs Town';

export type Alignment = 'villager' | 'wolf' | 'lover' | 'unknown';

export const possibleRoles: Role[] = [
  {
    name: 'villager',
    emoji: '🐑',
    alignment: 'villager',
    displayName: 'Villager',
  },
  {
    name: 'wolf',
    emoji: '🐺',
    alignment: 'wolf',
    displayName: 'Wolf',
  },
  {
    name: 'seer',
    emoji: '🔮',
    alignment: 'villager',
    displayName: 'Seer',
  },
  {
    name: 'witch',
    emoji: '🧙‍♀️',
    alignment: 'villager',
    displayName: 'Witch',
  },
  {
    name: 'hunter',
    emoji: '🏹',
    alignment: 'villager',
    displayName: 'Hunter',
  },
  {
    name: 'cupid',
    emoji: '💘',
    alignment: 'villager',
    displayName: 'Cupid',
  },
  {
    name: 'lovers',
    emoji: '❤️',
    alignment: 'lover',
    displayName: 'Lovers',
  },
  {
    name: 'thief',
    emoji: '🎭️',
    alignment: 'unknown',
    displayName: 'Thief',
  },
  {
    name: 'wild_child',
    emoji: '😼',
    alignment: 'unknown',
    displayName: 'Wild Child',
  },
  {
    name: 'infected_wolf_chief',
    emoji: '🦠',
    alignment: 'wolf',
    displayName: 'Infected Wolf Chief',
  },
  {
    name: 'bear_owner',
    emoji: '🐻',
    alignment: 'villager',
    displayName: 'Bear Owner',
  },
  {
    name: 'village_fool',
    emoji: '🃏',
    alignment: 'unknown',
    displayName: 'Village Fool',
  },
  {
    name: 'red_lady',
    emoji: '💋',
    alignment: 'villager',
    displayName: 'Red Lady',
  },
  {
    name: 'elder',
    emoji: '👴',
    alignment: 'villager',
    displayName: 'Elder',
  },
];

export const playerColors = [
  "#FFC0CB", // pastel pink
  "#ADD8E6", // baby blue
  "#98FB98", // mint green
  "#DDA0DD", // light purple
  "#FFFFE0", // light yellow
  "#F08080", // light coral
  "#20B2AA", // light sea green
  "#AFEEEE", // pale turquoise
  "#87CEFA", // light sky blue
  "#DB7093", // pale violet red
  "#FAFAD2", // light goldenrod
  "#90EE90", // light green
  "#D3D3D3", // light gray
  "#FFA07A", // light salmon
  "#ADD8E6", // light blue
  "#FFB6C1", // light pink
  "#FFE5B4", // light peach
  "#E6E6FA", // light lavender
  "#F5F5DC", // light cream
  "#DDA0DD", // light purple
  "#A0522D", // light brown
  "#F5F5DC", // light beige
  "#FFA07A", // light orange
  "#FFB6C1", // light red
];
