// declare page
const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };
const Blog = { template: '<div>Blog</div>' };
const Kelas = {
  template: `
    <div>
        <h3>Tambah Kelas</h3>
        <p><input type="text" placeholder="Nama Kelas" v-on:keyup.enter='submit' v-model='kelasbaru'></p>

        <hr>

        <h3>Daftar Kelas {{ args.length }}</h3>
        <template v-if='args.length >= 1'>
            <ul>
                <li v-for='(item, index) of args'>
                  {{ index + 1}} - {{ item }} 
                  - 
                  <a href='' v-on:click.prevent='$emit("hapuskelas", index)'>hapus</a>
                </li>
            </ul>

            <p v-else>Kelas tidak tersedia</p>
        </template>
    </div>
    `,
  props: ["args", "kelasbaru"],
  methods: {
    submit() {
      this.args.unshift(this.kelasbaru);
      this.kelasbaru = "";
    },
  },
};

// declare routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  { path: '/kelas', component: Kelas }
]

// declare router
const router = new VueRouter({
  routes
})

// header component
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
    };
  },
  props: ["firstname", "lastname"],
});

// footer component (slot)
Vue.component("footer-component", {
  template: `
    <footer id="footer">
        <slot></slot>
    </footer>
    `,
});

// kelas component
// Vue.component("kelas-component", {

// });

// list component
Vue.component("list-component", {
  props: ["args"],
  template: `
        <li>{{ args }}</li>
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
  router,
  component: {
    'home': Home,
  },
  data: {
    kelas: ["Javascript", "Python"],
    kelasbaru: "",
  },
  methods: {
    hapuskelas(index) {
      this.kelas.splice(index, 1)
    }
  },
});
