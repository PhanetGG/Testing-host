<script setup>
   import { ref } from 'vue';
   import { menuSlide } from './data';
   import Menu from '../components/Menu.vue';
   import PopupSlide from '../components/PopupSlide.vue';
   const showIndexSlide=ref(0);
   setInterval(myTimer, 3000);
   function myTimer() {
    // const nextSlide=()=>{
      showIndexSlide.value++;
      if(showIndexSlide.value==menuSlide.value.length){
              showIndexSlide.value=0;
       }
    //  }
    }
</script>
<template>
    <div class="img">
         <img v-for="ele,i in menuSlide" :key="i" :src="ele.img" alt="" v-show="i==showIndexSlide" >
         <ul class="ul">
             <li v-for="item,i in menuSlide" :key="i" :class="{li:i==showIndexSlide}" >{{ i+1 }}</li>
         </ul>
         <Menu/>
         <PopupSlide/>
    </div>
</template>