<template>
    <div class="home">
        <div class="detail">书籍列表</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {},
  data() {
    return {
      navIndex: 0 //默认选中第一个
    };
  },
  created() {
    console.log(333333);
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
    font-size: 14px;
    line-height: 28px;
    .title {
      font-size: 20px;
      font-weight: bold;
      margin: 20px 0px;
    }
  }
}
</style>
