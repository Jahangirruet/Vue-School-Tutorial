<template>
  <div>
    <h1>Reactivity Fundamentals</h1>
    <br />
    {{ state.count }}
    <br />
    <button type="button" @click="increment">increment</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({count:0})
const increment = () =>{
  state.count++
}
</script>

<style></style>
