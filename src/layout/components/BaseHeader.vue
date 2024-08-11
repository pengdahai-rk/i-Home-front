<template>
    <el-menu :ellipsis="false" :default-active="$router.currentRoute.value.path" mode="horizontal" class="navbar-el-menu"
        router>
        <el-menu-item index="logo" style="opacity: 1;cursor:pointer" disabled>
            <img class="logo" src="@/assets/logo.svg" alt="i-Home Logo" />
        </el-menu-item>
        <el-menu-item index="home">Home</el-menu-item>
        <el-menu-item index="blog">Blog</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="aboutMe" :route="{ path: '/about-me' }">About Me</el-menu-item>
        <el-menu-item index="signIn" :route="{ path: '/sign-in' }">Sign In</el-menu-item>
        <el-menu-item h="full" index="theme" style="opacity: 1;cursor:auto" disabled>
            <el-switch v-model="isDark" inline-prompt :active-icon="Moon" :inactive-icon="Sunny" @change="changeTheme" />
        </el-menu-item>
        <el-menu-item index="github" :route="{ path: '/' }">
            <a href="https://github.com/pengdahai-rk/i-Home-front" title="GitHub" target="_blank" rel="noreferrer noopener">
                <svg-icon icon-class="github" style="width: 2em;height: 2em;vertical-align: -0.65em;" />
            </a>
        </el-menu-item>
    </el-menu>
</template>
<script setup lang="ts">
import { ThemeEnum } from '@/enums/ThemeEnum';
import router from '@/router';
import { useSettingsStore } from "@/stores";
import { Moon, Sunny } from '@element-plus/icons-vue';

const settingsStore = useSettingsStore();
/**
 * 切换主题
 */
const isDark = ref<boolean>(settingsStore.theme === ThemeEnum.DARK);
const changeTheme = (val: any) => {
    isDark.value = val;
    settingsStore.changeTheme(isDark.value ? ThemeEnum.DARK : ThemeEnum.LIGHT);
};
</script>
<style lang="scss" scoped>
ul li {
    padding: 8px;
}

.navbar-el-menu {
    height: var(--header-height);
    background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
    opacity: 0.9;
}

.logo {
    position: relative;
    height: var(--header-height);
}
</style>