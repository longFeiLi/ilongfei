
<script lang="ts" setup>
import headerItem from "./components/header.vue";
</script>

<template>
  <div id="app">
    <!-- 头部 -->
    <header-item />
    <router-view  style="min-height: 600px"/>
     <!-- 底部 -->
    <div  class="footer">
       © 2021-2010 ilongfei.cn 版权所有
       <a href="www.beian.miit.gov.cn" target="_blank">粤ICP备20025571号</a>
    </div>
  </div>
</template>

<style lang="scss">
html body {
  margin: 0px;
  padding: 0px;
}
#app {
  text-align: center;
}
</style>
