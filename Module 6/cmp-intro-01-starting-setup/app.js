const app = Vue.createApp({
  //   data() {
  //     return {
  //       dataVisible: false,
  //       friend: {
  //         name: "Manuel Lorenz",
  //         phone: "012345678",
  //         email: "siddharth1234@gmail.com",
  //       },
  //     };
  //   },
  //   methods: {
  //     setVisibility() {
  //       this.dataVisible = !this.dataVisible;
  //     },
  //   },
});

app.component("friend-contact", {
  template: `
      <li>
          <h2>{{ friend.name }}</h2>
          <button @click="setVisibility()">{{ dataVisible ? 'Show Details': 'HideDetails' }}</button>
          <ul v-if="dataVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}a</li>
          </ul>
      </li>
    `,
  data() {
    return {
      dataVisible: false,
      friend: {
        name: "Manuel Lorenz",
        phone: "012345678",
        email: "siddharth1234@gmail.com",
      },
    };
  },
  methods: {
    setVisibility() {
      this.dataVisible = !this.dataVisible;
    },
  },
});

app.mount("#app");
