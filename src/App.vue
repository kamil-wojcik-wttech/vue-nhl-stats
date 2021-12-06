<script setup lang="ts">
</script>

<template>
	<header>
		<div class="header__logo">
			<img src="https://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg">
		</div>
		<h1 class="header__title">
			NHL Space
		</h1>
		<ul class="header__navigation">
			<router-link to="/">Home</router-link>
			<router-link to="/players">Players</router-link>
			<router-link to="/teams">Teams</router-link>
		</ul>
	</header>
	<main>
		<router-view />
	</main>
	<footer></footer>
</template>

<style lang="scss">
body {
	margin: 0;
}

#app {
	font-family: fantasy, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

header {
	display: flex;
    flex-direction: column;
    align-items: center;
	padding-top: 0.5em;
    background-color: #F0E5CF;
    -webkit-box-shadow: 0 0 5px 0 rgb(0 0 0 / 75%);
    box-shadow: 0 0 5px 0 rgb(0 0 0 / 75%);
    width: 100%;
}

.header__logo {
	width: 100px;
}

.header__title {
	color: #4B6587;
	font-weight: bold;
	margin-top: 0;
}

.header__navigation {
	display: flex;
	margin: 0;
    padding: 0;
    list-style: none;

	a {
		font-size: 1em;
		padding: 10px;
		text-transform: uppercase;
		text-align: center;
		display: block;
		text-decoration: none;
		color: #4B6587;
		font-weight: bold;
	}
}

main {
	margin: 0 10px;
}
</style>
