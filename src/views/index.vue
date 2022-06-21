<template>
  <div class="home">
    <div class="detail">
      <div class="title">2022年不负年华</div>
      <p>先行动，再等待机会，而不是等待机会再行动</p>
      <p>只要认为是对的就去做，坚持去做，不要在乎别人的看法，哪怕是错，至少你有去做过，证明曾经你努力过</p>
    </div>
  </div>
</template>

<style lang="scss">
$primary-color: #1890ff;
.home {
  padding: 50px 0px;
  min-width: 1200px;
  margin: 0 auto;
  min-height: 500px;
  .detail {
    width: 80%;
    margin: 0 auto;
    font-size: 14px;
    line-height: 28px;
    .title {
      font-size: 22px;
      font-weight: bold;
      margin: 20px 0px;
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
