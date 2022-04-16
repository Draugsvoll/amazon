<template>
    <div class="container">
		<div class="headline">
			<p>Daily Deals</p>
		</div>
		<div @click="viewProduct(deal.asin)" class="card" v-for="deal in dailydeals" :key="deal.id">
			<img :src="deal.image" alt="">
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
			dailydeals: []
		}
	},
	created () {
		axios.get(`https://api.rainforestapi.com/request?api_key=D0D92EC1CE1E44F38A08179F255768EC&type=deals&url=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fgoldbox`).then(resp => {
            console.log(resp)
			this.dailydeals = resp.data.deals_results
        })
	}	
}
</script>