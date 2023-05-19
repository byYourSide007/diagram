<template>
  <div class="search">
      <input type="text"
             placeholder="Search"
             ref="search"
             @focus="this.isSearching=true"
             @blur="this.isSearching=false"
             @keyup="searchIt">
<!--      <button>搜索</button>-->
<!--    搜索结果   -->
      <div class="result" v-show="isSearching">
        <div class="result-item"
             v-for="item in searchResult"
             :key="item.id">
          <div class="result-item-list-item"> <span>名称：</span><span>{{item.name}}</span></div>
          <div class="result-item-list-item"> <span>中文：</span><span>{{item.translate}}</span></div>
          <div class="result-item-list-item"> <span>所属类别：</span><span>{{item.category}}</span></div>
        </div>
      </div>
  </div>
</template>

<script>
import {searchBack} from '@/request/home.js'
export default {
  name: "SearchView",
  data() {
    return {
      isSearching: false, // 如果用户正在搜索
      searchResult: [
        {
          id: 1,
          name: 'ammeter',
          translate: '电流表',
          category: '仪器'
        },
        {
          id: 1,
          name: 'ammeter',
          translate: '电流表',
          category: '仪器'
        },
        {
          id: 1,
          name: 'ammeter',
          translate: '电流表',
          category: '仪器'
        }
      ], // 存储搜索结果
    }
  },
  methods: {
    // 搜索
    searchIt(e) {
      const key = e.code;
      // 如果是输入 Enter 键，则开始搜索，否则不开启搜索
      if (key !== 'Enter' ) {
        return;
      }
      // 获取搜索的值
      const searchContent = this.$refs.search.value;
      if (!searchContent) {
        return;
      }
      // 获取用户名
      // const username = JSON.parse(localStorage.getItem('user_data')).username;
      searchBack(searchContent).then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped lang="scss">
.search {
  display: flex;
  height: 30px;
  line-height: 30px;
  /*width: 80%;*/
  input {
    height: 70%;
    //width: 80%;
    width: 90%;
    margin-left: 15px;
    border-radius: 10px;
  }

  button {
    margin-top: 3px;
    margin-left: 2px;
    height: 80%;
  }
}
.result::-webkit-scrollbar {
  width: 10px;
}

.result {
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  top: 30px;
  width: 363px;
  height: 400px;
  border: 1px solid #eee;
  //background-color: #000000;
  background: rgba(0,0,0, .8);
  border-radius: 15px;
  z-index: 999;

  overflow-y: scroll;


  overflow-x: hidden;

  /* 搜索结果项 */
  .result-item {
    border-radius: 15px;
    padding: 10px 30px;
    width: 200px;
    height: 120px;
    margin: 20px auto 10px;
    background-color: #eee;
    background: rgba(255, 255, 255, .8);

    .result-item-list-item {
      span:nth-child(1) {
        font-weight: 600;
        color: #63a35c;
      }
      span:nth-child(2) {
        font-weight: 600;
        color: #669900;
      }
    }
  }
}
</style>