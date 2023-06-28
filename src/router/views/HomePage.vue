<template>
    <rightclick-comp></rightclick-comp>
    <selectarea-comp></selectarea-comp>
    <window-comp></window-comp>
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
import closescreenFuncComp from "/src/components/screens/closesecreensFuncComp.vue"
import { onMounted } from "vue";


onMounted(()=>{
})

</script>
<style>

.text-shadow{
    text-shadow: 1px 1px 1px #000000, -1px -1px 1px #000000, -1px 1px 1px #000000, -1px 1px 1px #000000;
}

</style>