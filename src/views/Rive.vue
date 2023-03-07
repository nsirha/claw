<script setup>
	import RunningMan from '@/components/RunningMan.vue';
	import ClawGame from '@/components/ClawGame.vue';
</script>

<template>
	<div class="flex">
		<running-man />

		<claw-game />
	</div>
</template>

<style>
	.button {
		@apply px-4 py-2 border-2 border-black enabled:hover:bg-yellow-400 disabled:opacity-20;
	}
</style>
