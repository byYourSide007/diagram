<template>
    <div class="comment">
        <div class="top-area">
            <div class="input-area">
                <textarea ref="comment"></textarea>
            </div>
            <button class="publish" @click="publish">发表留言</button>
        </div>

        <div class="comment-content">
            <div class="comment-title">留言列表：</div>
            <div class="comment-list">
                <div class="comment-list-item"
                     v-for="item in commentList"
                     :key="item.id">

                    <!-- 用户信息   -->
                    <div class="user-message">
                        <div class="img-content" >
                            <img :src="item.avatar?item.avatar:'http://121.4.13.126:3009/img/avatar.svg'"
                                 alt="item">
                        </div>
                        <span>{{item.username}}：</span>
                    </div>


                    <!-- 内容区域 -->
                    <div class="message-content" >
                        <p>{{item.comment}}</p>
                    </div>


                    <!--  底部额外信息 -->
                    <div class="bottom-message">
                        {{item.time}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {publishMsg, getComment} from '@/request/profile.js'
  export default {
    name: "CommentView",
    data() {
      return {
        commentList: [
          // {
          //   id: 1,
          //   comment: '啊啊啊啊，真的太好用啦啦啦', // 评论内容
          //   time: '2023/5/20 19:08:01', // 发表时间
          //   username: 'user', // 用户名
          //   avatar: 'http://121.4.13.126:3009/avatar/d10bd92ea9dd3095418c66400.webp', // 用户头像
          // }
        ]
      }
    },
    methods: {
      publish() {
        const user_id = JSON.parse(localStorage.getItem('user_data')).id;
        const comment = this.$refs.comment.value;
        console.log(comment)
        // console.log(user_id);
        publishMsg(user_id, comment).then(res => {
          console.log(res)
          const { data } = res;
          if (data.status) {
            alert(data.message);
          }
          this.getCommentMsg();
        })

      },
      // 获取评论信息
      getCommentMsg() {
        getComment().then(res => {
          const { data } = res;
          console.log(data)
          this.commentList = data.message;
        })
      }
  },
  mounted() {
      this.getCommentMsg(); // 获取评论信息
  }
  }
</script>

<style scoped lang="scss">
    .comment {
        position: relative;
        width: 100%;
        background-color:rgba(0,0,0,0);
        margin-top: 15px;

        /*  顶部区域*/
        .top-area {
            width: 90%;
            margin: 0 auto;
            /*border: 1px solid #ee9900;*/


            .input-area {
                overflow: hidden;
                width: 100%;
                margin: 0 auto;
                background-color:rgba(0,0,0,0);
                /*  */
                textarea {
                    min-height: 93px;
                    width: 102%;
                }
            }
            .publish {
                padding: 5px 8px;
                border-radius: 15px;
                font-weight: 500;
                background-color: #4aaf51;
                color: #b550ae;
                margin-top: 10px;
                margin-left: calc(100% - 100px);
                transition: .5s all;
                &:hover {
                    color: #4aaf51;
                    background: #b550ae;
                }
            }
        }
        .comment-content {
            width: 90%;
            margin: 0 auto;


            .comment-title {
                font-size: 18px;
                font-weight: 800;
                padding-bottom: 15px;
                border-bottom: 1px solid #eee;
            }

            /*  评论列表    */
            .comment-list {
                overflow-y: scroll;
                margin-top: 20px;
                height: calc(100vh - 300px);

                .comment-list-item {
                    .user-message {
                        display: flex;
                        span {
                            margin-left: 10px;
                            line-height: 50px;
                            font-size: 18px;
                            font-weight: 600;
                            color: #b550ae;
                        }

                    }
                    /* 评论内容 */
                    .message-content {
                        /*width: 70%;*/
                        /*margin: 0 auto;*/
                        margin-left: 60px;
                        color: #FFF;

                        border: 1px solid #FFF;
                        border-radius: 15px;
                        padding: 0px 5px;

                        &::before {
                            content: '';
                            width: 20px;
                            height: 20px;
                            background-color: inherit;
                            left: -10px; /*向左侧外部延伸箭头box的一半宽度*/
                            position: absolute;
                            transform: rotate(45deg); /*旋转45度*/
                            top:50%; /*箭头在数值方向上居中*/
                            margin-top: -5px;
                        }
                    }
                    /* 底部信息 */
                    .bottom-message {
                        margin-top: 5px;
                        text-align: right;
                    }
                }
            }
        }
    }


    .img-content {
        position: relative;
        width:50px;
        height: 50px;
        border-radius: 50%;


        img {
            width: 100%;
            height: 100%;
            border-radius:inherit;
        }
    }
</style>