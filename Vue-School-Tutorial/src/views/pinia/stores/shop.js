// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () =>
    // all these properties will have their type inferred automatically
    ({
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
      items: [
        { id: 1, label: '10 party hats' },
        { id: 2, label: '2 board games' },
        { id: 3, label: '20 cups' }
      ],
      // hasChanged: true
    }),
  getters: {
    oddEven: (state) => {
      if (state.count % 2 === 0) return 'even'
      else return 'odd'
    }
  },
  actions: {
    addItems1() {
      
    },
    saveItem() {
      // items.value.push({ id: items.value.lenght + 1, label: newItem.value })
      // newItem.value= ""
      this.items.value.push({
        id: this.items.value.length + 1,
        label: this.newItem.value
      })
      // this.newItem.value= ""
    }
  }
})
