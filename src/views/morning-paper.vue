<script lang="ts">
import { useMarket } from '@/store/market';
export default defineComponent({
  name: 'Morning',
  async setup() {
    const marketStore = useMarket();
    await marketStore.getMoyuList();
    const { moyuStr } = marketStore;
    console.log(moyuStr);
    return { moyuStr };
  }
});
</script>

<template>
  <div class="skill-detail">
    <div class="box-list">
      <p class="name">摸鱼日志:</p>
      <div class="desc">
        <pre>
          {{ moyuStr }}
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