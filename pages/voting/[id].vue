<template>
  <PageCard :page-title="`Voting ${id}`">
    <template #header>
      <div class="text-center">Voting {{ id }}</div>
    </template>
    <template #default>
      <div class="text-center">
        aaa
      </div>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
const { params: { id } } = useRoute();
</script>
