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
			listItems: this.$store.getters.listItems,
		}
	},
	computed: {
		checkTotal() {
			return this.$store.getters.total
		}
	},
	methods: {
	}
}
</script>
