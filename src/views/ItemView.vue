<template>
    <div>
        <user-profile :info="fetchedItem">
            <template slot="username">{{fetchedItem.user}}</template>
            <template slot="time">{{fetchedItem.time_ago}}</template>
        </user-profile>
        <!-- 사용자 정보 -->
        <!-- <div class="box_user">
            <i class="icon fi-sr-portrait"></i>
            <router-link :to="`/user/${fetchedItem.user}`" class="name">
                {{ fetchedItem.user }}
            </router-link>
            <p class="time">
                {{ fetchedItem.time_ago }}
            </p>
        </div> -->
        <h1> {{ fetchedItem.title }}</h1>
        <div v-html="fetchedItem.content"></div>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';
export default {
    components:{
        UserProfile,
    },
    computed: {
        ...mapGetters([ 'fetchedItem' ]),
    },
    created(){
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',itemId);
    }
}
</script>

<style scoped>
    .box_user {overflow: hidden; width: 450px; margin:10px; background: #212529; padding: 25px 40px;}
    .box_user .icon {float: left; width: 20%; margin: 0 5% 0 0; color:#fff; font-size:70px;}
    .box_user .name {float: left; margin:15px 0 0; color:#fff; font-size:23px; font-weight: 600; text-decoration:none;}
    .box_user .time {float: left; width: 75%; color:#777;}

</style>