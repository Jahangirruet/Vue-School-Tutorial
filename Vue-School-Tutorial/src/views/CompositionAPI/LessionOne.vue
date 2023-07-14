<script setup>
import { ref } from 'vue'
const msg = ref("hello worldA")
</script>

<template>
  <div>
    <h1>Getting Started with Vue.js and the Composition API</h1>
    <br />
   <h3> {{ msg }}</h3> 
    <input v-model="msg"/>
    <input v-model="msg"/>
  </div>
</template>

<style></style>
