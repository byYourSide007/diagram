<template>
  <div id="app">
    <!-- 功能展示界面 -->
    <router-view/>
  </div>
</template>

<script>
  // import TopMenu from "@/components/content/topMenu/TopMenu";
  export default {
    name: "App",
    components: {
      // TopMenu
    }
  }
</script>

<style lang="scss">
  html,body {
    margin: 0;
    padding: 0;
  }
  #app {
    position: relative;
    width: 100vw;
    height: 100vh;

    /*background-image:  url("../../assets/bg2.jpg");*/
    /*background-image:  url("./assets/bg1.jpg");*/
    background-image:  url("http://121.4.13.126:3009/img/bg-about.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }

</style>
