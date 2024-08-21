<script setup>
     import Menu from '../components/Menu.vue';
     import SlideMain from '@/components/SlideMain.vue';
     import { boxCom } from '../views/data1';
     import Bottom from '@/components/Bottom.vue';
     import { useRouter } from 'vue-router';
     const router = useRouter();
     //const router = useRouter();
     const goToCinemaRoute=(id)=>{
          router.push({ name:'CinemaPage', params :{ id }});
     }
</script>
<template>
     <!-- <Menu/> -->
      <SlideMain/>
      <div class="mainCinemas">
           <div class="cinemas">
              <h1>Cinema:</h1>
              <form action="">
                  <input type="text" name="" id="search" value="Search Location : ">
                  <i class="fa-solid fa-magnifying-glass"></i>
              </form>
              <div class="main-box">
                   <div class="box" v-for="ele,i in boxCom" :key="i" @click="goToCinemaRoute(ele.id)">
                       <figure>
                           <div class="img">
                              <img :src="ele.img" alt="">
                           </div>
                           <div class="txt">
                              <div class="name">{{ ele.name }}</div>
                                <i class="fa-solid fa-location-dot" style="color: crimson; float: left; margin: 10px 10px 0px 0px; "></i><div class="location" >{{ ele.location }}</div>
                           </div>
                       </figure>
                   </div>
              </div>
           </div>
      </div>
      <Bottom/>
</template>