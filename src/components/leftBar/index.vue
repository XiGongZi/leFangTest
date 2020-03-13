<template>
  <div class="leftBar">
    <div class="buttons cursorPointer" v-for="(item, index) in dataList" :key="index">
      <div class="head text-center" @click="change(index)">
        <span>{{item.title}}</span>
        <span class="mar-r-15"><img class="iconImg" :class="{rotate: item.needShow}" style="line-height:10px" src="@/assets/images/pull.png"/></span>
      </div>
      <ul v-if="item.needShow">
        <li v-for="(item1, index1) in item.child" :key="index1" class="childItem text-center" :class="{childItemChecked: item1.onMouse}" @mouseover="item1.onMouse = true" @mouseout="item1.onMouse = false">
          <span class="mar-r-15"><img class="iconImg" :src="item1.onMouse ? item1.urlIconCheck : item1.urlIcon"/></span>
          <span class="childText">{{item1.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'leftBar',
  components: {},
  data() {
    return {
      activeIndex: {}
    };
  },
  props: {
    dataList: {
      type: Array,
      default() {
        return [
          {
            title: '房源管理',
            needShow: false,
            child: [
              {
                title: '发布卖房',
                onMouse: false,
                urlIcon: require('@/assets/images/house.png'),
                urlIconCheck: require('@/assets/images/houseCheck.png')
              },
              {
                title: '卖房管理',
                onMouse: false,
                urlIcon: require('@/assets/images/house.png'),
                urlIconCheck: require('@/assets/images/houseCheck.png')
              },
              {
                title: '发布租房',
                onMouse: false,
                urlIcon: require('@/assets/images/house.png'),
                urlIconCheck: require('@/assets/images/houseCheck.png')
              },
              {
                title: '租房管理',
                onMouse: false,
                urlIcon: require('@/assets/images/house.png'),
                urlIconCheck: require('@/assets/images/houseCheck.png')
              }
            ]
          },
          {
            title: '房源回访',
            needShow: false,
            child: [
              {
                title: '子选项1',
                onMouse: false,
                urlIcon: require('@/assets/images/house.png'),
                urlIconCheck: require('@/assets/images/houseCheck.png')
              },
              {
                title: '子选项2',
                onMouse: false,
                urlIcon: require('@/assets/images/house.png'),
                urlIconCheck: require('@/assets/images/houseCheck.png')
              }
            ]
          }
        ];
      }
    }
  },
  methods: {
    change(key) {
      this.dataList[key].needShow = !this.dataList[key].needShow;
    }
  }
};
</script>
<style lang="less" scoped>
@import '../../assets/css/theme.less';
.leftBar {}
.leftBar .head {height:28px;line-height:28px;font-size:.24rem;}
.leftBar ul>li { width:90%;margin:0 auto;height:20px;line-height:20px;font-size:.18rem;color: #666666}
.iconImg {width:8px;display:inline-block;}
.childItemChecked {background:@darkBlue;;border-radius:10px;}
.leftBar .childItemChecked .childText {color:@white}

.rotate{
  transform:rotate(180deg);
   -webkit-transform:rotate(180deg);
   -moz-transform: rotate(180deg);
   -o-transform: rotate(180deg);
   -ms-transform: rotate(180deg);
}
</style>
