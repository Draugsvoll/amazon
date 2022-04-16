<template>
	<div class="card" @click="open(product)">
		<h3 class="title">{{ product.title }}</h3>
		<!-- <p> {{ product.asin}} </p> -->
		<img v-bind:src="product.image" alt="" >
		<h1 class="price"> {{ product.price.raw}} </h1>
	</div>
</template>


<script>
export default {
    props: ['product'],
	methods: {
		open (product) {
			// this.$store.dispatch('fill_product', product)
			// console.log('Sender prod. til store: ', product)
			// console.log('Logger store: ', this.$store.getters.product)

			window.location.href = `/product?id=` + product.asin
		}
	},
	created () {

	}
}
</script>

<style scoped>

.card {
  background:white;
  width:500px;
  height:430px;
  margin:20px;
  padding:0;
  cursor:pointer;
}

.card:hover {
  box-shadow: 8px 8px 8px rgba(0,0,0,0.1);
  transition: 0.2s;
}
.title {
	height:150px;
}
img {
	/* margin-bottom:-10px; */
	object-fit: cover;
	max-width:200px;
	max-height:175px;
}

h3 {
	margin:13px;
}
h1 {
	margin:15px;
}
</style>