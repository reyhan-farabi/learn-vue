const member = {
  title: "Vue JS",
  subtitle: "This is my test comment",
  name: "Reyhan",
  qty: 1,
  firstname: "Reyhan",
  lastname: "Farabi",
  inputNum: 0,
  images: [
    "../assets/tech-coin-nuxt.png",
    "../assets/tech-coin-vue.png",
    "../assets/tech-coin-vuex.png",
  ],
  menu: "home",
  kelas: [],
};

const vm = new Vue({
  el: "#app",
  data: member,
  methods: {
    getName() {
      return "Hello, " + this.name;
    },
    changeName(newName) {
      this.name = newName;
    },
    handleClick() {
      this.inputNum++;
    },
  },
  computed: {
    totalBayar() {
      return this.qty * 1000;
    },
    fullname() {
      return `Hello, ${this.firstname} ${this.lastname}`;
    },
    oddOrEven() {
      return this.inputNum % 2 === 0 ? "Genap" : "Ganjil";
    },
  },
});
