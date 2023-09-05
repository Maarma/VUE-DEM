<script setup>
defineProps({
  product: Object,
});
</script>

<template>
    <article class="product-card">
        <img :src="product.image" alt="pilt" />
        <h4>{{ product.title }}</h4>
        <p>{{ product.description }}</p>
  </article>
</template>

<style>
.product-card {
    display: grid;
    gap: 1rem;
}

.product-card img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
}

.product-card h4 {
    font-weight: 700;
}

.product-card p{
    opacity: 50%;
}
</style>