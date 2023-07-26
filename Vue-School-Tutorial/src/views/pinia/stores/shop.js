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
      newItems: [],
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
      return console.log()
    },
    saveItem() {
      // state.items.value.push({ id: items.value.lenght + 1, label: newItem.value })
      // this.state.items.value.push({id: this.items.value.lenght +1, label: this.newItems.values})
      this.state.items.value.push({
        id: this.items.value.lenght + 1,
        label: this.newItem.value
      })
    }
  }
})
