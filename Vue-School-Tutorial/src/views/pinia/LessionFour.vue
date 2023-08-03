<script setup>
import { ref } from 'vue'
import { useShopStore } from './stores/shop'
const newItem = ref('')
const storeShop = useShopStore()
const Header = ref('Welcome to shopping list app')
</script>
<template>
  <div>
    <h1>List Rendering in Vue</h1>
    <br />
    <h1>{{ Header || 'welcome' }}</h1>
    <br />
    <button v-if="storeShop.editing" @click="storeShop.doEdit(true)">Cancel</button>
      <button v-else @click="storeShop.doEdit(false)">Add item</button>
    <br />
    <form v-if="storeShop.editing" @submit.prevent="saveItem">
      <input type="text" v-model="newItem" />
      <input type="checkbox" v-model="newHighPriority" />
      <button
        class="btn btn-primary"
        type="button"    
        v-on:click="storeShop.items.push({ id: storeShop.items.length + 1, label: newItem, priority:newHighPriority  })">
        Save
      </button>
    </form>
    <div>
      <br />
    <!-- <h1>{{ storeShop }}</h1> -->
    <ul>
      <li v-for="item in storeShop.items" :key="item.id">
        {{ item.label }}
        <br />
      </li>
    </ul>
    <p v-if="!storeShop.items.length">Nothing to see</p>
    </div>
  </div>
</template>
