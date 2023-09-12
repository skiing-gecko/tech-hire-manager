<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  product: Object,
});
</script>

<template>
  <RouterLink :to="{ name: 'itemDetails', params: { id: props.product.id } }">
    <div class="px-3 py-6 border-t-2 border-gray-200 flex flex-row justify-between hover:bg-[#dcf4ff] hover:cursor-pointer">
      <p>{{ props.product.name }}</p>
      <p>{{ props.product.productType }}</p>
      <p>{{ props.product.status }}</p>
    </div>
  </RouterLink>
</template>