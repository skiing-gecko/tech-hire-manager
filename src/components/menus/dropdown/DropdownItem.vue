<script setup>
const props = defineProps({
  'text': String
});
</script>

<template>
  <div class="block px-3 py-2 w-full hover:bg-slate-200 hover:cursor-pointer">
    {{ props.text }}
  </div>
</template>