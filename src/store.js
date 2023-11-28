import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
        name : 'kim',
        age : 20,
        눌럿음 : false,
        more : {},
    }
  },
  mutations :{
    이름변경(state){
        state.name = 'park'
    },
    나이증가(state){
        state.age++;
    },
    좋아요(state){
        if(state.눌럿음 == false){
            state.likes++;
            state.눌럿음 = true;
        } else {
            state.likes--;
            state.눌럿음 = false;
        }
    },
    setMore(state, data){
        state.more = data;
    }
  },
  actions:{
    getData(context){
        axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
            context.commit('setMore',a.data);
        })
    }
  }

})

export default store