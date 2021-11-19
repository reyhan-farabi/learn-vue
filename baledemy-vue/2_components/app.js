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
        <form v-on:submit.prevent='submitkelas'>
            <div class='input-group'>
              <input v-model='kelas.judul' type="text" placeholder="Nama Kelas">
              <span class='error' v-if='error.judul'>{{ error.judul }}</span>
            </div>

            <div class="input-group">
                <label>Deskripsi: </label><br>
                <textarea v-model='kelas.deskripsi'></textarea>
                <span class='error' v-if='error.deskripsi'>{{ error.deskripsi }}</span>
            </div>

            <div class="input-group">
                <img v-bind:src='previewImg' v-if='previewImg' width='256px'><br/>
                <label>Masukkan Gambar: </label><br>
                <input ref='gambar' v-on:change='uploadImage' type="file">
            </div>

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
      },
      previewImg: '',
      error: {
        judul: '',
        deskripsi: ''
      }
    }
  },
  methods: {
    submitkelas() {
      if (this.kelas.judul == '') {
        this.error.judul = 'Judul is required'
      }

      if (this.kelas.deskripsi == '') {
        this.error.deskripsi = 'Deskripsi is required'
      }

      const data = {
        id: uuidv4(),
        judul: this.kelas.judul,
        deskripsi: this.kelas.deskripsi,
        gambar: null
      }

      this.$emit('submitkelas', data)

      this.kelas.judul = ''
      this.kelas.deskripsi = ''
      this.kelas.gambar = ''
      this.previewImg = ''
      this.$refs.gambar.value = ''
    },
    uploadImage(event) {
      const imgName = event.target.files[0].name;
      this.kelas.gambar = imgName;
      this.previewImg = URL.createObjectURL(event.target.files[0])
    }
  },
};

// declare notfound
const NotFound = {
  template: `
    <h1>404 Page Not Found</h1>
  `
}

// declare routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/kelas', component: Kelas },
  { path: '*', component: NotFound },
  // { path: '/2_components', redirect: '/kelas' },
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
    },
    submitkelas(data) {
      // console.log(data);
      this.kelas.push(data)
    }
  },
});
