// Basic Example
var app = new Vue({
  el: "#example",
  data: {
    message: "Hello World",
  },
  computed: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
});

// Methods
var appMethod = new Vue({
  el: "#methodExample",
  data: {
    message: "Learn Vue",
  },
  methods: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
});

// Watched Property
var appWatched = new Vue({
  el: "#watchedExample",
  data: {
    firstname: "Foo",
    lastname: "Boo",
    fullname: "Foo Bar",
  },
  watch: {
    firstname: function (val) {
      this.fullname = val + " " + this.lastname;
    },
    lastname: function (val) {
      this.fullname = this.firstname + " " + val;
    },
  },
});
