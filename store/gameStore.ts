import { Day, Game, Player } from "~~/utils/types"
import { RoleItem } from "./rolesStore"

export const useGameStore = definePiniaStore('game', () => {
  const name = ref('')
  const createdAt = ref(new Date())
  const endedAt = ref(new Date())

  const players = ref<Player[]>([])
  const roles = ref<RoleItem[]>([])
  const days = ref<Day[]>([])

  const game = reactive<Partial<Game>>({})

  const createGame = () => {
    const gameObj: Game = {
      id: Date.now(),
      name: name.value,
      createdAt: createdAt.value,
      endedAt: endedAt.value,
      players: [...players.value],
      roles: [...roles.value],
      days: days.value,
    }
    Object.assign(game, gameObj)
  }

  const startGame = () => {
    game.startedAt = new Date()
  }

  const endGame = () => {
    if (!game.createdAt) return;
    game.endedAt = new Date()
    game.durationMs = game.endedAt.getTime() - game.createdAt.getTime()
  }

  const firstDay = () => {
    const day: Day = {
      number: 1,
      major: 0,
      villageKill: 0,
      deaths: [],
      rows: game.players?.map(player => {
        return {
          player: player.id,
          suspects: [],
          defends: [],
          roleGuesses: [],
        }
      }) || [],
    };
    if (!game.days) {
      game.days = [];
    }
    game.days.push(day)
  }

  return {
    name,
    createdAt,
    endedAt,
    players,
    roles,
    createGame,
    startGame,
    endGame,
    firstDay,
  }
})