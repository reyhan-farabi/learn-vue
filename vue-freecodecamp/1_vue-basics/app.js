let app = Vue.createApp({
  data: function () {
    return {
      greeting: "Hello using Vue 3",
      isVisible: false, // try to change this to true
    };
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible;
    },
    greet() {
      console.log(this.greeting);
    },
  },
});
app.mount("#app");
