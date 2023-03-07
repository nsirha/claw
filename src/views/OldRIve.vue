<!-- Old rive that didn't reset state. -->

<script setup>
	import { onMounted, ref } from 'vue';
	import { Rive, Layout } from '@rive-app/canvas';

	const canvas = ref(null);
	const idleBtn = ref(null);
	const walkBtn = ref(null);
	const runBtn = ref(null);

	const state = ref('idle');

	const idle = () => {
		state.value = 'idle';
	};

	const walk = () => {
		state.value = 'walking';
	};

	const run = () => {
		state.value = 'running';
	};

	const eventFunc = (thing) => {
		thing.value = true;
	};

	onMounted(() => {
		console.clear();

		const r = new Rive({
			canvas: canvas.value,
			src: '/assets/e_runner.riv',
			layout: new Layout({
				fit: 'Contain',
				alignment: 'Center',
			}),
			autoplay: true,
			stateMachines: 'State Machine 1',
			onLoad: (_) => {
				const inputs = r.stateMachineInputs('State Machine 1');
				const idleTrigger = inputs.find((i) => i.name === 'Idle');
				const walkTrigger = inputs.find((i) => i.name === 'Walk');
				const runTrigger = inputs.find((i) => i.name === 'Run');

				idleBtn.value.onclick = () => eventFunc(idleTrigger);
				walkBtn.value.onclick = () => eventFunc(walkTrigger);
				runBtn.value.onclick = () => eventFunc(runTrigger);
			},
			onStateChange: (event) => {
				console.log('onStateChange: ', event);
			},
		});

		console.log('r: ', r);
	});
</script>

<template>
	<section class="flex justify-center p-3">
		<canvas ref="canvas" width="500" height="500"></canvas>
	</section>

	<div class="flex justify-center gap-5 mt-10">
		<button
			ref="idleBtn"
			@click="idle"
			class="border-2 border-black py-2 px-4 hover:bg-yellow-400"
		>
			Idle
		</button>
		<button
			ref="walkBtn"
			@click="walk"
			class="border-2 border-black py-2 px-4 hover:bg-yellow-400"
		>
			Walk
		</button>
		<button
			ref="runBtn"
			@click="run"
			class="border-2 border-black py-2 px-4 hover:bg-yellow-400"
		>
			Run
		</button>
	</div>

	<p v-text="`State: ${state}`" class="text-center mt-5" />
</template>

<style scoped></style>
