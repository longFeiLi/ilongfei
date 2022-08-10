<template>
  <!-- 头部 -->
  <header-item />
  <div class="container">
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
  <div class="footer">
    © 2022-2010 ilongfei.cn 版权所有
    <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备20025571号</a>
  </div>
</template>

<script lang="ts">
import headerItem from './components/header.vue';
export default defineComponent({
  name: 'App',
  components: {
    'header-item': headerItem
  }
});
</script>
<style >
.logo {
  text-align: center;
}
#app {
  background: #f7f8f9;
  height: 100%;
}
.container {
  /* height: calc(100% - 80px); */
  height: auto;
}
.footer {
  width: 100%;
  height: 20px;
  font-size: 14px;
  text-align: center;
  padding: 10px 0px;
}
@media only screen and (max-width: 832px) {
  .footer {
    font-size: 12px;
  }
}
</style>
