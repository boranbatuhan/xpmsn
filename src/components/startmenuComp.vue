<template>
    <div v-if="store.state.isOpenStartMenu" id="startmenu" class="w-80 h-96 rounded-t-lg  bg-white/50 fixed bottom-[30px] left-0 z-[9999] flex flex-col items-center justify-between  font-segoe-ui">
        <div class="windows-blue-gradient shrink-0 rounded-t-lg flex items-center h-16 select-none text-white justify-start gap-2 pl-2 w-full">
            <div class="border border-white w-12 h-12 rounded-md overflow-hidden">
                <img src="/src/assets/startpp.png" alt="start-pp">
            </div>
            <p class="font-bold font-segoe-ui tracking-wider text-base">Guest</p>
        </div>
        <div class="bg-zinc-500 h-full w-full flex items-center justify-center border-x-2 border-[#0831d9] flex-wrap">
            <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#e4a668] to-transparent"></div>
            <div class="w-1/2 h-full bg-white"></div>
            <div class="w-1/2 h-full bg-[#d2e5fa] border-l border-l-blue-300"></div>
        </div>
        <div class="windows-blue-gradient-bottom shrink-0 h-10 self-end w-full flex items-center justify-end px-2 gap-2">
            <div class="flex text-white font-thin text-xs items-center justify-center gap-1 "> <div class="bg-white rounded-sm"> <img class="w-6 h-6 active:opacity-70 " src="/src/assets/logoff.png" alt="log-off"> </div><p>Log Off</p></div>
            <div class="flex text-white font-thin text-xs items-center justify-center gap-1 "> <div class="bg-white rounded-sm"> <img class="w-6 h-6 active:opacity-70 " src="/src/assets/turnoff.png" alt="turn-off"></div> <p>Turn Off Computer</p></div>
        </div>
    </div>
</template>

<script setup>
import store from "/src/store"
</script>

<style scoped>

.windows-blue-gradient {
    background-image: linear-gradient(0deg, #0072f4 0%, #3889e6 11%, #1472e6 42%, #004cb0 92%, #70aafb 96%, #255db5 100%);
    border-top: 1px solid #0831d9;
    border-left: 1px solid #0831d9;
    border-right: 1px solid #001ea0;

    box-shadow: 0px 1px  22px #0832d99f inset;
    text-shadow: 2px 2px 1px #020236;
}
.windows-blue-gradient-bottom {
    background-image: linear-gradient(0deg, #004cb0 0%, #004cb0 11%, #2b7ce3 42%, #418be4 92%, #418fe4 96%);
    border-top: 1px solid #0831d9;
    border-left: 1px solid #0831d9;
    border-right: 1px solid #001ea0;
    box-shadow: 10px -2px  51px #02029267 inset;
}

</style>