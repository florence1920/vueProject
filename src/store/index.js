import Vue from 'vue'; //뷰 라이브러리를 가져올 수 있게
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

    Vue.use(Vuex);

    //상태관리

    export const store = new Vuex.Store({
        state:{
            news:[],
            jobs:[],
            asks:[]
        },
        getters:{
            fetchedAsk(state){
                return state.asks;
            },
            fetchedNews(state){
                return state.news;
            },
            fetchedJobs(state){
                return state.jobs;
            }
        },
        //앞 뒤가 같으면 짜른다.
        mutations,
        actions
    })