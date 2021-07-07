<template>
	<div>
		<button @click="toggleAddItem" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  			Add New Item
		</button>
	</div>
</template>

<script>

export default {
	name: "Button",
	methods: {
		toggleAddItem() {
			this.$emit("toggleAddItem");
		}
	}
}
</script>
