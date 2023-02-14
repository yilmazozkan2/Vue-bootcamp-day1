const app = Vue.createApp({
  data() {
    return {
      newTask: "",
      todoList: [],
    };
  },
  methods: {
    updateValue(event) {
      console.log(event.target.value);
    },
    addItem() {
      if (this.newTask.trim() != "") {
        this.todoList.push(this.newTask);
        this.newTask = "";
      }
    },
  },
}).mount("#app");
