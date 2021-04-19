const app = Vue.createApp({
  data() {
    return {
      confirmName: "",
      name: "",
      counter: 0,
    };
  },
  methods: {
    setConfirmName() {
      this.confirmName = this.name;
    },
    prevent(event) {
      alert("Submitted!");
    },
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
