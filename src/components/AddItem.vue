<template>
	<div>
		<div>
			<form @submit.prevent="addNewItem">
				<input v-model="itemName" type="text" placeholder="Item Name" required="required">
				<input v-model="itemPrice" type="number" placeholder="Item Price" required="required">
				<input v-model="itemQuantity" type="number" placeholder="Item Quantity" required="required">
				<button class="border-2 border-yellow-300 rounded-lg p-1">Add Item</button>
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
//computed: {
//	checkTotal() {
//		for (let i=0; i < this.listItems.length; i++) {
//			const element = this.listItems[i].price * this.listItems[i].quantity;
//			return this.total = this.total + element;
//		}
//	}
//},
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
	}
}
}
</script>
