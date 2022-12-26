<template>
  <div class="h-full p-3 back-color">
    <LayoutHeader />
    <div class="page container mx-auto pt-6">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup lang="ts">
const { isDarkRef } = useDarkMode();
onMounted(() => {
  isDarkRef.value = true;
})
</script>
<style lang="scss">
html, body, #__nuxt {
  height: 100%;
}

.back-color {
  @apply bg-sky-50;
  @apply dark:bg-rose-900;
}
</style>
