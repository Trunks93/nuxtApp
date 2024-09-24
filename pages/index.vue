<template>
        <banner title="homepage"/>
        <div class="container">
          <NuxtLink :to="{name:'products'}">Consulter la liste des produits</NuxtLink>
        </div>
</template>

<script lang="ts" setup>
import { local } from '~/api/services/local';
const localService = new local();
const data = localService.post('api/products/singleProduct',{id:2});

</script>

