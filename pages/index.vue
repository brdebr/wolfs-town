<template>
  <PageCard page-title="Home">
    <template #header>
      <div class="text-center">
        Welcome to Wolfs of Castamere!
      </div>
    </template>
    <template #default>
      <div class="text-center">
        This web application allows users to easily
        manage their games of this classic game. <br />
        With our intuitive interface and powerful features, you can create, customize, and play your game with ease. <br />
        Whether you're a beginner or an expert, you'll find everything you need to get the most out of your gaming experience. <br />
        Get started today and join the thousands of players who have already discovered the joys of Wolfs of Castamere. <br />
      </div>
    </template>
    <template #footer>
      <div class="flex">
        <NuxtLink to="/create" class="mx-auto text-white bg-slate-500 border rounded px-3 py-1">
          Create game
        </NuxtLink>
      </div>
    </template>
  </PageCard>
</template>

<script setup lang="ts">
</script>
