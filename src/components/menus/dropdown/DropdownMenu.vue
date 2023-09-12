<script setup>
import DropdownItem from './DropdownItem.vue';
import { ref } from 'vue';

const isShown = ref(false);

function toggleMenu() {
  isShown.value = !isShown.value;
}
</script>

<template>
  <div class="float-right relative inline-block">
    <button @click="toggleMenu" class="rounded-lg h-9 w-9 border-2 mb-2 border-[#40424A] text-[#40424A] hover:bg-[#40424A] hover:text-white duration-200">
      <font-awesome-icon icon="fa-solid fa-filter" size="lg"></font-awesome-icon>
    </button>
    <div v-if="isShown" class="absolute right-0 z-1 bg-white w-48 rounded-xl py-2 h-fit shadow-lg border-[1px] border-gray-300">
      <DropdownItem @click="toggleMenu" :text="'Hello'" />
      <DropdownItem @click="toggleMenu" :text="'Hello'" />
      <DropdownItem @click="toggleMenu" :text="'Hello'" />
    </div>
  </div>

</template>