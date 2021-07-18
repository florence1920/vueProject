<template>
    <div>
        <div v-for="ask in fetchedAsk" v-bind:key="ask.id" class="listView">
            <a v-bind:href="`https://news.ycombinator.com/${ask.url}`">{{ ask.title }}</a> 
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'fetchedAsk'
        ])
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>