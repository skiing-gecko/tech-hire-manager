<script setup>
import { RouterView } from 'vue-router';
import TopNav from './components/navigation/TopNav.vue';
import SideNav from './components/navigation/SideNav.vue';
</script>

<template>
  <div class="grid grid-rows-[min-content_1fr] auto-cols-auto h-screen w-screen">
    <div>
      <header class=w-full>
        <TopNav />
      </header>
    </div>
    <div class="grid grid-cols-[min-content_1fr] overflow-hidden">
      <SideNav />
      <RouterView />
    </div>
  </div>
</template>

<style>
</style>
