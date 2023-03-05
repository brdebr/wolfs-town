<template>
  <div class="player-input group/player w-full flex gap-2" :style="styleBind">
    <input
      v-model="player.name"
      :disabled="readonly"
      title="Player name"
      class="
        base-input
        w-full
        rounded-r-none
        group-focus-within/player:ring-4
      "
      placeholder="Player name"
      type="text"
    />
    <input
      v-model="player.color"
      title="Player color"
      :disabled="!showColorPicker"
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
const props = defineProps<{
  player: Player;
  readonly?: boolean;
  showColorPicker?: boolean;
}>();
const emit = defineEmits<{
  (event: 'update:player', player: Player): void;
}>();

const player = useVModel(props, 'player', emit);
const styleBind = computed(() => ({
  '--input-color': player.value.color || '#000',
}));
</script>
