// 3.- create an array to save the items
var todos = [
  {
    text: 'Learn HTML, CSS and Javascript',
    done: true
  },
  {
    text: 'Learn the basics of Go',
    done: false
  }
];

// 1.- initializing the component
const todosApp = {
  data() {
    return {
      // puedes usar window.todos o solo todos
      todos: window.todos, 
      newTodo: {
        text: '',     // texto vacío al inicio
        done: false
      }
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.text) {
        // agregamos un nuevo objeto a la lista
        this.todos.push({
          text: this.newTodo.text,
          done: false
        });

        // limpiamos el input
        this.newTodo.text = '';
      } else {
        alert("Todo text is required");
      }
    }
  }
};

// 2.- call the instance and mount the component in the html file
Vue.createApp(todosApp).mount('#app');