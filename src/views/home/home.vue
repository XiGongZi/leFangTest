<template>
  <div class="home">
    <div>
      <div class="back1 header">
        <img src="@/assets/images/title.jpg" class="iconImg cursorPointer" alt="">
        <div style="float:right;height:100%;">
          <ul class="titleFloat text-center mar-r-20 cursorPointer" style="">
            <li style="padding-top:.1rem">
              <img class="avatar" src="@/assets/images/avatar.jpg" alt="">
            </li>
            <li>朱忠良</li>
            <li>经纪人</li>
            <li> | </li>
            <li>返回首页</li>
            <li>退出登录</li>
          </ul>
        </div>
        <div style="clear:both"></div>
      </div>
      <div class="body">
        <div class="aside">
          <left-bar/>
        </div>
        <div class="main back3">
          <main-body/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import leftBar from '@/components/leftBar';
import mainBody from '@/components/mainBody';
export default {
  name: 'home',
  components: {leftBar, mainBody},
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
.titleFloat {display:flex; height:100%;font-size:.15rem}
.titleFloat li {margin-right: .1rem;line-height:.8rem}
.avatar {width:.58rem;}
.iconImg {height:100%;;line-height:.8rem}
.back1 {background: #26ad9c; color:@white}
.header{background: @darkBlue;height:.8rem;}
.back4 {background: blue;}

.body {display: flex;height:calc(100vh - .8rem)}
.body .aside {width:100px;height:100%;z-index:10;box-shadow: 2px 0px 2px 0px  rgba(0,0,0,0.1)}
.body .main {flex:1;height:100%}
</style>
