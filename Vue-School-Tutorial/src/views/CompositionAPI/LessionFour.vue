<script setup>
import { ref } from 'vue'
const newItem = ref('')
const newPriority = ref('low')
const newHighPriority = ref('')
const IcecreamFlavor = ref([])
</script>
<template>
  <div>
    <div><input type="text" v-model="newItem" />{{ newItem }}</div>
    <br />
    <div>
      Priority: <label> <input type="radio" v-model="newPriority" value="low" />Low</label>
      <label><input type="radio" v-model="newPriority" value="high" />High</label> |
      {{ newPriority }}
    </div>
    <br />
    <div>
      <select v-model="newPriority">
        Priority:
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
      {{ newPriority }}
    </div>
    <div>
      High priority <input type="checkbox" v-model="newHighPriority" />{{ newHighPriority }}
    </div>
    <br />
    <!-- clear -->
    <br />
    <label>
      <input type="checkbox" value="Choklate" v-model="IcecreamFlavor" />
    </label>
    <label>
      <input type="checkbox" value="Vanila" v-model="IcecreamFlavor" />
    </label>
    <label>
      <input type="checkbox" value="Milk" v-model="IcecreamFlavor" />
    </label>
    Ice creame flavor : {{ IcecreamFlavor }}
  </div>
</template>

<style></style>
