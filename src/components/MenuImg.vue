<script setup>
   import { box,showBoxNow,showBoxComing,boxCom,Aug,showAug, showSep,Sep, showOct, Oct, Nov,showNov,Dec,showDec } from './data'; 
   import { useRouter } from 'vue-router';
   const router = useRouter();
   const goToMovie=(id)=>{
         router.push({ name: 'Movie', params: { id } });
   }
</script>
<template>
       <div class="main-img">
                <div class="main-box" v-show="showBoxNow">
                    <!-- //showBoxNow -->
                    <div class="box" v-for="ele,i in box" :key="i" @click="goToMovie(ele.id)">
                        <div class="img">
                            <img :src="ele.img" alt="">
                        </div>
                        <div class="txt">
                            <div class="subtxt">
                                <h4 class="date">{{ ele.date }}</h4>
                                <span>{{ ele.room }}</span>
                            </div>
                            <h4 style="margin-top: 5px;">{{ ele.type }}</h4>
                        </div>
                    </div>
             </div>
             <div class="main-box" v-show="showBoxComing"> 
                <!-- showBoxComing -->
                 <div class="box" v-for="ele,i in boxCom" :key="i">
                     <div class="img">
                          <img :src="ele.img" alt="">
                     </div>
                     <div class="txt">
                        <div class="subtxt">
                            <h4 class="date">{{ ele.date }}</h4>
                            <span>{{ ele.room }}</span>
                        </div>
                        <h4 style="margin-top: 5px;">{{ ele.type }}</h4>
                     </div>
                 </div>
             </div>
             <div class="main-box" v-show="showAug">
                 <!-- showAug -->
                 <div class="box" v-for="ele,i in Aug" :key="i">
                     <div class="img">
                          <img :src="ele.img" alt="">
                     </div>
                     <div class="txt">
                        <div class="subtxt">
                            <h4 class="date">{{ ele.date }}</h4>
                            <span>{{ ele.room }}</span>
                        </div>
                        <h4 style="margin-top: 5px;">{{ ele.type }}</h4>
                     </div>
                 </div>
             </div>
             <div class="main-box" v-show="showSep">
                 <!-- showAug -->
                 <div class="box" v-for="ele,i in Sep" :key="i">
                     <div class="img">
                          <img :src="ele.img" alt="">
                     </div>
                     <div class="txt">
                        <div class="subtxt">
                            <h4 class="date">{{ ele.date }}</h4>
                            <span>{{ ele.room }}</span>
                        </div>
                        <h4 style="margin-top: 5px;">{{ ele.type }}</h4>
                     </div>
                 </div>
             </div>
             <div class="main-box" v-show="showOct">
                 <!-- showAug -->
                 <div class="box" v-for="ele,i in Oct" :key="i">
                     <div class="img">
                          <img :src="ele.img" alt="">
                     </div>
                     <div class="txt">
                        <div class="subtxt">
                            <h4 class="date">{{ ele.date }}</h4>
                            <span>{{ ele.room }}</span>
                        </div>
                        <h4 style="margin-top: 5px;">{{ ele.type }}</h4>
                     </div>
                 </div>
             </div>
             <div class="main-box" v-show="showNov">
                 <!-- showAug -->
                 <div class="box" v-for="ele,i in Nov" :key="i">
                     <div class="img">
                          <img :src="ele.img" alt="">
                     </div>
                     <div class="txt">
                        <div class="subtxt">
                            <h4 class="date">{{ ele.date }}</h4>
                            <span>{{ ele.room }}</span>
                        </div>
                        <h4 style="margin-top: 5px;">{{ ele.type }}</h4>
                     </div>
                 </div>
             </div>
             <div class="main-box" v-show="showDec">
                 <!-- showAug -->
                 <div class="box" v-for="ele,i in Dec" :key="i">
                     <div class="img">
                          <img :src="ele.img" alt="">
                     </div>
                     <div class="txt">
                        <div class="subtxt">
                            <h4 class="date">{{ ele.date }}</h4>
                            <span>{{ ele.room }}</span>
                        </div>
                        <h4 style="margin-top: 5px;">{{ ele.type }}</h4>
                     </div>
                 </div>
             </div>
       </div>
</template>