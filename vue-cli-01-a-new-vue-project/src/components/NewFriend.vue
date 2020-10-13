<template>
	<form @submit.prevent="addFriend">
		<div>
			<label>Name</label>
			<input type="text" v-model="newName" />
		</div>
		<div>
			<label>Phone</label>
			<input type="tel" v-model="newPhone" />
		</div>
		<div>
			<label>Email</label>
			<input type="email" v-model="newEmail" />
		</div>
		<div>
			<button>Add new friend</button>
		</div>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				newName: '',
				newPhone: '',
				newEmail: ''
			};
		},
		emits: ['add-friend'],
		methods: {
			addFriend() {
				this.$emit('add-friend', this.newName, this.newPhone, this.newEmail);
				this.newName = '';
				this.newPhone = '';
				this.newEmail = '';
			}
		}
	};
</script>
