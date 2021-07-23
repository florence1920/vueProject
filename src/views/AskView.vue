<template>
    <div>
        <!-- <ul class="listView">
            <li v-for="item in fetchedAsk" v-bind:key="item.id">
                <div>
                </div>
                <div>
                    <router-link v-bind:to="`item/${item.id}`" class="title">{{ item.title }}</router-link>
                    <small class="time">{{ item.time_ago }}</small>
                </div>
            </li>
        </ul> -->
        <list-item></list-item>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';
export default {
    components:{
        ListItem,
    }
    // computed: {
    //     ...mapGetters([
    //         'fetchedAsk'
    //     ])
    // },
    // created(){
    //     this.$store.dispatch('FETCH_ASK');
    // }
}
</script>

<style>

</style>