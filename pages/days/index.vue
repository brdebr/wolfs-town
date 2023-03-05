<template>
  <PageCard page-title="Days">
    <template #header>
      <div class="text-center">Days</div>
    </template>
    <template #default>
      <div class="text-center">
        <div v-for="day in game.days" :key="day.id">
          <div>
            Day [ {{ day.number }} ] - {{ day.playerRows.length }} players
          </div>
          <div>
            <div v-for="row in day.playerRows" :key="row.player">
              <div>
                {{ gameStore.getPlayerById(row.player)?.name }}
              </div>
            </div>
          </div>
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
