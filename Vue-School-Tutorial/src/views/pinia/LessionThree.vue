<script setup>
import { ref } from 'vue'
const Header = ref('Welcome to shopping list app')
const items = ref([
  { id: 1, label: '10 party hats' },
  { id: 2, label: '2 board games' },
  { id: 3, label: '20 cups' }
])
</script>

<template>
  <div>
    <h1>List Rendering in Vue</h1>
    <br />
    <h1>{{ Header || 'welcome' }}</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.label }}
      </li>
    </ul>
    <ul>
      <li v-for="({id,label}, index) in items" :key="id">
       {{ index }}
        {{ label }}
      </li>
    </ul>
  </div>
</template>

<style></style>
