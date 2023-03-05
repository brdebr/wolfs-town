<template>
  <PageCard page-title="Roles">
    <template #header>
      <div class="flex gap-3 justify-between">
        <span> Roles </span>
        <span> [ {{ roles.length }} ] </span>
      </div>
    </template>
    <template #default>
      <div class="roles__list flex flex-col gap-3">
        <div v-for="rol in roles" :key="rol.id"
          class="text-sm input-bg input-text ring-1 input-ring rounded py-2 px-4 flex items-center"
        >
          <div class="flex-grow">
            <span class="mr-4">
              {{ rol.emoji }}
            </span>
            <span>
              {{ rol.displayName }}
            </span>
          </div>
        </div>
      </div>
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
