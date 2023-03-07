<script setup>
	import { onMounted, ref, reactive } from 'vue';

	import ChildComponent from '@/components/ChildComponent.vue';

	const para = ref(null);
	const readMoreBtn = ref(null);
	const numberToSlice = ref(3);

	const doLogic = () => {
		if (para.value.childElementCount <= numberToSlice.value) return;

		const nodes = [...para.value.children].splice(numberToSlice.value);

		const wrapper = document.createElement('div');
		wrapper.classList.add('hidden-text', 'hidden', 'border', 'border-black', 'p-2', 'mt-4');
		readMoreBtn.value.classList.remove('hidden');

		readMoreBtn.value.addEventListener('click', () => {
			wrapper.classList.remove('hidden');
			readMoreBtn.value.remove();
		});

		nodes.map((node) => wrapper.appendChild(node));
		para.value.appendChild(wrapper);
	};

	let season = reactive({
		isWinter: true,
	});

	const toggleSeason = () => {
		season.isWinter = !season.isWinter;
	};

	onMounted(() => {
		doLogic();
	});
</script>

<template>
	<div class="container">
		<h1 class="text-xl font-bold">About Page</h1>

		<h2 class="text-lg mt-4 border-b border-black">Emit</h2>

		<div class="flex items-center gap-2 mt-4">
			<ChildComponent @toggle-season="toggleSeason" />

			<p>{{ season.isWinter ? 'Winter' : 'Summer' }}</p>
		</div>

		<h2 class="text-lg mt-4 border-b border-black">
			Show a read more btn if more than 3 items
		</h2>

		<div ref="para" class="para mt-5">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus repudiandae
				nostrum explicabo. Fuga alias pariatur quia at, culpa, iste cum libero optio facilis
				totam sint et quasi placeat reiciendis illo!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quibusdam quidem
				praesentium nulla, dolor non in est ducimus repudiandae eaque earum quod numquam
				voluptate dignissimos? Libero accusamus dolores laboriosam voluptates.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsam rem dolorum,
				pariatur harum laborum cum, nihil autem quae explicabo sunt sit neque ab libero. Hic
				sit quia qui dolore.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas maxime aperiam
				aspernatur sed, dolor suscipit quibusdam dignissimos dolorum? Neque eveniet totam
				sint hic expedita porro saepe, quisquam harum fuga optio!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita hic
				perferendis est provident sint vel incidunt in minus. Deserunt modi numquam
				reiciendis vitae adipisci quibusdam ut consequuntur veniam voluptas.
			</p>
		</div>

		<button ref="readMoreBtn" class="mt-5 border border-black p-2 hidden">Read more</button>
	</div>
</template>

<style scoped>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	p + p {
		margin-top: 1rem;
	}
</style>
