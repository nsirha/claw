<script setup></script>

<template>
	<nav>
		<router-link :to="{ name: 'Home' }">Home</router-link>
		<router-link :to="{ name: 'About' }">About</router-link>
		<router-link :to="{ name: 'Gsap' }">Gsap</router-link>
		<router-link :to="{ name: 'Nice' }">Nice</router-link>
		<router-link :to="{ name: 'Rive' }">Rive</router-link>
		<router-link :to="{ name: 'Claw' }">Claw</router-link>
	</nav>

	<router-view />
</template>

<style scroped>
	nav {
		display: flex;
		justify-content: center;
		padding: 1rem;
		gap: 2rem;
		background-color: var(--color-background-soft);
		color: var(--color-white);
		display: none;
	}

	.router-link-active {
		border-bottom: 1px solid var(--color-white);
	}
</style>
