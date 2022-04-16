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
  cursor: pointer;
}

.card:hover {
  box-shadow: 8 8px 8px 8px rgba(36, 39, 41, 0.1);
  transition: 0.2;
}

img {
	margin-bottom:-10px;
}

h3 {
	margin:13px;
}

</style>