import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const Layout = () => import('@/layout/LayoutIndex.vue')

// 静态路由
export const constantRouter: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        name: 'HomeView', // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
        // https://cn.vuejs.org/guide/built-ins/keep-alive.html#include-exclude
        meta: {
          title: 'home',
          icon: 'homepage',
          affix: true,
          keepAlive: true,
          alwaysShow: false
        }
      },
      {
        path: '/blog',
        name: 'blog',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/blog/index.vue')
      },
      {
        path: '401',
        component: () => import('@/views/error-page/401.vue'),
        meta: { hidden: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404.vue'),
        meta: { hidden: true }
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/user/UserView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView.vue')
  }
]

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouter,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
})

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: '/login' })
}

export default router
