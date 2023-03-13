<template>
  <div class="page-card page-bg page-text page-border">
    <Title>
      {{ props.pageTitle }} - {{ appTitle }}
    </Title>
    <div class="page-card__header pt-1 px-1">
      <slot name="header" />
    </div>
    <hr class="my-2 page-border">
    <div class="page-card__body px-1">
      <slot name="default" />
    </div>
    <div v-if="$slots.footer" class="pt-4">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  pageTitle: string;
}>();
</script>

<style lang="scss">
.page-card {
  @apply flex flex-col;
  @apply border rounded-lg;

  @apply px-3 pt-2 pb-4;
}
.page-border {
  @apply border-blue-900;
  @apply dark:border-red-300;
}
.page-bg {
  @apply transition-colors duration-1000;
  @apply bg-rose-50/30;
  @apply dark:bg-[#022833];
}
.page-text {
  @apply text-sky-900;
  @apply dark:text-gray-200;
}
</style>