<template>
    <div class="container">

		<div class="product">
			<!-- IMAGE -->
			<div>
				<img :src="product.main_image.link" alt="" width=400>
			</div>

			<!-- TEXT -->
			<div class="text">
				<div>
					<p class="title"> <b>{{ product.title }} </b>  </p>
				</div>
				<div>
					<p id=brand> Brand: {{ product.brand }} </p>
				</div>
				<div>
					<p id=rating>Rating: {{ product.rating }} </p>
				</div>
				<div>
					<h2 id=price> {{ product.buybox_winner.price.raw }} </h2>
				</div>
				<div class="features">
					<ul>
						<li v-for="feature in features" :key="feature.id">
							{{ feature }}
						</li>
					</ul>
				</div>
				
			</div>

			<!-- SHOPPING CART -->
			<div class="cart">
				<div><h3 id=cartprice> {{ product.buybox_winner.price.raw }} </h3></div>
				<div><p id=shipping> {{ product.buybox_winner.shipping.raw }} </p></div>
				<br>
				Qty: <input type="number" value="1"> <br> <br>
				<button>Add to Cart</button> <br>
				<button>Buy Now</button> <br> 
				<p class="seller">Seller:  {{ product.more_buying_choices[0].seller_name}}
					<br>	
					{{ product.more_buying_choices[0].seller_link }}
				</p>
				<p> Add to favorites </p>
			</div>

		</div>

		<!-- VIDEO -->
		<iframe 
			v-if="hideVideo=true" 
			autoplay muted
			height="380" 
			width="654" 
			:src="video_url" 
			alt="" 
			frameborder="0">
		</iframe>

    </div>
</template>


<script>
import axios from 'axios'

export default {
	data () {
		return {
			video_url: '',
			hideVideo: true,
			features: '',
		}
	},
	computed: {
		product () {
			return this.$store.getters.product
		}
	},
    created () {
		const asin  = this.$route.query.id
		axios.get(`https://api.rainforestapi.com/request?api_key=D0D92EC1CE1E44F38A08179F255768EC&type=product&amazon_domain=amazon.com&asin=${asin}&customer_zipcode=06981`).then(resp => {
            console.log(resp)
			const product = resp.data.product
			try {
				const video = product.videos[0].link
				this.video_url = video
				this.hideVideo = false
			} catch (error) {
				console.log('no video')
			}
			this.features = product.feature_bullets
			this.$store.dispatch('fill_product', product)
        })
	}
}
</script>

<style scoped>
input {
	width:75px;
}
.text {
	background:white;
	width:450px;
	margin-left:15px;
}
.text div {
	margin:10px 0;
}
.product {
	background:white;
	display:flex;
}
.seller {
	width:200px;
	margin-top:20px;
	word-break: break-all
}
.container {
  padding:40px;
  background: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  border:1px solid black;
}
.title {
	font-size: 20px;
	margin-top:-10px;
}
.cart {
	margin-left:35px;
	width:200px;
}
#cartprice {
	margin-left:0px;
	margin-top: 0px;
}
/* .container:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);
  transition: 0.2s;
} */
img {
	margin-bottom:-5px;
	object-fit: cover;
	display: inline-flex;
}
#brand {
	font-size: 13px;
	font-style: bold !important;
}
.features {
	font-size: 16px;
	margin-left:-20px !important;
}
h3 {
	margin:13px;
}
h1 {
	margin:15px;
}
iframe {
	margin-top:25px;
	display:block;
}

</style>
