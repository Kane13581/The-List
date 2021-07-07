<template>
  <div class="home">
    <div class="flex justify-center">
      <Button @toggleAddItem="toggleAddItem" />
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
    <div class="border-2 flex justify-center " v-for="(item, index) in listItems" :key="index">
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
      <div>
        <button @click="multiFunc(index, item)">Delete</button>
      </div>
    </div>
    <div class="absolute bottom-2 right-6 font-bold text-2xl">
    <CalcTotal />
    </div>
    </div>
  </div>
</template>

<script>
import CalcTotal from "../components/CalcTotal.vue";
import AddItem from "../components/AddItem.vue";
import DeleteModal from "../components/DeleteModal.vue";
import Button from "../components/Button.vue";

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
      sumToSubstract: 0,
      showAddItem: false,
    }
    },
  computed: {
    listItems() {
      return this.$store.getters.listItems;
    }
  },
  methods: {
    confirmDelete() {
      this.$store.dispatch("deleteCountry", this.indexForDelete);
      this.$store.dispatch("substractFunc", this.sumToSubstract)
      this.sumToSubstract = 0,
      this.indexForDelete = "";
      this.showDeleteModal = !this.showDeleteModal;
      console.log(this.$store.getters.total);
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
    },
    toggleAddItem() {
      this.showAddItem = !this.showAddItem;
    }
  }
}
</script>

