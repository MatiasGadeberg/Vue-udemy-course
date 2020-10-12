const app = Vue.createApp({
    data() {
        return {
            user1Typed: false,
            user2Typed: false,
            isHidden: false,
            isVisible: true,
            backColor: ''
        };
    },
    computed: {
        field1Classes() {
            return {
                user1: this.user1Typed,
                user2: this.user2Typed,
                hidden: this.isHidden,
                visible: this.isVisible
            }
        }
    },
    methods: {
        checkInput(event) {
            if (event.target.value === 'user1') {
                this.user1Typed = true;
            } else if (event.target.value === 'user2') {
                this.user2Typed = true;
            } else {
                this.user1Typed = false;
                this.user2Typed = false;
            }
        },
        toggleVisibility() {
            this.isVisible = !this.isVisible;
            this.isHidden = !this.isHidden;
        },
        getBackground(event) {
            this.backColor = event.target.value;
        }
    }
});

app.mount('#assignment');