<template>
  <div>
    <banner title="Panier" />
    <NuxtLoadingIndicator color="#ff7900" />
    <div class="container">
      <div class="cart"  v-if="cart.getCount() > 0">
        <table class="table">
          <caption class="visually-hidden">Boosted tables basic look</caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in cart.cart" :key="product.id">
              <th scope="row"> <img :src="product.image" alt="" width="25"></th>
              <td>{{ product.title }}</td>
              <td>${{ product.price }}</td>
            </tr>
          </tbody>
        </table>

        <h2>Coût totale: {{ totalprice }}</h2>
        <div class="d-flex">
          <button class="btn btn-secondary" @click="$router.back()">Retour </button>
          <button class="btn btn-primary">Valider la commande </button>
        </div>
      </div>
      <div v-else>
          <h3>Votre panier est vide</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const cart = useCartStore();

const totalprice = cart.getTotalPrice();

</script>

<style></style>