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

// footer component
Vue.component("footer-component", {
  template: `
    <footer id="footer">
        <p>Copyright 2021 - M. Reyhan Farabi</p>
    </footer>
    `,
});

// kelas component
Vue.component("kelas-component", {
  template: `
    <main>
        <h3>Tambah Kelas</h3>
        <p><input type="text" placeholder="Nama Kelas" v-on:keyup.enter='submit' v-model='kelasbaru'></p>

        <hr>

        <h3>Daftar Kelas {{ args.length }}</h3>
        <template v-if='args.length > 1'>
            <ul>
                <li v-for='(item, index) of args'>{{ index + 1}} - {{ item }}</li>
            </ul>

            <p v-else>Kelas tidak tersedia</p>
        </template>
    </main>
    `,
  props: ["args", "kelasbaru"],
  methods: {
    submit() {
      this.args.unshift(this.kelasbaru);
      this.kelasbaru = "";
    },
  },
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
  data: {
    kelas: ["Javascript", "Python"],
    kelasbaru: "",
  },
});
