<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
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
  *, ul, li, p, div {margin: 0; padding: 0;}
  .page-enter-active, .page-leave-active {
    transition: opacity .2s;
  }
  .page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .listView > li {overflow: hidden; border-bottom: 1px solid rgba(0,0,0,.45); transition: .2s; padding: 30px 40px;}
  .listView > li:hover {background: #212529;}
  .listView > li > div {float: left;}
  .listView > li > div:nth-child(1) {width: 7%;}
  .listView > li > div:nth-child(2) {width: 93%;}
  .listView > li .point {color:#ff008c; font-weight: 600;}
  .listView > li .title {display: inline-block; max-width: 60%; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; text-decoration: none; color:#212529; font-size:1em; font-weight: 600; margin: 0 15px 0 0;}
  .listView > li:hover .title {color:#fff;}
  .listView > li .time {color:#aaa;}
  .keyColor {color:#ff008c; text-decoration: none;}
</style>
