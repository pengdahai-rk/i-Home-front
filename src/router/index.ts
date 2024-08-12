import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const Layout = () => import('@/layout/index.vue')

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
        name: 'Home', // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
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
        path: 'blog',
        name: 'blog',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/blog/index.vue')
      },
      {
        path: 'about-me',
        name: 'AboutMe',
        component: () => import('../views/about-me/index.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user/index.vue')
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('@/views/sign-in/index.vue')
  },
  {
    path: '/401',
    name: 'ErrorPage401',
    component: () => import('@/views/error-page/401.vue'),
    meta: { hidden: true }
  },
  {
    // 将匹配所有内容并将其放在 `route.params.pathMatch` 下
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error-page/404.vue')
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
  router.replace({ path: '/sign-in' })
}

export default router
