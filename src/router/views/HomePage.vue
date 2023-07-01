<template >
    <rightclick-comp></rightclick-comp>
    <selectarea-comp></selectarea-comp>
    <window-comp v-for="i in store.state.folderCount" :key="i" :position="i" :id="'window'+i" :titleBar="'window '+i+' !'"></window-comp>
    <errorwindow-comp v-if="store.state.folderCountError" :content = "'Folder limit is 1 !'"></errorwindow-comp>
    <mycomputer-comp v-if="store.state.openComputerWindow"></mycomputer-comp>
    <taskbar-comp></taskbar-comp>
    <folders-comp></folders-comp>
<!-- close and restart screens -->
<closescreen-func-comp></closescreen-func-comp> 
</template>
<script setup>
import rightclickComp from "/src/components/rightclickComp.vue"
import selectareaComp from "/src/components/selectareaComp.vue";
import taskbarComp from '/src/components/taskbarComp.vue';
import windowComp from '/src/components/windowComp.vue';
import foldersComp from "/src/components/foldersComp.vue"
import errorwindowComp from "/src/components/errorwindowComp.vue";
import closescreenFuncComp from "/src/components/screens/closesecreensFuncComp.vue"
import mycomputerComp from "/src/components/mycomputerComp.vue";


import {  onMounted } from "vue";
import store from "/src/store"

onMounted(()=>{
})

</script>
<style>

.text-shadow{
    text-shadow: 1px 1px 1px #000000, -1px -1px 1px #000000, -1px 1px 1px #000000, -1px 1px 1px #000000;
}

</style>