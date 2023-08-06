// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () =>
    // all these properties will have their type inferred automatically
    ({
      items: [
        { id: 1, label: '10 party hats' },
        { id: 2, label: '2 board games' },
        { id: 3, label: '20 cups' }
      ],
      // newItem: [],
      newHighPriority: false,
      editing: false
    }),
  getters: {
    oddEven: (state) => {
      if (state.count % 2 === 0) return 'even'
      else return 'odd'
    }
  },
  actions: {
    doEdit(e) {
      try {
        this.editing.value = e
        // this.newItem.value = ""
        // this.editing.value = e
      // this.newItem.value = ""
      console.log(this.editing.valueOf({e}))
      } catch {
        console.log('Error')
      }
    },
    saveItem() {
      this.items.value.push({
        id: this.items.value.length + 1,
        label: this.newItem.value,
        priority: this.newHighPriority.valueOf
      })
    }
  }
})
