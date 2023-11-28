<template>
    <div>
        <div v-if="tap == 0">
            <PostContainer v-for="post in 데이터" :key="post" :post="post"/>
        </div>

        <div v-if="tap == 1">
            <!-- 필터선택페이지 -->
            <div :class="적용필터" class="upload-image" :style="{backgroundImage : `url(${uploadImage})`}"></div>
            <div class="filters">
                <!-- slot 사용을 위한 컴포넌트 -->
                <FilterBox v-for="filter in filterList" :key="filter" :uploadImage="uploadImage" :filter="filter">
                    {{ filter }}
                </FilterBox>
            </div>
        </div>
        
        <div v-if="tap == 2">
            <!-- 글작성페이지 -->
            <div :class="적용필터" class="upload-image" :style="{backgroundImage : `url(${uploadImage})`}"></div>
            <div class="write">
                <textarea @input="$emit('write', $event.target.value)" v-model="새게시글내용" class="write-box">내용을 적어주세욥</textarea>
            </div>
        </div>

        <div v-if="tap == 4">
            <p>로그인</p>
            <span>아이디</span>
            <input type="text" name="userId"/>
            <span>아이디</span>
            <input type="text" name="userId"/>
        </div>

            
    </div>

</template>

<script>
import PostContainer from './PostContainer';
import FilterBox from './FilterBox.vue';

export default {
    name : 'PostCon',
    data(){
        return {
            새게시글내용 : '',
            filterList : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                    "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                    "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
        }
    },
    components :{
        PostContainer : PostContainer,
        FilterBox : FilterBox,
    },
    props:{
        데이터 : Object,
        tap : Number,
        uploadImage : String,
        적용필터 : String,
    },
    methods:{
        sendText(){

        }
    }

}
</script>

<style>

.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}

</style>