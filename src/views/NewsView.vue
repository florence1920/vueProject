<template>
    <div>
        <div v-for="user in fetchedNews" v-bind:key="user.id">
            <a v-bind:href="user.url">{{ user.title }}</a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'fetchedNews'
        ])
    },
    created(){
        this.$store.dispatch('FETCH_NEWS');
        
        // fetchNewsList()
        //     .then(response => this.users = response.data)
        //     .catch(error => console.log(error));

    }
}
</script>

<style>

</style>