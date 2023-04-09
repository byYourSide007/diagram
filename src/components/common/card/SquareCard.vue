<template>
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
            <input type="email"
                   placeholder="Email Address"
                   ref="message_email">
            <input type="password"
                   placeholder="Password"
                   ref="message_password">
            <!-- 点击区域 -->
            <div class="clickPlace">
                <button @click="btnClick"
                        class="message_btn">登录</button>
                <span>还没有账号？<a href="/subscribe">注册</a></span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SquareCard",
    props: {
      /**
       *  输入信息区域
       * */
      /* 头部提示信息 */
      signal_heading: {
        type: String,
        required: true,
      },
      /* 输入信息的列表框 */
      inputList: {
        type: Array,
        required: true,
        /* 形如：[{
            type: 'text',
            placeholder: 'Email Address',

        }]*/
      }

    },
    methods: {
      // 点击登录或注册的按钮
      btnClick() {
        console.log('btnClick')
      }
    }
  }
</script>

<style scoped lang="scss">
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
            input {
                margin: 0 0 10px;
                padding: 10px 12px;
                font-size: 14px;
                color: #555;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-shadow: inset 0 1px 5px rgba(0,0,0,.075);
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