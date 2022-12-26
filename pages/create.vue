<template>
  <PageCard page-title="Create game">
    <template #header>
      <div class="text-center">Create game</div>
    </template>
    <template #default>
      <div class="flex end">
        <div class="flex flex-col gap-1 mb-4 flex-grow">
          <div class="text-sm">Name:</div>
          <div>
            <BaseInput
              v-model="name"
              placeholder="Game name"
              title="Game name"
            />
          </div>
        </div>
        <div class="flex flex-col gap-1 mb-4">
          <div class="text-sm">Date:</div>
          <div class="text-sm input-bg input-text border border-blue-800 rounded py-[7px] px-4">
            {{ date?.toISOString()?.replace('T', ' ').replace('Z', '').slice(0, 19) }}
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="players">
          <div class="players__header text-center font-bold underline mb-3">
            Players
          </div>
          <div class="players__list flex flex-col gap-3">
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
                <XMarkIcon
                  class="h-5 w-5 text-red-400 group-hover:text-red-600"
                />
              </button>
            </div>
            <form @submit.prevent="addPlayer">
              <BasePlayerInput :player="newPlayer" />
            </form>
          </div>
        </div>
        <div class="roles">
          <div class="roles">
            <div class="roles__header text-center font-bold underline mb-3">
              Roles
            </div>
            <div class="roles__list">
              <div>
                <BaseRolesSelector />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
import XMarkIcon from '@heroicons/vue/24/outline/XMarkIcon';
import { Player } from '~~/utils/types';

const gameStore = useGameStore();
const {
  name,
  date,
  players: gamePlayers,
  roles: gameRoles,
} = storeToRefs(gameStore);

const playersStore = usePlayersStore();
const { players } = storeToRefs(playersStore);
const newPlayer = ref<Player>({
  id: 0,
  name: '',
  color: playersStore.getExcludingRandomColor(),
});

const addPlayer = () => {
  if (newPlayer.value.name === '') return;

  playersStore.addPlayer(newPlayer.value);
  playersStore.sortPlayersByName();
  newPlayer.value = {
    id: 0,
    name: '',
    color: playersStore.getExcludingRandomColor(),
  };
};
</script>
