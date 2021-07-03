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
			//total: this.$store.getters.total,
			listItems: this.$store.getters.listItems,
		}
	},
	computed: {
		checkTotal() {
		//for (let i=0; i < this.listItems.length; i++) {
		//	const element = this.listItems[i].price * this.listItems[i].quantity;
			//return this.$store.getters.total = this.$store.getters.total + element;
			return this.$store.getters.total
		}
	},
	methods: {
		addToTotal() {
		this.$store.dispatch('addToTotal');
		}
	}
}
</script>
