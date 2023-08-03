// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () =>
    // all these properties will have their type inferred automatically
    ({
      items: [],
      newHighPriority: false,
      editing: true
    }),
  getters: {
    oddEven: (state) => {
      if (state.count % 2 === 0) return 'even'
      else return 'odd'
    }
  },
  actions: {
    doEdit(){
      try {
        // this.editing.valueOf = e
        this.newItem.value = ""
      } catch  {
        console.log(this.editing.valueOf)
      }
    },
    saveItem() {
      // items.value.push({ id: items.value.lenght + 1, label: newItem.value })
      // newItem.value= ""
      this.items.value.push({
        id: this.items.value.length + 1,
        label: this.newItem.value,
        priority: this.newHighPriority.valueOf
      })
      // this.newItem.value= ""
    }
  }
})
