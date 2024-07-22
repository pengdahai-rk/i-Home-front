<template>

        <div class="flex main-container">
            我是LayoutIndex
            <router-view></router-view>
        </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
#app {
    text-align: center;
    color: var(--ep-text-color-primary);
}

.main-container {
    height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>