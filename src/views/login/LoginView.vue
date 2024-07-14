<script setup lang='ts'>
import { ref } from 'vue'
import type { Ref } from 'vue'
const msg: Ref<string> = ref('hello vue3 component')
</script>
<template>
    <div>{{ msg }}</div>
</template>
<style lang="less" scoped></style>
