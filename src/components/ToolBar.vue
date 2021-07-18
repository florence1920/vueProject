<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">VUE</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/news" class="nav-link">News</router-link> 
                    </li>
                    <li>
                        <router-link to="/ask" class="nav-link">Ask</router-link>
                    </li>
                    <li>
                        <router-link to="/jobs" class="nav-link">Jobs</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>
<style scoped>


</style>