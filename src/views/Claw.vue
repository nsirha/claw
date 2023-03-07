<script setup>
	import { ref, onMounted } from 'vue';
	import { gsap } from 'gsap';
	import draggable from 'vuedraggable';
	import { Rive, Layout } from '@rive-app/canvas';
	import { useCoinStore } from '@/stores/coinStore';
	import { useGameStore } from '@/stores/gameStore';
	import { useModalStore } from '@/stores/modalStore.js';

	const coinStore = useCoinStore();
	const gameStore = useGameStore();
	const modalStore = useModalStore();

	const clawContainer = ref(null);
	const clawInnerContainer = ref(null);
	const claw = ref(null);

	let riv;
	const animations = ref(null);
	const state = ref(null);

	const result = ref([0, 1, 2]);

	const setState = (newState) => {
		if (state.value) riv.pause(state.value);
		riv.play(newState);
		state.value = newState;
	};

	// const percentageWinner = (chance = 0.3) => {
	// 	const randomer = gsap.utils.random(0, 1, 0.1);
	// 	return randomer <= chance;
	// };

	// const isWinnerState = percentageWinner(0.3)
	// 	? 'win'
	// 	: percentageWinner(0.5)
	// 	? 'dropped'
	// 	: 'loss';

	const oneCoinCycle = () => {
		coinStore.increaseCurrentCoinValue();
		modalStore.showMidGameModal();

		if (coinStore.currentCoin === coinStore.totalCoins) {
			gameStore.endGame();
			modalStore.showEndGameModal();
			modalStore.hideMidGameModal();
		}
	};

	const closeModal = () => {
		modalStore.hideMidGameModal();
		gameStore.gameNotInPlay();
		gsap.set(clawInnerContainer.value, { overflow: 'hidden' });
		setState('IDLE');
	};

	const grab = () => {
		const clawTimeline = gsap.timeline({
			onStart: () => gameStore.gameIsInPlay(),
			onComplete: () => oneCoinCycle(),
		});
		clawTimeline.to(clawContainer.value, {
			top: 'calc(100% - 160px)',
			duration: 2,
			delay: 0.5,
		});
		clawTimeline.to(clawInnerContainer.value, { overflow: 'visible' });
		clawTimeline.to(clawContainer.value, { top: 0, duration: 2, delay: 1 });

		setTimeout(() => {
			setState(animations.value[result.value[coinStore.currentCoin]]);
		}, 2000);
	};

	onMounted(async () => {
		riv = new Rive({
			canvas: claw.value,
			src: '/assets/jet2_claw.riv',
			layout: new Layout({
				fit: 'fill',
				alignment: 'center',
			}),
			onLoad: () => {
				animations.value = riv.animationNames;
				// console.log(animations.value);
			},
		});

		setState('IDLE');

		gsap.set(clawInnerContainer.value, { overflow: 'hidden' });

		console.log('draggable', draggable);
	});
</script>

<template>
	<section class="mx-auto max-w-xl px-4 flex flex-col h-screen justify-between">
		<header class="py-5 flex justify-between items-center">
			<small v-text="`Current coin: ${coinStore.currentCoin}`" />

			<h1 class="text-center text-xl font-bold uppercase">🦀 Grab a Getaway!</h1>

			<small v-text="`Total coins: ${coinStore.totalCoins}`" />
		</header>

		<!-- Claw Animation -->
		<div class="relative bg-blue-100 h-full overflow-hidden">
			<div
				ref="clawContainer"
				:class="[
					'relative w-[100px] h-[150px] z-10',
					'before:absolute before:-top-[9970px] before:left-1/2 before:-translate-x-1/2',
					'before:h-[9999px] before:w-[3px] before:bg-[#414141] before:z-10',
					{ mover: gameStore.gameStarted, 'mover--paused': gameStore.gameInPlay },
				]"
			>
				<div ref="clawInnerContainer" class="relative w-[100px] h-[150px]">
					<canvas ref="claw" width="100" height="300" class="absolute top-0 left-0" />
				</div>
			</div>

			<div class="absolute bottom-0 left-0 w-full h-40">
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

		<!-- Mid Game Modal -->
		<div
			:class="[
				'absolute top-0 left-0 w-full h-full',
				'flex flex-col gap-y-3 justify-center items-center text-center',
				'bg-indigo-900 text-white transition-all duration-700 z-30',
				modalStore.modalMidGame ? 'translate-y-0' : '-translate-y-full',
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

		<!-- End Game Modal -->
		<div
			:class="[
				'absolute top-0 left-0 w-full h-full',
				'flex flex-col gap-y-3 justify-center items-center',
				'text-center bg-violet-900 text-white transition-opacity',
				modalStore.modalEndGame ? 'opacity-100 z-30' : 'opacity-0 -z-10',
			]"
		>
			<p>End of game 🎉</p>
		</div>

		<!-- Play Buttons -->
		<footer class="py-5 flex flex-col">
			<button
				v-if="!gameStore.gameStarted"
				@click="gameStore.startGame()"
				class="button"
				v-text="`Insert Coin 🪙`"
			/>

			<button
				v-else
				@click="grab"
				class="button"
				:disabled="gameStore.gameInPlay"
				v-text="`Grab`"
			/>
		</footer>
	</section>
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
