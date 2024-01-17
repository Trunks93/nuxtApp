<template>
    <div>
        <banner title="Liste des produits" />
        <NuxtLoadingIndicator color="#ff7900" />
        <div class="row">
            <div class="col-3">
                <categories-component />
            </div>
            <div class="col-9">
                <products-component :products="products" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const route = useRoute();


let { data: products } = await useFetch('https://fakestoreapi.com/products');


</script>