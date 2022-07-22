<script lang="ts">
// import { useMarket } from '@/store/market';
export default defineComponent({
  name: 'Skill',
  async setup() {
    return {}
  },
  data() {
    var cityArr = [
      {
        name: '北京',
        value: '一档'
      },
      {
        name: '上海',
        value: '一档'
      },
      {
        name: '广州',
        value: '一档'
      },
      {
        name: '深圳',
        value: '一档'
      },
      {
        name: '杭州',
        value: '二档'
      },
      {
        name: '宁波',
        value: '二档'
      },
      {
        name: '温州',
        value: '二档'
      },
      {
        name: '绍兴',
        value: '二档'
      },
      {
        name: '台州',
        value: '二档'
      },
      {
        name: '金华',
        value: '二档'
      },
      {
        name: '嘉兴',
        value: '二档'
      },
      {
        name: '南京',
        value: '二档'
      },
      {
        name: '徐州',
        value: '二档'
      },
      {
        name: '苏州',
        value: '二档'
      },
      {
        name: '无锡',
        value: '二档'
      },
      {
        name: '常州',
        value: '二档'
      },
      {
        name: '扬州',
        value: '二档'
      },
      {
        name: '镇江',
        value: '二档'
      },
      {
        name: '南通',
        value: '二档'
      },
      {
        name: '福州',
        value: '二档'
      },
      {
        name: '泉州',
        value: '二档'
      },
      {
        name: '厦门',
        value: '二档'
      },
      {
        name: '长沙',
        value: '二档'
      },
      {
        name: '南昌',
        value: '二档'
      },
      {
        name: '武汉',
        value: '二档'
      },
      {
        name: '宜昌',
        value: '二档'
      },
      {
        name: '郑州',
        value: '二档'
      },
      {
        name: '西安',
        value: '二档'
      },
      {
        name: '合肥',
        value: '二档'
      },
      {
        name: '沈阳',
        value: '二档'
      },
      {
        name: '大连',
        value: '二档'
      },
      {
        name: '长春',
        value: '二档'
      },
      {
        name: '哈尔滨',
        value: '二档'
      },
      {
        name: '天津',
        value: '二档'
      },
      {
        name: '石家庄',
        value: '二档'
      },
      {
        name: '济南',
        value: '二档'
      },
      {
        name: '青岛',
        value: '二档'
      },
      {
        name: '佛山',
        value: '二档'
      },
      {
        name: '东莞',
        value: '二档'
      },
      {
        name: '中山',
        value: '二档'
      },
      {
        name: '珠海',
        value: '二档'
      },
      {
        name: '南宁',
        value: '二档'
      },
      {
        name: '重庆',
        value: '二档'
      },
      {
        name: '成都',
        value: '二档'
      },
      {
        name: '昆明',
        value: '二档'
      },
      {
        name: '贵阳',
        value: '二档'
      }
    ]
    var date = new Date()
    var year = date.getFullYear() // 2019
    var month = date.getMonth() + 1 // 7
    var day = date.getDate() // 6
    var today = year + '/' + month + '/' + day
    return {
      cityArr,
      d4: '2022/07/31',
      c6: '北京',
      c7: '1星BD',
      c8: '2022/7/2',
      c9: '是',
      c10: 0,
      c11: 0,
      c12: 0,
      c13: 0,
      c14: 0,
      c15: 0,
      c16: 0,
      c17: 0,
      c18: 0,
      c19: 0,
      e6: '一档',
      today
    }
  },
  computed: {
    e7() {
      switch (this.c7) {
        case '2星BD':
          return 50
        case '3星BD':
          return 100
        case '4星BD':
          return 150
        case '5星BD':
          return 200
        case '6星BD':
          return 250
      }
      return 0.0
    },
    // =IF(D4-C8<31,"新人首月",IF(D4-C8<61,"新人次月","老人"))
    e8() {
      var day = this.getDaysBetween(this.c8, this.d4)
      if (day < 31) {
        return '新人首月'
      }
      if (day < 61) {
        return '新人次月'
      }
      return '老人'
    },
    // =MAX(C11+C12-C13,0)
    e9() {
      return Math.max(Number(this.c11) + Number(this.c12) - Number(this.c13), 0)
    },
    // =MAX(E9-C13-C14*0.5-C15*0.5-C16*0.5,0)
    e10() {
      let sum = Number(this.e9) - Number(this.c14) * 0.5 - Number(this.c15) * 0.5 - Number(this.c16) * 0.5
      return Math.max(sum.toFixed(2), 0)
    },
    // =IF(AND(D4-C8<61,E9>=2,E9<=4,E6="一档"),300,
    // IF(AND(D4-C8<61,E9>=2,E9<=4,E6="二档"),250,
    // IF(E9<5,0,
    // IF(AND(E6="一档",E9<7),350,
    // IF(AND(E6="一档",E9<9),450,
    // IF(AND(E6="一档",E9<11),500,
    // IF(AND(E6="一档",E9<16),550,
    // IF(AND(E6="一档",E9>=16),600,
    // IF(AND(E6="二档",E9<7),300,
    // IF(AND(E6="二档",E9<9),400,
    // IF(AND(E6="二档",E9<11),450,
    // IF(AND(E6="二档",E9<16),500,550))))))))))))
    e11() {
      var day = this.getDaysBetween(this.c8, this.d4) + 1
      if (day < 61 && Number(this.e9) >= 2 && Number(this.e9) <= 4 && this.e6 == '一档') {
        return 300
      } else if (day < 61 && Number(this.e9) >= 2 && Number(this.e9) <= 4 && this.e6 == '二档') {
        return 250
      } else if (Number(this.e9) < 5) {
        return 0
      } else if (Number(this.e9) < 7 && this.e6 == '一档') {
        return 350
      } else if (Number(this.e9) < 9 && this.e6 == '一档') {
        return 450
      } else if (Number(this.e9) < 11 && this.e6 == '一档') {
        return 500
      } else if (Number(this.e9) < 16 && this.e6 == '一档') {
        return 550
      } else if (Number(this.e9) >= 16 && this.e6 == '一档') {
        return 600
      } else if (Number(this.e9) < 7 && this.e6 == '二档') {
        return 300
      } else if (Number(this.e9) < 9 && this.e6 == '二档') {
        return 400
      } else if (Number(this.e9) < 11 && this.e6 == '二档') {
        return 450
      } else if (Number(this.e9) < 16 && this.e6 == '二档') {
        return 500
      } else {
        return 550
      }
    },
    e12() {
      return Number(this.e11) + Number(this.e7)
    },
    // =IF(OR(C7="4星BD",C7="5星BD",C7="6星BD",),1000,
    // IF(C9="否",0,
    // IF(E8="新人首月",(2000 *20% * * +2000*80%*IF(E9>=2,1,0))*((D4-C8)/31),
    // IF(E8="新人次月",
    // 2000 *20% * IF(C10>83,1,0)+2000*80%*IF(E9>=4,1,0),
    // 1000*20%*IF(C10>83,1,0)+1000*80%*IF(E9>=5,1,0)))))
    performance() {
      if (this.c7 == '4星BD' || this.c7 == '5星BD' || this.c7 == '6星BD') {
        return 1000
      }
      if (this.c9 == '否') {
        return 0
      }
      if (this.e8 == '新人首月') {
        var day = this.getDaysBetween(this.c8, this.today) + 1
        let num = Number(this.c10) > day * 4 - 12 ? 1 : 0
        let num2 = Number(this.e9) >= 2 ? 1 : 0
        var day2 = this.getDaysBetween(this.c8, this.d4)
        return ((2000 * 0.2 * num + 2000 * 0.8 * num2) * (day2 / 31)).toFixed(2)
      }
      if (this.e8 == '新人次月') {
        let num = Number(this.c10) > 83 ? 1 : 0
        let num2 = Number(this.e9) >= 4 ? 1 : 0
        return 2000 * 0.2 * num + 2000 * 0.8 * num2
      }
      var num = Number(this.c10) > 83 ? 1 : 0
      var num2 = Number(this.e9) >= 5 ? 1 : 0
      console.log(num, num2)
      return 1000 * 0.2 * num + 1000 * 0.8 * num2
    },
    // =IF(AND(E8="老人",E9<5),0+C18-C19,E10*E12+C18-C19)
    commission() {
      if (this.e8 == '老人' && Number(this.e9) < 5) {
        return Number(this.c18) - Number(this.c19)
      }
      return Number(this.e10) * Number(this.e12) + Number(this.c18) - Number(this.c19)
    }
  },
  methods: {
    onChangeCity() {
      this.e6 = this.cityArr.filter((o) => o.name == this.c6)[0].value
    },
    /**
     * 计算两个日期之间的天数
     *  date1  开始日期 yyyy-MM-dd
     *  date2  结束日期 yyyy-MM-dd
     *  如果日期相同 返回一天 开始日期大于结束日期，返回0
     */
    getDaysBetween(date1, date2) {
      var startDate = Date.parse(date1)
      var endDate = Date.parse(date2)
      if (startDate > endDate) {
        return 0
      }
      if (startDate == endDate) {
        return 1
      }
      var days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000)
      return days
    }
  }
})
</script>

<template>
  <div class="skill-detail">
    <h1>BD绩效提成预估计算器</h1>
    <div>
      <h2>计算月份:2022年7月</h2>
      <div class="list">
        <div class="enter-boxs">
          <div class="item">
            <label>你的城市:</label>
            <select v-model="c6" @change="onChangeCity">
              <option :value="item.name" v-for="(item, index) in cityArr" :key="index">{{ item.name }}</option>
            </select>
          </div>
          <div class="item">
            <label>你的岗位:</label>
            <select v-model="c7">
              <option value="1星BD">1星BD</option>
              <option value="2星BD">2星BD</option>
              <option value="3星BD">3星BD</option>
              <option value="4星BD">4星BD</option>
              <option value="5星BD">5星BD</option>
              <option value="6星BD">6星BD</option>
              <option value="BDM">BDM</option>
              <option value="CM">CM</option>
            </select>
          </div>
          <div class="item">
            <label>你的入职日期:</label>
            <input type="text" v-model="c8" />
          </div>
          <div class="item">
            <label>当月考核是否达标:</label>
            <select v-model="c9">
              <option value="是">是</option>
              <option value="否">否</option>
            </select>
          </div>
          <div class="item">
            <label>本月有效拜访量:</label>
            <input v-model="c10" type="number" />
          </div>
          <div class="item">
            <label>上月提交激活本月对赌成功商机:</label>
            <input v-model="c11" type="number" />
          </div>
          <div class="item">
            <label>本月总激活量:</label>
            <input v-model="c12" type="number" />
          </div>
          <div class="item">
            <label>本月提交激活对赌期间商机:</label>
            <input v-model="c13" type="number" />
          </div>
          <div class="item">
            <label>本月激活内部点位:</label>
            <input v-model="c14" type="number" />
          </div>
          <div class="item">
            <label>本月激活渠道商机:</label>
            <input v-model="c15" type="number" />
          </div>
          <div class="item">
            <label>本月激活同层点位商机:</label>
            <input v-model="c16" type="number" />
          </div>
          <div class="item">
            <label>本月激活新场景商机:</label>
            <input v-model="c17" type="number" />
          </div>
          <div class="item">
            <label>本月加项（激励、次月高销）:</label>
            <input v-model="c18" type="number" />
          </div>
          <div class="item">
            <label>本月扣项（撤架、对赌、次月低销）:</label>
            <input v-model="c19" type="number" />
          </div>
        </div>
        <div class="right-boxs">
          <div class="item">
            <label>城市所属档位:</label>
            <p>{{ e6 }}</p>
          </div>
          <div class="item">
            <label>星级BD提成标准加成:</label>
            <p>{{ e7 }}</p>
          </div>
          <div class="item">
            <label>当月状态:</label>
            <p>{{ e8 }}</p>
          </div>
          <div class="item">
            <label>本月激活商机-折前:</label>
            <p>{{ e9 }}</p>
          </div>
          <div class="item">
            <label>本月激活商机-折后:</label>
            <p>{{ e10 }}</p>
          </div>
          <div class="item">
            <label>规则阶梯奖金标准:</label>
            <p>{{ e11 }}</p>
          </div>
          <div class="item">
            <label>提成阶段奖金实际标准:</label>
            <p>{{ e12 }}</p>
          </div>
        </div>
        <div class="available-boxs">
          <h3>合计</h3>
          <div class="item">
            <label>绩效预估可得:</label>
            <p>{{ performance }}</p>
          </div>
          <div class="item">
            <label>提成预估可得:</label>
            <p>{{ commission }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skill-detail {
  font-size: 13px;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  .list {
    display: flex;
    .enter-boxs {
      width: 40%;
      font-size: 13px;
      label {
        width: 250px;
        display: inline-block;
        text-align: right;
        margin-right: 4px;
      }
      .item {
        margin: 4px 0px;
      }
    }
    .right-boxs {
      .item {
        margin: 4px 0px;
        font-size: 13px;
        p {
          display: inline-block;
          font-weight: bold;
        }
        label {
          width: 200px;
          display: inline-block;
          text-align: right;
          margin-right: 4px;
        }
      }
    }
  }
  p {
    margin: 0px;
  }
}
@media only screen and (max-width: 832px) {
  .skill-detail {
    width: 100%;
    min-width: 100%;
    h1 {
      text-align: center;
    }
    .list {
      display: block;
      .enter-boxs {
        width: 100%;
        label {
          width: 220px;
        }
        .item {
          margin-bottom: 4px;
          display: flex;
          line-height: 24px;
          label {
            width: 220px;
          }
        }
      }
      .available-boxs {
        .item {
          display: flex;
          label {
            width: 220px;
            text-align: right;
            margin-right: 4px;
            line-height: 30px;
          }
          p {
            font-size: 22px;
            color: red;
          }
        }
      }
      .right-boxs {
        .item {
          margin-bottom: 4px;
          display: flex;
          line-height: 28px;
          label {
            width: 220px;
          }
        }
      }
    }
  }
  input {
    padding: 1px 4px;
  }
}
</style>