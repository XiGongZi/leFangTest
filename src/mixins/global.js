// import { callPhone } from '../libs/native-app';

const mixin = {
  data() {
    return {};
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    laterGo(path, replace) {
      setTimeout(() => {
        replace ? this.$router.replace(path) : this.$router.push(path);
      }, 1500);
    },
    goBack() {
      this.$router.go(-1);
    },
    laterGoBack() {
      setTimeout(() => {
        this.goBack();
      }, 1000);
    },
    $warning(message) {
      this.$toast(message);
    },
    $error(message) {
      this.$toast(message);
    },
    $success(message) {
      this.$toast.success(message);
    },
    $loading(message, duration) {
      this.$toast.loading({
        duration: duration || 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: message || '请稍后'
      });
    },
    $loadingClose() {
      this.$toast.clear();
    },
    callTel(mobile) {
      // callPhone({ phone: mobile });
    }
  },
  filters: {
    formatMoney: function(value = 0, len = 2) {
      return value ? value.toFixed(len) : value;
    },
    formatFixed2: function(value = 0) {
      return Math.round(value * 100) / 100;
    },
    formatFloor: function(value = 0) {
      let reg = /^-?\d+$/;
      if (reg.test(value)) return value;
      let s = JSON.stringify(value);
      return s.substring(0, s.indexOf(`.`) + 3);
    }
  }
};

export default mixin;
