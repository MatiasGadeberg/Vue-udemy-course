<template>
	<div>
		<active-user :name="activeName" :age="activeAge"></active-user>
		<user-data @update-name="updateName" @update-age="updateAge"></user-data>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: '',
				activeAge: ''
			};
		},
		methods: {
			updateName(name) {
				this.activeName = name;
			},
			updateAge(age) {
				this.activeAge = age;
			}
		}
	};
</script>

<style>
	section {
		margin: 2rem auto;
		max-width: 40rem;
		border-radius: 12px;
		border: 1px solid #ccc;
	}
</style>
