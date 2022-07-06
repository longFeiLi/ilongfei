<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="logo-navbar">
          <img src="../assets/img/logo.png" />
        </div>
        <!-- 菜单 -->
        <div id="ptx-navbar" class="nav-bar" :class="{ 'm-nav-bar': showNav }">
          <ul class="list-nav">
            <li v-for="(item, index) in navlist" :key="index" class="menu-list" :class="{ itemSelected: usePath === item.url }">
              <router-link :to="item.url" class="title">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="nav">
          <span v-if="!showNav" class="iconfont" style="font-size: 28px" @click="showNav = true">&#xe677;</span>
          <span v-if="showNav" class="iconfont" style="font-size: 28px" @click="showNav = false">&#xe668;</span>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const navlist = [
      {
        name: '首页',
        url: '/'
      },
      {
        name: '早报',
        url: '/morning-paper'
      },
      {
        name: '技术',
        url: '/skill'
      },
      {
        name: '关于',
        url: '/about'
      }
    ];
    const route = useRoute();
    const usePath = computed(() => {
      return route.path;
    });
    const showNav = ref(false);
    return { navlist, showNav, usePath };
  }
});
</script>

<style lang="scss">
$default-color: #40ba40;
$primary-color: #40ba40;
header {
  width: 100%;
  position: relative;
  z-index: 120px;
  background: #fff;
  .navbar {
    height: 66px;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 0;
    border-radius: 0;
    min-height: 50px;
    .container {
      width: 94%;
      margin: 0 auto;
      height: auto;
      position: relative;
      .logo-navbar {
        float: left;
        img {
          height: 55px;
          padding-top: 5px;
        }
      }
      .nav-bar {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: inherit;
        overflow: visible;
        padding-bottom: 0;
        transition: all 0.3s;
        .list-nav {
          text-align: center;
          width: 100%;
          height: 100%;
          text-align: center;
          padding-top: 0;
          .menu-list {
            display: inline-block;
            float: none;
            padding: 0 1.3%;
            margin: 0;
            line-height: 66px;
            width: 160px;
            position: relative;
            cursor: pointer;
            a {
              text-decoration: none;
              color: #000;
              display: block;
            }
            &:before {
              position: absolute;
              top: -24px;
              left: 50%;
              width: calc(100% - 39px);
              height: 5px;
              background-color: #40ba40;
              transform: translate(-50%);
              opacity: 0;
              transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
              content: '';
            }
            &:hover {
              &:before {
                top: -0px;
                left: 50%;
                opacity: 1;
              }
              a {
                color: $primary-color;
              }
            }
          }
          .itemSelected {
            border-color: #40ba40;
            &:before {
              top: -0px;
              left: 50%;
              opacity: 1;
            }
            a {
              color: $primary-color;
            }
          }
        }
      }
    }
  }
  .nav {
    display: none;
  }
}
@media only screen and (max-width: 832px) {
  header .navbar .container {
    .nav-bar {
      display: block;
      top: 60px;
      left: 100%;
      background: #fff;
      color: #000;
      z-index: 99;
      position: fixed;
      height: 100%;
      transition: all 0.5s;
    }
    .m-nav-bar {
      top: 60px;
      left: 0px;
      transition: all 0.5s;
      .list-nav {
        text-align: left;
        .menu-list {
          width: 100%;
          margin: 0 20px;
          line-height: 50px;
          border-bottom: 1px solid #d4d4d4;
          &:before {
            display: none;
          }
        }
      }
    }
    .nav {
      position: absolute;
      right: 0px;
      top: 16px;
      display: block;
    }
  }
}
</style>