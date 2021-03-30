<template>
    <div class="container">
		<myheader></myheader>
		VIEW CATEGORY
		<productlist></productlist>
    </div>
</template>


<script>
import ProductList from '../ui/ProductList'
import Header from '../ui/Header'

export default {
	components: {
		productlist: ProductList,
		myheader: Header,
	},
	data () 
	{
		return {
			currentRoute: this.$route.path
		}
    },
	created () {
		console.log('route: ', this.currentRoute)
	}
}
</script>

<style scoped>

.container {

}

</style>