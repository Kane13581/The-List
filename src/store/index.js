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
    addedNewItem: (state, newAddedItem) => {
      state.listItems.unshift(newAddedItem);
    },
    deleteCountry: (state, indexForDelete) => {
      state.listItems.splice(indexForDelete, 1)

    },
    addToTotal: (state, element) => {
        state.total = state.total + element;
    },
    substractFunc: (state, sumToSubstract) => {
      state.total = state.total - sumToSubstract;
      console.log(state.total, sumToSubstract);
    }
  },
  actions: {
    addedNewItem(context, newAddedItem) {
      context.commit('addedNewItem', newAddedItem)
    },
    deleteCountry(context, indexForDelete) {
      context.commit('deleteCountry', indexForDelete)
    },
    addToTotal(context, element) {
      context.commit('addToTotal', element);
    },
    substractFunc(context, sumToSubstract) {
      context.commit("substractFunc", sumToSubstract)
    }
  },
  modules: {
  }
})
