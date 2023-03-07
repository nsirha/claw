<script setup>
	import { onMounted, ref } from 'vue';
	import { gsap } from 'gsap';

	import Logo from '@/components/Logo.vue';

	const logo = ref(null);
	const left = ref(null);
	const leftImage = ref(null);
	const leftImageTwo = ref(null);
	const right = ref(null);
	const rightText = ref(null);
	const listData = ref(['One one one', 'Two two two', 'Three three three']);
	const list = ref(null);

	const doAnimation = () => {
		const tl = gsap.timeline();

		tl.fromTo(
			left.value,
			{
				width: '100%',
			},
			{
				width: '50%',
				ease: 'bounce.out',
				duration: 1.5,
				delay: 1,
			}
		)
			.fromTo(
				right.value,
				{
					width: '0%',
					padding: '0',
				},
				{
					width: '50%',
					padding: '2rem',
					duration: 1,
					delay: 0,
				},
				'<'
			)
			.fromTo(
				rightText.value,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.5,
					delay: 0.5,
				}
			)
			.fromTo(
				logo.value.$el,
				{
					opacity: 0,
					rotate: 0,
				},
				{
					opacity: 1,
					rotate: 360,
					duration: 1,
				}
			)
			.fromTo(
				leftImage.value,
				{
					xPercent: -110,
				},
				{
					xPercent: 0,
				},
				'<'
			)
			.fromTo(
				leftImageTwo.value,
				{
					yPercent: 100,
					opacity: 0,
				},
				{
					yPercent: 0,
					opacity: 1,
					delay: 0.2,
				}
			)
			.fromTo(
				list.value,
				{
					xPercent: 100,
					opacity: 0,
				},
				{
					xPercent: 0,
					opacity: 1,
					stagger: 0.5,
				}
			);
	};

	onMounted(() => {
		doAnimation();
	});
</script>

<template>
	<div class="wrapper flex h-screen">
		<div class="left" ref="left">
			<Logo ref="logo" />

			<img src="https://via.placeholder.com/1200x600/888/000" class="mt-12" ref="leftImage" />

			<img
				src="https://via.placeholder.com/1200x600/888/000"
				class="mt-12"
				ref="leftImageTwo"
			/>
		</div>

		<div class="right" ref="right">
			<div ref="rightText">
				<h2 class="text-xl font-bold">Heading</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum imperdiet
					ornare. Mauris et porta mi, in vulputate lectus. Donec suscipit tempor lobortis.
					Duis maximus at eros ac dignissim. Quisque et enim eget nulla mollis laoreet
					tincidunt quis libero. Donec vel neque sit amet diam pretium auctor. Praesent
					maximus laoreet dignissim.
				</p>

				<p>
					Sed sit amet scelerisque justo. Nulla ac sapien a odio volutpat viverra. Vivamus
					at urna a arcu elementum pharetra. Etiam pulvinar tempus odio nec feugiat. Nam
					facilisis orci eu mollis venenatis. Interdum et malesuada fames ac ante ipsum
					primis in faucibus. Sed eu turpis id ligula rhoncus ultricies vel et ligula.
					Duis hendrerit, metus at facilisis luctus, dui ante ullamcorper urna, in
					interdum quam nulla sed mauris. Donec eget elementum libero. In hac habitasse
					platea dictumst.
				</p>

				<p>
					Aliquam ut dui interdum, tristique mi et, tempor mauris. Integer pulvinar
					vestibulum eleifend. Nunc blandit ligula ex, eu egestas magna luctus ac. Ut
					mattis cursus vulputate. Morbi et aliquet mi. Donec at enim quam. Praesent
					sodales nisl vel quam efficitur, vitae gravida ex posuere. Orci varius natoque
					penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at
					tristique ante. Cras efficitur sed risus ac pulvinar.
				</p>

				<ul class="mt-5">
					<li
						ref="list"
						class="list-disc list-inside"
						v-for="item in listData"
						:key="item"
						v-text="item"
					/>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.left,
	.right {
		width: 50%;
		padding: 2rem;
	}

	.left {
		background-color: var(--color-background);
	}

	p {
		margin-top: 1rem;
	}
</style>
