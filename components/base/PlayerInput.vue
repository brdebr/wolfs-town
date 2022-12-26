<template>
  <div class="player-input flex gap-2">
    <input class="input rounded-r-none" placeholder="Player name" type="text" v-model="name">
    <input class="input rounded-l-none" type="color" v-model="color">
  </div>
</template>

<script setup lang="ts">

const name = ref('');
const color = ref(getRandomPlayerColor());

</script>
<style scoped>
.player-input {
  --input-color: v-bind(color);
}
</style>
