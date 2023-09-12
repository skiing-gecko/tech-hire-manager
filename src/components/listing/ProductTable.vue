<script setup>
import ProductRow from './ProductRow.vue';
import ProductTableHeader from './ProductTableHeader.vue';
import { ref } from 'vue';

const products = ref([
  {id: 1, name: 'Product 1', productType: 'Lighting', status: 'Available'},
  {id: 2, name: 'Product 2', productType: 'Sound', status: 'Available'},
  {id: 3, name: 'Product 3', productType: 'Music Room', status: 'Hired'},
  {id: 4, name: 'Product 4', productType: 'Lighting', status: 'Available'},
  {id: 5, name: 'Product 5', productType: 'Sound', status: 'Available'},
  {id: 6, name: 'Product 6', productType: 'Music Room', status: 'Hired'},
  {id: 7, name: 'Product 7', productType: 'Lighting', status: 'Available'},
  {id: 8, name: 'Product 8', productType: 'Sound', status: 'Available'},
  {id: 9, name: 'Product 9', productType: 'Music Room', status: 'Hired'},
  {id: 10, name: 'Product 10', productType: 'Lighting', status: 'Available'},
  {id: 11, name: 'Product 11', productType: 'Sound', status: 'Available'},
  {id: 12, name: 'Product 12', productType: 'Music Room', status: 'Hired'},
  {id: 13, name: 'Product 13', productType: 'Lighting', status: 'Available'},
  {id: 14, name: 'Product 14', productType: 'Sound', status: 'Available'},
  {id: 15, name: 'Product 15', productType: 'Music Room', status: 'Hired'},
  {id: 16, name: 'Product 16', productType: 'Lighting', status: 'Available'},
  {id: 17, name: 'Product 17', productType: 'Sound', status: 'Available'},
  {id: 18, name: 'Product 18', productType: 'Music Room', status: 'Hired'},
]);

const numProducts = ref(0);
const filteredProducts = ref(products.value);

numProducts.value = products.value.length.valueOf();

function filterProducts(filter) {
  if (filter) {
    filteredProducts.value = products.value.filter((product) => product.status === 'Available');
    numProducts.value = products.value.filter((product) => product.status === 'Available').length;
    return filteredProducts;
  } else {
    numProducts.value = products.value.length.valueOf();
    return products;
  }
}
</script>

<template>
  <div class="drop-shadow-xl">
    <ProductTableHeader @filter="filterProducts" :numProducts="numProducts"/>
    <div class="w-full bg-white px-3 pb-3 rounded-b-2xl">
      <ul>
        <li v-for="product in filteredProducts" :key="product.id">
          <ProductRow :product="product"/>
        </li>
      </ul>
    </div>
  </div>
</template>