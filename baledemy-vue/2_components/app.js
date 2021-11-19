Vue.config.devtools = true

// declare home
const Home = { template: '<h2>Welcome to Vue JS</h2>' };

// declare about
const About = {
  template: `
  <div>
    <h3>About</h3>

    <p>This is a Vue JS Single Page App</p>
  </div>
  `
};

// declare kelas
const Kelas = {
  template: `
    <div>
        <h3>Tambah Kelas</h3>
        <form v-on:submit.prevent='submit'>
            <p><input v-model='kelas.judul' type="text" placeholder="Nama Kelas"></p>

            <p>
            <div class="input-group">
                <label>Deskripsi: </label><br>
                <textarea v-model='kelas.deskripsi'></textarea>
            </div>
            <p>

            <p>
            <div class="input-group">
                <label>Masukkan Gambar: </label><br>
                <input v-model='kelas.gambar' type="file">
            </div>
            <p>

            <button type="submit">Submit</button>
        </form>

        <hr>

        <h3>Daftar Kelas - {{ args.length }}</h3>
        <template>
            <ul v-if='args.length >= 1'>
                <li v-for='(item, index) of args'>
                  {{ index + 1}}) {{ item.judul }} 
                  - 
                  {{ item.deskripsi }}
                  - 
                  <a href='' v-on:click.prevent='$emit("hapuskelas", item.id)'>hapus</a>
                </li>
            </ul>

            <p v-else>Kelas tidak tersedia</p>
        </template>
    </div>
    `,
  props: ["args", "kelasbaru"],
  data() {
    return {
      kelas: {
        judul: '',
        deskripsi: '',
        gambar: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.kelas);
    },
  },
};

// declare routes
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/kelas', component: Kelas },
  { path: '/2_components', redirect: '/kelas' },
]

// declare router
const router = new VueRouter({
  mode: 'history',
  routes
})

// header component
Vue.component("header-component", {
  template: `
    <header>
        <h1>{{ framework }} Single Page App</h1>
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
    kelas: [
      {
        id: 1,
        judul: 'VueJS',
        deskripsi: 'The Progressive Javascript Framework'
      },
      {
        id: 2,
        judul: 'ReactJS',
        deskripsi: 'A Javascript Library for Building User Interfaces'
      }

    ],
    kelasbaru: "",
  },
  methods: {
    hapuskelas(id) {
      this.kelas = this.kelas.filter(item => item.id != id)
    }
  },
});
