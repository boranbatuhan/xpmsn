<template>
    <div class=" fixed bottom-10 right-4">
        <div  class="window w-fit bg-grad min-h-[400px]">
            <div class=" title-bar shrink-0">
                <div class="title-bar-text shrink-0 flex items-center justify-start gap-1">
                    <div class="w-fit h-4">
                        <img loading="lazy" draggable="false" src="/src/assets/msnlogo.png" alt="msnlogo" class="w-fit h-full">
                    </div>
                    Windows Live Messenger
                </div>
                <!-- window buttons start -->
                <div class="flex items-center justify-center gap-1">
                    <div  class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black minimize">
                    </div>
                    <div  class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black fullsize">
                    </div>
                    <div  class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black close">
                    </div>
                </div>
                <!-- window buttons end -->
            </div>
            <!-- content start -->
            <div class="flex flex-col items-center justify-start mt-7">
                <!-- photo area start -->
                <div>
                    <div class="w-fit h-fit rounded-lg rounded-t-2xl rounded-b-2xl  border border-zinc-700/70 img-bg-grad px-1 py-2 shadow">
                        <div class="w-24 h-24 rounded-lg border border-zinc-400 bg-gradient-to-t from-zinc-400/60 to-zinc-200/60 flex items-center justify-center">
                            <img src="/src/assets/offlinehd.png" alt="ppimg" class="w-fit h-20 opacity-80 " draggable="false" loading="eager">
                        </div>
                    </div>
                </div>
                <!-- photo area end -->
                <!-- header area start -->
                <div class="flex flex-col items-center justify-start my-7">
                    <p class="text-[#375472]  text-xl font-segoe-ui">Sign in</p>
                    <p class="text-black  text-xs font-segoe-ui">Sign with your mail. Dont have one? <span class="text-[#375472] cursor-pointer">Sign up</span>.</p>
                </div>
                <!-- header area end -->
                <!-- form area start -->
                <div class="flex items-center justify-start flex-col gap-4 my-4">
                    <form @submit.prevent class="text-xs flex items-center justify-start flex-col gap-2 bg-zinc-100 p-1 border border-zinc-300 rounded-lg py-1.5">
                        <input placeholder="Enter your mail" type="text" class="rounded-md border border-zinc-300 focus:border-zinc-400 focus:border-t-zinc-900 outline-none px-2 py-px">
                        <input placeholder="Enter your password" type="password" class="rounded-md border border-zinc-300 focus:border-zinc-400 focus:border-t-zinc-900 outline-none px-2 py-px">
                        <div class="w-full px-2 flex items-start justify-start gap-1">
                            <p>Sign in as : </p>
                            <div class="h-4 flex cursor-default items-center justify-start gap-1 relative group"> 
                                <div class="w-2 h-2 rounded-sm " :class="{'bg-green-500':selectedStatus=='Available','bg-yellow-500':selectedStatus=='Busy','bg-red-500':selectedStatus=='Out','bg-zinc-500':selectedStatus=='Offline'}"></div> <p>{{ selectedStatus }}</p> 
                                <ul name="status" id="status" class="outline-none h-fit absolute top-4 left-0 invisible group-hover:visible bg-white px-2 py-px" >
                                    <li @click="selectStatus('Available')" class="h-4 flex cursor-default items-center justify-start gap-1"> <div class="w-2 h-2 rounded-sm bg-green-500"></div> <p>Available</p> </li>
                                    <li @click="selectStatus('Busy')" class="h-4 flex cursor-default items-center justify-start gap-1"> <div class="w-2 h-2 rounded-sm bg-yellow-500"></div> <p>Busy</p> </li>
                                    <li @click="selectStatus('Out')" class="h-4 flex cursor-default items-center justify-start gap-1"> <div class="w-2 h-2 rounded-sm bg-red-500"></div> <p>Out</p> </li>
                                    <li @click="selectStatus('Offline')" class="h-4 flex cursor-default items-center justify-start gap-1"> <div class="w-2 h-2 rounded-sm bg-zinc-500"></div> <p>Offline</p> </li>
                                </ul>
                            </div>
                        </div>
                        <label for="rMe" class="flex items-start justify-start gap-1 w-full px-2">
                            <input type="checkbox" name="rMe" id="rMe">
                            <p>Remember me</p>
                        </label>
                        <label for="rPw" class="flex items-start justify-start gap-1 w-full px-2">
                            <input type="checkbox" name="rPw" id="rPw">
                            <p>Remember my password</p>
                        </label>
                        <label for="rAut" class="flex items-start justify-start gap-1 w-full px-2">
                            <input type="checkbox" name="rAut" id="rAut">
                            <p>Sign me in automatically</p>
                        </label>
                    <p class="text-[#193858]  text-xs font-segoe-ui cursor-pointer text-start w-full">Forgot your password?</p>
                    </form>
                    <button class="px-2 py-px ">Sign in</button>
                </div>
                <!-- form area end -->
                <p class="text-[#0f5ba7]  text-xs font-segoe-ui cursor-pointer text-start w-full tracking-tighter p-2">Need a help?</p>

            </div>
            <!-- content end -->
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";



const selectedStatus = ref("Available")
const selectStatus = (status) =>{
    selectedStatus.value = status
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
.shadow{
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.750));
}

.bg-grad{
    background-image: linear-gradient(180deg, #70ccf3 17%, #ffffff 46%, #d2eaf6 73%);
}
.img-bg-grad{
    background-image: linear-gradient(180deg, #eef9fd 17%, #b9d5e1 73%);
}
</style>