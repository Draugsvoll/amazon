<template>
    <div class="container">
		<category v-for="category in categories"  :category="category" :key="category.id"
		></category> 
    </div>
</template>


<script>
// import axios from 'axios'
import Category from './Category'

export default {
	data () {
		return {
			categories: ['shoes', 'computers', 'watches', 'fitness', 'books']
		}
	},
   components: {
		category: Category
	},
	created () {
		//* Getting categories
		// // shoes
		// axios.get(`https://api.rainforestapi.com/request?api_key=D0D92EC1CE1E44F38A08179F255768EC&type=search&search_term=shoes&amazon_domain=amazon.com`).then(resp => {
        //     console.log(resp)
        // })

		// // computers
		// axios.get(`https://api.rainforestapi.com/request?api_key=D0D92EC1CE1E44F38A08179F255768EC&type=search&search_term=computers&amazon_domain=amazon.com`).then(resp => {
        //     console.log(resp)
        // })

		// // fitness
		// axios.get(`https://api.rainforestapi.com/request?api_key=D0D92EC1CE1E44F38A08179F255768EC&type=search&search_term=fitness&amazon_domain=amazon.com`).then(resp => {
        //     console.log(resp)
        // })

		// // watches
		// axios.get(`https://api.rainforestapi.com/request?api_key=D0D92EC1CE1E44F38A08179F255768EC&type=search&search_term=watches&amazon_domain=amazon.com`).then(resp => {
        //     console.log(resp)
        // })

		// // books
		// axios.get(`https://api.rainforestapi.com/request?api_key=D0D92EC1CE1E44F38A08179F255768EC&type=search&search_term=books&amazon_domain=amazon.com`).then(resp => {
        //     console.log(resp)
        // })
	}	
}
</script>

<style scoped>
.container {
	padding:50px;
	display: flex;
	flex-wrap: wrap;
}
</style>
