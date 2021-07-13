import axios from 'axios';
import { createStore } from 'vuex'
import storeItems from './storeItems'


export default createStore({
  state: {
    //listItems: storeItems.listItems,
    listItems: [],
    total: 0,
    newData: [],
  },
  getters: {
    listItems: (state) => {
      return state.listItems;
    },
    total: (state) => {
      return state.total;
    },
    newData: (state) => {
      return state.newData;
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
    },
    setData(state, dataLists) {
      state.listItems = dataLists
      console.log(dataLists);
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
    },
    getData({commit}) {
      axios.get('http://localhost:3000/lists')
      .then(res => commit('setData', res.data))
    }
  },
  modules: {
  }
})
