<template>
  <Menu as="div" class="relative inline-block text-left" v-slot="{ open }">
    <div>
      <MenuButton class="nav-button nav-button-bg nav-button-text">
        <transition
          v-bind="(fadeTransition as TransitionProps)"
        >
          <Bars3Icon v-if="!open" class="h-6 w-5" aria-hidden="true" />
          <XMarkIcon v-else class="h-6 w-5" aria-hidden="true" />
        </transition>
      </MenuButton>
    </div>

    <transition
      v-bind="(slideYTransition as TransitionProps)"
    >
      <MenuItems
        class="absolute right-0 mt-1 w-56 divide-y rounded-md nav-menu-bg shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none"
      >
        <div v-for="route in routeItems" :key="route.path" class="px-1 py-1">
          <MenuItem v-slot="{ active, close }">
            <a :href="route.path" @click.prevent="navigate(route.path, close)" :class="[
                active ? 'nav-item-bg nav-item-text--active' : 'nav-item-text',
                'flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors duration-200',
              ]">
              <span class="mr-4">
                {{ route.icon }}
              </span>
              <span>
                {{ route.name }}
              </span>
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { MenuItem, MenuItems, MenuButton, Menu } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { TransitionProps } from 'vue';

const { push } = useRouter();

const navigate = (path: string, closeFn: () => void) => {
  closeFn();
  push(path);
};

const gameStore = useGameStore();
const { game } = storeToRefs(gameStore);


const routeItems = computed(() => {
  return [
    {
      path: '/',
      name: 'Home',
      icon: '🏠',
      show: true,
    },
    {
      path: '/create',
      name: 'Create',
      icon: '➕',
      show: true,
    },
    {
      path: '/days',
      name: 'Days',
      icon: '📅',
      show: !!game.value.id,
    },
    {
      path: '/players',
      name: 'Players',
      icon: '👥',
      show: !!game.value.id,
    },
    {
      path: '/roles',
      name: 'Roles',
      icon: '🎭',
      show: !!game.value.id,
    },
    {
      path: '/voting',
      name: 'Voting',
      icon: '🗳️',
      show: !!game.value.id,
    },
    {
      path: '/settings',
      name: 'Settings',
      icon: '⚙️',
      show: true,
    },
    {
      path: '/about',
      name: 'About',
      icon: '❔',
      show: true,
    },
  ].filter(route => route.show);
});
</script>
<style lang="scss">
.nav-item-text {
  @apply text-white;
  @apply dark:text-white;
  &--active {
    @apply text-white;
    @apply dark:text-white;
  }
}
.nav-item-bg {
  @apply bg-sky-800;
  @apply dark:bg-pink-900;
}
.nav-menu-bg {
  @apply bg-sky-600;
  @apply divide-gray-100;

  @apply dark:bg-[#580e25];
  @apply dark:divide-rose-900;
}
</style>
