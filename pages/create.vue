<template>
  <PageCard page-title="Create game">
    <template #header>
      <div class="text-center">Create game</div>
    </template>
    <template #default>
      <div class="flex max-lg:flex-col end">
        <div class="flex flex-col gap-2 mb-4 flex-grow">
          <div class="text-sm">Name:</div>
          <form @submit.prevent="createGame" class="flex gap-3">
            <BaseInput
              v-model="name"
              placeholder="Game name"
              title="Game name"
            />
            <button class="create-game-button">
              Create Game
            </button>
          </form>
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <div class="text-sm">Date:</div>
          <div class="text-sm input-bg input-text ring-1 hover:ring-2 transition-shadow input-ring rounded py-2 px-4">
            {{ createdAt?.toISOString()?.replace('T', ' ').replace('Z', '').slice(0, 19) }}
          </div>
        </div>
      </div>
      <div class="grid max-lg:grid-cols-1 grid-cols-2 gap-4">
        <!-- PLAYERS -->
        <div class="players">
          <div class="players__header text-center font-bold mb-3">
            <span class="underline mr-3">
              Players
            </span>
            <span v-if="players.length">
              [ {{ players.length }} ]
            </span>
          </div>
          <div class="players__list flex flex-col gap-3">
            <div
              class="flex items-center gap-3"
              v-for="player in players"
              :key="player.id"
            >
              <BasePlayerInput show-color-picker :player="player" />
              <button
                title="Remove player"
                class="clean-button group"
                @click="playersStore.removePlayer(player)"
              >
                <XMarkIcon
                  class="h-5 w-5 text-red-400 group-hover:text-red-500"
                />
              </button>
            </div>
            <form v-if="!gameStore.game.days?.length" class="flex items-center gap-3" @submit.prevent="addPlayer">
              <BasePlayerInput show-color-picker :player="newPlayer" />
              <button
                type="button"
                title="Remove player"
                class="clean-button group"
                @click="newPlayer.name = ''"
              >
                <XMarkIcon
                  class="h-5 w-5 text-red-400 group-hover:text-red-500"
                />
              </button>
            </form>
          </div>
        </div>
        <!-- ROLES -->
        <div class="roles">
          <div class="roles">
            <div class="roles__header text-center font-bold mb-3">
              <span class="underline mr-3">
                Roles
              </span>
              <span v-if="roles.length">
                [ {{ roles.length }} ]
              </span>
            </div>
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
                <div class="px-1 -mr-3 cursor-pointer group" @click="rolesStore.removeRole(rol)">
                  <XMarkIcon
                    class="h-5 w-5 text-red-400 group-hover:text-red-500"
                  />
                </div>
              </div>
              <form v-if="(players.length > roles.length) || players.length === 0" @submit.prevent="false">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
import XMarkIcon from '@heroicons/vue/24/outline/XMarkIcon';

const router = useRouter();

// Game
const gameStore = useGameStore();
const {
  name,
} = storeToRefs(gameStore);
const createdAt = ref(new Date());
const intervalUpdateCreatedAt = useIntervalFn(() => {
  createdAt.value = new Date();
}, 1000);

const createGame = () => {
  gameStore.players = [...playersStore.players];
  gameStore.roles = [...rolesStore.roles];
  gameStore.createGame();
  intervalUpdateCreatedAt.pause();
  router.push('/days');
};

// Players
const playersStore = usePlayersStore();
const { players } = storeToRefs(playersStore);
const newPlayer = ref<Player>({
  id: '',
  name: '',
  color: playersStore.getExcludingRandomColor(),
});

const addPlayer = () => {
  playersStore.addPlayer(newPlayer.value);
  playersStore.sortPlayersByName();
  newPlayer.value = {
    id: '',
    name: '',
    color: playersStore.getExcludingRandomColor(),
  };
};

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

const clearRoleSelection = () => {
  selected.value = null;
  query.value = '';
};

const addRole = (role: Role | null) => {
  if (!role) {
    return;
  }
  rolesStore.addRole(role);
  rolesStore.sortByAlignmentAndName();
  clearRoleSelection()
};
</script>
<style lang="scss">
.clean-button {
  @apply border rounded;
  @apply bg-slate-200 dark:bg-slate-800;
  @apply hover:bg-red-50 hover:dark:bg-red-900;
  @apply border-red-800 hover:border-red-600;
  @apply p-1;
}
.create-game-button {
  @apply border rounded;
  @apply bg-slate-200 dark:bg-slate-800;
  @apply hover:bg-green-50 hover:dark:bg-green-900;
  @apply border-green-800 hover:border-green-600;
  @apply py-1 px-4;
}
</style>
