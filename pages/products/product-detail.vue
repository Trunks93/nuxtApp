<template>
    <div>
        <banner title="Détail des produits" />
        <NuxtLoadingIndicator color="#ff7900" />
        <div class="container">

            <div class="row mb-5">
                <div class="col-4">
                    <img :src="currentProduct.image" alt="" class="image-product card-img-top" style="width:80%; height: auto;">
                </div>
                <div class="col-1">
                </div>
                <div class="col-7">
                    <h2>{{ currentProduct.title }}</h2>
                    <span class="badge text-bg-light mb-2">{{ currentProduct.category }}</span>

                    <p>{{ currentProduct.description }}</p>
                    <h3>${{ currentProduct.price }}</h3>
                    <button @click ="cart.addCart(currentProduct)" class="btn btn-primary">Ajouter au panier <i class="fa fa-cart"></i></button>
                </div>
            </div>
            <h2>Produits complémentaires</h2>
            <div class="scroll_container">
                <div class="scroll" v-for="product in products" :key="product.id">
                    <my-product :product="product" :short="true" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {useCartStore} from '@/stores/useCartStore'

let route = useRoute();
const { data: currentProduct } = await useFetch(`https://fakestoreapi.com/products/${route.params.product}`)


const { getComplementary } = useCategoriesTools();

const complementCategory = getComplementary(currentProduct.value.category);

const { data: products } = await useFetch(`https://fakestoreapi.com/products/category/${complementCategory}`);


const cart = useCartStore();


//console.log('ok',product.category)


//console.log(products)


</script>

<style>
.scroll_container {
    display: flex;
    flex-direction: row;
    overflow: scroll;
    margin-bottom: 20px;
}

.scroll {
    margin: 5px;
}
</style>