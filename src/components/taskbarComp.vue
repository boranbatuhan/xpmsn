<template>

        <div class="taskbar flex items-center justify-start z-[9999]">
          <div @click="store.state.isOpenStartMenu = !store.state.isOpenStartMenu" class="taskbar__start flex items-center justify-center gap-1 rounded-r-lg  ">
            <img draggable="false"  class="taskbar__start--logo !w-5 !h-5" src="/src/assets/xplogo.png" alt="Windows">
              <p class="tracking-wider pr-2">start</p>
          </div>
          <img draggable="false" class="mx-4 w-5" src="/src/assets/iexplorer.png" alt="iexplorer">
          <!-- folder tab -->
          <div @click="store.state.selectedFolderTab='window'" :class="{ '!bg-[#1658dd] !border-[#082875]' : store.state.selectedFolderTab=='window'}" class="w-40 h-[80%] tab mt-px mr-1 px-2 gap-1 border-t border-y border-[#255be1] rounded-sm bg-[#3980f4] hover:bg-[#1b50b8] hover:border-[#082875] flex items-center justify-start" v-for="i in store.state.folders.length" :key="i">
          <img draggable="false" src="/src/assets/explorer.exe_14_252-3.png" alt="folder" class="w-4">
          <p class="text-xs text-white">window</p>
          </div>
          <!-- computer tab -->
          <div @click="store.state.selectedFolderTab='computer'" v-if="store.state.openComputerWindow" :class="{ '!bg-[#1658dd] !border-[#082875]':store.state.selectedFolderTab=='computer'}" class="w-40 h-[80%] tab mt-px mr-1 px-2 gap-1 border-t border-y border-[#255be1] rounded-sm bg-[#3980f4] hover:bg-[#1b50b8] hover:border-[#082875] flex items-center justify-start">
          <img draggable="false" src="/src/assets/computer.png" alt="folder" class="w-4">
          <p class="text-xs text-white">My Computer</p>
          </div>
          <!-- msn tab -->
          <div @click="store.state.selectedFolderTab='messenger'" v-if="store.state.openMsnWindow" :class="{ '!bg-[#1658dd] !border-[#082875]':store.state.selectedFolderTab=='messenger'}" class="w-40 h-[80%] tab mt-px mr-1 px-2 gap-1 border-t border-y border-[#255be1] rounded-sm bg-[#3980f4] hover:bg-[#1b50b8] hover:border-[#082875] flex items-center justify-start">
          <img draggable="false" src="/src/assets/msnlogo.png" alt="folder" class="w-4">
          <p class="text-xs text-white">Live Messenger</p>
          </div>
          
          <div class="taskbar__end ml-auto h-full w-fit text-white border box-border border-t-[#075dca] border-b-[#0a5bc6] border-r-transparent border-l-black flex items-center justify-end px-2 pt-1 text-sm gap-1">
           <img draggable="false" src="/src/assets/bluetooth.png" alt="icon">
           <div class="relative">
            <div v-if="fullScreen" class="w-52 drop-shadow-lg text-xs bg-white absolute select-none bottom-6 right-2 text-black border border-black px-2 py-1 rounded-lg rounded-br-none">
              <p class="font-bold flex gap-2"><img loading="eager" draggable="false" class="w-5" src="/src/assets/info.png" alt="icon"> Full Screen <img @click="fullScreen=false" loading="eager" draggable="false" class="ml-auto w-4 h-4 cursor-pointer opacity-30 hover:opacity-60 " src="/src/assets/xclose.png" alt="icon"></p>
              <p class="w-fit">Press F11 for better experience</p>
            </div>
            <img @click="fullScreen=true" draggable="false" src="/src/assets/fullsc.png" alt="icon">
           </div>
           <img draggable="false" src="/src/assets/gatewall.png" alt="icon">
           <img draggable="false" @click="soundOn = !soundOn" v-if="soundOn == true" src="/src/assets/soundon.png" alt="icon">
           <img draggable="false" @click="soundOn = !soundOn" v-if="soundOn == false" src="/src/assets/soundoff.png" alt="icon">
            <clock-comp></clock-comp>
          </div>
        </div>

<startmenu-comp></startmenu-comp>
</template>

<script setup>
import startmenuComp from '/src/components/startmenuComp.vue';
import clockComp from '/src/components/clockComp.vue';
import store from "/src/store"
import { onMounted, ref } from 'vue';

const soundOn = ref(true)
const fullScreen = ref(false)

onMounted(()=>{
setTimeout(() => {
  fullScreen.value=true
  setTimeout(() => {
  fullScreen.value=false
  }, 10000);
}, 3000);
})
</script>

<style scoped>
.taskbar {
  user-select: none;
  position: fixed;
  bottom: 0;
  background-image: linear-gradient(0deg, #042b8e 0%, #0551f6 6%, #0453ff 51%, #0551f6 63%, #0551f6 81%, #3a8be8 90%, #0453ff 100%);
  width: 100vw;
  height: 30px;
}
.taskbar__start {
  height: 100%;
  width:100px;
  color: white;
  font-weight: 500;
  font-size: 1.1rem;
  font-style: italic;
  border: none;
  box-shadow: -2px -2px 10px #0000008e inset;
  background-image: linear-gradient(0deg, #0c450c 0%, #308f2f 6%, #308f2f 51%, #308f2f 63%, #308f2f 77%, #97c597 85%, #97c597 93%, #308f2f 97%);
  display: flex;
  align-items: center;
  transition: all;
}
.taskbar__start:active{
  background-image: linear-gradient(0deg, #2f892f 0%, #4eb64e 6%, #4eb64e 51%, #4eb64e 63%, #4eb64e 77%, #c4ffc4 85%, #c4ffc4 93%, #2f892f 97%);
}
.taskbar__start p {
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.685));

}
.taskbar__start--logo {
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.705));
}


.taskbar__end{
  background-image: linear-gradient(0deg, #0a5bc6 0%, #1198e9 6%, #1198e9 51%, #1198e9 63%, #1198e9 77%, #19b9f3 85%, #19b9f3 93%, #075dca 97%);
  box-shadow: 2px -0px 3px #20e2fc inset;


}

.tab{
  box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.267) inset;
}

</style>