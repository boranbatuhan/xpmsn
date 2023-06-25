<template>
    <selectarea-comp></selectarea-comp>
    <window-comp></window-comp>
    <taskbar-comp></taskbar-comp>
    <folders-comp></folders-comp>
  
</template>
<script setup>
import selectareaComp from "/src/components/selectareaComp.vue";
import taskbarComp from '/src/components/taskbarComp.vue';
import windowComp from '/src/components/windowComp.vue';
import foldersComp from "/src/components/foldersComp.vue"

</script>
<style>
.text-shadow{
    text-shadow: 1px 1px 1px #000000, -1px -1px 1px #000000, -1px 1px 1px #000000, -1px 1px 1px #000000;
}

</style>