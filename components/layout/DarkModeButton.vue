<template>
  <div class="dark-mode-button">
    <button
      @click="toggleDark()"
      class="nav-button nav-button-bg nav-button-text"
    >
      <transition
        v-bind="(fadeTransition as TransitionProps)"
      >
        <MoonIcon v-if="isDarkRef" class="h-6 w-5" aria-hidden="true" />
        <SunIcon v-else class="h-6 w-5" aria-hidden="true" />
      </transition>
    </button>
  </div>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
import { TransitionProps } from 'vue';
const { isDarkRef, toggleDark } = useDarkMode();
</script>
