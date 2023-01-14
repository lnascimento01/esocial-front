import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import Loading from 'vue3-loading-screen'

createApp(App).use(router).mount('#app')

const app = createApp(App)

app.use(Loading, {
    bg: '#FE5C07',
    icon: 'fas fa-spinner',
    size: 3,
    icon_color: 'white',
    slot: 'Loading'
})
app.use(router)

app.mount('#app')
