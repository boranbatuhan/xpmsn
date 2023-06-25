<template>
    <div id="dxy" class="z-[9990]">
    <div  class="window w-fit bg-[#fcfcfe]">
        <div class=" title-bar"  @mousedown="titlebarClick=true" @mouseup="titlebarClick=false"  @mouseleave="handleMouseUp" >
            <div class="title-bar-text" @mousedown="titlebarClick=true" @mouseup="titlebarClick=false"  @mouseleave="handleMouseUp">A Title Bar</div>
            <div class="flex items-center justify-center gap-1">
            <div  @click="titlebarClick=false" class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black minimize">
            </div>
            <div  @click="titlebarClick=false" class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black fullsize">
            </div>
            <div  @click="titlebarClick=false" class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black close">
            </div>
            </div>
        </div>
        <div class="p-4 select-none" @mouseup="titlebarClick=false">
            <p>selamalala</p>
        </div>
    </div>

    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
const titlebarClick = ref(false)

onMounted(()=>{

    window.onload = addListeners();

function addListeners(){
    document.getElementById('dxy').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
    // if (e.shiftKey) 
    if(titlebarClick.value==true)
    {
        var div = document.getElementById('dxy');
    var divWidth = div.offsetWidth ;
    var divHeight = div.offsetHeight +30; // taskbar offset
    
    var newX = Math.max(0, e.clientX - divWidth/2);
    var newY = Math.max(0, e.clientY - divHeight/2);
    
    var maxX = window.innerWidth - divWidth;
    var maxY = window.innerHeight - divHeight;
    
    var adjustedX = Math.min(maxX, newX);
    var adjustedY = Math.min(maxY, newY);
    
    div.style.position = 'absolute';
    div.style.top = adjustedY + 'px';
    div.style.left = adjustedX + 'px';

    }
}
})
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