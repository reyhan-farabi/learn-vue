let app = Vue.createApp({
  data: function () {
    return {
      greeting: "Hello using Vue 3",
      isVisible: true, // try to change this to false
    };
  },
});
app.mount("#app");
