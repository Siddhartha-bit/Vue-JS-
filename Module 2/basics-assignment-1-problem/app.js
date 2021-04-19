const app = Vue.createApp({
  data() {
    return {
      name: "Siddhartha Sriram V",
      age: 23,
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Man_Daeng_Waterfall.jpg/640px-Man_Daeng_Waterfall.jpg",
    };
  },
  methods: {
    outputRandom() {
      return Math.random();
    },
  },
}).mount("#assignment");
