<script setup>
import { fakeStoreAPI } from '../../api/fakeStore';
import { onMounted, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue';

const products = ref(null);

onMounted(async () => {
  products.value = await fakeStoreAPI.get("/products");
});
</script>

<template>
  <div class="product-grid">
    <ProductCard v-for="product in products?.data" :key="product.id" :product="product" />
  </div>
</template>

<style>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
</style>