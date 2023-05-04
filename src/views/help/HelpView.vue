<template>
    <div class="help_view">
        <div class="document_type">
            <div class="top">
                <div class="title">选择文档：</div>
                <div class="answer">
                    <div class="answer_item" v-for="item in category" :key="item.path">
                        <button>{{item.name}}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content_item"
                 v-for="item in answer_list"
                 :key="item.id">
                <div class="question" style="white-space: pre-wrap;">
                    {{item.question}}
                </div>
                <div class="answer_message" style="white-space: pre-wrap;">
                    {{item.answer}}
                </div>
            </div>
        </div>
        <div class="input">
            <input type="text" placeholder="请输入内容">
            <button>发送</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "HelpView",
    data() {
      return {
        category: [
          {
            name: "系统介绍",
            path: "/system"
          },
          {
            name: "开发者文档",
            path: "/system"
          },
          {
            name: "隐私政策",
            path: "/system"
          },
          {
            name: "常见问题",
            path: "/system"
          },
        ],

        // 问答
        answer_list: [
          {
            id: 1,
            "question": "本系统研究目的",
            "answer": "该系统的研究目的是为了提供一种基于Web平台的电气图纸绘图系统，以便电气工程师和其他相关专业人员能够更加高效地创建和共享电气图纸，并提高他们的工作效率和准确性。"
          },
          {
            id: 2,
            "question": "系统研究意义",
            "answer": "与传统的电气 CAD软件相比，该系统无需昂贵的许可证和高性能计算机，并且学习曲线较为平缓，使得用户能够更快速地上手使用，提高了工作效率和准确性。"
          },
          {
            id: 3,
            "question": "系统功能",
            "answer": `1. 编辑图纸：可以对已经绘制的电气图纸进行编辑。\n
2. 导出图纸：可以将绘制好的电气图纸导出为常见的图片格式，如PNG、JPEG等，以及向后端发送数据。\n
3. 绘制基本图形：可以绘制基本电气元件。\n
            `
          },
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
    .document_type {
        display: flex;
        .title {
            font-weight: 600;
            font-size: 25px;
            margin-left: 20px;
            margin-top: 20px;
        }
        .answer {
            display: flex;
            /*flex-flow: ;*/
            .answer_item {
                margin-top: 21px;
                margin-left: 5px;
                &:nth-child(1) {
                    button {
                        background-color: #4aaf51;

                    }
                }
                button {

                    border-radius: 10px;
                    font-weight: 600;
                    padding: 5px 8px;

                }
            }
        }
    }


    .content {
        background-color: #e6e6e6;
        height: 500px;
        margin: 30px 20px;
        border-radius: 15px;
        overflow-y: scroll;
    }

    .content{

    }
    .content_item {


        .answer_message {
            margin-right: 100px;
            margin-left: 8px;
            margin-top: 5px;
            background-color: #f1f2f2;
            padding: 5px 8px 5px 7px;
            border-radius: 15px;
        }
        .question {
            margin-right: 10px;
            margin-left: 500px;
            margin-top: 10px;
            padding: 5px 8px 5px 7px;
            border-radius: 10px;

            background-color: #5d5cde;
        }
    }

    .input {
        margin-top: -10px;
        margin-left: 20px;
        input {
            border-radius: 5px;
        }
        button {
            margin-left: 5px;
            border-radius: 5px;
        }
    }
</style>