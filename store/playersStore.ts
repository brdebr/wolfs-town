import { capitalize } from "~~/utils/functions"
import { Player } from "~~/utils/types"

export const usePlayersStore = definePiniaStore('players', () => {
  const players = ref<Player[]>([])

  // get a random color from the list of colors excluding the colors already in use
  const getExcludingRandomColor = () => {
    const colorsInUse = players.value.map((player) => player.color)
    const colorsAvailable = playerColors.filter(
      (color) => !colorsInUse.includes(color)
    )
    return colorsAvailable[Math.floor(Math.random() * colorsAvailable.length)]
  }

  const addPlayer = (newPlayer: Player) => {
    newPlayer.id = Date.now();
    newPlayer.name = capitalize(newPlayer.name.trim());
    players.value.push(newPlayer);
  }

  const removePlayer = (player: Player) => {
    players.value = players.value.filter((p) => p.id !== player.id)
  }

  const sortPlayersByName = () => {
    players.value.sort((a, b) => a.name.localeCompare(b.name))
  }

  return {
    players,
    addPlayer,
    removePlayer,
    getExcludingRandomColor,
    sortPlayersByName,
  }
})