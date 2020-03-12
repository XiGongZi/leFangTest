<template>
  <div class="home">
    <el-container>
      <el-header class="back1 header">
        <img src="@/assets/images/title.jpg" class="center" alt="">
        <div style="float:right">
          <ul class="titleFloat" style="">
            <li>
              <img class="avatar" src="@/assets/images/avatar.jpg" alt="">
            </li>
            <li>朱忠良</li>
            <li>经纪人</li>
            <li>|</li>
            <li>返回首页</li>
            <li>退出登录</li>
          </ul>
        </div>
        <div style="clear:both"></div>
      </el-header>
      <el-container>
        <el-aside class="back2" width="200px">bbss</el-aside>
        <el-main class="back3">cc</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
    };
  },
  computed: {},
  // mounted() {
  //   this.init();
  // },
  watch: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
    // async init() {
    //   setInterval(async() => {
    //     await this.$store.dispatch('postData', {
    //       url: '/login',
    //       data: {
    //         Extra: {
    //           Query: {
    //             IsRecive: 1,
    //             MyReadedStatus: 0,
    //             MessageTypeList: [2]
    //           },
    //           Limit: {}
    //         },
    //         PageIndex: 1,
    //         PageSize: 1
    //       }
    //     });
    //   }, 50);
    // }
  }
};
</script>
<style lang="less" scoped>
@import '../../assets/css/theme.less';
.titleFloat {display:flex; height:100%;font-size:.2rem}
.titleFloat li {margin-right: .1rem;}
.avatar {width:.4rem}
.back1 {background: #26ad9c; color:@white}
.header{background: @darkBlue;height:100px;}
.back2 {background: #bde9e4;}
.back3 {background: yellow;}
.back4 {background: blue;}
</style>
