<template>
    <BaseHeader />

    <main id="page-content" class="page-content">
        <div>
            我是LayoutIndex
            <router-view></router-view>
        </div>
    </main>

</template>
<script setup lang="ts">




</script>
<style lang="scss">
.page-content {
    outline: none;
}

.page-content .doc-content a {
    display: inline-flex;
    align-items: center;
}

.page-content .doc-content a.vp-link {
    white-space: nowrap;
}

.page-content .doc-content a .link-icon {
    margin-left: 0.25rem;
    height: 1em;
    width: 1em;
}
</style>