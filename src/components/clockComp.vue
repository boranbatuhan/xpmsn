<template>
    <div>
        {{ time }}
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const time = ref(0)
onMounted(()=>{
    
    setInterval(() => {
        const temptime = new Date()
        var hours = temptime.getHours();
        var minutes = temptime.getMinutes();  
        
        time.value = minutes <10 ? hours + ":0" +minutes : hours + ":"+minutes 
    }, 100);  
})
</script>