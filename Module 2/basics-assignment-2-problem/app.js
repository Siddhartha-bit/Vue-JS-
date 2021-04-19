const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmName: "",
    };
  },
  methods: {
    alertUser() {
      alert("Button Clicked");
    },
    setname(event) {
      this.name = event.target.value;
    },
    setConfirmText() {
      this.confirmName = this.name;
    },
  },
});

app.mount("#assignment");
