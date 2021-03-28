<template>
	<div class="card">
		<div class="container">
			<h2><b>John Doe</b></h2> 
			<p>Architect & Engineer</p> 
		</div>
		<img src="./fitness.jpg" alt="Avatar" style="width:100%">
	</div>
</template>


<script>
export default {
	
}
</script>

<style scoped>

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 30%;
  background:white;
  max-width:400px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 20px 16px;
  background:white;
  margin:0;	
}
img {
	margin-bottom:-5px;
}
</style>