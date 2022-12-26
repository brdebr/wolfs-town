<template>
  <div class="player-input group/player mt-1 flex gap-2" :style="styleBind">
    <input
      v-model="player.name"
      title="Player name"
      class="
        base-input
        rounded-r-none
        group-focus-within/player:ring-4
      "
      placeholder="Player name"
      type="text"
    />
    <input
      v-model="player.color"
      title="Player color"
      class="
        base-input
        rounded-l-none
        group-focus-within/player:ring-4
      "
      type="color"
    />
  </div>
</template>

<script setup lang="ts">
import { Player } from '~~/utils/types';
const props = defineProps<{
  player: Player;
}>();
const emit = defineEmits<{
  (event: 'update:player', player: Player): void;
}>();

const player = useVModel(props, 'player', emit);
const styleBind = computed(() => ({
  '--input-color': player.value.color || '#000',
}));
</script>
