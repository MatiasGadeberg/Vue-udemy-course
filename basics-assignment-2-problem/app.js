const app = Vue.createApp({
    data() {
        return {
            input1: '',
            input2: '',
        };
    },
    methods: {
        showAlert() {
            alert('Button was pressed!')
        },
        updateInput(event) {
            this.input1 = event.target.value;
        },
        updateSecondInput(event) {
            this.input2 = event.target.value;
        }
    }
});

app.mount('#assignment');