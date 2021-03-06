import { fetchNewsList } from '../api';
import { fetchJobList } from '../api';
import { fetchAskList } from '../api';
import { fetchUserInfo } from '../api';
import { fetchCommentItem } from '../api';

export default {
    FETCH_NEWS(context){
        fetchNewsList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_JOBS({commit}){
        fetchJobList()
        .then( ({data}) => {
            commit('SET_JOBS', data);
        })
        .catch(error => {
            console.log(error);
        });

    },
    FETCH_ASK(context){
        fetchAskList()
        .then(response => {
            context.commit('SET_ASK',response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_USER({commit},name){
        fetchUserInfo(name)
        .then( ({data}) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_ITEM({commit},id){
        fetchCommentItem(id)
        .then(({data}) => {
            commit('SET_ITEM',data)
        })
        .catch(error => {
            console.log(error);
        })
    },
}