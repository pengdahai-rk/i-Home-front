<template>
    <header class="navbar">
        <div class="navbar-wrapper">
            <div class="header-container">
                <div class="logo-container">
                    <a href="/">
                        <img class="logo" src="@/assets/logo.svg" alt="Element Plus Logo" />
                    </a>
                </div>
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
    background-color:cyan;
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

.navbar-wrapper .header-container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

.navbar-wrapper .header-container .content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
}

.logo-container {
    display: flex;
    align-items: center;
    height: var(--header-height);
}

.logo-container>a {
    height: 28px;
    width: 128px;
}

.logo-container .logo {
    position: relative;
    height: 100%;
}
</style>