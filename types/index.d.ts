declare global {

  type UUID = string;

  export type Game = {
    id: UUID
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
    id: UUID
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

  export type RoleItem = Role & { id: UUID };

  export type Death = {
    player: UUID
    role: string
    reason: string
  }

  export type Day = {
    id: UUID
    number: number
    major: UUID
    villageKill: UUID
    deaths: Death[]
    playerRows: PlayerDayData[]
    voting: Voting[]
  }

  export type VotingType = 'normal' | 'chain' | 'simultaneous'

  export type Voting = {
    id: UUID
    createdAt: Date
    endedAt?: Date
    durationMs?: number
    forMajor: boolean
    type: VotingType
    votes: Vote[]
    loser?: UUID
  }

  export type Vote = {
    voter: UUID
    target: UUID
    index: number
  }

  export type PlayerDayData = {
    player: UUID
    suspects: UUID[]
    defends: UUID[]
    roleGuesses: string[]
  }
}

export {}
