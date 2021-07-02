<template>
  <div class="home">
    <AddItem />
    <div class="flex flex-col justify-center border-2">
    <div class="border-2 flex justify-center " v-for="(item, index) in listItems" :key="index">
      {{  `${item.name} - ${item.quantity} pcs - ${item.price} RON` }}
      <div class="ml-6">
      Total: {{ item.price * item.quantity }} RON
      </div>
    </div>
    <CalcTotal />
    </div>
  </div>
</template>

<script>
import AddItem from "../components/AddItem.vue";
import CalcTotal from "../components/CalcTotal.vue";

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

