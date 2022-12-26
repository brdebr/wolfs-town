<template>
  <div class="border rounded-lg bg-stone-100 px-3 pt-2 pb-4 flex flex-col gap-5">
    <div class="flex gap-3 justify-between">
      <span>
        Players
      </span>
      <span>
       [ {{ players.length }} ]
      </span>
    </div>
    <hr class="-my-2">
    <div class="players-list flex flex-col gap-4">
      <div class="flex items-center gap-3" v-for="player in players" :key="player.id">
        <BasePlayerInput :player="player" />
        <button title="Remove player" class="border border-red-300 hover:border-red-600 bg-white hover:bg-red-50 rounded p-1 group" @click="playersStore.removePlayer(player)">
          <XMarkIcon class="h-5 w-5 text-red-400 group-hover:text-red-600" />
        </button>
      </div>
      <form @submit.prevent="addPlayer">
        <BasePlayerInput :player="newPlayer" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { Player } from '~~/utils/types';

const playersStore = usePlayersStore();
const { players } = storeToRefs(playersStore);
const newPlayer = ref<Player>({ id: 0, name: '', color: playersStore.getExcludingRandomColor() });

const addPlayer = () => {
  playersStore.addPlayer(newPlayer.value);
  playersStore.sortPlayersByName();
  newPlayer.value = { id: 0, name: '', color: playersStore.getExcludingRandomColor() };
};
</script>
