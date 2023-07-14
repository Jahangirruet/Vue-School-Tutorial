<template>
  <div>
    <h1>List Rendering in Vue</h1>
    <br />
    <h1>{{ Header || 'welcome' }}</h1>
    <!-- <form v-on:submit.prevent="items.push({ id: items.lenght + 1, label: newItem })"> -->
    <form @submit.prevent="items.push({ id: items.lenght + 1, label: newItem })">
      <div>
        <input type="text" v-model.trim="newItem" />
        <input type="checkbox" v-model="newHighPriority" />
        <button type="button" v-on:click="items.push({ id: items.lenght + 1, label: newItem })">
          Save
        </button>
      </div>
      <ul>
        <li v-for="({ label }, index) in items" :key="index">
          {{ label }}
        </li>
      </ul>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const Header = ref('Welcome to shopping list app')
const newHighPriority = ref('low')
const newItem = ref('')
const items = ref([
  { id: 1, label: '10 party hats' },
  { id: 2, label: '2 board games' },
  { id: 3, label: '20 cups' }
])
</script>
