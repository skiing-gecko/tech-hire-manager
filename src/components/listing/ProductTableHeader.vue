<script setup>
import DropdownMenu from '../menus/dropdown/DropdownMenu.vue';
import SearchBar from '../SearchBar.vue';

const props = defineProps({
  numProducts: Number,
});

// const emit = defineEmits(['filter']);
</script>

<template>
  <div class="bg-white rounded-t-2xl h-24 px-6 pt-10 flex flex-row justify-between">
    <h2 class="text-xl font-semibold">{{ props.numProducts }} Items</h2>
    <div class="flex flex-row space-x-3">
      <button class="export rounded-lg h-9 w-9 border-2 border-[#40424A] text-[#40424A] hover:bg-[#40424A] hover:text-white duration-200">
        <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" size="lg"></font-awesome-icon>
      </button>
      <DropdownMenu />
      <SearchBar />
    </div>
  </div>
</template>