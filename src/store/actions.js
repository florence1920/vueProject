import { fetchNewsList } from '../api';
import { fetchJobList } from '../api';
import { fetchAskList } from '../api';

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
            context.commit('SET_ASKS',response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}