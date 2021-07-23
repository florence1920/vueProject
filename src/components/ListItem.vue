<template>
    <div>
        <ul class="listView">
            <li v-for="item in listItems" v-bind:key="item.id">
                <!--포인트 영역 -->
                <div>
                    <p class="point" v-if="item.points">{{item.points || 0}}</p>
                </div>
                <!--아이템 영역 -->
                <div>
                    <!--타이틀 영역-->
                    <template v-if="item.domain">
                        <a v-bind:href="item.url" class="title">{{ item.title }}</a>
                    </template>
                    <template v-else>
                        <router-link v-bind:to="`item/${item.id}`" class="title">
                            {{ item.title }}
                        </router-link>
                    </template>
                    <small class="time">{{ item.time_ago }} by</small>
                    <router-link v-if="item.user"
                    v-bind:to="`/user/${item.user}`"
                    class="keyColor">{{ item.user }}</router-link>
                    <a :href="item.url" v-else
                    class="keyColor">
                        {{item.domain}}
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
    created(){
        const name = this.$route.name;
        if(name === 'news'){
            this.$store.dispatch('FETCH_NEWS');
        }else if(name === 'ask'){
            this.$store.dispatch('FETCH_ASK');
        }else if(name === 'jobs'){
            this.$store.dispatch('FETCH_JOBS');
        }
            //this.$store.dispatch('FETCH_NEWS');
    },
    computed: {
        // eslint-disable-next-line vue/return-in-computed-property
        listItems() {
            const name = this.$route.name;
            console.log(name);
            if(name === 'news'){
                return this.$store.state.news;
            }else if(name === 'ask'){
                console.log(this);
                return this.$store.state.ask;
            }else if(name === 'jobs'){
                return this.$store.state.jobs;
            }
        }
    },
    
}
</script>

<style scoped>

</style>>
