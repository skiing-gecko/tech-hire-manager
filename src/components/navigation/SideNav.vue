<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="flex flex-col justify-between p-2 w-fit bg-white drop-shadow-[0.1rem_0_0.3rem_rgba(0,0,0,0.25)]">
    <div class="flex flex-col">
      <RouterLink to="/" active-class="clicked">
        <button class="bounce-btn bounce-btn-home mb-4 w-12 h-12">
          <font-awesome-icon class="icon-home text-black/[.25]" icon="fa-solid fa-house-chimney" size="xl"></font-awesome-icon>
        </button>
      </RouterLink>
      <RouterLink to="/items">
        <button class="bounce-btn bounce-btn-list mb-4 w-12 h-12">
          <font-awesome-icon class="icon-list text-black/[.25] " icon="fa-solid fa-bars" size="xl"></font-awesome-icon>
        </button>
      </RouterLink>
      <RouterLink to="/create">
        <button class="bounce-btn bounce-btn-create mb-4 w-12 h-12">
          <font-awesome-icon class="icon-create text-black/[.25]" icon="fa-solid fa-plus" size="xl"></font-awesome-icon>
        </button>
      </RouterLink>
      <RouterLink to="/admin">
        <button class="bounce-btn bounce-btn-admin w-12 h-12">
          <font-awesome-icon class="icon-admin text-black/[.25]" icon="fa-solid fa-gear" size="xl"></font-awesome-icon>
        </button>
      </RouterLink>
    </div>
    <div class="flex">
      <RouterLink to="/account">
        <button class="bounce-btn bounce-btn-account w-12 h-12">
          <font-awesome-icon class="icon-account text-black/[.25]" icon="fa-solid fa-user" size="xl"></font-awesome-icon>
        </button>
      </RouterLink>
    </div>
  </div>
</template>