export type Game = {
  id: number
  name: string
  date: Date
  players: Player[]
  roles: Role[]
  days: Day[]
}

export type Player = {
  id: number
  name: string
  color: string
}

export type Role = {
  name: string
  emoji: string
  description?: string
  alignment?: string
}

export type Day = {
  number: number
  major: number,
  villageKill: number,
  deaths: number[],
  rows: DayData[],
}

export type DayData = {
  player: number,
  suspects: number[],
  defends: number[],
  roleGuesses: string[],
}
