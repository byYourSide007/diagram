<template>
    <div class="setting">
        <div class="list">

          <div class="list_item">
            <div class="list_item_name">修改密码：</div>
            <input type="password"
                   @blur="originPsw"
                   placeholder="请输入原密码"
                   ref="originPassword">
            <input type="password"
                   placeholder="请输入修改后的密码"
                   ref="afterPassword">
            <button @click="modifyPsw()" >修改</button>
          </div>

          <div class="list_item">
            <div class="list_item_name">修改头像：</div>
            <input type="file"
                   ref="avatar"
                   accept="image/*">
            <button @click="updateAvatar()" >修改</button>
          </div>

          <div class="list_item">
            <div class="list_item_name">切换用户：</div>
            <button @click="switchUser" >切换</button>
          </div>

          <div class="list_item">
            <div class="list_item_name">退出登录：</div>
            <button @click="logout" >退出</button>
          </div>

        </div>
    </div>
</template>

<script>
import {checkPsw, updatePsw, updateAvatar} from "@/request/setting.js"
  export default {
    name: "SettingsConfig",
    data() {
      return {
        isOriginPswRight: false,
        list: ["修改密码", "修改头像", "切换用户", "退出登录",]
      }
    },
    methods: {
      // 检查原密码是否合理
      originPsw() {
        const psw = this.$refs.originPassword.value;
        if (!psw) {
          alert("内容不能为空！");
          return;
        }
        const user = JSON.parse(localStorage.user_data);
        // console.log(user)
        const username = user.username;
        // console.log(username);
        checkPsw(username, psw).then(res => {
          console.log(res)
          const { data } = res;
          console.log(data)
          const status = data.status;
          if (!status) {
            this.isOriginPswRight = true;
            alert("密码验证成功！")
          }else {
            this.isOriginPswRight = false;
            alert("原密码输入错误！")
          }
        })

      },
      // 修改密码
      modifyPsw(){
        const psw = this.$refs.afterPassword.value;
        if (!this.isOriginPswRight) {
          alert("请先验证原密码！")
        }
        if (!psw) {
          alert("内容不能为空！");
          return;
        }
        const user = JSON.parse(localStorage.user_data);
        const username = user.username;
        updatePsw(username, psw).then(res => {
          const { data } = res;
          if (!data.status) {
            alert("成功修改密码！");
            return;
          }else {
            alert(`修改失败,错误信息为${data.message}`);
            return;
          }
        })
      },

      // 修改头像
      updateAvatar() {
        let file = this.$refs.avatar.files[0];
        // console.log(file)
        let formData = new FormData();
        formData.append('file', file);

        let username = JSON.parse(localStorage.getItem('user_data')).username;
        formData.append('text', username);
        console.log(formData)
        updateAvatar(formData).then(res => {
          console.log(res)
        })
      },

      // 切换用户
      switchUser() {
        this.$router.push('/login')
      },
      // 退出登录
      logout() {
        let isLogin = JSON.parse(localStorage.getItem('isLogin'))
        // console.log(isLogin['isLogin'])
        // console.log(isLogin)
        isLogin['isLogin'] = false;
        isLogin = JSON.stringify(isLogin)
        localStorage.setItem('isLogin', isLogin);

        // isLogin = JSON.parse(localStorage.getItem('isLogin'))
        // console.log(isLogin['isLogin'])

        this.$store.commit('logout')
        this.$router.push("/")
      }
    }
  }
</script>

<style scoped lang="scss">
    .list {
      display: flex;
      flex-flow: column nowrap;
      margin-top: 30px;
      /*overflow: scroll;*/

      .list_item {
        display: flex;
        flex-flow: column nowrap;
        width: 400px;
        margin: 30px auto 0;
        padding: 10px 100px 20px;
        border-radius: 15px;
        background-color: #fff;

        .list_item_name {
          color: #38c979;
          font-weight: 600;
          padding: 3px 5px;
        }

        input {
          margin-top: 10px;
          //margin-bottom: ;
          height: 20px;
        }
        button {
          width: 50%;
          margin: 10px auto;
        }
      }

    }

    .setting {
        z-index: 999;
    }
</style>