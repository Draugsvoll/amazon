<template>
	<div class="card" @click="open(product)">
		<h3 class="title">{{ product.title }}</h3>
		<!-- <p> {{ product.asin}} </p> -->
		<img v-bind:src="product.image" alt="" width="185" height="175">
		<h1 class="price"> {{ product.price.raw}} </h1>
	</div>
</template>


<script>
export default {
    props: ['product'],
	methods: {
		open (product) {
           window.location.href = `/product?id=` + product
		}
	},
	created () {

	}
}
</script>

<style scoped>

.card {
  background:white;
  width:400px;
  height:430px;
  margin:20px;
  padding:0;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);
  transition: 0.2s;
}
.title {
	height:150px;
}
img {
	/* margin-bottom:-10px; */
	object-fit: cover;
}

h3 {
	margin:13px;
}
h1 {
	margin:15px;
}
</style>