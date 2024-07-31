<template>
    <el-scrollbar height="100%">
        <el-container>
            <el-header class="header-navbar">
                <BaseHeader />
            </el-header>
            <el-main class="main-page">
                <router-view></router-view>
            </el-main>
            <el-footer class="footer-text">
                <BaseFooter />
            </el-footer>
        </el-container>
    </el-scrollbar>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
.header-navbar {
    top: 0;
    left: 0;
    position: sticky;
    z-index: var(--nav-z-index);
}

.main-page {
    width: 100%;
}

.footer-text {
    width: 100%;
}
</style>