import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false, // 记录登录状态
    username: '', // 保存当前的登录的用户的用户名
    user_data: {}
  },
  getters: {
  },
  mutations: {
    // 改变登录状态
    loginStatus(state, data) {
      state.isLogin = data.isLogin; // 切换登录状态
      state.username = data.username; // 记录当前登录的用户
      state.user_data = data.user_data;
    },
    // 退出登录
    logout(state) {
      state.isLogin = false;
      state.username = '';
      state.user_data = {};
    }
  },
  actions: {
  },
  modules: {
  }
})
