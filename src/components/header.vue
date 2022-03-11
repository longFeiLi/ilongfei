<script lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
export default defineComponent({
  setup() {
    // 路由导航变量
    var navList = [
      {
        name: '首页',
        url: '/'
      },
      {
        name: '技术类',
        url: '/skill'
      },
      {
        name: '书籍类',
        url: '/shopify'
      },
      {
        name: '娱乐类',
        url: '/recreation'
      },
      {
        name: '关于',
        url: '/about'
      }
    ];
    const route = useRoute();
    // 头部处理操作
    let navIndex = ref(-1);
    const path = route.fullPath;
    navList.filter((item, index) => {
      if (path.indexOf(item.url) > -1) {
        navIndex.value = index;
        return;
      }
      return 0;
    });

    function clickNav(index: number) {
      navIndex.value = index;
    }
    return { navList, clickNav, navIndex };
  }
});
</script>

<style lang="scss">
$primary-color: #1890ff;
.header {
  width: 100%;
  height: 60px;
  display: flex;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  max-width: 100%;
  .logo {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    text-transform: capitalize;
    cursor: pointer;
    img {
      height: 60px;
    }
  }
  .slide-right {
    width: 80%;
    display: block;
    color: $primary-color;
    text-align: right;
    .list {
      margin-right: 20%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .item {
        margin-left: 30px;
        padding: 0px 20px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        line-height: 60px;
        a {
          color: rgba(0, 0, 0, 0.65);
          text-decoration: inherit;
          &:hover {
            color: $primary-color;
          }
        }
      }
      .active {
        border-bottom: 2px solid $primary-color;
        a {
          color: $primary-color;
        }
      }
    }
  }
}
</style>

<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/img/logo.png" />
    </div>
    <div class="slide-right">
      <div class="list">
        <div
          :class="{ active: index === navIndex }"
          class="item"
          @click="clickNav(index)"
          v-for="(item, index) in navList"
          :key="index"
        >
          <router-link :to="item.url">{{ item.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

