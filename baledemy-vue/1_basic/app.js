const member = {
  title: "Vue JS",
  subtitle: "This is my test comment",
  name: "Reyhan",
  qty: 1,
  firstname: "Reyhan",
  lastname: "Farabi",
  inputNum: 7,
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
