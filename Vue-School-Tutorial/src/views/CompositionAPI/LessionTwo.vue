<script setup>
import { ref } from 'vue'
const msg = ref("hello world")
// const msg1 = ref("Goog bye")
const Header = ref("Welcome to shopping list app")
</script>

<template>
  <div>
    <h1>Getting Started with Vue.js and the Composition API</h1>
    <br />
   <h3> {{ msg ? msg : "Welcome" }}</h3> 
   <h3> {{ msg1 ? msg1 : "Welcome" }}</h3> 
   <h3>{{ Header || 'welcome'  }}</h3>
  </div>
</template>

<style></style>
