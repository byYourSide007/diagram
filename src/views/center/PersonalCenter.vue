<template>
    <div class="personal-center">
        <div class="header">
            <div class="header-avatar">
                <img src="@/assets/personal/avatar_female.svg" alt="avatar">
            </div>
            <div class="logo">
                <div>图纸总数: <span>{{total_blueprint}}</span></div>
                <div>canvas图纸总数: <span>{{canvas_blueprint}}</span></div>
                <div>图片图纸总数: <span>{{img_blueprint}}</span></div>
            </div>
        </div>
        <div class="message_list">
            <div class="list-item" v-for="(value, key) in list" :key="key">
                <p>{{key}}: </p>
                <p>{{value}}</p>
                <button
                        :style="{'display': key==='注册时间'?'none':'block'}"
                        @click="modifyIt(key, value)">修改</button>
            </div>

        </div>
    </div>
</template>

<script>
  import {modifyIt} from '@/request/profile.js'
  export default {
    name: "PersonalCenter",
    data() {
      return {
        list: {
          "用户名": "avatar",
          "邮箱地址": "liu1355866631@gmail.com",
          "注册时间": "2023-5-3",

        }
      }
    },
    methods: {
      // 修改
      modifyIt(name, value) {
        let message = prompt(`请输入修改后的${name}:`);
        message = message.trim();
        // 如果内容为空，则不做处理
        if (!message) {
          alert("输入内容为空")
          return;
        }else if (message === value){
          alert("与原信息相同，禁止修改")
          return;
        }
        modifyIt(name, value).then(res => {
          console.log(res)
        })
      },
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