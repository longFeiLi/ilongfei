<template>
  <!-- 头部 -->
  <header-item />
  <!-- <nav>
    <router-link :to="{ name: 'index' }">Go to Home</router-link>
    <router-link :to="{ name: 'user' }">Go to User</router-link>
    <router-link :to="{ name: 'market' }">Go to Market</router-link>
  </nav> -->
  <hr />
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
  // data() {
  //   return {
  //     time: ''
  //   };
  // },
  // mounted() {
  //   window.setInterval(() => {
  //     this.time = new Date().toLocaleString();
  //   }, 1000);
  // }
});
</script>
<style scoped>
.logo {
  text-align: center;
}
.container {
  padding-top: 20px;
}
</style>
