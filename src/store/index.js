import { createStore } from 'vuex'
import storeItems from './storeItems'

export default createStore({
  state: {
    listItems: storeItems.listItems,
  },
  getters: {
    listItems: (state) => {
      return state.listItems;
    }
  },
  mutations: {
    addedNewCountry: (state, newAddedItem) => {
      state.listItems.unshift(newAddedItem);
    }
  },
  actions: {
    addedNewCountry(context, newAddedItem) {
      context.commit('addedNewCountry', newAddedItem)
    }
  },
  modules: {
  }
})
