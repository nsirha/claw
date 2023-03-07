<script setup>
	const castRangeToNumber = (node) => {
		// We add a check to add the cast only to range inputs
		if (node.props.type !== 'range') return;

		node.hook.input((value, next) => next(Number(value)));
	};

	const createCharacter = async (fields) => {
		await new Promise((r) => setTimeout(r, 1000));
		console.log(JSON.stringify(fields));
	};

	const register = (fields) => {
		console.log(JSON.stringify(fields));
	};
</script>

<template>
	<section class="mx-auto max-w-xl p-2">
		<h1 class="text-xl font-bold uppercase my-6">Formkit</h1>

		<div class="border border-black p-4">
			<FormKit
				type="form"
				@submit="createCharacter"
				:plugins="[castRangeToNumber]"
				submit-label="Get Started"
				#default="{ value }"
			>
				<FormKit
					name="email"
					type="email"
					label="Email"
					validation="required|email"
					placeholder="win@jet2holidays.com"
				/>

				<pre wrap class="border-dashed border-2 p-5 my-4 border-pink-500" v-text="value" />
			</FormKit>
		</div>

		<div class="border border-black p-4 mt-6">
			<FormKit
				type="form"
				@submit="register"
				:plugins="[castRangeToNumber]"
				submit-label="Get Started"
				#default="{ value }"
			>
				<FormKit name="firstname" type="text" label="First name" validation="required" />

				<FormKit name="lastname" type="text" label="Last name" validation="required" />

				<FormKit
					name="terms"
					type="checkbox"
					label="By ticket this box I agree to the terms and conditions of this competition"
					validation="accepted"
					validation-visibility="dirty"
					:value="false"
				/>

				<FormKit
					name="marketing"
					type="checkbox"
					label="Yes, please keep me up to date with Jet2Holidays latest deals and offers"
					:value="false"
				/>

				<pre wrap class="border-dashed border-2 p-5 my-4 border-pink-500" v-text="value" />
			</FormKit>
		</div>
	</section>
</template>
