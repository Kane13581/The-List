<template>
  <div class="home">
    <AddItem />
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

      <div class="ml-6 border-2 absolute bottom-0">
      Total: {{ item.price * item.quantity }} RON
      </div>
    </div>
    <CalcTotal />
    </div>
  </div>
</template>

<script>
import CalcTotal from "../components/CalcTotal.vue";
import AddItem from "../components/AddItem.vue";

export default {
  name: 'Home',
  components: {
  AddItem,
  CalcTotal,

  },
  computed: {
    listItems() {
      return this.$store.getters.listItems;
    }
  }
}
</script>

