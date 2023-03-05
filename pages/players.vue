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
        </div>
      </div>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
const playersStore = usePlayersStore();
const { players } = storeToRefs(playersStore);
</script>
