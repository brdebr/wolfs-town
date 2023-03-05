<template>
  <PageCard page-title="Days">
    <template #header>
      <div class="text-center">Days</div>
    </template>
    <template #default>
      <div class="text-center">
        <div v-for="day in game.days" :key="day.id">
          <NuxtLink :to="`/days/${day.id}`">
            Day [ {{ day.number }} ]
          </NuxtLink>
        </div>
      </div>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
const gameStore = useGameStore();
const {
  name,
  game,
} = storeToRefs(gameStore);
</script>
