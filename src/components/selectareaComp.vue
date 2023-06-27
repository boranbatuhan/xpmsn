<template>
    <div id="selectionArea" class="absolute z-[300] bg-[#0453ff]/50 border border-[#0453ff] pointer-events-none"></div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    var isMouseDown = false;
var selectionArea = document.getElementById('selectionArea');
var startX, startY, endX, endY;

document.addEventListener('mousedown', function(event) {

  if (event.target.localName=="html" || event.target.id =="folders"  || event.target.id.includes("my")) {

    isMouseDown = true;
  startX = event.clientX;
  startY = event.clientY;
  selectionArea.style.left = startX + 'px';
  selectionArea.style.top = startY + 'px';
  selectionArea.style.width = '0';
  selectionArea.style.height = '0';
  selectionArea.style.display = 'block';
  }
});

document.addEventListener('mousemove', function(event) {
  if (isMouseDown && event.target.localName=="html" || event.target.id =="folders" || event.target.id =="startmenu" || event.target.id.includes("my")) {
    endX = event.clientX;
    endY = event.clientY;
    var width = endX - startX;
    var height = endY - startY;
    selectionArea.style.width = Math.abs(width) + 'px';
    selectionArea.style.height = Math.abs(height) + 'px';
    selectionArea.style.left = (width > 0 ? startX : endX) + 'px';
    selectionArea.style.top = (height > 0 ? startY : endY) + 'px';
  }
});

document.addEventListener('mouseup', function() {
  isMouseDown = false;
  selectionArea.style.display = 'none';
});
})


</script>
<style>


</style>