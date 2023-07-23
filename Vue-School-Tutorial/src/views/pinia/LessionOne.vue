<template>
  <div>
    <div>
      <h1>pinia</h1>
      <img src="./assets/imagePinia/icons8-cart-50.png" />{{ storeCounter.count }} <br /> {{ count }}
    </div>
    <br />
    <img height="200" src="./assets/imagePinia/BP.jpg" />
    <br />
    <button class="btn btn-primary" @click="storeCounter.increaseCount">+</button
    ><button class="btn btn-primary">{{ storeCounter.count }}</button
    ><button class="btn btn-primary" @click="storeCounter.decreaseCount">-</button><br />
    <button class="btn btn-primary">Add to cart</button>
    <div>
      <img height="200" src="./assets/imagePinia/BP.jpg" />
      <br />
      <button class="btn btn-primary" @click="storeCounter.increaseCount">+</button
      ><button class="btn btn-primary">{{ storeCounter.count }}</button
      ><button class="btn btn-primary" @click="storeCounter.decreaseCount">-</button><br />
      <button class="btn btn-primary">Add to cart</button>
      <br />
      <h1>{{ storeCounter.oddEven }}</h1>
      <br />
      <input type="number" v-model="storeCounter.count">
    </div>
  </div>
</template>

<script setup>
// import { computed, ref } from 'vue'
import {  ref } from 'vue'
import { useCounterStore } from './stores/counter'
const storeCounter = useCounterStore()
const count = ref(0)
// method
// const increment = () => {
//   count.value++
// }
// const decrement = () => {
//   count.value--
// }
// eslint-disable-next-line vue/return-in-computed-property
// const oddEven = computed(() => {
//   if (count.value % 2 === 0) return 'even'
//   else return 'odd'
// })
</script>

<style></style>
