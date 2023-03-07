<script setup>
	import { computed, ref } from 'vue';
	import { gsap } from 'gsap';

	const gameStarted = ref(false);
	const gameInPlay = ref(false);
	const gameEnded = ref(false);
	const claw = ref(null);
	const prize = ref(null);
	let currentCoin = ref(0);
	let totalCoins = ref(3);
	const midGameModal = ref(false);

	const percentageWinner = (chance = 0.3) => {
		const randomer = gsap.utils.random(0, 1, 0.1);
		return randomer <= chance;
	};

	const isWinnerState = percentageWinner(0.3)
		? 'win'
		: percentageWinner(0.5)
		? 'dropped'
		: 'loss';

	const winnerColour = computed(() => {
		switch (isWinnerState) {
			case 'win':
				return 'bg-green-500';
			case 'dropped':
				return 'bg-orange-500';
			default:
				return 'bg-black';
		}
	});

	const startGame = () => {
		gameStarted.value = true;
	};

	const oneCoinCycle = () => {
		gameInPlay.value = false;
		currentCoin.value += 1;
		midGameModal.value = true;

		if (currentCoin.value === totalCoins.value) {
			gameEnded.value = true;
			midGameModal.value = false;
		}
	};

	const closeModal = () => {
		console.log('closeModal');
		midGameModal.value = false;
	};

	const down = () => {
		const clawTimeline = gsap.timeline({
			onStart: () => (gameInPlay.value = true),
			onComplete: () => oneCoinCycle(),
		});
		clawTimeline.to(claw.value, { top: 'calc(100% - 160px)', duration: 2, delay: 0.5 });
		clawTimeline.to(prize.value, { opacity: 1 });
		clawTimeline.to(claw.value, { top: 0, duration: 2, delay: 1 });
	};
</script>

<template>
	<div class="mx-auto max-w-md flex-1">
		<div class="relative h-full bg-blue-100">
			<div
				ref="claw"
				width="100"
				height="100"
				class="absolute top-0 left-0 w-16 h-16 bg-yellow-400 z-10"
				:class="{ mover: gameStarted, 'mover--paused': gameInPlay }"
			>
				<div
					ref="prize"
					class="absolute top-full left-1/2 -translate-x-1/2 rounded-full w-12 h-12 opacity-0"
					:class="winnerColour"
				/>
			</div>

			<div class="absolute bottom-0 left-0 w-full h-40 bg-blue-400">
				<img
					src="/assets/images/base-eggs-back.png"
					alt=""
					class="absolute bottom-0 left-0"
				/>
				<img
					src="/assets/images/base-eggs-front.png"
					alt=""
					class="absolute bottom-0 left-0 z-20"
				/>
			</div>
		</div>

		<div
			:class="[
				'absolute top-0 left-0 w-full h-full',
				'flex flex-col gap-y-3 justify-center items-center text-center',
				'bg-gray-600 text-white transition-opacity',
				midGameModal ? 'opacity-100 z-30' : 'opacity-0 -z-10',
			]"
		>
			<p>You won something/You didn't win anything</p>
			<p>Keep going!</p>
			<button
				@click="closeModal"
				class="button border-white hover:bg-white hover:text-gray-600"
				v-text="`Close`"
			/>
		</div>

		<div v-if="!gameEnded" class="flex flex-col gap-y-2 mt-4">
			<button
				@click="startGame"
				:class="['button', { 'opacity-10 pointer-events-none': gameStarted }]"
				v-text="`Insert Coin`"
			/>

			<button
				@click="down"
				:class="[
					'button',
					{
						'pointer-events-none opacity-10': gameInPlay,
						'opacity-10 pointer-events-none': !gameStarted,
					},
				]"
				v-text="`Down`"
			/>
		</div>

		<p v-else class="p-2 mt-2 text-center bg-red-200" v-text="`Game Over`" />

		<div class="text-center mt-5 p-3 border-2 border-dashed border-pink-500">
			<p v-text="`gameStarted: ${gameStarted}`" />
			<p v-text="`gameInPlay: ${gameInPlay}`" />
			<p v-text="`gameEnded: ${gameEnded}`" />
			<p v-text="`isWinnerState: ${isWinnerState}`" />
			<p v-text="`currentCoin: ${currentCoin} | totalCoins: ${totalCoins}`" />
		</div>
	</div>
</template>

<style scoped>
	.mover {
		animation: 4s linear infinite alternate moving-animation;
	}

	.mover--paused {
		animation-play-state: paused;
	}

	@keyframes moving-animation {
		0% {
			left: 0;
		}

		100% {
			left: 100%;
			transform: translateX(-100%);
		}
	}
</style>
