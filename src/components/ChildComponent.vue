<script setup>
	const emit = defineEmits(['toggleSeason']);
</script>

<template>
	<button @click="$emit('toggleSeason')" class="border border-black px-2">Toggle Season</button>
</template>
