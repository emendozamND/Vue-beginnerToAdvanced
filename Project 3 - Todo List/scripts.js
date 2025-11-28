//1.- initializing the component
const todosApp = {
    data(){
        return {}
    }
};
//2.- call the instance and  call the mount method to load component in html file
Vue.createApp(todosApp).mount('#app');