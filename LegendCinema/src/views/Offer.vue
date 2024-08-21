<script setup>
     import Menu from '../components/Menu.vue';
     import SlideMain from '@/components/SlideMain.vue';
     import Bottom from '@/components/Bottom.vue';
     import { boxOffer } from './data1';
</script>
<template>
     <!-- <Menu/> -->
      <SlideMain/>
      <div class="mainCinemas">
           <div class="cinemas">
              <h1 style="margin-bottom: 10px;">Promotions</h1>
              <!-- <form action="">
                  <input type="text" name="" id="search" value="Search Location : ">
                  <i class="fa-solid fa-magnifying-glass"></i>
              </form> -->
              <div class="main-box" >
                   <div class="box" v-for="ele,i in boxOffer" :key="i">
                       <figure>
                           <div class="img">
                              <img :src="ele.img" alt="">
                           </div>
                           <div class="txt">
                              <div class="name">{{ ele.caption }}</div>
                           </div>
                       </figure>
                   </div>
              </div>
              <span class="seeMore">See More</span>
           </div>
      </div>
      <Bottom/>
</template>