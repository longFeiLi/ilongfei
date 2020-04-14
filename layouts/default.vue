<template>
  <div id="app">
    <i-header />
    <!-- 引入头部组件 -->
    <div style="min-height: 600px">
      <nuxt />
    </div>
    <!-- 底部 -->
    <div  class="footer">
       © 2020-2010 ilongfei.cn 版权所有
       <a href="www.beian.miit.gov.cn" target="_blank">粤ICP备20025571号</a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import iHeader from '../components/header.vue'
export default Vue.extend({
  components: {
    iHeader
  },
  data() {
    return {
      index: 1
    }
  }
});
</script>

<style>
html {
  font-family: Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

p {
  margin: 0px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.footer {
  text-align: center;
  width: 100%;
  display: block;
}
</style>
