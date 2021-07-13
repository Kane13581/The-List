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
	 addNewItem() {
		const newAddedItem = {
			id: this.$store.getters.listItems.length + 1,
			name: this.itemName,
			quantity: this.itemQuantity,
			price: this.itemPrice,
		}
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
