<template>
    <div class="container">
		<div class="headline">
			<p>Best Selling Electronics</p>
		</div>
		<div @click="viewProduct(electronic.asin)" class="card" v-for="electronic in electronics" :key="electronic.id">
			<img :src="electronic.image" alt="">
		</div> 
    </div>
</template>

<style scoped>
.container {
	padding:15px;
	display: flex;
	overflow:scroll;
	background:white;
	display:flex;
}
.card {
  min-width:250px;
  width:250px;
  margin:0 auto;
  padding:0;
  cursor: pointer;
}
.headline {
	display:block;
}
img {
	margin:auto auto;
	max-width:200px;
	max-height:200px;
	object-fit: contain;
	display:flex;
}

h3 {
	margin:13px;
}
p {
	display:block;
}
</style>

<script>
import axios from 'axios'

export default {
	data () {
		return {
			electronics: [],
		}
	},
	methods: {
		viewProduct(asin) {
			window.location.href = `/product?id=` + asin
		}
	},
	created () {

		//* electronics
		axios.get(`https://api.rainforestapi.com/request?api_key=D0D92EC1CE1E44F38A08179F255768EC&type=bestsellers&url=https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics/ref=zg_bs_nav_0`).then(resp => {
            console.log(resp)
			this.electronics = resp.data.bestsellers
        })
		
	}	
}
</script>