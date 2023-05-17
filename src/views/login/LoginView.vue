<template>
    <div class="login_view">
<!--        <SquareCard> </SquareCard>-->
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
                <span class="signal_heading">登录您的工作区</span>

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

                <div class="content">
                    <input type="password"
                           placeholder="Password"
                           ref="message_password"
                           @blur="passwordBlur">
                    <div class="alert_message_wrong" v-show="isPasswordBlur&!isPasswordRight">
                        <img src="@/assets/sign/wrong.svg" alt="">
                        <p>{{alertPasswordMsg}}</p>
                    </div>
                    <div class="alert_message_right" v-show="isPasswordBlur&isPasswordRight">
                        <img src="@/assets/sign/right.svg" alt="">
                        <p>符合要求</p>
                    </div>
                </div>

                <!-- 点击区域 -->
                <div class="clickPlace">
                    <button @click="btnClick"
                            class="message_btn">登录</button>
                    <span>还没有账号？<a href="/sign-up">注册</a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { loginMessage } from "@/request/signUp";
  export default {
    name: "LoginView",
    data() {
      return {
        isEmailBlur: false, // 输入 email 的输入框是否失去焦点（之后在得到焦点后才能失去焦点）
        isEmailRight: true, // 判断邮箱是否符合要求
        alertEmailMsg: '', // 邮箱出现的问题提示信息（正确的信息提示内容一致，错误才会提示）

        isPasswordBlur: false, // 当输入密码的区域失去焦点
        isPasswordRight: false, // 密码输入正确的时候
        alertPasswordMsg: '', // 提示密码区域的信息
      }
    },
    methods: {
      // 当邮箱失去了焦点
      emailBlur() {
        // 判断输入的邮箱地址是否符合邮箱规则
        const email = this.$refs.message_email.value;
        if (!email) { // 如果输入的邮箱地址为空
          this.alertEmailMsg = '邮箱地址不能为空';
          this.isEmailBlur = true; // 除了没有让其获取焦点的时候才不提示任何内容，当失去焦点一次，就一直有提示信息
          this.isEmailRight = false; // 邮箱地址错误
          return 0; // 直接结束进程
        }
        // 如果输入的信息不为空，则判断其是否符合邮箱格式，使用正则表达式
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 设置正则
        if (!emailPattern.test(email)) {
          this.alertEmailMsg = '邮箱格式不正确';
          this.isEmailBlur = true; // 除了没有让其获取焦点的时候才不提示任何内容，当失去焦点一次，就一直有提示信息
          this.isEmailRight = false; // 邮箱地址错误
          return 0; // 直接结束进程
        }
        // 在不为空的数据中，邮箱格式正确，则判定条件符合
        // this.alertEmailMsg = '邮箱格式不正确';
        this.isEmailBlur = true; // 除了没有让其获取焦点的时候才不提示任何内容，当失去焦点一次，就一直有提示信息
        this.isEmailRight = true; // 邮箱地址判定正确
      },
      // 当密码输入框失去了焦点
      passwordBlur() {
        const password = this.$refs.message_password.value; // 获取密码输入框中的值
        this.isPasswordBlur = true;
        if (!password) {// 如果密码输入框中的内容为空
          this.isPasswordRight = false; // 密码不符合要求
          this.alertPasswordMsg = '密码不能为空'; // 提示文本
          return;
        }
        const passwordLen = password.length;
        if (6 > passwordLen || passwordLen > 16) {
          this.isPasswordRight = false; // 密码不符合要求
          this.alertPasswordMsg = '长度应为6-16位数'; // 提示文本
          return;
        }
        this.isPasswordRight = true; // 密码不符合要求，提示性的文本设置就没有意义了
      },
      // 当条件都符合的时候，登录查看是否具有登录权限
      btnClick() {
        // 如果条件符合，输入的信息都是正确的，则尝试登录
        if (this.isEmailBlur && this.isEmailRight && this.isPasswordBlur && this.isPasswordRight) {
          const email = this.$refs.message_email.value; // 邮箱地址
          const password = this.$refs.message_password.value; // 密码
          const config = {
            email,
            password
          }
          // 往后端发送数据
          loginMessage(config).then(res => {
            const { data } = res;
            console.log(data)
            // 如果没有登录权限
            if (data.status === 1) {
              alert("登录失败")
            }else if (data.status === 0) { // 如果登录成功
                this.$store.commit('loginStatus', {
                  isLogin: true, // 登录状态切换为 true，也就是正在登录
                  username: data.username, // 用户名进行记录
                  user_data: data.user_data
                })

              // 本地存储用户信息
                this.localStorage.setItem('username', data.username)

                // 跳转到首页
                this.$router.push('/')
            }
          })

        }else {
          return 0;// 如果条件不符合，禁止点击登录按钮
        }
      }
    },
    components: {
      // SquareCard
    }
  }
</script>

<style scoped lang="scss">
    .login_view {
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

            /* 点击输入信息的区域 */
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