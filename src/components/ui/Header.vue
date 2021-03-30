<template>
	<div class="header">
		<div class="left">
			<span>Amazon</span>
		</div>
		<input type="text">
		<div class="right">
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-evenly;
	background-color:black;
	padding:1rem;
	color:white;
}

.left, .right {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
span {
	vertical-align: middle;

}
li {
	display: inline;
	margin: 0 8px 0 8px;
}
input {
	width:600px;
	padding:0.5rem 0.4rem;
	border-radius: 5px;
	border:3px solid rgba(255, 187, 0, 0);
	outline:none;
}
input:focus {
	border:3px solid rgb(255, 187, 0);
}

</style>