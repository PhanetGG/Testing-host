<script setup>
import Menu from '@/components/Menu.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';  
import { seatB,seatC,seatD,seatE,seatF,seatA1,seatA2,seatA3,seatA4,seatA5,seatA6,selectSeats,totalPriceAndFB} from './data1';

const timeLeft = ref(90); 
const formattedTime = ref('');
const showPopup=ref(true);
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
formattedTime.value = formatTime(timeLeft.value);

const router = useRouter();
let timerInterval;

onMounted(() => {
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
      formattedTime.value = formatTime(timeLeft.value);
    } else {
      clearInterval(timerInterval);
      router.push('/movie/love');  
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timerInterval);
});
const closePopup=()=>{
    showPopup.value=false;
}
const back=()=>{
     router.push('/movie/love');
}
const totalPrice = computed(() => {
  const total = selectSeats.value.reduce((sum, seat) => sum + seat.price, 0);
  return isNaN(total) ? 0.0 : total.toFixed(2);
});
// totalPriceAndFB.value=totalPrice;
// Function to select a seat
const selectSeat = (seat) => {
  if (!seat.select) {
    seat.select = true;
    selectSeats.value.push(seat);
  } else {
    seat.select = false;
    selectSeats.value = selectSeats.value.filter(s => s !== seat);
  }
  
};
const goToLove=()=>{
     router.push('/movie/love');
}
const goToStep2=()=>{
     router.push('/movie/love/booking/step2')
}
</script>
<template>
      <Menu/>
      <div class="bookingClass">
           <div class="booking">
              <div class="line">
                  <div class="num" style="background-color: crimson;">1</div>
                  <h4>Showtime</h4>
                  <div class="subLine" style="background-color: crimson;"></div>
                  <div class="num" style="background-color: crimson;">2</div>
                  <h4>Choose Seat</h4>
                  <div class="subLine"></div>
                  <div class="num">3</div>
                  <h4>Order Review</h4>
                  <div class="subLine"></div>
                  <div class="num">4</div>
                  <h4>Check Out</h4>
              </div>
              <div class="seat">
                   <div class="left">
                         <h1 style="font-weight: bold;">Choose Seat</h1>
                         <div class="seatBooking">
                               <div class="main-timimg">
                                   <div class="timimg">{{ formattedTime }}</div>
                                   <div class="timimg"><i class="fa-solid fa-minus" style="margin-right: 10px;"></i>|<i class="fa-solid fa-plus" style="margin-left: 10px;"></i></div>    
                               </div>
                               <div class="curved-line"></div>
                               <h1>Screen</h1>
                               <div class="chair">
                                   <span>F</span>
                                   <span>
                                        <i class="fa-solid fa-couch normalChiar" v-for="ele,i in seatF" :key="i" :class="{chairGreen:ele.select}"  @click="selectSeat(ele)"></i>
                                   </span>
                                   <span>F</span>
                              </div>
                              <div class="chair">
                                   <span>E</span>
                                   <span>
                                        <i class="fa-solid fa-couch normalChiar" v-for="ele,i in seatE" :key="i" :class="{chairGreen:ele.select}"  @click="selectSeat(ele)"></i>
                                   </span>
                                   <span>E</span>
                              </div>
                              <div class="chair">
                                   <span>D</span>
                                   <span>
                                        <i class="fa-solid fa-couch normalChiar" v-for="ele,i in seatD" :key="i" :class="{chairGreen:ele.select}"  @click="selectSeat(ele)"></i>
                                   </span>
                                   <span>D</span>
                              </div>
                              <div class="chair">
                                   <span>C</span>
                                   <span>
                                        <i class="fa-solid fa-couch normalChiar" v-for="ele,i in seatC" :key="i" :class="{chairGreen:ele.select}"  @click="selectSeat(ele)"></i>
                                   </span>
                                   <span>C</span>
                              </div>
                              <div class="chair">
                                   <span>B</span>
                                   <span>
                                        <i class="fa-solid fa-couch normalChiar" v-for="ele,i in seatB" :key="i" :class="{chairGreen:ele.select}"
                                        @click="selectSeat(ele)">
                                        <!-- {{ ele.row }}{{ ele.num }} -->
                                   </i>
                                   </span>
                                   <span>B</span>
                              </div>
                              <div class="chair">
                                   <span>A</span>
                                   <span>
                                        <i class="fa-solid fa-couch pinkChair" v-for="ele, i in seatA1" :key="i" :class="ele.select ? 'chairGreenA':'pinkChairA'"  @click="selectSeat(ele)"></i>
                                   </span>
                                    <span>
                                        <i class="fa-solid fa-couch pinkChair" v-for="ele,i in seatA2" :key="i" :class="ele.select ? 'chairGreenA':'pinkChairA'"  @click="selectSeat(ele)"></i>
                                   </span> 
                                   <span>
                                        <i class="fa-solid fa-couch pinkChair" v-for="ele,i in seatA3" :key="i" :class="ele.select ? 'chairGreenA':'pinkChairA'"  @click="selectSeat(ele)"></i>
                                   </span> 
                                    <span>
                                        <i class="fa-solid fa-couch pinkChair" v-for="ele,i in seatA4" :key="i" :class="ele.select ? 'chairGreenA':'pinkChairA'"  @click="selectSeat(ele)"></i>
                                   </span> 
                                   <span>
                                        <i class="fa-solid fa-couch pinkChair" v-for="ele,i in seatA5" :key="i" :class="ele.select ? 'chairGreenA':'pinkChairA'"  @click="selectSeat(ele)"></i>
                                   </span>
                                   <span>
                                        <i class="fa-solid fa-couch pinkChair" v-for="ele,i in seatA6" :key="i" :class="ele.select ? 'chairGreenA':'pinkChairA'"  @click="selectSeat(ele)"></i>
                                   </span>
                                   <span>A</span>
                              </div>
                              <div class="chair">
                                   <span></span>
                                   <span>
                                        <i class="fa-solid fa-couch pinkChairT" ></i>
                                        <i class="fa-solid fa-couch pinkChairType" ></i>
                                   </span>
                                   <span></span>
                              </div>
                              <div class="chairC">
                                   <span></span>
                                   <span>
                                        <span class="span">Normal Seat</span>
                                        <span class="span">Couple Seat</span>
                                   </span>
                                   <span></span>
                              </div>
                              <div class="chairC">
                                   <span></span>
                                   <span>
                                        <span >4.5$</span>
                                        <span >5$</span>
                                   </span>
                                   <span></span>
                              </div>
                         </div>
                   </div>
                   <div class="right">
                        <h1 style="font-weight: bold;">Order Details</h1>
                        <div class="seatBooking">
                           <h4>Selected Seat</h4>
                           <i class="fa-solid fa-couch bigSeat"></i>
                           <!-- <span class="yourSeat">Your Seat is Empty</span> -->
                           <div class="chair">
                                   <span style="font-weight: bold;">Movie :</span>
                                   <span style="opacity: 0.7;">Vina:Before 7 Days</span>
                           </div>
                           <div class="chair">
                                   <span style="font-weight: bold;">Time :</span>
                                   <span style="opacity: 0.7;">7:30 PM</span>
                           </div>
                           <div class="chair">
                                   <span style="font-weight: bold;">Date :</span>
                                   <span style="opacity: 0.7;">Sat,09 Aug</span>
                           </div>
                           <div class="chair">
                              <span style="font-weight: bold;">Fromat :</span>
                              <span v-if="totalPrice==0" style="opacity: 0.7;" >Your Seat is Empty</span>
                              <span style="opacity: 0.7;" v-for="(data, i) in selectSeats" :key="i">{{ data.row }}{{ data.num }}</span>
                         </div>


                           <div class="chair">
                                   <span style="font-weight: bold;">Hall :</span>
                                   <span style="opacity: 0.7;">Smart</span>
                           </div>
                           <div class="chair">
                                   <span style="font-weight: bold;">Cinema :</span>
                                   <span style="opacity: 0.7;">Legend K Mall</span>
                           </div>
                           <div class="chair">
                                   <span style="font-weight: bold;">Total: </span>
                                   <span style="opacity: 0.7; font-weight: bold; color: red; font-size: 26px;">${{ totalPrice }}</span>
                           </div>
                           <div class="chair">
                                   <span class="contin" @click="goToLove">Back</span>
                                   <span v-if="totalPrice==0" class="contin">Contince</span>
                                   <span v-else class="contin" style="background-color: crimson;" @click="goToStep2">Contince</span>
                           </div>
                        </div>
                   </div>
              </div>
           </div>
           <div class="popupTime" @click="closePopup" v-show="showPopup">
               <div class="txt">
               <h2>You Have 1:30mn To Choosing Seat!</h2>
               <div class="mainSingle">
                    <div class="single" style="background-color: gray;" @click="back">Back</div>
                    <div class="single" @click="closePopup">Got it</div>
               </div>
               
               </div>
           </div>
      </div>
</template>