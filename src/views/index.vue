<template>
  <div class="home">
    <div class="box-sentence">
      <!-- <h1>句子列表</h1> -->
      <div class="nav-list">
        <div v-for="item in typeList" :key="item.id" @click="clickNav(item.id)" class="item" :class="{'active': item.id == typeId }" >
          {{ item.typeName }}
        </div>
      </div>
      <div class="sentence-list">
        <div v-for="(item, index) in sentenceList" class="item" :key="index">
          <p>{{index + 1}}:{{ item.content.substring(item.content.indexOf('、') + 1) }}</p>
          <!-- {{ item }} -->
        </div>
        <div v-if="sentenceList.length < 1">
           没有数据
        </div>
      </div>
    </div>
    <div class="box-conn">
      <div class="title">2022年不负年华</div>
      <p>先行动，再等待机会，而不是等待机会再行动</p>
      <p>只要认为是对的就去做，坚持去做，不要在乎别人的看法，哪怕是错，至少你有去做过，证明曾经你努力过</p>
    </div>
  </div>
</template>

<script>
import { getApi } from '@/api/market.ts'
import { ref, onServerPrefetch, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const typeList = ref([])
    const typeId = ref(1);
    const sentenceList = ref([])
    let obj = {
      pageSize: 30,
      pageNo: 1,
      typeId: typeId.value
    }
    /**
     * 服务器端调用
     */
    onServerPrefetch(async() => {
      typeList.value = await getApi('getSentenceTypelist', {})
      // 初始化查询全部
      sentenceList.value = await getApi('getReptile', obj)
    })
    // 客服端调用
    onMounted(async() => {
      typeList.value = await getApi('getSentenceTypelist', {})
      // 初始化查询全部
      sentenceList.value = await getApi('getReptile', obj)
    })
    /**
     * 点击切换句子列表
     */
    async function clickNav (id) {
      typeId.value = id
      obj.typeId = id;
      sentenceList.value = await getApi('getReptile', obj)
    }
    return {
      typeId,
      typeList,
      clickNav,
      sentenceList
    }
  }
})
</script>

<style lang="scss">
$primary-color: #40ba40;
.home {
  min-height: 500px;
  display: flex;
  justify-content: center;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding-top: 10px;
  .box-sentence {
    width: 70%;
    background-color: #fff;
    border-radius: 4px 4px 0 0;
    padding: 10px;
    .nav-list {
      display: flex;
      border-bottom: 1px solid #f0f0f0;
      .item {
        color: #40ba40;
        width: 100px;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        margin-bottom: 10px;
      }
      .active {
        background: #40ba40;
        color: #fff;
        border-radius: 10px;
      }
    }
    .sentence-list {
      margin-top: 10px;
      padding: 0px 10px;
      .item {
        font-size: 14px;
        margin-bottom: 8px;
      }
    }
  }
  .box-conn {
    width: 30%;
    margin: 0 auto;
    text-align: center;
    font-size: 14px;
    line-height: 28px;
    background-color: #fff;
    border-radius: 4px 4px 0 0;
    margin-left: 20px;
    .title {
      font-size: 22px;
      font-weight: bold;
      margin: 20px 0px;
    }
    p {
      padding: 0px 20px;
    }
  }
}
@media only screen and (max-width: 832px) {
  .home {
    width: 100%;
    min-width: 100%;
  }
}
</style>
