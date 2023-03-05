<template>
  <PageCard :page-title="`Voting ${voting}`">
    <template #header>
      <div class="flex items-center gap-3">
        <div>
          Voting {{ voting }}
        </div>
        <div class="ml-auto">
          {{ idParam }}
        </div>
      </div>
    </template>
    <template #default>
      <div class="text-center">
        {{ dayid }}
        {{ voting }}
      </div>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
const { params: { dayid, voting } } = useRoute();
const idParam = computed(() => [voting].flat()[0]);

// const voting = computed(() => {
//   if (!gameStore.al) {
//     return undefined;
//   }
//   return gameStore.game.voting.find((voting) => voting.id === idParam.value);
// });

const gameStore = useGameStore();
</script>
