<template>
  <div class="container">
    <div class="row">

      <div class="col-4" v-for="product in products" :key="product.id">

        <my-product :product="product" />

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['products'])


</script>

<style></style>