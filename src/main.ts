// 引入主css
import '@/assets/main.css'
// 引入根组件创建函数createApp
import { createApp } from 'vue'
// 引入状态管理器Pinia创建函数createPinia
import { createPinia } from 'pinia'
// 引入根组件App.vue
import App from '@/App.vue'
// 引入vue-router
import router from '@/router'
// 引入全量Element Icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 创建应用
const app = createApp(App)
// 使用pinia作为状态管理器
app.use(createPinia())
// 使用vue-router做路由
app.use(router)
// 使用全量ElementPlusIcon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
// 挂载应用
app.mount('#app')
