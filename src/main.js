import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();
//글로벌 변수 보관
let app = createApp(App);
app.config.globalProperties.emitter = emitter;
import store from './store'

app.use(store).mount('#app')
