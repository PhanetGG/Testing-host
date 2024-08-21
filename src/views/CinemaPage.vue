<script setup>
    import Menu from '@/components/Menu.vue';
    import Bottom from '@/components/Bottom.vue';
    import { imgCinema } from '@/components/data';
    import { linkMape } from './data1';
    import { box } from '@/components/data';
    import { computed,defineProps,ref } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const props=defineProps(['id']);
    const showTimeDetails=ref(true);
    const showDates = ref([true, false, false, false, false]);
    const showMovie=ref(true);
    const showDetail=ref(false);
    //show name with each movie
    const showName=computed(()=>{
        const movie=imgCinema.value.find(movie => movie.id == props.id);
        return movie ? movie.name : 'Unknown Data';
    });
    const location=computed(()=>{
        const movie=imgCinema.value.find(movie => movie.id==props.id);
        return movie ? movie.location : 'Unknown Data';
    });
    //show hall in each movie
    const hall=computed(()=>{
        const Hall=linkMape.value.find(Hall => Hall.id==props.id);
        return Hall ? Hall.number : ' Unknown Data ';
    });
    //show addresss in each movie
    const add=computed(()=>{
        const Hall=linkMape.value.find(Hall => Hall.id==props.id);
        return Hall ? Hall.Address : ' Unknown Data ';
    });
     //show addresss in each movie
    const linkmape=computed(()=>{
        const Hall=linkMape.value.find(Hall => Hall.id==props.id);
        return Hall ? Hall.link : ' Unknown Data ';
    });
    const imgSrc = computed(() => {
        if(props.id==5){
            return `/src/assets/img/cPage${props.id}.jpg`;
        }
        else if(props.id==8||props.id==10){
            return `/src/assets/img/cPage${props.id}.jpeg`;
        }
        else{
            return `/src/assets/img/cPage${props.id}.png`;
        }
    });
    const goToHome=()=>{
        router.push('/');
    }
    const goToCinema=()=>{
        router.push('/cinemas');
    }
    const goToDetails=()=>{
        showTimeDetails.value=false;
        showMovie.value=false;
        showDetail.value=true;
    }
    const goToShowtime=()=>{
        showTimeDetails.value=true;
        showMovie.value=true;
        showDetail.value=false;
    }
    // Function to set the active show date
    const setActiveDate = (index) => {
    showDates.value = showDates.value.map((_, i) => i === index);
    };
</script>
<template>
     <Menu/>
     <div >
    <div class="moviePlay" >
         <div class="main">
            <div class="img">
                <img :src="imgSrc" alt="Movie Image" >
                <div class="black"></div>
                <h2 >{{ showName }}</h2>
                <ul class="ulMovie">
                    <li><i class="fa-solid fa-location-dot" style="color: crimson;"></i><span style="margin-left: 10px; opacity: 0.7;">{{ location }}</span></li>
                    <li><span class="HomeAndCinema" @click="goToHome">Home</span><span style="margin: 0px 10px;">/</span><span class="HomeAndCinema" @click="goToCinema">Cinema</span><span style="margin-left: 10px;">/</span><span style="margin: 0px 10px;">{{ showName }}</span></li>
                    <!-- <li><i class="fa-solid fa-calendar-days" style="color: crimson;"></i><span style="opacity: 0.8;">  Release:</span><span>  30 Jul 2024</span></li>
                    <li><i class="fa-solid fa-eye-slash" style="color: crimson;"></i><span style="opacity: 0.8;">  Classification:</span><span>  NC15</span></li> -->
                </ul>
            </div>
            <div class="txt">
                <h2 :style="{opacity: showTimeDetails ? 1 : 0.7}" @click="goToShowtime">ShowTime</h2>
                <h2>|</h2>
                <h2 :style="{opacity: !showTimeDetails ? 1 : 0.7}" @click="goToDetails">Details</h2>
            </div>
         </div>
         <div class="showTime" v-show="showMovie">
         <div class="Time" >
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
    </div>
    <div class="main-img" v-show="showMovie">
                <div class="main-box" >
                    <!-- //showBoxNow -->
                    <div class="box" v-for="ele,i in box" :key="i" >
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
    <div class="detail-main" v-show="showDetail">
                <div class="detail" >
                    <div class="box1">
                          <div class="subBox">
                              <h2 style="opacity: 0.6;">Numbers Of Halls:</h2>
                              <h2>{{ hall }}</h2>
                          </div>
                          <div class="subBox">
                              <h2 style="opacity: 0.6;">Opening Hours</h2>
                              <h2>09:30-22:30</h2>
                          </div>
                          <div class="subBox">
                              <h2 style="opacity: 0.6;">Address</h2>
                              <h2>{{ add }}</h2>
                          </div>
                    </div>
                    <div class="mape">
                        <iframe 
                                :src="linkmape" 
                                width="100%" 
                                height="100%" 
                                style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
             </div>
    </div>
  </div>
  <Bottom/>
</template>