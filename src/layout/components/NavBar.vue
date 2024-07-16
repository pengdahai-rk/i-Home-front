<script setup lang="ts">
import { useAppStore } from "@/stores";

const appStore = useAppStore();

function toggleSideBar() {
    appStore.toggleSidebar();
}
</script>

<template>
    <!-- 顶部导航栏 -->
    <div class="navbar-container">
        <!-- 导航栏左侧 -->
        <div class="flex">
            <hamburger :is-active="appStore.sidebar.opened" @toggle-click="toggleSideBar" />
            <BreadcrumbComponent />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar-container {
    @apply flex-x-between;

    height: $navbar-height;
    background: var(--el-bg-color);
}
</style>