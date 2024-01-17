<template>
  <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/src/images/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <NuxtLink class="nav-link" :to="{name:'home'}">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" :to="{name:'register'}">register</NuxtLink>
        </li>
        <li class="nav-item">
           <NuxtLink class="nav-link" :to="{name:'products'}">products</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" :to="{name:'cart'}"> Panier <span class="badge text-bg-primary">{{ cart.getCount() }}</span></NuxtLink>
        </li>
      </ul>
    </div>

  </div>
</nav>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup>
const cart = useCartStore();
</script>
