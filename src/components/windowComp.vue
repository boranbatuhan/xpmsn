<template>
    <div @click="store.state.selectedFolderTab='window'" :id="props.id" :class="{'!z-[9999]':store.state.selectedFolderTab=='window'}" class="z-[990] shrink-0 absolute top-10">
    <div  class="window w-fit bg-[#fcfcfe]">
        <div class=" title-bar shrink-0"  @mousedown="titlebarClick=true" @mouseup="titlebarClick=false"  @mouseleave="handleMouseUp" >
            <div class="title-bar-text shrink-0" @mousedown="titlebarClick=true" @mouseup="titlebarClick=false"  @mouseleave="handleMouseUp">{{ props.titleBar }}</div>
            <div class="flex items-center justify-center gap-1">
            <div  @click="titlebarClick=false" class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black minimize">
            </div>
            <div  @click="titlebarClick=false" class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black fullsize">
            </div>
            <div  @click="removeWindow($event)" class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black close">
            </div>
            </div>
        </div>
        <div class="p-4 select-none" @mouseup="titlebarClick=false">
            <p>Hello world !</p>
            <p>{{ props.id }}</p>
            <button>ok</button>

        </div>
    </div>

    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import store from "/src/store"
const titlebarClick = ref(false)


const props = defineProps({
    id:String,
    position:Number,
    titleBar:String
})


function removeWindow(e) {

   store.commit('removeFolder',props.id)
    const windowId = e.target.offsetParent.id
    console.log('windowId :>> ', windowId);
  var delWindow = document.getElementById(windowId);
  delWindow.parentNode.removeChild(delWindow);

}

onMounted(()=>{

    store.state.folders.push(props.id)
    
    window.onload = addListeners();
    const divtemp = document.getElementById(props.id)

    if (props.position <= 4){
        divtemp.style.left = props.position*(divtemp.offsetWidth+10)+'px'

    }
    else if(props.position > 4 && props.position <= 8)
    {
    divtemp.style.top = (divtemp.offsetHeight+50)+'px'
    divtemp.style.left = (props.position - 4)*(divtemp.offsetWidth+15)+'px'
    }
    else if(props.position > 8)
    {
    divtemp.style.top = (divtemp.offsetHeight+150)+'px'
    divtemp.style.left = (props.position - 8)*(divtemp.offsetWidth+20)+'px'
    } 

function addListeners(){
    document.getElementById(props.id).addEventListener('mousedown', mouseDown, false);

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
    if(titlebarClick.value==true)
    {
    var div = document.getElementById(props.id);
    
 
    
    var divWidth = div.offsetWidth ;
    var divHeight = div.offsetHeight +30; // taskbar offset
    
    var newX = Math.max(0, e.clientX+60 - divWidth/2);
    var newY = Math.max(0, e.clientY+60 - divHeight/2);
    
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