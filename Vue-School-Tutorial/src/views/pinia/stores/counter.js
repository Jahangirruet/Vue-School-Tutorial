// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 10, name: 'Eduardo' }),
  getters: {
    oddEven: (state) =>{
      if (state.count % 2 === 0) return 'even'
      else return 'odd'
    }
  },
  actions: {
    increaseCount() {
      this.count++
    },
    decreaseCount() {
      this.count--
    },
  },
})
