<script lang="ts" setup>
import request from '@/utils/request';
import { ref } from 'vue'
 var url = '/api/dingNotice/test'
 let logName = ref('');
 // 获取摸鱼日志信息
 function getlog() {
   return request({
      url: url,
      method: 'GET',
      json: true,
    }).then((res:any) => {
      console.log(res);
      if (res.code === 0) {
        return Promise.resolve(res)
      }
        return Promise.reject(res)
    })
 }
//  async
async function init () {
 var obj = await getlog()
 console.log(obj);
 logName.value = obj.text;
}
init();
</script>

<template>
  <div class="skill-detail">
    <div class="box-list">
      <p class="name">1. 摸鱼日志</p>
      <div class="desc">
        <pre>
          {{logName}}
        </pre>
      </div>
    </div>
  </div>
</template>

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