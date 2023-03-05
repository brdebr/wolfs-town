<template>
  <PageCard page-title="Roles">
    <template #header> Roles </template>
    <template #default>
      <BaseSelect
        :items="possibleRoles"
        :displayValueFn="displayFn"
        valueKey="name"
        textKey="name"
        key-prop="name"
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

const rolesStore = useRolesStore();
const { roles } = storeToRefs(rolesStore);
const displayFn = (role: unknown) => {
  const roleObj = role as Role;
  if (!roleObj) {
    return '';
  }
  return `${roleObj.emoji} - ${capitalize(roleObj.name)}`;
};

const selected = ref<Role | null>(null);
const query = ref('');
</script>
