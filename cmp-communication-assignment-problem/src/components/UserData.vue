<template>
	<section>
		<label>Name</label>
		<input type="text" v-model="name" @input="updateName" />
		<label>Age</label>
		<input type="text" v-model="age" @input="updateAge" />
	</section>
</template>

<script>
	export default {
		emits: ['update-name', 'update-age'],
		methods: {
			updateName() {
				this.$emit('update-name', this.name);
			},
			updateAge() {
				this.$emit('update-age', this.age);
			}
		}
	};
</script>
