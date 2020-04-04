<template>
  <div class="header">
    <div class="logo">iLongfei</div>
    <div class="slide-right">
      <div class="list">
        <div
          :class="{ active: index === navIndex }"
          :key="index"
          @click="clickNav(index)"
          class="item"
          v-for="(item, index) in navList"
        >
          <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
  data() {
    let navIndex: Number = 0;
    return {
      navList: [
        {
          name: '首页',
          url: '/',
        },
        {
          name: '技术类',
          url: '/skill',
        },
        {
          name: '书籍类',
          url: '',
        },
        {
          name: '娱乐类',
          url: '',
        },
        {
          name: '其他',
          url: '',
        },
      ],
      navIndex, //默认选中第一个
    };
  },
  created() {
    // name
    let path: string = this.$route.fullPath;
    let that = this;
    this.navList.filter((item, index) => {
      if (item.url === path) {
        that.navIndex = index;
        return index;
      }
    });
  },
  methods: {
    clickNav(index: Number) {
      this.navIndex = index;
    }
  },
});
</script>

<style lang="scss">
// 定义颜色
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
        line-height: 60px;
        a {
          color: rgba(0, 0, 0, 0.65);
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
