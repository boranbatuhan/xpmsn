<template>
    <div id="folders" class="-z-10">
        <div id="myComputer" @click="selectFolder($event)" @dblclick="openComputerW" class="fixed top-0 left-0 group select-none border m-6 flex items-center folder justify-start flex-col text-center border-transparent hover:border-teal-400 hover:bg-sky-400/70 w-16 h-fit ">
            <img draggable="false"  class="h-10 select-none pointer-events-none" src="/src/assets/computer.png" alt="computer-logo">
            <p :class="{'h-fit':clickedFolder=='myComputer'}" class="text-xs select-none pointer-events-none text-white group-hover:h-fit text-shadow h-4  w-full px-[1px] ">My Computer</p>
        </div>
        <div @dblclick="dblClickedFolder" id="myFolder" @click="selectFolder($event)" class="fixed top-24 left-0 group select-none border m-6 flex items-center folder justify-start flex-col text-center border-transparent hover:border-teal-400 hover:bg-sky-400/70 w-16 h-fit ">
            <img draggable="false"  class="h-10 select-none pointer-events-none" src="/src/assets/explorer.exe_14_252-3.png" alt="folder-logo">
            <p :class="{'h-fit':clickedFolder=='myFolder'}" class="text-xs select-none pointer-events-none text-white group-hover:h-fit text-shadow h-4  w-full px-[1px] ">Folder</p>
        </div>
        <div id="myMsn" @click="selectFolder($event)" @dblclick="openMsnW" class="fixed top-48 left-0 group select-none border m-6 flex items-center folder justify-start flex-col text-center border-transparent hover:border-teal-400 hover:bg-sky-400/70 w-16 h-fit ">
            <img draggable="false"  class="h-10 select-none pointer-events-none" src="/src/assets/msnlogo.png" alt="msn_logo">
            <p :class="{'h-fit':clickedFolder=='myMsn'}" class="text-xs select-none pointer-events-none text-white group-hover:h-fit text-shadow h-4  w-full px-[1px] ">Windows Live Messenger</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch} from "vue";
import store from "/src/store"



const clickedFolder = ref("")


const dblClickedFolder=()=>{
    store.commit('createFolder');
    store.state.selectedFolderTab="window"
}
const openComputerW=()=>{
    store.state.openComputerWindow=true
    store.state.selectedFolderTab="computer"
}
const openMsnW=()=>{
    store.state.openMsnWindow=true
    store.state.selectedFolderTab="messenger"
}

watch(clickedFolder,(newValue,oldValue)=>{

    const newSelected = document.getElementById(newValue)
    const oldSelected = document.getElementById(oldValue)
    if(newValue ){
        if(oldValue!="myMsn" && oldValue != "myComputer" && oldValue != "myFolder")
        {
            newSelected.classList.add("select")

        }else{
        oldSelected.classList.remove("select")

        oldSelected.classList.add("selected")
        newSelected.classList.add("select")
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
        const foldersP = document.querySelectorAll(".folder p")
        if(event.target.localName=="html"){
            folders.forEach((item)=>{

            item.classList.remove("select")
            item.classList.remove("selected")
            clickedFolder.value=""
            })      

            foldersP.forEach((item)=>{
            item.classList.remove("folder-clicked")
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