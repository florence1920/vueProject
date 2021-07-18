<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components:{
    ToolBar,
  },
  
}
</script>

<style>
.listView {overflow: hidden; border-bottom: 1px solid rgba(0,0,0,.45); transition: .2s; padding: 30px 40px;}
.listView:hover {background: #000;}
.listView a {text-decoration: none; color:#000; font-size:1em; font-weight: 600;}
.listView .time {color:#aaa; margin: 0 15px;}
.listView .user {float:right;}
.listView:hover a {color:#fff;}
.listView:hover .user {color:#fff;}
</style>
