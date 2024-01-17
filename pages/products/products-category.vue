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
import { base } from '~/api/services/base';

const route = useRoute();

const products = ref([] as any[]);
const services = new base()

onBeforeMount(async () => {
    if (route.params.category) {
       products.value = await services.get(`products/category/${route.params.category}`, {})
        // products = elements
    } else {
        products.value = await services.get(`products`, {})
    }
})










</script>