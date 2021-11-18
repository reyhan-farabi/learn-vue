const member = {
  title: "Vue JS",
  subtitle: "This is my test comment",
  name: "Reyhan",
};

const vm = new Vue({
  el: "#app",
  data: member,
  methods: {
    getName() {
      return "Hello, " + this.name;
    },
  },
});
