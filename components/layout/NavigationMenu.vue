<template>
  <div>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-2 py-1 text-sm font-medium text-white hover:bg-opacity-30 hover:ring-1 hover:ring-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <Bars3Icon
            class="h-6 w-5 text-white"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform opacity-100"
        leave-to-class="transform opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div v-for="route in routeItems" :key="route.path" class="px-1 py-1">
            <MenuItem v-slot="{ active, close }">
              <NuxtLink
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
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
  </div>
</template>

<script setup lang="ts">
import {
  MenuItem,
  MenuItems,
  MenuButton,
  Menu,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon } from '@heroicons/vue/24/outline'
// const router = useRouter();
// const routes = router.options.routes;

// const capitalize = (str: string) => {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };

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
    path: '/players',
    name: 'Players',
  },
  {
    path: '/roles',
    name: 'Roles',
  },
  // {
  //   path: '/days',
  //   name: 'Days',
  // },
  // {
  //   path: '/games',
  //   name: 'Games',
  // },
]

// const routeItems = computed(() => {
//   return routes.map(({ name: routeName, path }) => {
//     const nameCap = capitalize(routeName?.toString() || '');
//     const name = nameCap === 'Index' ? 'Home' : nameCap;
//     return {
//       name,
//       path,
//     };
//   })
//   // sort like : Home, Create, Players, Roles, Days ,Games
//   .sort
// });
</script>