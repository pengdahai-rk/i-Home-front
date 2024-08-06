// 引入根组件创建函数createApp
import { createApp } from 'vue'
// 引入状态管理器配置
import { setupStore } from '@/stores'
// 引入根组件App.vue
import App from '@/App.vue'
// 引入vue-router
import router from '@/router'
// 引入全量Element Icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 本地SVG图标
import "virtual:svg-icons-register";

// 样式
import "element-plus/theme-chalk/dark/css-vars.css"
import "virtual:uno.css"
// 全局样式文件
import "@/styles/index.scss"

// 创建应用
const app = createApp(App)
// 全局注册 状态管理(store)
setupStore(app);
// 使用vue-router做路由
app.use(router)
// 使用全量ElementPlusIcon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
// 挂载应用
app.mount('#app')
