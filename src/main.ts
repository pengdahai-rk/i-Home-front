import '@/assets/main.css'
// 引入createApp用于创建应用
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入App.vue
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
