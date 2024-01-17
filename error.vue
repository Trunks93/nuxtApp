<template>
    <div>
        <h2>ERROR {{ error.statusCode }}</h2>
        <p>{{ error.message }}</p>
        <button class="btn btn-primary" @click="goHome">Go back</button>
    </div>
</template>
<script lang="ts" setup>
const error = useError();

const goHome = () =>{
   navigateTo({name:'home'});
}
</script>
