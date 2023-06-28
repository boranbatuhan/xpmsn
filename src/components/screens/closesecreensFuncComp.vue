<template>
    <blankpowerbutton-comp class="!z-[9999999]" v-if="store.state.powerOff"></blankpowerbutton-comp>
    <loadingscreen-comp class="!z-[9999999]" v-if="store.state.startingQuery.loadingScreen"></loadingscreen-comp>
    <welcomescreen-comp class="!z-[9999999]" v-if="store.state.startingQuery.welcomeScreen"></welcomescreen-comp>
    <closingscreen-comp class="!z-[9999999]" v-if="store.state.isBeginTurnOff"></closingscreen-comp>
    </template>
    <script setup>
    import store from "/src/store";
    import loadingscreenComp from "/src/components/screens/loadingscreenComp.vue"
    import welcomescreenComp from "/src/components/screens/welcomescreenComp.vue"
    import blankpowerbuttonComp from '/src/components/screens/blankpowerbuttonComp.vue';
    import closingscreenComp from "/src/components/screens/closingscreenComp.vue";
    
    </script>