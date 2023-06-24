<template>
    <window-comp></window-comp>
    <taskbar-comp></taskbar-comp>
    <div class="select-none border m-6 flex items-center justify-center flex-col text-center border-transparent hover:border-teal-400 hover:bg-sky-400/70 w-16 h-20">
        <img src="/src/assets/netshell.dll_14_1117-6.png" alt="">
        <p class="text-xs text-white text-shadow">My Computer</p>
    </div>
    <div class="select-none border m-6 flex items-center justify-center flex-col text-center border-transparent hover:border-teal-400 hover:bg-sky-400/70 w-16 h-20">

        <img src="/src/assets/explorer.exe_14_252-3.png" alt="">
        <p class="text-xs text-white text-shadow">Resimlerim</p>

    </div>
</template>
<script setup>
import taskbarComp from '/src/components/taskbarComp.vue';
import windowComp from '/src/components/windowComp.vue';

</script>
<style>
.text-shadow{
    text-shadow: 1px 1px 1px #000000, -1px -1px 1px #000000, -1px 1px 1px #000000, -1px 1px 1px #000000;
}
</style>