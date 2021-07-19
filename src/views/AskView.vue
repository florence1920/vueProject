<template>
    <div>
        <div v-for="ask in fetchedAsk" v-bind:key="ask.id" class="listView">
            <router-link v-bind:to="`item/${ask.id}`">{{ ask.title }}</router-link>
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