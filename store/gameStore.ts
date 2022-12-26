import { Player } from "~~/utils/types"
import { RoleItem } from "./rolesStore"

export const useGameStore = definePiniaStore('game', () => {
  const name = ref('')
  const createdAt = ref(new Date())
  const endedAt = ref(new Date())

  const players = ref<Player[]>([])
  const roles = ref<RoleItem[]>([])

  return {
    name,
    createdAt,
    endedAt,
    players,
    roles,
  }
})