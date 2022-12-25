
export type Player = {
  id: number
  name: string
  color: string
}

const usePlayersStore = definePiniaStore('players', () => {
  const players = ref<Player[]>([])

  return {
    players,
  }
})