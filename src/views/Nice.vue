<script setup>
	import { onMounted } from 'vue';

	onMounted(() => {
		console.log('onMounted');
	});
</script>

<template>
	<section class="flex h-screen">
		<div class="bg-orange-100 flex-1">
			<header>1</header>
			<div class="content">One</div>
		</div>

		<div class="bg-orange-200 flex-1">
			<header>2</header>
			<div class="content">Two</div>
		</div>

		<div class="bg-orange-300 flex-1">
			3
			<header>3</header>
			<div class="content">Three</div>
		</div>

		<div class="bg-orange-400 flex-1">
			<header>4</header>
			<div class="content">Four</div>
		</div>

		<div class="bg-orange-500 flex-1">
			<header>5</header>
			<div class="content">Five</div>
		</div>
	</section>
</template>

<style scoped></style>

<!-- https://josephroche.ie/home -->
