<script setup>
     import SlideMain from '@/components/SlideMain.vue';
     import Bottom from '@/components/Bottom.vue';
     import { left, right } from './data1';
     import { useRouter } from 'vue-router';
     const router = useRouter();

//route to Login page
const goToLogin=()=>{
    router.push('/login');
}
</script>
<template>
     <!-- <Menu/> -->
      <SlideMain/>
      <div class="mainCinemas">
           <div class="cinemas">
              <h1 style="margin-bottom: 10px;">Choose Cinema</h1>
              <!-- <form action="">
                  <input type="text" name="" id="search" value="Search Location : ">
                  <i class="fa-solid fa-magnifying-glass"></i>
              </form> -->
              <!-- <div class="main-box" >
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
              <span class="seeMore">See More</span> -->
              <div class="leftRight">
                    <div class="Left">
                         <ul>
                                <li v-for="ele,i in left" :key="i" @click="goToLogin"><div class="subLeft"><img :src="ele.img" alt=""><div class="name">{{ ele.name }}</div></div>
                                     <div class="subRight"><i class="fa-solid fa-angle-right"></i></div></li>
                            
                         </ul>
                    </div>
                    <div class="Right"><ul>
                                <li v-for="ele,i in right" :key="i" @click="goToLogin"><div class="subLeft"><img :src="ele.img" alt=""><div class="name">{{ ele.name }}</div></div>
                                     <div class="subRight"><i class="fa-solid fa-angle-right"></i></div></li>
                         </ul></div>
              </div>
              
           </div>
      </div>
      <Bottom/>
</template>