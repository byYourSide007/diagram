<template>
    <div class="personal-center">
        <div class="header">
            <div class="header-avatar">
<!--                <img ：src="@/assets/personal/avatar_female.svg"-->
                <img :src="userAvatar"
                     alt="avatar">
            </div>
            <div class="logo">
                <div>图纸总数: <span>{{total_blueprint}}</span></div>
<!--                <div>canvas图纸总数: <span>{{canvas_blueprint}}</span></div>-->
<!--                <div>图片图纸总数: <span>{{img_blueprint}}</span></div>-->
            </div>
        </div>
        <div class="message_list">
            <div class="list-item" v-for="(value, key) in list" :key="key">
                <p>{{key}}: </p>
                <p>{{value}}</p>
                <button
                        :style="{'display': key==='time'?'none':'block'}"
                        @click="modifyIt(key, value)">修改</button>
            </div>

        </div>
    </div>
</template>

<script>
import {getAvatar, modifyIt} from '@/request/profile.js'
import {countBluePrint} from "@/request/home";
  export default {
    name: "PersonalCenter",
    data() {
      return {
        userAvatar: 'http://121.4.13.126:3009/avatar/default.svg', // 初始化为默认头像
        user_data: {},
        total_blueprint: 0,
        list: {
          // "用户名": this.$store.state.user_data.username,
          // "邮箱地址": this.$store.state.user_data.email,
          // "注册时间": this.$store.state.user_data.time,
          "username": JSON.parse(localStorage.getItem('user_data')).username,
          "email": JSON.parse(localStorage.getItem('user_data')).email,
          "time": JSON.parse(localStorage.getItem('user_data')).time,
        }
      }
    },
    methods: {
      // 修改个人信息
      modifyIt(name, value) {
        let message = prompt(`请输入修改后的${name}:`);
        if (message === null) {
          return; // 取消操作
        }
        // 如果内容为空，则不做处理
        if (!message) {
          alert("输入内容为空")
          return;
        }else if (message === value){
          alert("与原信息相同，禁止修改")
          return;
        }
        // 获取用户id
        const id = JSON.parse(localStorage.getItem('user_data')).id;
        console.log(id);
        // name 是类别名字， message 是修改后的内容， id 是用户的id
        modifyIt(name, message, id).then(res => {
          const { data } = res;
          if (data.status) {
            alert(data.message)
          }else {
            // localStorage 修改
            const user_data =  JSON.parse(localStorage.getItem('user_data'));// 获取本地 localStorage的用户信息
            user_data[name] = message; // 修改用户信息
            console.log(user_data)
            localStorage.setItem('user_data', JSON.stringify(user_data)); // 存储用户信息
            // 显示修改
            this.list[name] = message;
            alert("修改成功！")
          }
        })
      },


      // 获取用户的头像
      getUserAvatar() {
        let username = JSON.parse(localStorage.getItem('user_data')).username;
        getAvatar(username).then(res => {
          // 如果返回的头像内容为空，则不赋值
          const { data } = res;
          const url = data.url;
          // 如果内容为空，则不做处理
          if (!url) {
            return;
          }
          this.userAvatar = url
          console.log(url)
        })
      },


      // 获取当前用户名下的图纸总数
      countUserBlueprint() {
        let username = JSON.parse(localStorage.getItem('user_data')).username;
        // console.log(username)
        countBluePrint(username).then(res => {
          const number = res.data;
          this.total_blueprint = number;
        })
      }

    },
    created() {
      this.countUserBlueprint(); // 获取当前用户名下的图纸总数
    },
    mounted() {
      this.getUserAvatar();// 获取用户头像
      // 获取图纸总数
    }
  }
</script>

<style scoped lang="scss">
    .personal-center {
        position: relative;
        width: 100%;
        /* 头部信息 */
        .header {
            display: flex;
            flex-flow: column nowrap;

            height: 160px;
            margin: 50px 20px 0;
            border-radius: 15px;

            background: #FFF;
            opacity: .8;

            /* 用户头像*/
            .header-avatar {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                border: 1px solid red;
                background-color: #fff;
                overflow: hidden;

                margin: -20px auto 0;
                img {
                    width: 100px;
                    margin-left: -10px;
                    border-radius: inherit;
                }
            }

            .logo {
                display: flex;
                margin-top: 40px;
                div {
                    flex: 1;
                    text-align: center;
                    font-weight: 800;
                    span {
                        color: #4aaf51;
                    }
                }
            }
        }
    }


    .message_list {
        display: flex;
        flex-flow: column nowrap;
        background-color: #fff;
        margin: 20px 15px 0;
        border-radius: 15px;
        .list-item {
            display: flex;
            margin-left: 15px;
            p:nth-child(1) {
                font-weight: 800;
            }
            p:nth-child(2) {
                margin-left: 5px;
                color: #4aaf51;
            }
            button {
                margin-top: 15px;
                margin-left: 8px;
                color: #ee9900;
                height: 25px;
            }
        }
    }
</style>