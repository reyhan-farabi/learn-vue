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

      <custom-input
        v-for='(input, i) in inputs'
        :key='i'
        v-model='input.value'
        :label='input.label'
        :type='input.type'
      />

      <button>Log in</button>
    </form>
  `,
  components: ["custom-input"],
  data() {
    return {
      title: "Login Form",
      inputs: [
        {
          label: "Email",
          value: "",
          type: "email",
        },
        {
          label: "Password",
          value: "",
          type: "password",
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.inputs[0].value, this.inputs[1].value);
    },
  },
});

// custom-input components
app.component("custom-input", {
  template: `
    <label>
      {{label}}
      <input :type='type' v-model='inputValue'/>
    </label>
  `,
  props: ["label", "type", "modelValue"],
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        // console.log(value);
        this.$emit("update:modelValue", value);
      },
    },
  },
});

// mount app
app.mount("#app");
