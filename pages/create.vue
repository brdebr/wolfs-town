<template>
  <div class="flex flex-col gap-3 border rounded-lg p-4">
    <div class="text-center">Create game</div>
    <hr>
    <div class="grid grid-cols-2">
      <div class="players">
        <div class="players__header text-center font-bold underline">Players</div>
        <div class="players__list text-center">
          <div v-for="player in players" :key="player.id">
            {{ player.name }}
          </div>
          <form class="mt-2" @submit.prevent="addPlayer">
            <input class="px-3 py-1 rounded" v-model="newPlayerName" type="text">
          </form>
        </div>
      </div>
      <div class="roles">
        <div class="roles">
          <div class="roles__header text-center font-bold underline">Roles</div>
          <div class="roles__list">
            <div v-for="player in players" :key="player.id" class="text-center">
              {{ player.name }}
            </div>
            <div>
              <BaseRolesSelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const playersStore = usePlayersStore();
const { players } = storeToRefs(playersStore);

const newPlayerName = ref('');
const newPlayerColor = ref('');

const resetNewPlayer = () => {
  newPlayerName.value = '';
  newPlayerColor.value = '';
};

const addPlayer = () => {
  players.value.push({
    id: Date.now(),
    name: newPlayerName.value,
    color: newPlayerColor.value,
  });
  resetNewPlayer();
};
</script>
