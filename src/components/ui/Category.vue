<template>
	<div class="card" @click="open(category)">
		<h3>{{ category }}</h3>
		<img src="./fitness.jpg" alt="Avatar" style="width:100%">
	</div>
</template>


<script>
export default {
    props: ['category'],
	methods: {
		open (category) {
           window.location.href = `/category?id=` + category
		}
	},
	created () {

	}
}
</script>

<style scoped>

.card {
  background:white;
  width:350px;
  margin:20px;
  padding:0;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);
  transition: 0.2;
}

img {
	margin-bottom:-10px;
}

h3 {
	margin:13px;
}

</style>