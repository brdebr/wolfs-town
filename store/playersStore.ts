import { Player } from "~~/utils/types"

export const usePlayersStore = definePiniaStore('players', () => {
  const players = ref<Player[]>([])

  return {
    players,
  }
})