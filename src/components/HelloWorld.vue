<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="detail">
    <div class="title">2020年不负年华</div>
    <!-- <img src="~/assets/image/home.jpg" style="width: 100%" /> -->
    <p>先行动，再等待机会，而不是等待机会再行动</p>
    <p>
      只要认为是对的就去做，坚持去做，不要在乎别人的看法，哪怕是错，至少你有去做过，证明曾经你努力过
    </p>
  </div>
</template>

<style scoped lang="scss">
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
