import type { App } from "vue"
// 引入状态管理器Pinia创建函数createPinia
import { createPinia } from 'pinia'

const store = createPinia()
// 全局注册 store
export function setupStore(app: App<Element>) {
  app.use(store);
}
export * from "./modules/app";
export * from "@/stores/modules/settings";
export { store };