<template>
<div>
    <user-profile :info="userInfo">
        <template slot="username">{{ userInfo.id }}</template>
        <template slot="karma">{{ userInfo.karma }}</template>
        <template slot="time">{{ userInfo.created }}</template>
    </user-profile>

    <!-- <i class="fi-sr-portrait"></i>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>time: {{ userInfo.created }}</p> -->
</div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
    components:{
        UserProfile,
    },
    computed: {
        userInfo(){
            return this.$store.state.user;
        }
    },
    created(){
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER',userName);
    }
}
</script>

<style>

</style>