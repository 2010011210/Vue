// store.js
import { createStore } from 'vuex';
 
const store = createStore({
  state() {
    return {
      count: 0,
      length: 9
    };
  },
  mutations: {   // commit是和mutations对话
    increment(state) {
      console.log('mutations_increment');
      state.count++;
    },
    JIA(state, value) {
        console.log('mutations_JIA');
        state.length += value;
    },
    JIAN(state, value) {
        console.log('mutations_JIAN');
        state.length--;
    }

  },
  actions: {   //dispatch和actions对话
    jia({ commit },value)
    {
        console.log('actions_jia');
        commit('JIA', value);
    },
    jian({ commit })
    {
        console.log('actions_jian');
        commit('JIAN');
    },
    increment({ commit }) {
      console.log('actions_increment');
      commit('increment');
    }
  },
  getters: {
    count(state) {
      return state.count;
    }
  }
});
 
export default store;