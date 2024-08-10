<template>
  <div>
    我是404错误页
  </div>
  <router-link to="/home">
    <el-button>
      回到首页
    </el-button>
  </router-link>
</template>
<!-- setup 无法设置组件名称，组件名称keepAlive必须 -->
<script lang="ts">
export default {
  name: "NotFound",
};
</script>
<style lang="scss" scoped></style>
