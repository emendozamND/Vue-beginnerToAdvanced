
//3 create  an array to save  the items
var todos = [
{
    text: 'Learn HTML, CSS and Javascript',
    done: true
},
{
    text: 'Learn the basics of Go',
    done: false
},

 ]


//1.- initializing the component
const todosApp = {
    data(){
        return {
            todos: window.todos
        }
    }
};
//2.- call the instance and  call the mount method to load component in html file
Vue.createApp(todosApp).mount('#app');