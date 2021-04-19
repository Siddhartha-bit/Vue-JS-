const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter < 37) return "Not there yet";
      else if (this.counter > 37) return "Too much!";
      else return 37;
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  },
});

app.mount("#assignment");
