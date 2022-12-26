<template>
  <div class="player-input flex gap-2" :style="styleBind">
    <input
      title="Player name"
      class="input rounded-r-none"
      placeholder="Player name"
      type="text"
      v-model="player.name"
    />
    <input title="Player color" class="input rounded-l-none" type="color" v-model="player.color" />
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
