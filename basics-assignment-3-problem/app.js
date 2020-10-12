const app = Vue.createApp({
    data() {
        return {
            result: 0,
        }
    },
    computed: {
        feedback() {
            if (this.result < 30) {
                return 'Not there yet';
            } else if (this.result < 37) {
                return 'Getting close!';
            } else if (this.result > 37) {
                return 'Too much!';
            } else {
                return 'Success! 😊';
            }
        }
    },
    watch: {
        result(value) {
            if (value > 37) {
                const that = this;
                setTimeout(function(){
                    that.result = 0;
                }, 5000)
            }
        }
    },
    methods: {
        addResult(number) {
            this.result = this.result + number;
        }
    }
});

app.mount('#assignment');