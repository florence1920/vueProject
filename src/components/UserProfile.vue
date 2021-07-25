<template>
    <div>
        <div class="box_user">
            <i class="icon fi-sr-portrait"></i>
                <!-- username: {{ info.id }} -->
                <!-- <p class="name"></p> -->
            <p class="name">
                <slot name="username"></slot>
                <span class="keyColor"> (<slot name="karma"></slot>) </span>
            </p>
            <!-- <router-link :to="`/user/${userInfo.user}`" class="name">
                {{ userInfo.id }}
            </router-link> -->
            <!-- time: {{ info.created }} -->
                <!-- <p class="time"></p> -->
            <p class="time">
                <slot name="time">
                </slot>
            </p>
        </div>
        <!-- <h1> {{ userInfo.title }}</h1>
        <div v-html="userInfo.content"></div>  -->
    </div>
</template>

<script>
export default {
    props:{
        info:Object
    },
    // computed: {
    //         userInfo(){
    //             return this.$store.state.user;
    //         }
    // },
}
</script>

<style scoped>
    .box_user {overflow: hidden; width: 450px; margin:10px; background: #212529; padding: 25px 40px;}
    .box_user .icon {float: left; width: 20%; margin: 0 5% 0 0; color:#fff; font-size:70px;}
    .box_user .name {float: left; margin:15px 0 0; color:#fff; font-size:23px; font-weight: 600; text-decoration:none;}
    .box_user .time {float: left; width: 75%; color:#777;}
</style>