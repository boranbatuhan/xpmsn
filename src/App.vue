
<template>
  <router-view></router-view>
</template>
<script setup>
import store from "/src/store";
import { onMounted } from "vue";
  onMounted(()=>{
    document.addEventListener("mousedown",(event)=>{
      if(event.target.localName=="html"){

        store.state.isOpenStartMenu = false
      }
    })
  })
</script>

<style>


</style>