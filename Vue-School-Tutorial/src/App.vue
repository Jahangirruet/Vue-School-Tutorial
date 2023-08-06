<!-- <script>
// import NavigationView from './components/NavigationView.vue'
// import NavigationPinia from './components/NavPinia.vue'

export default {
components: { }
}
</script>

<template>
  <div>
    <RouterLink to="/pinia/lession1">   One</RouterLink>
    <RouterView />
    </div>
</template> -->
<script setup>
// import TheHeader from "@/components/TheHeader.vue";
// import ProductCard from "@/components/ProductCard.vue";
// import products from "@/data/products.json";
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </ul>
  </div>
</template>