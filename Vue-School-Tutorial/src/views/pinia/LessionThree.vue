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
    <form @submit.prevent="saveItem">
      <input type="text" v-model="newItem" />
      <!-- <button type="text" v-model="storeShop.saveItem">Add </button> -->
        <!-- v-on:click="storeShop.newItem.push({ id: storeShop.items.lenght + 1, label: storeShop.newItem })" -->
      <button
        class="btn btn-primary"
        type="button"    
        v-on:click="storeShop.items.push({ id: storeShop.items.length + 1, label: newItem })">
        Save
      </button>
    </form>
    <div>
      <br />
    <!-- <h1>{{ storeShop }}</h1> -->
    1st list <br />
    <ol>
      <li v-for="(item, index) in storeShop.items" :key="index">{{ item.label }} <br /></li>
    </ol>
    2nd list <br />
    <ul>
      <li v-for="item in storeShop.items" :key="item.id">
        {{ item.label }}
        <br />
      </li>
    </ul>
    3rd list <br />
    <ul>
      <li v-for="({ id, label }, index) in storeShop.items" :key="id">
        {{ index }}
        {{ label }}
        <br />
      </li>
    </ul>
    </div>
  </div>
</template>
