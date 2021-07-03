import { createStore } from 'vuex'
import storeItems from './storeItems'

export default createStore({
  state: {
    listItems: storeItems.listItems,
    total: 0,
  },
  getters: {
    listItems: (state) => {
      return state.listItems;
    },
    total: (state) => {
      return state.total;
    }
  },
  mutations: {
    addedNewCountry: (state, newAddedItem) => {
      state.listItems.unshift(newAddedItem);
    },
    deleteCountry: (state, indexForDelete, item) => {
      state.listItems.splice(indexForDelete, 1)
      let elem2 = item.price * item.quantity;
      state.total = state.total - elem2; 
    },
    addToTotal: (state, element) => {
        state.total = state.total + element;
    }
  },
  actions: {
    addedNewCountry(context, newAddedItem) {
      context.commit('addedNewCountry', newAddedItem)
    },
    deleteCountry(context, indexForDelete, item) {
      context.commit('deleteCountry', indexForDelete, item)
    },
    addToTotal(context, element) {
      context.commit('addToTotal', element);
    },
  },
  modules: {
  }
})
