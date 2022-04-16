<template>
	<div class="container">
		<button>Sign In</button>
		<categories></categories>
		<swimlane></swimlane>
		<swimlaneBestseller></swimlaneBestseller>
		<swimlaneBestsellerElectronics></swimlaneBestsellerElectronics>
		<button>Sign In</button>
	</div>
</template>


<script>
// import axios from 'axios'
import CategoryList from '../ui/CategoryList'
import Swimlane from '../ui/Swimlane'
import SwimlaneBestseller from '../ui/SwimlaneBestseller'
import SwimlaneBestsellerElectronics from '../ui/SwimlaneBestsellerElectronics'

export default {
	components: {
		categories: CategoryList,
		swimlane: Swimlane,
		swimlaneBestseller: SwimlaneBestseller,
		swimlaneBestsellerElectronics: SwimlaneBestsellerElectronics,
	}
}
</script>


<style scoped>
button {
	background: #f0c14b;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
	padding:0.4rem 1.2rem;
	margin:25px;
}
</style>