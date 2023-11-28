<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="tap != 0 " @click="tap = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="tap != 2" @click="tap++">Next</li>
      <li v-if="tap == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/39.png" class="logo" />
  </div>

  <div v-if="tap == 0">
    <p>{{ $store.state.more }}</p>
  
    <h4>안녕 {{ $store.state.name }} {{ $store.state.age }}</h4>
    <!-- store에 state 수정법 -->
    <button @click="$store.commit('이름변경')">버튼</button><button @click="$store.commit('나이증가')">+</button>
    <button @click="$store.dispatch('getData')">더보기</button>
    <!-- <button @click="more">더보기</button> -->
  </div>
  <MainContainer :적용필터="적용필터" :데이터="데이터" :tap="tap" :uploadImage="uploadImage" @write="새게시글내용 = $event"/>

  <div class="footer">
    <ul v-if="tap == 0" class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
    
    <div>
      <a @click="tap = 0">메인</a>
      <a @click="tap = 4">로그인</a>
    </div>
  </div>




</template>

<script>
import MainContainer from './components/MainContainer.vue';
import data from './assets/data';
import axios from 'axios';

export default {
  name: 'App',
  data(){
    return {
      적용필터 : '',
      uploadImage : null,
      tap : 0,
      moreCount : 0,
      데이터 : data,
      새게시글내용 : '',
    }
  },
  components: {
    MainContainer : MainContainer,
  },
  methods:{
    more(){
      // axios.post('url',{name:'kim'}).then().catch(()=>{})
      
      axios.get(`https://codingapple1.github.io/vue/more${this.moreCount}.json`)
      .then((결과)=>{// 콜백함수
        //요청성공시 실행할 코드
        console.log(결과);
        this.데이터.push(결과.data);
        this.moreCount++;
      })
    },
    upload(e){
      let 파일 = e.target.files;
      console.log(파일[0]);

      this.uploadImage = URL.createObjectURL(파일[0]);
      this.tap = 1;
    },
    publish(){
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const currentDate = new Date();
      const monthIndex = currentDate.getMonth();
      const day = currentDate.getDate();

      const formattedDate = `${months[monthIndex]} ${day}`;
      console.log(formattedDate);

      

      var 새게시물 ={
        name: "Lee Jaehuyk",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.uploadImage,
        likes: Math.trunc(Math.random() * 100),
        date: formattedDate,
        liked: false,
        content: this.새게시글내용,
        filter: this.적용필터
      };
      this.데이터.unshift(새게시물);
      this.tap = 0;
    }
  },
  mounted(){
    this.emitter.on('발사',(filter)=>{
      this.적용필터 = filter;
    });
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
