<template>
  <div class="skill-detail">
    <h1>js排序几种方法</h1>
    <div class="box-list">
      <p class="name">1.冒泡排序</p>
      <div class="desc">
        冒泡排序是最简单的排序方法，容易理解、实现简单，但是冒泡排序是效率最低的排序算法。
       <pre>
        <code class="copyable">
          function bubbleSort(arr) {
            //console.time('BubbleSort');
            // 获取数组长度，以确定循环次数。
            let len = arr.length;
            // 遍历数组len次，以确保数组被完全排序。
            for(let i=0; i&lt;len; i++) {
                // 遍历数组的前len-i项，忽略后面的i项（已排序部分）。
                for(let j=0; j&lt;len - 1 - i; j++) {
                    // 将每一项与后一项进行对比，不符合要求的就换位。
                    if(arr[j] &gt; arr[j+1]) {
                        [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                    }
                }
            }
            //console.timeEnd('BubbleSort');
            return arr;
        }></code>
       </pre>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
<style lang="scss" scoped>
.skill-detail {
  font-size: 12px;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  h1 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .box-list {
    color: #333;
    text-align: left;
    .name {
      font-size: 16px;
      line-height: 32px;
      font-weight: bold;
    }
    .desc {
      margin-top: 5px;
      font-size: 14px;
    }
    .copyable {
      background: #f8f8f8;
      font-size: 12px;
    }
  }
}
</style>
