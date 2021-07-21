<template>
	<div>
		<div>
			<form @submit.prevent="addNewItem">
				<input v-model="itemName" type="text" placeholder="Item Name" required="required">
				<input v-model="itemPrice" type="number" placeholder="Item Price" required="required">
				<input v-model="itemQuantity" type="number" placeholder="Item Quantity" required="required">
				<button class="bg-transparent hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white px-4 border border-yellow-500 hover:border-transparent rounded">Add Item</button>
			</form>
		</div>
		
	</div>
</template>

<script>
import axios from 'axios';

const baseURL = "http://localhost:3000/lists/";

export default {
name: "AddItem",
data() {
	return {
		itemName: "",
		itemPrice: "",
		itemQuantity: "",
		total: 0,
		listItems: this.$store.getters.listItems,
	}
},

methods: {
	async addNewItem() {
		const newAddedItem = {
			name: this.itemName,
			quantity: this.itemQuantity,
			price: this.itemPrice
			}
		const headers = {'Content-Type': 'application/json'}
		const response = await axios.post(baseURL, newAddedItem, headers)
		console.log(response);
		this.$store.dispatch("addedNewItem", newAddedItem);
		let element = this.itemQuantity * this.itemPrice;
		this.itemName = "";
		this.itemPrice = "";
		this.itemQuantity = "";
		this.$store.dispatch('addToTotal', element);
		element = "";
		console.log(this.listItems);
	},
	
}
}
</script>
