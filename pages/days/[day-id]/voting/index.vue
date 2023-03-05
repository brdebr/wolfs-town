<template>
  <PageCard page-title="Voting">
    <template #header>
      <div class="flex gap-3">
        <NuxtLink :to="`/days/${day?.id}`">
          Day {{ day?.number }}
        </NuxtLink>
        <span>
          /
        </span>
        <div>
          Voting
        </div>
      </div>
    </template>
    <template #default>
      <div v-if="day" class="flex flex-col gap-3">
        <div v-for="voting in day.voting" :key="voting.id" >
          <NuxtLink :to="`/voting/${voting.id}`">
            Voting [ {{ voting.id }} ]
          </NuxtLink>
        </div>
      </div>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
const { params: { dayid } } = useRoute();
const dayIdParam = computed(() => [dayid].flat()[0]);

const day = computed(() => {
  if (!gameStore.daysMap) {
    return undefined;
  }
  return gameStore.daysMap[dayIdParam.value];
});

const gameStore = useGameStore();
</script>
