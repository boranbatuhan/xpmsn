<template>
    <div @click="store.state.selectedFolderTab='computer'" id="computerwindow" class="z-[9990]  shrink-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div  class="window w-[606px] h-[448px] bg-[#fcfcfe] !overflow-hidden ">
        <div class=" title-bar shrink-0" >
            <div class="title-bar-text shrink-0">
                <div class="flex items-center justify-start gap-1">
          <img draggable="false" src="/src/assets/computer.png" alt="folder" class="w-4">
          <p class="text-xs text-white">My Computer</p>
          </div>
            </div>
            <div class="flex items-center justify-center gap-1">
            <div   class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black minimize">
            </div>
            <div  class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black fullsize">
            </div>
            <div  @click="removeWindow($event)" class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black close">
            </div>
            </div>
        </div>
        <div class="select-none  !inset-1 translate-x-[3px] flex flex-wrap items-start justify-start" style="height: calc(100% - 32px);">
            <!-- top area -->
            <div class="bg-[#efeede] w-[600px] h-[93px] border-b-2 border-[#ece9d8] flex flex-col items-start justify-start">
                <ul class="flex text-xs  gap-4 px-4 border-b border-[#d6d7bc] w-full py-1">
                    <li class="">File</li>
                    <li class="">Edit</li>
                    <li class="">View</li>
                    <li class="">Favorites</li>
                    <li class="">Tools</li>
                    <li class="">Help</li>
                </ul>
                <ul class="flex text-xs gap-4 px-4 border-b border-[#d6d7bc] w-full py-1">
                    <li class=" flex items-center justify-center flex-col"><img class="h-4 w-4" draggable="false" src="/src/assets/mini/arro2w.png" alt="menuicon"> Back</li>
                    <li class=" flex items-center justify-center flex-col  opacity-60"><img class="h-4 w-4" draggable="false" src="/src/assets/mini/arrowgray.png" alt="menuicon"> Forward</li>
                    <li class=" flex items-center justify-center flex-col border-r-2 border-[#d6d7bc] pr-4"><img class="h-4 w-4" draggable="false" src="/src/assets/mini/up.png" alt="menuicon"> Up</li>
                    <li class=" flex items-center justify-center flex-col"><img class="h-4 w-4" draggable="false" src="/src/assets/mini/search.png" alt="menuicon"> Search</li>
                    <li class=" flex items-center justify-center flex-col border-r-2 border-[#d6d7bc] pr-4"><img class="h-4 w-4" draggable="false" src="/src/assets/mini/folders.png" alt="menuicon"> Folders</li>
                    <li class=" flex items-center justify-center flex-col"><img class="h-3 mb-1 w-4" draggable="false" src="/src/assets/mini/display.png" alt="menuicon"> Views</li>
                </ul>
                <ul class="flex text-xs gap-4 px-2 border-b border-[#d6d7bc] w-full py-1">
                    <li>Adress</li>
                    <li class="bg-white border border-[#7d9bb1] px-2 w-full h-full cursor-text group flex items-center justify-start"> <img draggable="false" src="/src/assets/computer.png" class="h-3" alt="computer"> <p class="group-active:text-white group-active:bg-[#316ac5] w-fit px-2 my-[1px] ml-2">My Computer</p></li>
                    <li class="flex items-center justify-center gap-1"><img draggable="false" src="/src/assets/mini/goarrow.png" alt="go"> Go</li>
                </ul>
            </div>
            <!-- left area -->
            <div class="w-[180px] h-[320px] shrink-0  bg-gradient-to-t from-[#6375d6] to-[#7ba2e7]">
                <details open class="bg-[#d6dff7] text-[#215dc6] text-xs m-2  rounded-t-md" >
                    <summary class="bg-gradient-to-r from-white  to-[#cad6f7] font-extrabold rounded-t-md flex items-center justify-between px-2 py-[2px] "><p class="text-xs scale-75">System Tasks</p> <img draggable="false" src="/src/assets/mini/arrdown.png" alt="arrows"></summary>
                    <ul class="flex items-start justify-start flex-col gap-1">
                        <li class="flex items-center justify-start gap-1 pl-2 cursor-pointer pt-2">
                            <img draggable="false" src="/src/assets/mini/info.png" alt="sidemenuicon">
                            <p class="scale-75 origin-left">View system information</p>
                        </li>
                        <li class="flex items-center justify-start gap-1 pl-2 cursor-pointer">
                            <img draggable="false" src="/src/assets/mini/removeprograms.png" alt="sidemenuicon">
                            <p class="scale-75 origin-left">Add or remove programs</p>
                        </li>
                        <li class="flex items-center justify-start gap-1 pl-2 cursor-pointer pb-2">
                            <img draggable="false" src="/src/assets/mini/setting.png" alt="sidemenuicon">
                            <p class="scale-75 origin-left">Change a setting</p>
                        </li>
                    </ul>
                </details>
                <details open class="bg-[#d6dff7] text-[#215dc6] text-xs m-2  rounded-t-md" >
                    <summary class="bg-gradient-to-r from-white  to-[#cad6f7] font-extrabold rounded-t-md flex items-center justify-between px-2 py-[2px] "><p class="text-xs scale-75">Other Places</p> <img draggable="false" src="/src/assets/mini/arrdown.png" alt="arrows"></summary>
                    <ul class="flex items-start justify-start flex-col gap-1">
                        <li class="flex items-center justify-start gap-1 pl-2 cursor-pointer pt-2">
                            <img draggable="false" src="/src/assets/mini/network.png" alt="sidemenuicon">
                            <p class="scale-75 origin-left">My Network Places</p>
                        </li>
                        <li class="flex items-center justify-start gap-1 pl-2 cursor-pointer">
                            <img draggable="false" src="/src/assets/mini/documents.png" alt="sidemenuicon">
                            <p class="scale-75 origin-left">My Documents</p>
                        </li>
                        <li class="flex items-center justify-start gap-1 pl-2 cursor-pointer ">
                            <img draggable="false" src="/src/assets/mini/shared.png" alt="sidemenuicon">
                            <p class="scale-75 origin-left">Shared Documents</p>
                        </li>
                        <li class="flex items-center justify-start gap-1 pl-2 cursor-pointer pb-2">
                            <img draggable="false" src="/src/assets/mini/setting.png" alt="sidemenuicon">
                            <p class="scale-75 origin-left">Control Panel</p>
                        </li>
                    </ul>
                </details>
                <details open class="bg-[#d6dff7] text-[#215dc6] text-xs m-2  rounded-t-md" >
                    <summary class="bg-gradient-to-r from-white  to-[#cad6f7] font-extrabold rounded-t-md flex items-center justify-between px-2 py-[2px] "><p class="text-xs scale-75">Details</p> <img draggable="false" src="/src/assets/mini/arrdown.png" alt="arrows"></summary>
                    <p class="text-xs font-extrabold origin-left scale-75 pl-4 pt-1 text-black">My Computer</p>
                    <p class="text-xs font-thin origin-left scale-75 pl-4 pb-1 text-black">System Folder</p>
                </details>
            </div>
            <!-- right area -->
            <div class="w-[420px] h-[320px] bg-white">
                <ul>
                    <li>
                        <p class="font-bold text-xs px-4">Files Stored on This Computer</p>
                        <div class="bg-gradient-to-r from-blue-500 to-transparent w-64 h-px"></div>
                        <div class="w-full h-24 flex flex-wrap items-center justify-start pl-2 ">
                            <div class=" flex items-center justify-center gap-1 px-6 border border-transparent hover:border-teal-400 hover:bg-sky-400/70">
                                <img draggable="false" src="/src/assets/folderold.png" alt="folder" class="w-10">
                                <p class="text-xs">Shared Documents</p>
                            </div>
                            <div class=" flex items-center justify-center gap-1 px-6 border border-transparent hover:border-teal-400 hover:bg-sky-400/70">
                                <img draggable="false" src="/src/assets/folderold.png" alt="folder" class="w-10">
                                <p class="text-xs">User's Documents</p>
                            </div>
                            <div class=" flex items-center justify-center gap-1 px-6 border border-transparent hover:border-teal-400 hover:bg-sky-400/70">
                                <img draggable="false" src="/src/assets/folderold.png" alt="folder" class="w-10">
                                <p class="text-xs">Guest's Documents</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <p class="font-bold text-xs px-4">Hard Disk Drives</p>
                        <div class="bg-gradient-to-r from-blue-500 to-transparent w-64 h-px"></div>
                        <div class="w-full h-16  flex items-center justify-start pl-2">
                            <div class=" flex items-center justify-center gap-1 px-6 border border-transparent hover:border-teal-400 hover:bg-sky-400/70">
                                <img draggable="false" src="/src/assets/disk.png" alt="disk" class="w-10">
                                <p class="text-xs">Local Disk (C:)</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <p class="font-bold text-xs px-4">Devices With Removable Storage</p>
                        <div class="bg-gradient-to-r from-blue-500 to-transparent w-64 h-px"></div>
                        <div class="w-full h-24  flex items-center justify-start pl-2 flex-wrap">
                            <div class=" flex items-center justify-center gap-1 px-6 border border-transparent hover:border-teal-400 hover:bg-sky-400/70">
                                <img draggable="false" src="/src/assets/cddisk.png" alt="cd" class="w-10">
                                <p class="text-xs">CD Drive (D:)</p>
                            </div>
                            <div class=" flex items-center justify-center gap-1 px-6 border border-transparent hover:border-teal-400 hover:bg-sky-400/70">
                                <img draggable="false" src="/src/assets/flopydisk.png" alt="flopy" class="w-10">
                                <p class="text-xs">Flopy (A:)</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import store from "/src/store"
const titlebarClick = ref(false)

function removeWindow(e) {
//     const computerwindow = e.target.offsetParent.id
//     console.log('computerwindow :>> ', computerwindow);
//   var delWindow = document.getElementById("computerwindow");
//   delWindow.parentNode.removeChild(delWindow);
store.state.openComputerWindow=false
}


</script>
<style scoped>

.title-bar {
    font-family: Trebuchet MS;
    background: linear-gradient(180deg,#0997ff,#0053ee 8%,#0050ee 40%,#06f 88%,#06f 93%,#005bff 95%,#003dd7 96%,#003dd7);
    padding: 3px 5px 3px 3px;
    border-top: 1px solid #0831d9;
    border-left: 1px solid #0831d9;
    border-right: 1px solid #001ea0;
    border-top-left-radius: 8px;
    border-top-right-radius: 7px;
    font-size: 13px;
    text-shadow: 1px 1px #0f1089;
    height: 32px;
    color: white;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title-bar-text {
    font-weight: 700;
    color: #fff;
    letter-spacing: 0;
    margin-right: 24px;
    padding-left: 3px ;
}
.window {
    box-shadow: inset -1px -1px #00138c, inset 1px 1px #0831d9, inset -2px -2px #001ea0, inset 2px 2px #166aee, inset -3px -3px #003bda, inset 3px 3px #0855dd;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 0 0 3px;
    -webkit-font-smoothing: antialiased;
}

.minimize{
    background-color: white;
    background-image: url("/src/assets/minimize.svg");
}
.fullsize{
    background-color: white;
    background-image: url("/src/assets/fullsize.svg");
}
.close{
    background-color: white;
    background-image: url("/src/assets/close.svg");
}
</style>