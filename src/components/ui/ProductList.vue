<template>
    <div class="container">
		<product v-for="product in productlist"  :product="product" :key="product.id">
		</product>
    </div>
</template>


<script>
import axios from 'axios'
import Product from './Product'

export default {
	components: {
		product: Product,
	},
	computed: {
		productlist () {
			return this.$store.getters.product_list
		}
	},
	created () {
		var emptyList
		this.$store.dispatch('fill_productlist', emptyList)

		const category = this.$route.query.id
		
		axios.get(`https://api.rainforestapi.com/request?api_key=D0D92EC1CE1E44F38A08179F255768EC&type=search&search_term=${category}&amazon_domain=amazon.com`).then(resp => {
			var productList = resp.data.search_results
			this.productList = productList
			console.log(this.productList)
			this.$store.dispatch('fill_productlist', productList)
        })
	}
}
</script>

<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  padding:50px;
}

</style>
