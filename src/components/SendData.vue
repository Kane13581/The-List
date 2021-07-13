<template>
	<div>
		<form @submit.prevent="sendNewData">
		<input v-model="name" type="text" placeholder="Name" required>
		<input v-model="price" type="number" placeholder="Price" required>
		<input v-model="quantity" type="number" placeholder="Quantity" required>
		<button class="ml-6 text-2xl">+</button>
		</form>
	</div>
</template>

<script>
import axios from 'axios';

const baseURL = "http://localhost:3000/lists/";



export default {
	name: "SendData",
	data() {
		return {
			name: '',
			price: '',
			quantity: '',
			articleID: ''
		}
	},
	methods: {
	async sendNewData() {
			const newData = {
				name: this.name,
				price: this.price,
				quantity: this.quantity, 
			}
			const headers = {
				'Content-Type': 'application/json'
			}
			const body = JSON.stringify(newData)
			const response = await axios.post(baseURL, {name: this.name,
				price: this.price,
				quantity: this.quantity }, headers, )
			console.log(response);
		}
		
	}
}
</script>
