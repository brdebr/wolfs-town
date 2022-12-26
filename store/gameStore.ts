import { Player } from "~~/utils/types"
import { RoleItem } from "./rolesStore"

export const useGameStore = definePiniaStore('game', () => {
  const name = ref('')
  const date = ref(new Date())

  const players = ref<Player[]>([])
  const roles = ref<RoleItem[]>([])

  return {
    name,
    date,
    players,
    roles,
  }
})