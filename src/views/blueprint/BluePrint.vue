<template>
    <div class="blueprint">
        <div class="upload">
            <input type="file"
                   ref="fileInput"
                   @change="handleFileChange"
                   accept="image/*">
            <button @click="uploadFile">上传</button>
        </div>

        <div class="blueprint_list" v-for="item in blueprint_list" :key="item.id">
            <img :src="item.img" alt="#">
            <div class="introduce">
                <span>{{item.name}}</span>
                <span>{{item.size}}</span>
                <span>{{item.type}}</span>
                <button @click="downloadIt">下载</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {getBlueprint, sendImgBlueprint} from "../../request/home.js"
  export default {
    name: "BluePrint",
    data() {
      return {
        blueprint_list: [
          {
            id: 1,
            img: "http://121.4.13.126:3009/blueprint/互锁电路图.jpg",
            name: "互锁电路图",
            size: "4.9K",
            type: 'jpg'
          },
          {
            id: 2,
            img: "http://121.4.13.126:3009/blueprint/起重机电路图.jpg",
            name: "起重机电路图",
            size: "20.9K",
            type: 'jpg'
          },
          {
            id: 3,
            img: "http://121.4.13.126:3009/blueprint/住房电路图.jpg",
            name: "住房电路图",
            size: "54.1K",
            type: 'jpg'
          },
          {
            id: 4,
            img: "http://121.4.13.126:3009/blueprint/电气图纸2.jpg",
            name: "电气图纸2",
            size: "21.4K",
            type: 'jpg'
          },
        ]
      }
    },
    methods: {
      // 当文件发生改变
      handleFileChange(event) {
        const file = event.target.files[0];
        this.fileName = file.name;
        this.fileType = file.type;
        this.fileExtension = this.fileType.split('/').pop();
      },
      // 发送到后端 文件
      uploadFile() {
        const formData = new FormData();
        let file = this.$refs.fileInput.files[0];
        let username = JSON.parse(localStorage.getItem('user_data')).username;

        formData.append('file', file);
        formData.append('text', username);
        sendImgBlueprint(formData).then(res => {
          console.log(res)
        })
      },
      // 下载图纸文件
      downloadIt() {
        let username = JSON.parse(localStorage.getItem('user_data')).username;
        // let id = "id"; // 图片的id
        getBlueprint(username).then(res => {
          const { data } = res;
          const url = window.URL.createObjectURL(new Blob([data]));
          const link = document.createElement('a');
          link.href = url;
          link.target = '_self';
          link.setAttribute('download', `电气图纸2.jpg`);
          document.body.appendChild(link);
          link.click();
        })
      }
    }

  }
</script>

<style scoped lang="scss">
    .upload {
        margin-left: calc((100% - 500px)/2);
        margin-top: 10px;
    }

    .blueprint_list {
        margin-top: 15px;
        margin-left: 30px;
        background-color: #e6e6e6;
        display: flex;
        padding: 12px 15px;
        border-radius: 15px;
        margin-right: 150px;
        .introduce {
            display: flex;
            flex-flow: column nowrap;
            margin-left: 10px;
            font-weight: 600;
            span:nth-child(1) {
                color: #4aaf51;
            }
        }
        img {
            width: 120px;
            height: 100px;
        }
        button {
            margin-top: 10px;
            margin-left: -3px;
        }
    }
</style>