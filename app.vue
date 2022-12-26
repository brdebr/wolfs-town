<template>
  <div class="h-full p-3 bg-slate-300">
    <LayoutHeader />
    <div class="page container mx-auto pt-6">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup lang="ts">
const isDarkMode = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})
onMounted(() => {
  document?.querySelector('html')?.classList.add('dark')
})
</script>
<style lang="scss">
html, body, #__nuxt {
  height: 100%;
}
</style>
