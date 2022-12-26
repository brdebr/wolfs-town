<template>
  <PageCard page-title="Roles">
    <template #header> Roles </template>
    <template #default>
      <div v-for="role in possibleRoles" :key="role.name">
        {{ role }}
      </div>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
const rolesStore = useRolesStore();
const { roles } = storeToRefs(rolesStore);
</script>
