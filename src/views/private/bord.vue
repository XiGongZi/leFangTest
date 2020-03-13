<template>
  <div class="bord">
    <van-count-down ref="countDown" :time="time" v-show="false" @finish="reSetCount"/>
        <h2 class="text-center mar-t-40">人数统计</h2>
    <table class="customers mar-t-40">
          <thead></thead>
          <tr>
            <td>发布任务人数</td>
            <td>{{personList.ReleaseTaskPersonCount}}</td>
          </tr>
          <tr>
            <td>黄金会员领取任务人数</td>
            <td>{{personList.NotMemberPersonCount}}</td>
          </tr>
          <tr>
            <td>钻石会员领取任务人数</td>
            <td>{{personList.MemberPersonCount}}</td>
          </tr>
      </table>
        <h2 class="text-center mar-t-40">任务统计</h2>
      <table class="customers mar-t-40">
          <thead></thead>
          <tr>
            <td>主任务总数</td>
            <td>{{taskList.MasterTaskCount}}</td>
          </tr>
          <tr>
            <td>子任务总数</td>
            <td>{{taskList.SonTaskCount}}</td>
          </tr>
          <tr>
            <td>已完成子任务数</td>
            <td>{{taskList.DoneSonTaskCount}}</td>
          </tr>
          <tr>
            <td>正在进行中子任务数</td>
            <td>{{taskList.DoingSonTaskCount}}</td>
          </tr>
          <tr>
            <td>剩余子任务数</td>
            <td>{{taskList.RemainSonTaskCount}}</td>
          </tr>
          <tr>
            <td>剩余主任务数</td>
            <td>{{taskList.RemainMasterTaskCount}}</td>
          </tr>
          <tr>
            <td>24-48小时内 失效子任务数</td>
            <td>{{taskList.InvalidSonTaskCount}}</td>
          </tr>
      </table>
        <h2 class="text-center mar-t-40">发布任务top榜</h2>
      <table class="customers mar-t-40">
          <thead></thead>
        <tr>
          <th>发布者</th>
          <th>发布时间</th>
          <th>任务文章数</th>
          <th>子任务数</th>
          <th>剩余子任务数</th>
        </tr>
        <tr v-for="(item, index) in taskTopList"
          :key="index">
          <td>{{item.PersonName}}</td>
          <td>{{item.CreateTime}}</td>
          <td>{{item.ArticleCount}}</td>
          <td>{{item.SonTaskCount}}</td>
          <td>{{item.RemainSonTaskCount}}</td>
        </tr>
    </table>
       <h2 class="text-center mar-t-40">领取任务top榜</h2>
      <table class="customers mar-t-40">
          <thead></thead>
        <tr>
          <th>领取者</th>
          <th>客户等级</th>
          <th>领取时间</th>
          <th>今日领取任务数</th>
        </tr>
        <tr v-for="(item, index) in distributeTop"
          :key="index">
          <td>{{item.PersonName}}</td>
          <td>{{item.CustomerLevelName}}</td>
          <td>{{item.ReceiveTime}}</td>
          <td>{{item.ReceiveCount}}</td>
        </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 20000,
      count: 0,
      isLoading: false,
      personList: {},
      taskList: [],
      taskTopList: [],
      distributeTop: []
    };
  },
  created() {
    this.update();
  },
  methods: {
    update() {
      this.personCount();
      this.taskCount();
      this.taskTop();
      this.taskDistributeTop();
    },
    reSetCount() {
      // 倒计时更新
      this.$refs.countDown.reset();
      this.update();
    },
    async personCount() {
      try {
        let result = await this.$store.dispatch('postData', {
          url: '/bord/GetForwardPersonCount',
          data: {
            Extra: {}
          }
        });
        this.personList = result;
      } catch (e) {
        this.$error(e.message);
      }
    },
    async taskCount() {
      try {
        let result = await this.$store.dispatch('postData', {
          url: '/bord/GetForwardTaskSummary',
          data: {
            Extra: {}
          }
        });
        this.taskList = result;
      } catch (e) {
        this.$error(e.message);
      }
    },
    async taskDistributeTop() {
      try {
        let result = await this.$store.dispatch('postData', {
          url: '/bord/GetDistributeForwardTopList',
          data: {
            Extra: {}
          }
        });
        this.distributeTop = result.List;
      } catch (e) {
        this.$error(e.message);
      }
    },
    async taskTop() {
      try {
        let result = await this.$store.dispatch('postData', {
          url: '/bord/GetForwardTopList',
          data: {
            Extra: {}
          }
        });
        this.taskTopList = result.List;
      } catch (e) {
        this.$error(e.message);
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import '../../assets/css/theme.less';
.bord{
  padding: 0.2rem 0.17rem;
}
table{
  width:100%;
  border:2px solid rgba(0, 0, 0, 0);
}
thead{
  font-size: bold;
}
// td{
//   text-align: center;
//   vertical-align:bottom;
// }
// .customers{
//   font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
//   width:100%;
//   border-collapse:collapse;
//   }

// .customers td, .customers th{
//   font-size:1em;
//   border:1px solid @golden;
//   padding:3px 7px 2px 7px;
//   }

// .customers th{
//   font-size:1.1em;
//   text-align:left;
//   padding-top:5px;
//   padding-bottom:4px;
//   background-color: @golden;
//   color:#ffffff;
//   }

// .customers tr.alt td{
//   color:#000000;
//   background-color:#EAF2D3;
//   }
table{
    border-collapse: collapse;
    // margin: 0 auto;
    text-align: center;
}
table td, table th{
    border: 1px solid #cad9ea;
    color: #666;
    height: 30px;
}
table thead th{
    background-color: #CCE8EB;
    width: 100px;
}
table tr:nth-child(odd){
    background: #fff;
}
table tr:nth-child(even){
    background: #F5FAFA;
}
</style>
