<template>
	<div>
	Total:	{{ checkTotal }}
	</div>
</template>

<script>

export default {
	name: "CalcTotal",
	data() {
		return {
			total: 0,
			listItems: this.$store.getters.listItems,
		}
	},
	computed: {
		checkTotal() {
		for (let i=0; i < this.listItems.length; i++) {
			const element = this.listItems[i].price * this.listItems[i].quantity;
			return this.total = this.total + element;
		}
	}
	},
}
</script>
