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

// custom-form
app.component("login-form", {
  template: `
    <form @submit.prevent='handleSubmit'>
      <h1>{{title}}</h1>

      <input type='email'/>
      <input type='password'/>

      <button>Log in</button>
    </form>
  `,
  data() {
    return {
      title: "Login Form",
    };
  },
  methods: {
    handleSubmit() {
      console.log("submitted");
    },
  },
});

app.mount("#app");
