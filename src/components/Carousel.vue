<script setup>
	import { ref } from 'vue';

	let currentIndex = ref(0);
	let spanPrev = ref(0);
	let spanNext = ref(0);

	const carouselItems = ref([
		{
			image: 'https://fastly.picsum.photos/id/241/200/200.jpg?hmac=F-mDYyK1xUiXjlLd5PvE8EQpTwGfFndV7mMaANDtl28',
		},
		{
			image: 'https://fastly.picsum.photos/id/1039/200/200.jpg?hmac=VpGJWDIq64ZdzDD5NAREaY7l5gX14vU5NBH84b5Fj-o',
		},
		{
			image: 'https://fastly.picsum.photos/id/1015/200/200.jpg?hmac=CZwBryoFVJo_ic1ivVDBJGVm0MZDhNMiO5B9KzOMY_Y',
		},
	]);

	const nextBtn = () => {
		spanNext.value += 1;
		if (currentIndex.value === carouselItems.value.length - 1) {
			currentIndex.value = 0;
		} else {
			currentIndex.value += 1;
		}
	};

	const prevBtn = () => {
		spanPrev.value -= 1;
		if (currentIndex.value === 0) {
			currentIndex.value = carouselItems.value.length - 1;
		} else {
			currentIndex.value -= 1;
		}
	};
</script>

<template>
	<section
		class="container-sm text-white carousel p-12 relative flex min-h-[300px] overflow-hidden"
	>
		<img
			v-for="(item, index) in carouselItems"
			:key="item.image"
			:src="item.image"
			alt=""
			class="absolute top-12 left-0 transition-transform duration-[10ms] ease-linear delay-500"
			:class="currentIndex === index ? 'active z-10' : 'not-active -translate-x-full'"
		/>

		<transition name="slide-span-animation" mode="out-in">
			<span
				:key="spanNext"
				class="absolute top-12 left-0 bg-gray-800 w-[200px] h-[200px] -translate-x-full z-20"
			/>
		</transition>

		<transition name="slide-span-reverse-animation" mode="out-in">
			<span
				:key="spanPrev"
				class="absolute top-12 left-0 bg-gray-800 w-[200px] h-[200px] translate-x-full z-20"
			/>
		</transition>
	</section>

	<div class="flex justify-center gap-60 -translate-y-44">
		<button @click="prevBtn" class="bg-blue-500 p-4">Prev</button>
		<button @click="nextBtn" class="bg-blue-500 p-4">Next</button>
	</div>
</template>

<style scoped>
	.container-sm {
		max-width: 200px;
		margin: 0 auto;
	}

	.slide-span-animation-enter-active {
		animation: slideSpanAnimation 1s ease;
	}

	.slide-span-reverse-animation-enter-active {
		animation: slideSpanAnimation 1s ease reverse;
	}

	@keyframes slideSpanAnimation {
		0% {
			transform: translateX(-100%);
		}
		25% {
			transform: translateX(0);
		}
		75% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(100%);
		}
	}
</style>
