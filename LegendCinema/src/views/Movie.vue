<script setup>
import { defineProps, computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Menu from '@/components/Menu.vue';
import Bottom from '@/components/Bottom.vue';
import { cinemas } from '@/components/data';
import { linkVideo } from '../views/data1';
import { box } from '../components/data';
const showDates = ref([true, false, false, false, false]);
const showTimeDetails = ref(true);
const showDetailsText = ref(false);
const showTimeText = ref(true);
const showPopup = ref(false);
const showPopupTime=ref(false);
const showIndexVideo = ref(1);
const props = defineProps(['id']);


const router = useRouter();
//show name with each movie
const showName=computed(()=>{
   const movie=box.value.find(movie => movie.id == props.id);
   return movie ? movie.type : 'Unknown Data';
});

// Compute the image path based on the id
const imgSrc = computed(() => {
  return `/src/assets/img/movie${props.id}.jpg`;
});

// Function to set the active show date
const setActiveDate = (index) => {
  showDates.value = showDates.value.map((_, i) => i === index);
};

const goToDetails = () => {
  showTimeDetails.value = false;
  showDetailsText.value = true;
  showTimeText.value = false;
};

const goToShowtime = () => {
  showTimeDetails.value = true;
  showDetailsText.value = false;
  showTimeText.value = true;
};

const showPopupVideo = (index) => {
  showIndexVideo.value = index;
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
  if (youtubePlayer.value) {
    youtubePlayer.value.pauseVideo(); // Pause the video
  }
};

const clickOnTime=()=>{
  showPopupTime.value=true;
}

const closePopupTime=()=>{
  showPopupTime.value=false;
}

const goToSingle=()=>{
    router.push('/movie/single');
}

const goToLove=()=>{
    router.push('/movie/love');
}
</script>
<template>
  <Menu/>
  <div>
    <div class="moviePlay">
         <div class="main">
            <div class="img" @click="showPopupVideo(props.id-1)">
                <img :src="imgSrc" alt="Movie Image" >
                <div class="black"></div>
                <h2>{{ showName }}</h2>
                <ul class="ulMovie">
                    <li><i class="fa-brands fa-font-awesome" style="color: crimson;"></i><span style="opacity: 0.8;">    Genre:</span><span>  Action</span></li>
                    <li><i class="fa-solid fa-stopwatch" style="color: crimson;"></i><span style="opacity: 0.8;">  Duration:</span><span>  2h 0min</span></li>
                    <li><i class="fa-solid fa-calendar-days" style="color: crimson;"></i><span style="opacity: 0.8;">  Release:</span><span>  30 Jul 2024</span></li>
                    <li><i class="fa-solid fa-eye-slash" style="color: crimson;"></i><span style="opacity: 0.8;">  Classification:</span><span>  NC15</span></li>
                </ul>
                <i class="fa-solid fa-circle-play "></i>
            </div>
            <div class="txt">
                <h2 :style="{opacity: showTimeDetails ? 1 : 0.7}" @click="goToShowtime">ShowTime</h2>
                <h2>|</h2>
                <h2 :style="{opacity: !showTimeDetails ? 1 : 0.7}" @click="goToDetails">Details</h2>
            </div>
         </div>
         <div class="border" style="display: none;"></div>
         <div class="showTime" v-show="showTimeText">
           <h2>Show Time</h2>
           <div class="searchTime">
               <span>All Locations</span>
               <span><i class="fa-solid fa-angle-down"></i></span>
           </div>
           <div class="Time">
               <ul class="ulTime">
                  <li v-for="data,i in ['Today','Thu','Friday','Sat','Sun']" :key="i"
                   class="liTime" :style="{ border: showDates[i] ? 'thin solid red' : ''}" @click="setActiveDate(i)">
                      <ul>
                          <li>{{ data }}</li>
                          <li>0{{ i+1 }}</li>
                          <li>Aug</li>
                      </ul>
                  </li>
               </ul>
           </div>
          
         </div> 
          <div class="mainLocation" >
            <div v-for="ele,i in cinemas" :key="i" v-show="showTimeText">
              <div class="main-box">
                 <div class="location">
                    <span >{{ ele.name }}</span>
                    <i class="fa-solid fa-angle-down"></i>
                 </div>
              </div>
              <div class="timeShow">
                 <img src="../assets/img/2d.png" alt="">
                 <div><i class="fa-solid fa-volume-low"></i>  KR | <i class="fa-solid fa-message"></i>  ENG | <i class="fa-solid fa-chalkboard"></i> RUGULAR HALL</div>
                 <ul class="ulTime">
                    <li @click="clickOnTime">{{ ele.time1 }}</li>
                    <li @click="clickOnTime">{{ ele.time2 }}</li>
                    <li @click="clickOnTime">{{ ele.time3 }}</li>
                 </ul>
                </div>
              </div>
               <div class="showDetails" v-show="showDetailsText">
                  <h1>Synopsis</h1>
                  <div>Self-proclaimed tough guy 'Jae-pil' and 'Sang-gu' move into their dream European-style house.When unwanted visitors arrive, awakening a sealed evil spirit in the basement, and a dark aura begins to envelop the house.</div>
               </div>
           </div>
    </div>
    <div class="popupVideo" v-show="showPopup" @click="closePopup">
        <div class="video" v-for="data,i in linkVideo" :key="i" v-show="i==showIndexVideo">
          <iframe 
             width=100%
             height=100%
             :src="data.link"
             title="YouTube video player"
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>
    </div>
    <!-- Use props.id to fetch or display movie details -->
    <!-- <h1>Movie ID: {{ id }}</h1> -->
    <!-- Additional logic to fetch and display movie details -->
    <div class="popupTime" v-show="showPopupTime" @click="closePopupTime">
          <div class="txt">
              <h2>Are you single or in a relationship ?</h2>
              <div class="mainSingle">
                <div class="single" style="background-color: gray;" @click="goToSingle">Single</div>
                <div class="single" @click="goToLove">Relationship</div>
              </div>
              
          </div>
    </div>
  </div>

  <Bottom/>
</template>
