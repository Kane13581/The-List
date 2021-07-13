import axios from 'axios';
import { createStore } from 'vuex'
import storeItems from './storeItems'


export default createStore({
  state: {
    //listItems: storeItems.listItems,
    listItems: [],
    total: 0,
    newData: [],
    newTotal: 0,
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
    setData(state, dataLists) { //res.data = dataLists
      state.listItems = dataLists
      console.log(dataLists);
      for(let i=0;i<dataLists.length;i++) {
        state.total = state.total + dataLists[i].price * dataLists[i].quantity
        console.log(dataLists[i].price);
      }
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
    },
  },
  modules: {
  }
})
