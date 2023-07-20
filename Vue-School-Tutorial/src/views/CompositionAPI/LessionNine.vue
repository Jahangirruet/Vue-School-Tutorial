<template>
  <div>
    <h1>List Rendering in Vue</h1>
    <br />
    <div>
      <h1>{{ Header }}</h1>
      <button v-if="editing" @click="doEdit(false)" class="btn btn-cancel">Cancel</button>
      <button v-else @click="doEdit(true)" class="btn btn-primary">Add item</button>
    </div>
    <form v-if="editing" @submit.prevent="saveItem">
      <div>
        <input type="text" v-model.trim="newItem" />
        <input type="checkbox" v-model="newHighPriority" />
        <button
          class="btn btn-primary"
          type="button"
          v-on:click="items.push({ id: items.lenght + 1, label: newItem })"
        >
          Save
        </button>
      </div>
    </form>
    <ul>
      <li v-for="({ label }, index) in items" 
      :class="{strikeour:purchased}"
      :key="index">
        {{ label }}<br />
      </li>
    </ul>
    <p v-if="!items.length">Nothing to see</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const Header = ref('Welcome to shopping list app')
const newHighPriority = ref('low')
const newItem = ref('')
const editing = ref(false)
const saveItem = () => {
  items.value.push({ id: items.value.lenght + 1, label: newItem.value })
}
const items = ref([
  { id: 1, label: '10 party hats' },
  { id: 2, label: '2 board games' },
  { id: 3, label: '20 cups' }
])
const doEdit = (e) => {
  editing.value = e
  newItem.value = ''
}
</script>