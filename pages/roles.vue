<template>
  <PageCard page-title="Roles">
    <template #header> Roles </template>
    <template #default>
      <BaseSelect
        :items="possibleRoles"
        :displayValueFn="displayFn"
        valueKey="name"
        textKey="name"
        v-model="selected"
        v-model:query="query"
        :exclude-search-keys="['alignment']"
      >
        <template #item="{ item }">
          {{ item.emoji }} - {{ capitalize(`${item.name}`) }}
        </template>
      </BaseSelect>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
import { Role } from '~~/utils/types';

const rolesStore = useRolesStore();
const { roles } = storeToRefs(rolesStore);
const displayFn = (role: unknown) => {
  return role as string;
};

const selected = ref<string>('');
const query = ref('');
</script>
