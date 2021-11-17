let app = Vue.createApp({
  data: function () {
    return {
      isVisible: false, // try to change this to true
    };
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible;
    },
  },
});
app.mount("#app");
