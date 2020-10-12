const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            isVisible: true,
            backColor: ''
        };
    },
    computed: {
        field1Classes() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                hidden: !this.isVisible,
                visible: this.isVisible
            }
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment');