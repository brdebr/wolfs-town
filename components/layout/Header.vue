<template>
  <div class="relative h-9 flex items-center z-10">
    <div class="absolute h-9 w-full flex items-center">
      <h1 class="mx-auto head-text-color text-lg font-semibold">
        🐺 - {{ appTitle }} - 🏡
      </h1>
    </div>
    <div class=" absolute h-9 right-0 top-0 flex items-end gap-2">
      <LayoutDarkModeButton />
      <LayoutNavigationMenu />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
<style lang="scss">
.head-text-color {
  @apply text-sky-900;
  @apply dark:text-white;
}
</style>
