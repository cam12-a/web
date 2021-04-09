
window.onload=function (){
/*new Vue({
	el: "#container",
	data:{
		message: 'Привет, Vue!'
	}
});*/
import { createApp } from 'vue'
import App from './src/App.vue'

createApp(App).mount('#container')
}