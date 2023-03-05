export const useGameStore = definePiniaStore('game', () => {
  const name = ref('')
  const endedAt = ref(new Date())

  const players = ref<Player[]>([])
  const roles = ref<RoleItem[]>([])
  const days = ref<Day[]>([])

  const game = reactive<Partial<Game>>({})

  const currentDay = computed(() => {
    if (!game.days) {
      return null
    }
    return game.days[game.days.length - 1]
  })

  const deadPlayerIds = computed(() => {
    if (!game.days) {
      return []
    }
    return game.days.map(day => {
      return day.deaths.map(death => death.player)
    }).flat()
  })

  const alivePlayerIds = computed(() => {
    if (!game.players) {
      return []
    }
    return game.players.map(player => player.id).filter(id => !deadPlayerIds.value.includes(id))
  })

  const alivePlayers = computed(() => {
    if (!game.players) {
      return []
    }
    return game.players.filter(player => alivePlayerIds.value.includes(player.id))
  })

  const getPlayerById = (id: UUID): Player => {
    const emptyPlayer = {
      id: '',
      name: '',
      color: '',
    }
    if (!game.players) {
      return emptyPlayer
    }
    const player = game.players.find(player => player.id === id)
    if (!player) {
      return emptyPlayer
    }
    return player
  }

  const createGame = () => {
    if (!name.value) {
      throw new Error('Game must have a name');
    }
    if (players.value.length !== roles.value.length) {
      throw new Error('Players and roles must be the same length');
    }

    const gameObj: Game = {
      id: newId(),
      name: name.value,
      createdAt: new Date(),
      endedAt: endedAt.value,
      players: [...players.value],
      roles: [...roles.value],
      days: days.value,
    }
    players.value = [...players.value]
    roles.value = [...roles.value]
    Object.assign(game, gameObj)

    createFirstDay()
  }

  const startGame = () => {
    game.startedAt = new Date()
  }

  const endGame = () => {
    if (!game.createdAt) {
      throw new Error('Game does not have a created date');
    }
    game.endedAt = new Date()
    game.durationMs = game.endedAt.getTime() - game.createdAt.getTime()
  }

  const createFirstDay = () => {
    const day: Day = {
      id: newId(),
      number: 1,
      major: '',
      villageKill: '',
      deaths: [],
      voting: [],
      playerRows: (game.players || []).map(player => ({
          player: player.id,
          suspects: [],
          defends: [],
          roleGuesses: [],
      })),
    };
    if (!game.days) {
      game.days = [];
    }
    game.days.push(day)
  }

  const newDay = () => {
    if(!game.days) {
      throw new Error('Game does not have any days');
    };
    if(!game.players) {
      throw new Error('Game does not have any players');
    }
    const day: Day = {
      id: newId(),
      number: game.days.length + 1,
      major: game.days[game.days.length].major,
      villageKill: '',
      deaths: [],
      voting: [],
      playerRows: game.players.map(player => ({
        player: player.id,
        suspects: [],
        defends: [],
        roleGuesses: [],
      })
    )};
    game.days.push(day);
  }

  return {
    // Props to create a game
    name,
    endedAt,
    players,
    roles,
    // Computed props
    deadPlayerIds,
    alivePlayerIds,
    alivePlayers,
    currentDay,
    // Game state
    game,
    // Actions
    createGame,
    startGame,
    endGame,
    createFirstDay,
    newDay,
    // Helpers
    getPlayerById
  }
}, {
  persist: {
    storage: localStorage,
  },
});
