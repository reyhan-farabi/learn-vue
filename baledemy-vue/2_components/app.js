const member = {
  title: "Vue JS",
  subtitle: "This is my test comment",
  firstname: "Reyhan",
  lastname: "Farabi",
  inputNum: 0,
  images: [
    "../assets/tech-coin-nuxt.png",
    "../assets/tech-coin-vue.png",
    "../assets/tech-coin-vuex.png",
  ],
};

const vm = new Vue({
  el: "#app",
  data: member,
  methods: {
    greet() {
      alert(`Hi, ${this.fullname}`);
    },
  },
  computed: {
    fullname() {
      return `Hello, ${this.firstname} ${this.lastname}`;
    },
  },
});
