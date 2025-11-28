// 3.- create an array to save the items


// 1.- initializing the component
const todosApp = {
  data() {
    return {
      // puedes usar window.todos o solo todos
      todos: [], 
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
        localStorage.setItem("todos",  JSON.stringify(this.todos));

        // limpiamos el input
        this.newTodo.text = '';
      } else {
        alert("Todo text is required");
      }
    }
  },
  created(){
    this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
  }

};

// 2.- call the instance and mount the component in the html file
Vue.createApp(todosApp).mount('#app');
