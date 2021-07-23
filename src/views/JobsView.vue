<template>
    <div>
        <!-- <ul class="listView">
            <li v-for="job in fetchedJobs" v-bind:key="job.id">
                <div>
                </div>
                <div>
                    <a v-bind:href="job.url" class="title">{{ job.title }}</a>
                    <small class="time">{{ job.time_ago }} by</small>
                    <a :href="job.url" class="user">
                        {{job.domain}}
                    </a>
                </div>
            </li>
        </ul> -->
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
    components:{
        ListItem,
    }
}
</script>

<style scoped>

</style>> 