<template>
  <div class="skill">
    <!-- 左右布局 -->
    <div class="slide-left">
      <a-menu
        @click="handleClick"
        style="width: 100%;height:100%;"
        :openKeys.sync="openKeys"
        mode="inline"
      >
        <a-sub-menu key="sub1" @titleClick="titleClick">
          <span slot="title">
            <span>JavaScript</span>
          </span>
            <a-menu-item key="sort">js排序</a-menu-item>
            <a-menu-item key="es">es特性</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2" @titleClick="titleClick">
          <span slot="title">
            <span>CSS</span>
          </span>
            <a-menu-item key="4">动画</a-menu-item>
            <a-menu-item key="5">head标签库</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="slide-right">
      <!--  子路由展示 -->
      <nuxt-child />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      openKeys: ['sub1'],
      current: ['mail']
    };
  },
  methods: {
    handleClick(data: any) {
      console.log(222);
      this.$router.push({ path: '/skill/' + data.key })
    },
    titleClick(key: any) {
      console.log('titleClick', key);
    },
  },
  watch: {
  },
})
</script>

<style lang="scss">
.skill {
  width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  min-width: 1200px;
  height: 600px;
  .slide-left {
    width: 20%;
    height: 100%;
    padding: 0px 20px;
    height: 100%;
  }
  .slide-right {
    flex: 1;
  }
}
</style>
