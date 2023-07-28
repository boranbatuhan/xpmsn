<template>
    <div id="folders" class="fixed top-0 left-0 -z-10">
        <div id="myComputer" @click="selectFolder($event)" @dblclick="openComputerW" class="select-none border m-6 flex items-center folder justify-start flex-col text-center border-transparent hover:border-teal-400 hover:bg-sky-400/70 w-16 h-20 ">
            <img draggable="false"  class="h-10 select-none pointer-events-none" src="/src/assets/computer.png" alt="computer-logo">
            <p class="text-xs select-none pointer-events-none text-white text-shadow h-4  w-full px-[1px] ">My Computer</p>
        </div>
        <div @dblclick="dblClickedFolder" id="myFolder" @click="selectFolder($event)" class="select-none border m-6 flex items-center folder justify-start flex-col text-center border-transparent hover:border-teal-400 hover:bg-sky-400/70 w-16 h-20 ">
            <img draggable="false"  class="h-10 select-none pointer-events-none" src="/src/assets/explorer.exe_14_252-3.png" alt="folder-logo">
            <p class="text-xs select-none pointer-events-none text-white text-shadow h-4  w-full px-[1px] ">Folder</p>
        </div>
        <div id="myMsn" @click="selectFolder($event)" class="select-none border m-6 flex items-center folder justify-start flex-col text-center border-transparent hover:border-teal-400 hover:bg-sky-400/70 w-16 h-20 ">
            <img draggable="false"  class="h-10 select-none pointer-events-none" src="/src/assets/msnlogo.png" alt="msn_logo">
            <p class="text-xs select-none pointer-events-none text-white text-shadow h-4  w-full px-[1px] ">Windows Live Messenger</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch,  } from "vue";
import store from "/src/store"


const dblClickedFolder=()=>{
    
    store.commit('createFolder');
    store.state.selectedFolderTab="window"
    
}


const clickedFolder = ref("")

const openComputerW=()=>{
    store.state.openComputerWindow=true
    store.state.selectedFolderTab="computer"

}

watch(clickedFolder,(newValue,oldValue)=>{

    const newSelected = document.getElementById(newValue)
    const oldSelected = document.getElementById(oldValue)
    if(newValue != ""){
        
    if(oldValue!="myMsn" && oldValue != "myComputer" && oldValue != "myFolder")
    {
        newSelected.classList.add("select")

    }else{
    oldSelected.classList.remove("select")
    newSelected.classList.add("select")
    oldSelected.classList.add("selected")
    }
    }
})

const selectFolder =(event)=>{
    clickedFolder.value=event.target.id

    var lastChild = event.target.lastChild;
  if (lastChild.nodeType === Node.ELEMENT_NODE) {
    lastChild.classList.add('folder-clicked');
  }

}






onMounted(()=>{
    
    document.addEventListener('mousedown', function(event){
        const folders = document.querySelectorAll(".folder")
        if(event.target.localName=="html"){
            folders.forEach((item)=>{

            item.classList.remove("select")
            item.classList.remove("selected")
    clickedFolder.value=""

            })      
        }
    })
})


</script>

<style>
.folder p{
    overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}
.folder:hover p {
    text-overflow: initial !important;
    overflow: visible !important;
    white-space: normal !important;
  }
.folder-clicked{
    text-overflow: initial !important;
    overflow: visible !important;
    white-space: normal !important;
}
.selected {
    border: 1px black dotted;
}
.select{
    @apply
    !border-teal-400 !bg-sky-400/70
}
</style>