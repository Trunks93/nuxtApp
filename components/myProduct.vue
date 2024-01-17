<template>
  <div class="mb-2">
    <div class="card" style="width: 18rem;">
      <img :src="product.image" alt="" class="image-product">
      <div class="card-body">
        <h5 class="card-title">{{ limitCharactere(product.title,25) }}</h5>
        <p class="card-text fw-bold mb-4" v-if="short==false">{{ limitCharactere(product.description,100) }}</p>
        <h3>${{ product.price }}</h3>
        <NuxtLink :to="{ name: 'products-details', params: { 'product': product.id } }" class="btn btn-primary">Voir</NuxtLink>
        <button @click ="cart.addCart(product)" class="btn btn-secondary"> Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps(['product','short'])
const { limitCharactere } = useUtilities();

const cart = useCartStore();

</script>

<style>
.image-product {
  height: 300px;
  width: auto;
}
</style>