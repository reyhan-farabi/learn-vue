let app = Vue.createApp({
  data: function () {
    return {
      greeting: "Hello using Vue 3",
      isVisible: false, // try to change this to true
    };
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible;
    },
    greet(greeting) {
      console.log(greeting);
    },
  },
});

// login-form components
app.component("login-form", {
  template: `
    <form @submit.prevent='handleSubmit'>
      <h1>{{title}}</h1>

      <custom-input type='email' v-bind:label='emailLabel'/>
      <custom-input type='password' v-bind:label='passwordLabel'/>

      <button>Log in</button>
    </form>
  `,
  components: ["custom-input"],
  data() {
    return {
      title: "Login Form",
      email: "",
      password: "",
      emailLabel: "Email",
      passwordLabel: "Password",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.email, this.password);
    },
  },
});

// custom-input components
app.component("custom-input", {
  template: `
    <label>
      {{label}}
      <input type='text'/>
    </label>
  `,
  props: ["label"],
});

// mount app
app.mount("#app");
