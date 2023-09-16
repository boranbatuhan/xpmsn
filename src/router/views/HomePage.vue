<template >

    <rightclick-comp></rightclick-comp>
    <selectarea-comp></selectarea-comp>
    <window-comp v-for="i in store.state.folderCount" :key="i" :position="i" :id="'window'+i" :titleBar="'window '+i+' !'"></window-comp>
    <errorwindow-comp v-if="store.state.folderCountError" :content = "'Folder limit is 1 !'"></errorwindow-comp>
    <mycomputer-comp v-if="store.state.openComputerWindow"></mycomputer-comp>
    <taskbar-comp></taskbar-comp>
    <folders-comp></folders-comp>
    <messenger-comp v-if="store.state.openMsnWindow"></messenger-comp>
    
    <!-- close and restart screens -->
    <closescreen-func-comp></closescreen-func-comp> 
</template>



<script setup>
import rightclickComp from "/src/components/desktop/rightclickComp.vue"
import selectareaComp from "/src/components/desktop/selectareaComp.vue";
import foldersComp from "/src/components/desktop/foldersComp.vue"

import taskbarComp from "/src/components/taskbar/taskbarComp.vue";

import windowComp from "/src/components/windows/windowComp.vue";
import errorwindowComp from "/src/components/windows/errorwindowComp.vue";
import mycomputerComp from "/src/components/windows/mycomputerComp.vue";

import messengerComp from "/src/components/messenger/messengerComp.vue";

import closescreenFuncComp from "/src/components/screens/closesecreensFuncComp.vue"

import {  onMounted } from "vue";
import store from "/src/store"

onMounted(()=>{
})

</script>
<style>


</style>