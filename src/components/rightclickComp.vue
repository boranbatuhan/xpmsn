<template>
    <div id="rightclickmenu" @mouseleave="closeMenu" class="w-40 hidden absolute border-zinc-400 border-[1px]  bg-white p-[2px] rc-shadow">
        <ul class="text-xs select-none cursor-default">
            <ul class="border-b border-zinc-400 pb-1">
                <li class="selectarea flex items-center justify-between group"><p>View</p> <svg class="rotate-90 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg></li>
                <li class="selectarea flex items-center justify-between group"><p>Arrange Icons By...</p> <svg class="rotate-90 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg></li>
                <li class="selectarea"><p>Refresh</p></li>
            </ul>
            <ul class="border-b border-zinc-400 py-1">
                <li class="selectarea !text-zinc-500 !pointer-events-none"><p>Paste</p></li>
                <li class="selectarea !text-zinc-500 !pointer-events-none"><p>Paste Shortcut</p></li>
            </ul>
            <ul class="border-b border-zinc-400 py-1">
                <li class="selectarea flex items-center justify-between group"><p>New</p> <svg class="rotate-90 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg></li>
            </ul>
            <ul class="pt-1">
                <li class="selectarea"><p>Properties</p></li>
            </ul>
        </ul>
    </div>
</template>
<script setup>
import { onMounted } from "vue";

const closeMenu = ()=>{
    const rightClickTemp = document.getElementById("rightclickmenu")
    rightClickTemp.classList.add("hidden")

}

onMounted(()=>{
    document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Sağ tıklama menüsünü engeller

  var container = document.querySelector('#app');
  
    const rightClickTemp = document.getElementById("rightclickmenu")
    if ( event.target.localName=="html") {
      rightClickTemp.classList.remove("hidden")
      rightClickTemp.style.left = (event.pageX - container.offsetLeft) + 'px';
      rightClickTemp.style.top = (event.pageY - container.offsetTop) + 'px';

  }
});

})

</script>

<style scoped>
.selectarea{
    @apply
        hover:text-white hover:bg-[#316ac5] 
        pl-4 pr-1
        my-1
        font-thin
        font-segoe-ui
        tracking-tight
        leading-4
       
     
}


.rc-shadow{
    -webkit-box-shadow: 6px 6px 5px -4px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 6px 5px -4px rgba(0,0,0,0.75);
box-shadow: 6px 6px 5px -4px rgba(0,0,0,0.75);
}

</style>