<template>
	<div class="container">
		<myheader></myheader>
		HOME-PAGE
		<categories></categories>
	</div>
</template>


<script>
// import axios from 'axios'
import Header from './ui/Header'
import CategoryList from './ui/CategoryList'

export default {
	components: {
		myheader: Header,
		categories: CategoryList
	},
	created () {
		// axios.get(`https://api.rainforestapi.com/request?api_key=D0D92EC1CE1E44F38A08179F255768EC&type=search&amazon_domain=amazon.com&search_term=playstation`).then(resp => {
        //     console.log(resp)
        // })
	}	
}
</script>


<style scoped>

</style>