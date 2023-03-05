<template>
  <PageCard :page-title="`Day ${id}`">
    <template #header>
      <div class="flex items-center gap-3">
        <div>
          Day {{ day?.number }}
        </div>
        <div class="ml-auto flex gap-3 items-center">
          <button class="border rounded px-4 py-1" type="button">
            Create Major Voting
          </button>
          <button class="border rounded px-4 py-1" type="button">
            Create Voting
          </button>
        </div>
      </div>
    </template>
    <template #default>
      <div v-if="day" class="mt-3 flex flex-col gap-3">
        <div v-for="row in day.playerRows" :key="row.player" class="flex">
          <div class="">
            <BasePlayerInput :player="gameStore.getPlayerById(row.player)" />
          </div>
          <div>
            
          </div>
        </div>
      </div>
      <div v-else>
        Day not found :(
      </div>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
const { params: { id } } = useRoute();
const idParam = computed(() => [id].flat()[0]);

const day = computed(() => {
  if (!gameStore.game.days) {
    return undefined;
  }
  return gameStore.game.days.find((day) => day.id === idParam.value);
});

const gameStore = useGameStore();
const {
  name,
  game,
  daysMap,
} = storeToRefs(gameStore);
</script>
