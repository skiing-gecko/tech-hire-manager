<script setup>
const props = defineProps({
  'id': String,
});
</script>

<template>
  <div class="px-[10%] pt-[5%] pb-[5%] drop-shadow-xl w-full overflow-y-scroll">
    <div class="bg-white flex-1 rounded-2xl h-full grid grid-rows-2">
      <div class="p-6">
        <h1 class="text-xl">Details for Item No. {{ props.id }}</h1>
      </div>
      <div class="p-6">
        <h1 class="text-xl mb-2">Hire History</h1>
        <div class="bg-slate-200 rounded-2xl h-[90%] overflow-y-scroll p-3 font-mono">
          <p>2023-08-21 - Returned</p>
          <p>2023-08-17 - Hired</p>
          <p>2023-06-12 - Returned</p>
          <p>2023-06-09 - Hired</p>
          <p>2023-02-15 - Returned</p>
          <p>2023-02-13 - Hired</p>
        </div>
      </div>
    </div>
  </div>
</template>