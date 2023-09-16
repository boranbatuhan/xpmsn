<template>
    <div id="error" class="z-[9990] shrink-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div  class="window w-fit bg-[#e9e9d9]">
        <div class=" title-bar shrink-0"  @mousedown="titlebarClick=true" @mouseup="titlebarClick=false"  @mouseleave="handleMouseUp" >
            <div class="title-bar-text shrink-0" @mousedown="titlebarClick=true" @mouseup="titlebarClick=false"  @mouseleave="handleMouseUp">Error</div>
            <div class="flex items-center justify-center gap-1">
            <div  @click="titlebarClick=false" class="w-[22px] h-[22px] opacity-50 rounded-sm box-border ring-0 outline-none close">
            </div>
            </div>
        </div>
        <div class="p-4 select-none flex flex-col items-center justify-center gap-2">
            <div class="flex gap-4">
                <img src="/src/assets/error.png" alt="error">
                <p>{{ props.content }}</p>
            </div>
            <button @click="ok" class="px-4">ok</button>

        </div>
    </div>

    </div>

</template>

<script setup>
import store from "/src/store"

const props = defineProps({
    content:String,
})

const ok=()=>{
    store.state.folderCountError=false
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

.close{
    background-color: white;
    background-image: url("/src/assets/close.svg");
}
</style>