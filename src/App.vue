<script setup lang="ts">
// JS或TS
import { RouterView } from 'vue-router'
</script>

<template>

  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/user">User</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </div>
  <!-- 父路由 -->
  <RouterView />
</template>

<style scoped>
/* 样式 */
</style>
