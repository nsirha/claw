<script setup>
	import { computed, onMounted, ref } from 'vue';
	import { gsap, Flip, ScrollTrigger, SplitText } from 'gsap/all';

	import Carousel from '@/components/Carousel.vue';

	gsap.registerPlugin(Flip, ScrollTrigger, SplitText);

	const items = ref([
		'bg-red-300',
		'bg-orange-300',
		'bg-amber-300',
		'bg-lime-300',
		'bg-green-300',
		'bg-emerald-300',
		'bg-teal-300',
	]);

	const lorem = ref([
		'In eget risus facilisis, mattis lacus a, dictum metus. Aenean purus augue, semper non lorem eu, pellentesque dictum tortor. Mauris a porta risus, quis lacinia ante. Nunc non tincidunt metus, eu efficitur tortor. Maecenas ut fringilla erat, sed elementum diam. Praesent auctor lectus at lorem auctor, tristique bibendum mi lobortis. In pulvinar, sem sit amet gravida malesuada, justo turpis aliquet risus, eget sollicitudin leo felis bibendum dui.',
		'Duis vel odio ornare, dignissim libero quis, ultrices turpis. Vivamus non urna nibh. Quisque sollicitudin, augue in vestibulum bibendum, mauris tellus semper arcu, scelerisque malesuada enim lorem ut lorem. In velit lectus, feugiat id nisl sed, facilisis consectetur lorem. Nunc eget elit varius, rhoncus metus et, consequat nulla. Curabitur lectus enim, accumsan sed velit sit amet, tempus commodo purus. Curabitur euismod aliquam vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod arcu arcu, et ultrices diam rutrum nec. Vestibulum non sodales purus, bibendum tincidunt massa.',
	]);

	const flipItems = ref([
		{
			text: 'Common "FLIP" techniques employed by other tools won\'t work with flex elements because of the way browsers handle width/height.',
			colour: 'bg-pink-400',
		},
		{
			text: "Simply set absolute: true to have GSAP's Flip plugin make the elements position: absolute during the flip to work around challenges with flex and grid layouts.",
			colour: 'bg-violet-400',
		},
		{
			text: 'When the flip animation is done, elements get reverted back to their normal positioning and everything appears seamless.',
			colour: 'bg-red-400',
		},
		{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
			colour: 'bg-fuchsia-400',
		},
	]);

	const flipGridItems = ref([
		{
			title: 'Owl',
			secondary: 'Hoo are you?',
			text: 'Owl lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-owl.png',
		},
		{
			title: 'Deer',
			secondary: 'Hi Deer',
			text: 'Deer lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-deer.png',
		},
		{
			title: 'Hipster',
			secondary: 'Hi Hipster',
			text: 'Hipster lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-hipster.png',
		},
		{
			title: 'Ram',
			secondary: 'Hi Ram',
			text: 'Ram lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-ram.png',
		},
		{
			title: 'Dog',
			secondary: 'Hi Dog',
			text: 'Dog lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-dog.png',
		},
		{
			title: 'Bored Ram',
			secondary: 'Hi Bored Ram',
			text: 'Bored Ram lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-sideram.png',
		},
		{
			title: 'Super Ram',
			secondary: 'Hi Super Ram',
			text: 'Super Ram lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-multiram.png',
		},
		{
			title: 'Gorilla',
			secondary: 'Hi Gorilla',
			text: 'Gorilla lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-gorilla.png',
		},
		{
			title: 'Bird',
			secondary: 'Hi Bird',
			text: 'Bird lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-bird.png',
		},
	]);

	const colouredBlock = ref(null);
	const pinkTextContainer = ref(null);
	const pinkText = ref(null);
	const squareImage = ref(null);
	const quote = ref(null);
	const floatingObject = ref(null);
	const flipGroup = ref(null);

	const details = ref(null);
	const detailContent = ref(null);
	const detailTitle = ref(null);
	const detailSecondary = ref(null);
	const detailDescription = ref(null);
	const detailImage = ref(null);

	const doAnimations = () => {
		// console.clear();

		// Rotate floatingObject
		gsap.to(floatingObject.value, {
			scrollTrigger: {
				trigger: 'body',
				markers: true,
				scrub: true,
			},
			rotate: 360,
			borderRadius: '50%',
			backgroundColor: 'blue',
		});

		// Show all blocks
		gsap.fromTo(
			colouredBlock.value,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				stagger: 0.3,
			}
		);

		// Move the green block
		gsap.to('.bg-green-300', {
			scrollTrigger: {
				trigger: '.bg-teal-300',
				markers: true,
				toggleClass: 'active',
			},
			x: 500,
			duration: 3,
		});

		// Paras appearing from bottom
		gsap.set(pinkText.value, { opacity: 0, y: 100 });
		gsap.to(pinkText.value, {
			scrollTrigger: {
				trigger: pinkTextContainer.value,
				markers: true,
			},
			opacity: 1,
			y: 0,
			duration: 2,
			stagger: 0.5,
		});

		// Batch image stagger
		gsap.set(squareImage.value, { opacity: 0, y: 100 });
		ScrollTrigger.batch(squareImage.value, {
			onEnter: (batch) =>
				gsap.to(batch, {
					scrollTrigger: {
						trigger: '.grid',
						markers: true,
					},
					opacity: 1,
					y: 0,
					stagger: 0.1,
				}),
		});

		// Split Text
		const split = new SplitText(quote.value, {
			type: 'chars',
			charsClass: 'font-bold',
		});
		gsap.set(split.chars, { opacity: 0, y: 50, rotate: 180 });
		gsap.to(split.chars, {
			scrollTrigger: {
				trigger: quote.value,
				markers: true,
			},
			opacity: 1,
			y: 0,
			rotate: 0,
			stagger: 0.05,
			yoyo: true,
			repeat: -1,
		});
	};

	// Another FLIP
	const anotherFlipFunction = () => {
		const items = gsap.utils.toArray('.item');

		let activeItem;

		gsap.set(detailContent.value, { yPercent: -100 });

		const showDetails = (item) => {
			if (activeItem) {
				return hideDetails();
			}

			let onLoad = () => {
				Flip.fit(details.value, item, { scale: true, fitChild: detailImage.value });

				const state = Flip.getState(details.value);

				gsap.set(details.value, { clearProps: true });
				gsap.set(details.value, {
					xPercent: -50,
					top: '50%',
					yPercent: -50,
					visibility: 'visible',
					overflow: 'hidden',
				});

				Flip.from(state, {
					duration: 0.5,
					ease: 'power2.inOut',
					scale: true,
					onComplete: () => gsap.set(details.value, { overflow: 'auto' }),
				}).to(detailContent.value, { yPercent: 0 }, 0.2);

				detailImage.value.removeEventListener('load', onLoad);
				document.addEventListener('click', hideDetails);
			};

			const data = item.dataset;
			detailImage.value.addEventListener('load', onLoad);
			detailImage.value.src = item.querySelector('img').src;
			detailTitle.value.innerText = data.title;
			detailSecondary.value.innerText = data.secondary;
			detailDescription.value.innerText = data.text;

			gsap.to(items, {
				opacity: 0.3,
				stagger: { amount: 0.7, from: items.indexOf(item), grid: 'auto' },
			}).kill(item);
			gsap.to('.app', { backgroundColor: '#888', duration: 1, delay: 0.3 });
			activeItem = item;
		};

		const hideDetails = () => {
			document.removeEventListener('click', hideDetails);
			gsap.set(details.value, { overflow: 'hidden' });

			const state = Flip.getState(details.value);

			Flip.fit(details.value, activeItem, { scale: true, fitChild: detailImage.value });

			const tl = gsap.timeline();
			tl.set(details.value, { overflow: 'hidden' })
				.to(detailContent.value, { yPercent: -100 })
				.to(items, {
					opacity: 1,
					stagger: { amount: 0.7, from: items.indexOf(activeItem), grid: 'auto' },
				})
				.to('.app', { backgroundColor: '#fff' }, '<');

			Flip.from(state, {
				scale: true,
				duration: 0.5,
				delay: 0.2,
				onInterrupt: () => tl.kill(),
			}).set(details.value, { visibility: 'hidden' });

			activeItem = null;
		};

		gsap.utils
			.toArray('.item')
			.forEach((item) => item.addEventListener('click', () => showDetails(item)));

		window.addEventListener('load', () => {
			gsap.to('.app', { opacity: 1, duration: 0.2 });
			gsap.from('.item', { opacity: 0, yPercent: 30, stagger: 0.04 });
		});
	};

	// FLIP click event
	const flipBtn = () => {
		const state = Flip.getState('.group, .box');
		console.log(state);

		// group.classList.toggle('reorder');
		state.targets[0].classList.toggle('reorder');

		Flip.from(state, {
			absolute: true,
			duration: 0.5,
			stagger: 0.1,
			ease: 'power1.inOut',
		});
	};

	onMounted(() => {
		doAnimations();
		// anotherFlipFunction();
	});
</script>

<template>
	<div class="floatingObject" ref="floatingObject" />

	<!-- Coloured blocks -->
	<div class="container p-12">
		<h1 ref="title" class="font-bold text-lg pb-6">ScrollTrigger</h1>

		<div
			v-for="item in items"
			ref="colouredBlock"
			:key="item"
			:class="[item, 'w-full h-60 flex items-center justify-center font-bold']"
		>
			<h2 v-text="item" />
		</div>
	</div>

	<!-- Paras appearing from the bottom -->
	<section class="bg-pink-400 p-12 overflow-hidden">
		<div class="container">
			<h2 class="font-bold text-lg">Paras appearing from bottom</h2>

			<div ref="pinkTextContainer">
				<p ref="pinkText" v-for="i in lorem" :key="i" v-text="i" class="mt-5" />
			</div>
		</div>
	</section>

	<!-- Batch Image Stagger -->
	<section class="bg-fuchsia-400 p-12 overflow-hidden">
		<div class="container">
			<h2 class="font-bold text-lg">Batch image stagger</h2>

			<div class="grid grid-cols-4 gap-8 mt-5">
				<img
					v-for="number in 20"
					:key="number"
					ref="squareImage"
					:src="`https://source.unsplash.com/random/200x200/?random&v${number}`"
					alt=""
					class="bg-slate-300 aspect-square w-full"
				/>
			</div>
		</div>
	</section>

	<!-- Split Text -->
	<section class="bg-cyan-400 p-12 overflow-hidden">
		<div class="container">
			<h2 class="font-bold text-lg">Split Text</h2>

			<h3 class="text-6xl text-center mt-5 uppercase" ref="quote">Holy smokes it works</h3>
		</div>
	</section>

	<!-- FLIP -->
	<section class="bg-amber-400 p-12 overflow-hidden h-[500px]">
		<div class="container">
			<h2 class="font-bold text-lg">FLIP</h2>

			<button @click="flipBtn" class="border-2 border-black p-2">Change layout</button>

			<div class="group" ref="flipGroup">
				<div
					v-for="flipItem in flipItems"
					:key="flipItem.colour"
					:class="[flipItem.colour, 'box']"
					v-text="flipItem.text"
				></div>
			</div>
		</div>
	</section>

	<!-- Another FLIP -->
	<!-- <section class="another-flip p-12 overflow-hidden">
		<div class="app container">
			<div class="gallery">
				<div
					v-for="flipGridItem in flipGridItems"
					:key="flipGridItem.title"
					class="item"
					:data-title="flipGridItem.title"
					:data-secondary="flipGridItem.secondary"
					:data-text="flipGridItem.text"
				>
					<img :src="flipGridItem.image" alt="" class="w-full" />
				</div>
			</div>
		</div>

		<div class="detail" ref="details">
			<img ref="detailImage" />

			<div class="content text-base text-white p-8 bg-black" ref="detailContent">
				<div class="text-lg uppercase font-bold" ref="detailTitle">Placeholder title</div>

				<div class="mt-2 italic" ref="detailSecondary">Placeholder secondary</div>

				<div class="description mt-2" ref="detailDescription">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet
					delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate,
					nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.
				</div>
			</div>
		</div>
	</section> -->

	<!-- Carousel -->
	<div class="bg-gray-800">
		<Carousel />
	</div>
</template>

<style scoped>
	.container {
		max-width: 1080px;
		margin-left: auto;
		margin-right: auto;
	}

	.floatingObject {
		position: fixed;
		top: 80px;
		right: 40px;
		z-index: 2;
		display: inline-block;
		width: 50px;
		height: 50px;
		background-color: red;
	}

	.group.reorder {
		flex-direction: row;
	}

	.group {
		width: 740px;
		height: auto;
		padding: 4px;
		background: #111;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		color: black;
		position: relative;
	}

	.box {
		margin: 4px;
		padding: 8px;
		font-size: 22px;
		line-height: 28px;
	}

	.app {
		background: white;
		position: relative;

		/* Hide the app on load */
		opacity: 0;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2% 3.6%;
		padding: 10px;
	}

	.item {
		cursor: pointer;
		font-size: 0;
	}

	.detail {
		position: fixed;
		top: 10px;
		left: 50%;
		width: 90.1vmin;
		cursor: pointer;
		font-size: 0;
		display: flex;
		flex-direction: column;
		visibility: hidden;
		max-height: 100%;
		overflow: auto;
	}

	.detail > img {
		position: relative;
		z-index: 1;
	}
</style>
