const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      goals: [],
      toggleName: "Hide / Show List",
      visible: true,
    };
  },
  computed: {},
  methods: {
    addGoal() {
      this.goals.push(this.userInput);
    },
    visibility() {
      this.visible = !this.visible;
      if (this.visible === true) this.toggleName = "Shown";
      else this.toggleName = "Hidden";
    },
  },
});

app.mount("#assignment");
