Vue.component("header-component", {
  template: `
    <header>
        <h1>Welcome to {{ framework }}</h1>
        <h3>Hi, {{ firstname }} {{ lastname }}</h3>
    </header>
    `,
  data() {
    return {
      framework: "Vue JS",
      firstname: "Reyhan",
      lastname: "Farabi",
    };
  },
});

Vue.component("footer-component", {
  template: `
    <footer id="footer">
        <p>Copyright 2021 - M. Reyhan Farabi</p>
    </footer>
    `,
});

Vue.component("my-list", {
  template: `
        <li>Test</li>
    `,
});

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
