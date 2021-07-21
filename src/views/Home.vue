<template>
  <div class="home">
    <div class="flex justify-center">
      <Button @toggleAddItem="toggleAddItem" />
    </div>
    <!--<div v-for="(list, index) in dataLists" :key="index">
        Item name {{list.name}} 
        Item price {{list.price}}
        Item quantity {{list.quantity}}
    </div>-->
    <div v-for="(data, index) in newData" :key="index">
        {{ data.name }}
    </div>
    <div class="border-2 flex justify-center">
      <div v-if="showAddItem" >
    <AddItem />
      </div>
    </div>
    <DeleteModal v-if="showDeleteModal"
        @cancel-delete="cancelDelete"
        @confirm-delete="confirmDelete"/>
    <div class="flex flex-col justify-center border-2">
    <div class="border-2 flex justify-center" v-for="(item, index) in listItems" :key="index">
      <div class="border-2 mr-4">
      {{  item.name }}
      </div>  
      <div class="border-2 mr-4">
        {{ item.price }}
      </div>
      <div class="border-2 mr-4">
        {{ item.quantity }}
      </div>

      <div class="ml-6 border-2">
      Total: {{ item.price * item.quantity }} RON
      </div>
      <div class="ml-12 flex">
        <button @click="multiFunc(index, item)">
          <img class="w-12 h-9" src="../assets/TrashCan.png">
        </button>
        
      </div>
    </div>
    <div class="absolute bottom-2 right-6 font-bold text-2xl text-yellow-500">
    <CalcTotal />
    </div>
    </div>
  </div>
</template>

<script>
import CalcTotal from "../components/CalcTotal.vue";
import AddItem from "../components/AddItem";
import DeleteModal from "../components/DeleteModal.vue";
import Button from "../components/Button.vue";
import axios from 'axios';

//window.axios = require('axios')


export default {
  name: 'Home',
  components: {
  AddItem,
  CalcTotal,
  DeleteModal,
  Button,
  },
  data() {
    return {
      showDeleteModal: false,
      indexForDelete: "",
      idForDelete: null,
      sumToSubstract: 0,
      showAddItem: false,
      dataLists: null,
    }
    },
  computed: {
    listItems() {
      return this.$store.getters.listItems;
    },
    newData() {
      return this.$store.getters.newData;
    }
  },
  mounted: function () {
    this.$store.dispatch("getData");
  },
  methods: {
    async confirmDelete() {
    const headers = {'Content-Type': 'application/json'}
		await axios.delete("http://localhost:3000/lists/" + this.idForDelete, headers)
    
    .then(response => {
      console.log(response);

      this.$store.dispatch("deleteCountry", this.indexForDelete);
      this.$store.dispatch("substractFunc", this.sumToSubstract)
      this.sumToSubstract = 0,
      this.indexForDelete = "";
      this.showDeleteModal = !this.showDeleteModal;
      console.log(this.$store.getters.total);
    })    

    .catch(error => {
      console.log(error);
    })
    },
    cancelDelete() {
      this.showDeleteModal = !this.showDeleteModal;
    },

    multiFunc(index, item) {
        this.deleteCountry(index),
        this.findItem(item) 
    },

    deleteCountry(index) {
      this.showDeleteModal = !this.showDeleteModal;
      this.indexForDelete = index;
      console.log(this.indexForDelete);
    },
    findItem(item) {
    this.sumToSubstract = item.price * item.quantity
    this.idForDelete = item._id;
    },
    toggleAddItem() {
      this.showAddItem = !this.showAddItem;
    }
  }
}
</script>

