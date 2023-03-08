<template>
  <PageCard :page-title="`Day ${id}`">
    <template #header>
      <div class="flex items-center gap-3">
        <div>
          Day {{ day?.number }}
        </div>
        <div class="ml-auto flex gap-3 items-center">
          <button class="border rounded px-4 py-1" type="button">
            Create Major Voting
          </button>
          <button class="border rounded px-4 py-1" type="button">
            Create Voting
          </button>
        </div>
      </div>
    </template>
    <template #default>
      <div v-if="day" class="mt-3 flex flex-col gap-3">
        <div class="grid grid-cols-4 gap-5 text-center underline">
          <div>
            Player name
          </div>
          <div>
            Defends
          </div>
          <div>
            Suspects
          </div>
          <div>
            Roles guesses
          </div>
        </div>
        <div v-for="row in day.playerRows" :key="row.player" class="grid grid-cols-1 lg:grid-cols-4 items-center gap-12 lg:gap-5 focus-within:z-10 pb-3 border-b border-white border-opacity-40 last:border-0">
          <div class="">
            <BasePlayerInput readonly :player="gameStore.getPlayerById(row.player)" />
          </div>
          <div class="flex flex-col gap-3">
            <BasePlayerInput readonly :player="gameStore.getPlayerById(row.player)" />
            <BasePlayerInput readonly :player="gameStore.getPlayerById(row.player)" />
            <BasePlayerInput readonly :player="gameStore.getPlayerById(row.player)" />
          </div>
          <div class="flex flex-col gap-3">
            <BasePlayerInput readonly :player="gameStore.getPlayerById(row.player)" />
            <BasePlayerInput readonly :player="gameStore.getPlayerById(row.player)" />
            <BasePlayerInput readonly :player="gameStore.getPlayerById(row.player)" />
          </div>
          <div class="flex flex-col gap-3">
            <BaseSelect
              :items="possibleRoles"
              :displayValueFn="displayFn"
              valueKey="name"
              textKey="name"
              key-prop="name"
              v-model="selected"
              v-model:query="query"
              @selected="addRole"
              :exclude-search-keys="['alignment']"
            >
              <template #item="{ item }">
                <span class="mr-4">
                  {{ item.emoji }}
                </span>
                <span>
                  {{ item.displayName }}
                </span>
              </template>
            </BaseSelect>
            <BaseSelect
              :items="possibleRoles"
              :displayValueFn="displayFn"
              valueKey="name"
              textKey="name"
              key-prop="name"
              v-model="selected"
              v-model:query="query"
              @selected="addRole"
              :exclude-search-keys="['alignment']"
            >
              <template #item="{ item }">
                <span class="mr-4">
                  {{ item.emoji }}
                </span>
                <span>
                  {{ item.displayName }}
                </span>
              </template>
            </BaseSelect>
            <BaseSelect
              :items="possibleRoles"
              :displayValueFn="displayFn"
              valueKey="name"
              textKey="name"
              key-prop="name"
              v-model="selected"
              v-model:query="query"
              @selected="addRole"
              :exclude-search-keys="['alignment']"
            >
              <template #item="{ item }">
                <span class="mr-4">
                  {{ item.emoji }}
                </span>
                <span>
                  {{ item.displayName }}
                </span>
              </template>
            </BaseSelect>
          </div>
        </div>
      </div>
      <div v-else>
        Day not found :(
      </div>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
const { params: { id } } = useRoute();
const idParam = computed(() => [id].flat()[0]);

// Roles
const rolesStore = useRolesStore();
const { roles } = storeToRefs(rolesStore);
const displayFn = (role: unknown) => {
  const roleObj = role as Role;
  if (!roleObj) {
    return '';
  }
  return `${roleObj.emoji} - ${roleObj.displayName || ''}`;
};

const selected = ref<Role | null>(null);
const query = ref('');

const addRole = (role: Role | null) => {
  if (!role) {
    return;
  }
};

const day = computed(() => {
  if (!gameStore.game.days) {
    return undefined;
  }
  return gameStore.game.days.find((day) => day.id === idParam.value);
});

const gameStore = useGameStore();
const {
  name,
  game,
  daysMap,
} = storeToRefs(gameStore);
</script>
