<template>
  <div class="home">
    <div class="detail">
      <div class="title">
         2020年不负年华
      </div>
      <!-- <img src="~/assets/image/home.jpg" style="width: 100%" /> -->
      <p>先行动，再等待机会，而不是等待机会再行动</p>
      <p>
        只要认为是对的就去做，坚持去做，不要在乎别人的看法，哪怕是错，至少你有去做过，证明曾经你努力过
      </p>
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {},
  data() {
    return {
      navList: [
        {
          name: '首页',
          url: ''
        },
        {
          name: '技术类',
          url: ''
        },
        {
          name: '书籍类',
          url: ''
        },
        {
          name: '娱乐类',
          url: ''
        }
      ],
      navIndex: 0 //默认选中第一个
    };
  },
  methods: {
    init() {
      console.log(111);
    }
  }
});
</script>

<style lang="scss">
$primary-color: #1890ff;
.home {
  padding: 50px 0px;
  min-width: 1200px;
  margin: 0 auto;
  .detail {
    width: 900px;
    margin: 0 auto;
  }
}
</style>
