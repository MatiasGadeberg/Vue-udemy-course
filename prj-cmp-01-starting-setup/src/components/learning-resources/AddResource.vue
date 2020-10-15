<template>
  <base-dialog v-if="inputIsFalse" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>Unfortunately at least one input field is invalid</p>
      <p>
        Make sure that you enter at least a few characters into each input
        field.
      </p>
    </template>
    <template #actions>
      <base-button @click="confirmError">OK</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="addNewResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descInput"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsFalse: false
    };
  },
  methods: {
    addNewResource() {
      const title = this.$refs.titleInput.value;
      const description = this.$refs.descInput.value;
      const link = this.$refs.linkInput.value;

      if (
        title.trim() === '' ||
        description.trim() === '' ||
        link.trim() === ''
      ) {
        this.inputIsFalse = true;
        return;
      }
      this.addResource(title, description, link);
    },
    confirmError() {
      this.inputIsFalse = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
