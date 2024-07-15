<template>
    <div>
        <!-- 顶部 -->
        <div class="absolute-lt flex-x-end p-3 w-full">
            <el-switch v-model="isDark" inline-prompt :active-icon="Moon" :inactive-icon="Sunny"
                @change="toggleTheme" />
            <lang-select class="ml-2 cursor-pointer" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ThemeEnum } from "@/enums/ThemeEnum";
import { useSettingsStore } from "@/stores";
import { Sunny, Moon } from "@element-plus/icons-vue";
import { useWindowSize } from "@vueuse/core";
import { ElForm } from "element-plus";
import { ref, watchEffect } from 'vue'

// Stores
const settingsStore = useSettingsStore();

// Reactive states
const isDark = ref(settingsStore.theme === ThemeEnum.DARK);
const icpVisible = ref(true);
const loading = ref(false); // 按钮loading
const isCapslock = ref(false); // 是否大写锁定
const captchaBase64 = ref(); // 验证码图片Base64字符串
const loginFormRef = ref(ElForm); // 登录表单ref
const { height } = useWindowSize();


/**
 * 主题切换
 */
const toggleTheme = () => {
    const newTheme =
        settingsStore.theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
    settingsStore.changeTheme(newTheme);
};
/**
 * 根据屏幕宽度切换设备模式
 */
watchEffect(() => {
    if (height.value < 600) {
        icpVisible.value = false;
    } else {
        icpVisible.value = true;
    }
});

</script>
<style style lang="scss" scoped></style>
