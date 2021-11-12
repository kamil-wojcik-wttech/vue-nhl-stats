<script setup lang="ts">
</script>

<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/players">Players</router-link> |
		<router-link to="/teams">Teams</router-link>
 	 </div>
  	<router-view />
</template>

<style>
#app {
	font-family: fantasy, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
