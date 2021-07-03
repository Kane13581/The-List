<template>
  <div class="home">
    <AddItem />
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
        <button @click="deleteCountry">Delete</button>
      </div>
    </div>
    <CalcTotal />
    </div>
  </div>
</template>

<script>
import CalcTotal from "../components/CalcTotal.vue";
import AddItem from "../components/AddItem.vue";
import DeleteModal from "../components/DeleteModal.vue";

export default {
  name: 'Home',
  components: {
  AddItem,
  CalcTotal,
  DeleteModal,
  },
  data() {
    return {
      showDeleteModal: false,
      indexForDelete: "",
    }
    },
  computed: {
    listItems() {
      return this.$store.getters.listItems;
    }
  },
  methods: {
    confirmDelete() {
      this.$store.dispatch("deleteCountry", this.indexForDelete, item);
      this.indexForDelete = "";
      this.showDeleteModal = !this.showDeleteModal;
      console.log(this.$store.getters.total);
    },
    cancelDelete() {
      this.showDeleteModal = !this.showDeleteModal;
    },
    deleteCountry(index) {
      this.showDeleteModal = !this.showDeleteModal;
      this.indexForDelete = index;
    },
  }
}
</script>

