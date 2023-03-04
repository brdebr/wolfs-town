export type Game = {
  id: string
  name: string
  createdAt: Date
  startedAt?: Date
  endedAt?: Date
  durationMs?: number
  players: Player[]
  roles: Role[]
  days: Day[]
}

export type Player = {
  id: string
  name: string
  color: string
}

export type Role = {
  name: string
  emoji: string
  alignment: string
  displayName?: string
  description?: string
}

export type Day = {
  number: number
  major: number,
  villageKill: number,
  deaths: number[],
  rows: DayData[],
}

export type DayData = {
  player: string,
  suspects: number[],
  defends: number[],
  roleGuesses: string[],
}
