<template>
  <div class="mainBody">
    <div class="title">
      <span class="mar-l-15">
        <span class="clickThis cursorPointer">房源管理</span>
        <span> | </span>
        <span class="cursorPointer">卖房管理</span>
      </span>
      <span class="search mar-r-15">
        <span class="searchInput"> <input placeholder="请输入房源编号或小区名"/> </span>
        <span class="searchButton text-center cursorPointer"> <span>搜索</span> </span>
      </span>
    </div>
    <div class="tabs">
      <span class="clickThis text-center mar-l-30 cursorPointer">我的</span>
      <span class="text-center mar-l-30 cursorPointer" >门店</span>
      <span class="text-center mar-l-30 cursorPointer">公司</span>
    </div>
    <div class="mar-t-30"></div>
    <div class="childTabs">
      <span class="childTabsMain">
        <span class="text-center clickThis mar-l-15 cursorPointer">展示中</span>
        <span class="text-center mar-l-15 cursorPointer">暂不售</span>
        <span class="text-center mar-l-15 cursorPointer">待处理</span>
        <span class="text-center mar-l-15 cursorPointer">已成交</span>
        <span class="text-center mar-l-15 cursorPointer">已失效</span>
      </span>
      <span class="tabsInfo mar-r-15">
        急售: <span class="goldFont">0</span>/5 金币： <span class="goldFont">0</span>
      </span>
    </div>
    <div class="houseInfo text-center">
      <div class="mar-t-30">暂无房源数据</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mainBody',
  components: {},
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
@import '../../assets/css/theme.less';
@titleHeight: 40px;
.mainBody {background: @whitGray; height:100%;}
.title {background:@white; width:100%; height:@titleHeight; box-shadow: 0 2px 2px 0px rgba(0,0,0,0.1);z-index:8;}
.title > *{line-height: @titleHeight;color:#ABABAB}
.title .clickThis {color:#333}
.search {float:right}
.searchInput input {width:140px;height:20px;margin-top:10px;padding:4px;font-size:.15rem;box-sizing: border-box;box-sizing: border-box;border:1px solid #eee;color:#D5D5D5;}
.searchButton > span{width:40px;height:20px;margin-top:10px;font-size:.2rem;;box-sizing: border-box;border:1px solid @yellow;display:inline-block;line-height:18px;background:@yellowLight;color:@yellow}

.tabs {background: @whitGray; width:96%;margin:4px auto; height:20px;border-bottom:2px solid #EAEAEA;z-index:5;}
.tabs span{display:inline-block;height:100%;line-height:20px;}
.tabs .clickThis {color:@yellow;border-bottom:2px solid @yellow}

.childTabs { width:96%;margin:0 auto;}
.childTabs .childTabsMain span{display:inline-block;background:@white;width:40px;height:20px;line-height:20px}
.childTabs .clickThis {background:@yellowLight;color:@yellow;border:1px solid @yellow}

.tabsInfo {height:20px;line-height:20px;float:right;font-size:.2rem;}
.goldFont {color:@yellow}

.houseInfo {color:@gray;font-size:.2rem}
</style>
