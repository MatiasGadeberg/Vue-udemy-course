const app = Vue.createApp({
    data() {
        return {
            taskList: [],
            inputTask: '',
            isVisible: true
        }
    },
    computed: {
        buttonCaption() {
            return this.isVisible ? 'Hide List' : 'Show List'
        }
    },
    methods: {
        addTask() {
            this.taskList.push(this.inputTask);
            this.inputTask = '';
        },
        hideList() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment')