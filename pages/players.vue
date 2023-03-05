<template>
  <PageCard page-title="Players">
    <template #header>
      <div class="flex gap-3 justify-between">
        <span> Players </span>
        <span> [ {{ players.length }} ] </span>
      </div>
    </template>
    <template #default>
      <div class="players-list mt-3 flex flex-col gap-4">
        <div
          class="flex items-center gap-3"
          v-for="player in players"
          :key="player.id"
        >
          <BasePlayerInput :player="player" />
          <button
            title="Remove player"
            class="border border-red-300 hover:border-red-600 bg-white hover:bg-red-50 rounded p-1 group"
            @click="playersStore.removePlayer(player)"
          >
            <XMarkIcon class="h-5 w-5 text-red-400 group-hover:text-red-600" />
          </button>
        </div>
        <form @submit.prevent="addPlayer">
          <BasePlayerInput :player="newPlayer" />
        </form>
      </div>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';

const playersStore = usePlayersStore();
const { players } = storeToRefs(playersStore);
const newPlayer = ref<Player>({
  id: '',
  name: '',
  color: playersStore.getExcludingRandomColor(),
});

const addPlayer = () => {
  if (newPlayer.value.name === '') return;

  playersStore.addPlayer(newPlayer.value);
  playersStore.sortPlayersByName();
  newPlayer.value = {
    id: '',
    name: '',
    color: playersStore.getExcludingRandomColor(),
  };
};
</script>
