<script lang="ts">
import { useMarket } from '@/store/market';
import { ref, onServerPrefetch, onMounted } from 'vue'
export default defineComponent({
  name: 'Morning',
  async setup() {
    const moyuLog = ref('')
    const marketStore = useMarket();
    onMounted(async () => {
      await marketStore.getMoyuList();
      console.log(marketStore);
      const { moyu } = marketStore;
      moyuLog.value= moyu
    })
    onServerPrefetch(async() => {
      await marketStore.getMoyuList();
      const { moyu } = marketStore;
      moyuLog.value= moyu
    })
    return {
      moyuLog
    }
  }
});
</script>

<template>
  <div class="skill-detail">
    <div class="box-list">
      <p class="name">摸鱼日志:</p>
      <div class="desc">
        <pre>
          {{ moyuLog }}
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
        width: 100%;
        max-width: 100%;
        pre {
          width: 100%;
          white-space: pre-wrap;
        }
      }

      .copyable {
        background: #f8f8f8;
        font-size: 12px;
      }
    }
  }
</style>