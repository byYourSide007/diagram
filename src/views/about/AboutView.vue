<template>
    <div class="about">
        <div class="title">
            <h1>C <span>ircuitry</span> B <span>lueprint</span> O <span>nline</span></h1>
        </div>
        <div class="content">
            <p v-for="(p, index) in pMsg" :key="index">{{p}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "AboutView",
    data() {
      return {
        pMsg: [
            '想要一个强大且直观的工具来创建电气图纸和电路图吗？那么就试试Circuitry Blueprint Online吧，这是一个基于Vue.js框架的顶级电气图纸绘图系统。使用Circuitry Blueprint Online，您可以轻松地创建各种电气图纸。告别传统CAD软件的烦恼，拥抱Circuitry Blueprint Online带来的轻松和高效。',
            'Looking for a powerful and intuitive tool to create electrical diagrams and circuit diagrams? Then try Circuitry Blueprint Online, the premier electrical CAD system based on the Vue.js framework. With Circuitry Blueprint Online, you can easily create a variety of electrical drawings. Say goodbye to the hassle of traditional CAD software and embrace the ease and efficiency of Circuitry Blueprint Online.'
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
    .about {
        /*background-image: url("http://121.4.13.126:3009/img/bg2.jpg");*/
        background-color:rgba(0,0,0,0);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;


        .title {
            margin-left: 50px;
            color: red;
            span {
                color: #ee9900;
                margin-left: -7px;
            }
        }

        .content {
            width: 80%;
            margin: 0 auto;
            font-weight: 400;
            font-size: 18px;
            font-family: Gilroy;
            p{
                line-height:1.5;
            }
        }
    }
</style>