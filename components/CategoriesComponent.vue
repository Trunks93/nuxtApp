<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="category,k in categories" :key="k">
        <NuxtLink :to="{name:'products-category',params:{category:category}}">{{category}}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
let {data: categories} = await useFetch('https://fakestoreapi.com/products/categories');


</script>