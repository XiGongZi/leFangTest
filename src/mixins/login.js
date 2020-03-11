export default {
  data() {
    return {
    };
  },
  methods: {
    async login() {
      try {
        this.$loading();
        await this.$store.dispatch('postData', {
          url: '/user/login',
          data: { Body: this.loginForm }
        });
        await this.getToken();
        this.$router.replace('home');
        console.log();
        this.$loadingClose();
      } catch (e) {
        this.$loadingClose();
        this.$error(e.message);
      }
    },
    async getToken() {
      const token = await this.$store.dispatch('postData', {
        url: '/user/get-auth-token',
        data: {},
        need_sign: false
      });
      if (token) sessionStorage.setItem('token', token);
    }
  }
};
