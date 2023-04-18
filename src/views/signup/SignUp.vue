<template>
    <div class="sign_up">
        <div class="square_card">
            <!-- 顶部标题 -->
            <div class="square_card_title">
                <img src="/img/logo.5faa1223.jpg" alt="">
                <!-- 宣传广告语-->
                <div class="square_card_ads">
                    <span class="square_card_ads_online">Circuitry Blueprint Online</span>
                    <span class="square_card_ads_account">一个帐号，让您享用所有功能</span>
                </div>
            </div>
            <!-- 输入信息区域 -->
            <div class="input_message">
                <span class="signal_heading">注册您的工作区</span>
                <!-- 邮箱地址 -->
                <div class="content">
                    <input type="email"
                           placeholder="Email Address"
                           ref="message_email"
                            @blur="emailBlur">
                    <div class="alert_message_wrong" v-show="isEmailBlur&!isEmailRight">
                        <img src="@/assets/sign/wrong.svg" alt="">
                        <p>{{alertEmailMsg}}</p>
                    </div>
                    <div class="alert_message_right" v-show="isEmailBlur&isEmailRight">
                        <img src="@/assets/sign/right.svg" alt="">
                        <p>符合要求</p>
                    </div>
                </div>
                <!-- 用户名 -->
                <div class="content">
                    <input type="text"
                           placeholder="Username"
                           ref="username"
                           @blur="usernameBlur">
                    <div class="alert_message_wrong" v-show="isUsernameBlur&!isUsernameRight">
                        <img src="@/assets/sign/wrong.svg" alt="">
                        <p>{{alertUsernameMsg}}</p>
                    </div>
                    <div class="alert_message_right" v-show="isUsernameBlur&isUsernameRight">
                        <img src="@/assets/sign/right.svg" alt="">
                        <p>符合要求</p>
                    </div>
                </div>
                <!-- 密码区域-->
                <div class="content">
                    <input type="password"
                           placeholder="Password"
                           ref="message_password">
                </div>
                <!-- 点击区域 -->
                <div class="clickPlace">
                    <button @click="btnClick"
                            class="message_btn">注册</button>
                    <span>已经有账号？<a href="/login">登录</a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { signUpMessage, checkEmailExist, checkUsernameExist } from "@/request/signUp";

  export default {
    name: "SignUp",
    data() {
      return {
        isEmailBlur: false, // 输入 email 的输入框是否失去焦点（之后在得到焦点后才能失去焦点）
        isEmailRight: true, // 判断邮箱是否符合要求
        alertEmailMsg: '', // 邮箱出现的问题提示信息（正确的信息提示内容一致，错误才会提示）

        isUsernameBlur: false, // 用户名输入框失去焦点
        isUsernameRight: true, // 判断用户名是否符合要求
        alertUsernameMsg: '', //错误的时候提示性的文本内容
      }
    },
    methods: {
      // 点击注册按钮所触发的事件
      emailBlur() {
        // 判断输入的邮箱地址是否符合邮箱规则
        const email = this.$refs.message_email.value;
        if (!email) { // 如果输入的邮箱地址为空
          this.alertEmailMsg = '邮箱地址不能为空';
          this.isEmailBlur = true; // 除了没有让其获取焦点的时候才不提示任何内容，当失去焦点一次，就一直有提示信息
          this.isEmailRight = false; // 邮箱地址错误
          return ; // 直接结束进程
        }
        // 如果输入的信息不为空，则判断其是否符合邮箱格式，使用正则表达式
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 设置正则
        if (!emailPattern.test(email)) {
          this.alertEmailMsg = '邮箱格式不正确';
          this.isEmailBlur = true; // 除了没有让其获取焦点的时候才不提示任何内容，当失去焦点一次，就一直有提示信息
          this.isEmailRight = false; // 邮箱地址错误
          return; // 直接结束进程
        }
        // 发送 ajax 请求，判断邮箱是否已经被注册
        checkEmailExist(email).then(res => {
          const { data } = res; // 获取反馈的数据
          console.log(data)
          const status = data.status; // 获取反馈的状态
          if (status === 0) { // 如果状态码为零（也就是没有被注册）
            this.isEmailBlur = true; // 除了没有让其获取焦点的时候才不提示任何内容，当失去焦点一次，就一直有提示信息
            this.isEmailRight = true; // 邮箱地址正确
          }else { // 如果邮箱地址是正确的
            this.isEmailBlur = true;
            this.isEmailRight = false; // 邮箱地址错误
            this.alertEmailMsg = data.message;
          }
        })

      },
      // 用户名所执行的后续操作
      usernameBlur(){
        const username = this.$refs.username.value; // 获取用户名
        if (!username) { // 如果用户名为空
          this.isUsernameBlur = true; // 用户名输入框失去焦点
          this.isUsernameRight = false; // 密码格式错误
          this.alertUsernameMsg = "用户名不能为空"
          return 0;// 直接结束进程
        }
        // 向服务器发送请求，查看用户名是否已经被注册
        checkUsernameExist(username).then((res) => {
          const { data } = res;
          const status = data.status; // 获取反馈的状态
          if (status === 0) { // 状态码为0，表示成功，1表示失败
            this.isUsernameBlur = true; // 除了没有让其获取焦点的时候才不提示任何内容，当失去焦点一次，就一直有提示信息
            this.isUsernameRight = true; // 邮箱地址正确
          }else {
            this.isUsernameRight = true;
            this.isUsernameRight = false; // 邮箱地址错误
            this.alertUsernameMsg = data.message; // 服务器响应反馈的结果（虽然没有用）
          }
          console.log(data)
        }, error => {
          console.log(error)
        })

      },
      // 点击注册按钮所执行的后续操作
      btnClick() {
        // 当邮箱失去焦点且邮箱符合标准，用户名输入正确且用户名失去焦点
        if (this.isEmailBlur && this.isEmailRight && this.isUsernameRight && this.isUsernameBlur ) {
          // 获取所有的信息(邮箱, 用户名，密码)
          const email = this.$refs.message_email.value
          const username = this.$refs.username.value
          const password = this.$refs.message_password.value
          signUpMessage({
            username,
            password,
            email
          }).then(res => {
            const { data } = res; // 获取响应数据
            const status = data.status; // 获取状态码
            if (status === 0) {
              // 如果是成功的响应
              alert(data.message)
            }else {
              // 如果是失败的响应
              alert(data.message)
            }
          })
        }else {
          return 0;
        }

      },
    }
  }
</script>

<style scoped lang="scss">
    .sign_up {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #eee;
    }
    .square_card {
        /* 定位 */
        position: relative;
        width: 500px;
        height: 600px;
        margin: auto;
        /*top: calc((100vh - 600px)/2);*//* 居中显示 */
        top: 50px;
        /* 自身总体样式 */
        background-color: #fff;
        border-radius: 15px;
        /* 顶部标题 */
        .square_card_title {
            /* 自身定位 */
            background-color: #ecf8f6;
            padding-bottom: 80px;
            /* 子元素布局 */
            display: flex;
            flex-flow: column nowrap;
            /* 宣传广告语 */
            .square_card_ads {
                display: flex;
                flex-flow: column nowrap;
                text-align: center;
                .square_card_ads_online {
                    font-size: 24px !important;
                    font-weight: 800;
                    color: #38c979;
                }
                .square_card_ads_account {
                    color: #666666;
                    font-size: 16px;
                }
            }
            img {
                /* 自身定位 */
                width: 100px;
                margin-top: 20px;
                margin-left: 200px;
                /* 去除图片的白色白框 */
                border-radius: 50%;
            }

        }
        /* 输入信息的区域 */
        .input_message {
            /* 自身定位 */
            width: 300px;
            margin: 30px auto 0;
            /* 子元素定位 */
            display: flex;
            flex-flow: column nowrap;
            /* 输入信息前的提示信息 */
            .signal_heading {
                font-size: 18px;
                font-weight: 700;
                color: #4B4B4C;
                margin-bottom: 10px;
            }
            /* 存储输入框内容和提示信息的容器*/
            .content {
                position: relative;
                display: flex;
                width: 100%;
                line-height: 16px;
                /* 输入信息框 */
                input {
                    width: 80%;
                    margin: 0 0 10px;
                    padding: 10px 12px;
                    font-size: 14px;
                    color: #555;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-shadow: inset 0 1px 5px rgba(0,0,0,.075);
                }
                /* 提示错误信息 */
                .alert_message_wrong {
                    position: absolute;
                    display: flex;
                    font-size: 12px;
                    color: red;
                    margin-left: 90%;
                    white-space: nowrap;
                    img {
                        width: 18px;
                        height: 42px;
                    }
                    p {
                        margin-left: 5px;
                    }
                }
                /* 符合要求提示信息 */
                .alert_message_right {
                    position: absolute;
                    display: flex;
                    font-size: 12px;
                    color: green;
                    margin-left: 90%;
                    white-space: nowrap;
                    img {
                        width: 18px;
                        height: 42px;
                    }
                    p {
                        margin-left: 5px;
                    }
                }
            }

            /* 点击区域 */
            .message_btn {
                width: 72px;
                padding: 6px 0;
                background-color: #4aaf51;
                border: 1px solid #4aaf51;
                border-radius: 3px;
                box-shadow: 0 2px 3px #9c9c9c;
                font-size: 18px;
                color: #fff;
            }
            /* 点击提交表单信息的按钮区域和跳转区域 */
            .clickPlace {
                display: flex;
                span {
                    flex: 1;
                    line-height: 38px;
                    text-align: right;
                    vertical-align: bottom;
                    font-size: 12px;
                    color: #b8b8b8;
                    a {
                        color: #4aaf51;
                    }
                }
            }
        }
    }
</style>