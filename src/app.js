var app = new Vue({
  el: "#app",
  data: {
    message: "Hello World",
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true, // try to set the value to false
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Learn Javascript" },
      { text: "Learn Vue" },
      { text: "Learn New Framework" },
    ],
  },
});
