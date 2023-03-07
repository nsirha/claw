<script setup>
	import { ref, onMounted } from 'vue';
	import { Rive, Layout } from '@rive-app/canvas';

	let riv;
	const animations = ref(null);
	const canvas = ref(null);
	const state = ref(null);

	const setState = (newState) => {
		if (state.value) riv.pause(state.value);
		riv.play(newState);
		state.value = newState;
	};

	const pause = () => {
		if (!riv.isPaused) {
			riv.pause(state.value);
		}
	};

	const play = () => {
		if (!riv.isPlaying) {
			riv.play(state.value);
		}
	};

	onMounted(async () => {
		riv = new Rive({
			canvas: canvas.value,
			src: '/assets/e_runner.riv',
			layout: new Layout({
				fit: 'fill',
				alignment: 'center',
			}),
			// animations: animations.value,
			onLoad: () => {
				animations.value = riv.animationNames;
			},
			// onPause: (event) => {
			// 	console.log(event.type);
			// },
			// onPlay: (event) => {
			// 	console.log(event.type);
			// },
		});

		setState('Idle');
	});
</script>

<template>
	<div class="mx-auto max-w-md flex-1">
		<canvas ref="canvas" width="400" height="400" class="aspect-square w-full" />

		<div class="flex justify-center gap-x-3 mt-10">
			<button
				v-for="animation in animations"
				:key="animation"
				@click="setState(animation)"
				v-text="animation"
				class="button"
			/>
		</div>

		<div class="flex justify-center gap-x-3 mt-10">
			<button @click="pause" class="button bg-yellow-400 hover:bg-white" v-text="`PAUSE`" />
			<button @click="play" class="button bg-green-400 hover:bg-white" v-text="`PLAY`" />
		</div>

		<p v-text="`State: ${state}`" class="text-center mt-10" />
	</div>
</template>
