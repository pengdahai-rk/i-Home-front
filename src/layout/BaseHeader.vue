<template>
    <header class="navbar">
        <div class="navbar-wrapper">
            <div class="header-container">
                
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.navbar {
    top: 0;
    left: 0;
    position: relative;
    z-index: var(--nav-z-index);
}

.navbar-wrapper {
    position: relative;
    border-bottom: 1px solid var(--border-color);
    height: var(--header-height);
    padding: 0 12px 0 24px;
    background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
    top: 0
}

@media screen and (min-width: 768px) {
    .navbar-wrapper {
        padding: 0 12px 0 32px
    }
}

@media screen and (min-width: 1280px) {
    .navbar-wrapper {
        padding: 0 32px
    }
}

@media screen and (min-width: 1680px) {
    .navbar-wrapper {
        padding: 0 48px
    }
}
</style>