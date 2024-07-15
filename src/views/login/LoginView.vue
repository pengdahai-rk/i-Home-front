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
import { Sunny, Moon } from "@element-plus/icons-vue";
</script>
<style style lang="scss" scoped>

</style>
