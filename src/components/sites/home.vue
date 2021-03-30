<template>
	<div class="container">
		<myheader></myheader>
		HOME-PAGE
		<categories></categories>
	</div>
</template>


<script>
// import axios from 'axios'
import Header from '../ui/Header'
import CategoryList from '../ui/CategoryList'

export default {
	components: {
		myheader: Header,
		categories: CategoryList
	}
}
</script>


<style scoped>

</style>