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
  updated() {
    console.log("updated");
  },
});

app.component("test-box", {
  template: `
    <div class='box'></div>
  `,
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  unmounted() {
    console.log("unmounted");
    console.log("unmounted");
  },
});

app.mount("#app");
