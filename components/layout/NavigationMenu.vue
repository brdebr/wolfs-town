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
            <NuxtLink
              :class="[
                active ? 'nav-item-bg nav-item-text--active' : 'nav-item-text',
                'flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors duration-200',
              ]"
              :to="route.path"
              @click="close"
            >
              {{ route.name }}
            </NuxtLink>
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

const routeItems = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/create',
    name: 'Create',
  },
  {
    path: '/days',
    name: 'Days',
  },
  {
    path: '/players',
    name: 'Players',
  },
  {
    path: '/roles',
    name: 'Roles',
  },
];
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
