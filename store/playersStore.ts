import { Player } from "~~/types"

export const usePlayersStore = definePiniaStore('players', () => {
  const players = ref<Player[]>([])

  return {
    players,
  }
})