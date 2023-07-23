<template>
  <div>
    <br />
    <div>
      <h1>{{ Header }}</h1>
      <button v-if="editing" @click="doEdit(false)" class="btn btn-cancel">Cancel</button>
      <button v-else @click="doEdit(true)" class="btn btn-primary">Add item</button>
    </div>
    <br />
    <form v-if="editing" @submit.prevent="saveItem">
      <div>
        <input type="text" placeholder="Add an item" v-model.trim="newItem" /> <br />
        High Priority <input type="checkbox" v-model="newHighPriority" /><br />
        <button
          class="btn btn-primary"
          type="button"
          v-on:click="
            items.push({ id: items.lenght + 1, label: newItem, HighPriority: newHighPriority })
          "
        >
          Save
        </button>
      </div>
      <p class="counter">{{ characterCount }}/200</p>
    </form>

    <ul>
      <li
        v-for="(item) in reverseItem"
        @click="togglePurchased(item)"
        class="static-class"
        :class="[{ strikeout: item.purchased, priority: item.HighPriority }]"
        :key="item.index"
      >
        {{ item.label }}<br />
      </li>
    </ul>
    <p v-if="!items.length">Nothing to see</p>
  </div>
</template>

<script setup>
import { ref , computed } from 'vue'
const Header = ref('Welcome to shopping list app')
const newHighPriority = ref('low')
// const HighPriority = ref(false)
const newItem = ref('')
const editing = ref(false)

const items = ref([
  { id: 1, label: '10 party hats', purchased: true, HighPriority: true },
  { id: 2, label: '2 board games', purchased: true, HighPriority: true },
  { id: 3, label: '20 cups', purchased: false, HighPriority: false }
])

// computed

const characterCount = computed(()=>{return newItem.value.length})
const reverseItem = computed(()=>{ return [...items.value].reverse()})

// methodes

const doEdit = (e) => {
  editing.value = e
  newItem.value = ''
  newHighPriority.value = ''
}

const saveItem = () => {
  items.value.push({
    id: items.value.lenght + 1,
    label: newItem.value,
    HighPriority: newHighPriority.value
  })
}
const togglePurchased = (item) => {
  item.purchased = !item.purchased
}
</script>
