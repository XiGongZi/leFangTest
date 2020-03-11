<template>
  <div class="container container-nav phone-login bg-f5f5">
    <section class="text-center mar-t-17">
      <van-field placeholder="请输入密码" type="text" maxlength="20" v-model="pass" @keyup.enter="phoneLogin">
      </van-field>
      <button class="btn btn-gradient-gold color-fff font-31 mar-t-50 w90" @click.stop="phoneLogin">确认</button>
    </section>
  </div>
</template>
<script>
import login from '../../mixins/login';
import md5 from 'js-md5';
export default {
  name: 'login-phone',
  mixins: [login],
  data() {
    return {
      pass: '',
      personList: '',
      CaptchaType: 1,
      loginForm: {
      }
    };
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    async phoneLogin() {
      this.loginForm.pass = md5(this.pass);
      await this.login();
    }
  }
};
</script>
<style lang="less" scoped>
@import '../../assets/css/theme.less';

.phone-login {
  height: 100%;
}

.phone-login /deep/ .van-button--default {
  border-width: 0 0 0 1px;
  color: #e7c188;
}
.icon-pad-cade /deep/.van-field__left-icon {
  padding-top: 0.04rem;
  box-sizing: border-box;
}
</style>
