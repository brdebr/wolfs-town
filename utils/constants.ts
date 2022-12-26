import { Role } from './types';

export const appTitle = 'Wolfs Town';

export type Alignment = 'villager' | 'wolf' | 'lover' | 'unknown';

export const possibleRoles: Role[] = [
  { name: 'villager', emoji: '🐑', alignment: 'villager' },
  { name: 'wolf', emoji: '🐺', alignment: 'wolf' },
  { name: 'seer', emoji: '👁️' , alignment: 'villager'},
  { name: 'witch', emoji: '🧙‍♀️', alignment: 'villager' },
  { name: 'hunter', emoji: '🏹', alignment: 'villager' },
  { name: 'cupid', emoji: '💘', alignment: 'villager' },
  { name: 'lovers', emoji: '❤️', alignment: 'lover' },
  { name: 'thief', emoji: '🎭️', alignment: 'unknown' },
  { name: 'wild_child', emoji: '🌱', alignment: 'unknown' },
  { name: 'infected_wolf_chief', emoji: '🦠', alignment: 'wolf' },
  { name: 'bear_owner', emoji: '🐻', alignment: 'villager' },
  { name: 'village_fool', emoji: '🃏', alignment: 'unknown' },
  { name: 'red_lady', emoji: '💋', alignment: 'villager' },
  { name: 'elder', emoji: '👴', alignment: 'villager' },
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
