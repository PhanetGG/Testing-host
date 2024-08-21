<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { language,cinemas,cinema,iconUpDown,iconUpDown1,showNote, showCamRed, showCamWhite, showEngRed, showEngWhite, showChiRed, showChiWhite, showLangText } from './data.js';
const router = useRouter();
const showHome=ref(true);
const showCin=ref(false);
const showOff=ref(false);
const showFb=ref(false);
const showPopupLang=ref(false);
// const showRedMenu=ref([true,false,false,false]);
// const showWhiteMenu=ref([false,true,true,true]);
const showLang=()=>{
    language.value=!language.value;
    cinema.value=false;
    iconUpDown.value=!iconUpDown.value;
    showPopupLang.value=true;
}
const shownote=()=>{
    showNote.value=!showNote.value;
    cinema.value=false;
    showPopupLang.value=true;
}
const closePopupLang=()=>{
    showPopupLang.value=false;
    showNote.value=false;
    language.value=false;
    cinema.value=false;
}
const showCinemas=()=>{
    cinema.value=!cinema.value;
    iconUpDown1.value=!iconUpDown1.value;
    showNote.value=false;
    showPopupLang.value=true;
}
const cambodia=()=>{
    showCamRed.value=true;
    showCamWhite.value=false;  
    showLangText.value=false;
    showChiRed.value=false;
    showChiWhite.value=true;
    showEngRed.value=false;
    showEngWhite.value=true;
}
const china=()=>{
    showCamRed.value=false;
    showCamWhite.value=true;  
    showLangText.value=false;
    showChiRed.value=true;
    showChiWhite.value=false;
    showEngRed.value=false;
    showEngWhite.value=true;
}
const english=()=>{
    showCamRed.value=false;
    showCamWhite.value=true;  
    showLangText.value=false;
    showChiRed.value=false;
    showChiWhite.value=true;
    showEngRed.value=true;
    showEngWhite.value=false;
}
const goToLogin=()=>{
    router.push('/login');
}
const goToTicket=()=>{
    router.push('/ticket');
}
const goToCinemas=()=>{
    // showColor.value=false;
    router.push('/cinemas');
    showCin.value=true;
    showHome.value=false;
    showOff.value=false;
    showFb.value=false;
    // showRedMenu.value=[false,true,false,false];
    // showWhiteMenu.value=[true,false,true,true];
    // showRedMenu.value[0]=false;
}  
const goToHome1=()=>{
    router.push('/');
    showCin.value=false;
    showHome.value=true;
    showOff.value=false;
    showFb.value=false;
    // showRedMenu.value=[true,false,false,false];
    // showWhiteMenu.value=[false,true,true,true];
}
const goToOffer=()=>{
    router.push('/offer');
    showCin.value=false;
    showHome.value=false;
    showOff.value=true;
    showFb.value=false;
    //    showRedMenu.value=[false,false,true,false];
    //    showWhiteMenu.value=[true,true,false,true];
}
const goToFb=()=>{
    router.push('/fb');
    showCin.value=false;
    showHome.value=false;
    showOff.value=false;
    showFb.value=true;
    // showRedMenu.value=[false,false,false,true];
    // showWhiteMenu.value=[true,true,true,false];
}
</script>
<template>
     <div class="main-menu" click="closeAll">
         <div class="menu" >
             <div class="top" >
                 <div class="left">
                     <input type="text" name="" id="" class="search" placeholder="Search Movies...">
                     <i class="fa-solid fa-magnifying-glass"></i>
                 </div>
                 <div class="right">
                        <ul>
                            <!-- <li><a ><img src="../assets/img/legend-cinema-logo.png" alt=""></a></li> -->
                            <li @click="goToTicket"><span class="ticket"><i class="fa-solid fa-ticket"></i>Ticket</span></li>
                            <li @click="goToLogin">
                                <span class="ticket"><i class="fa-solid fa-user" style="margin-left: 8px;"></i></span>
                            </li>
                            <li @click="shownote"><span><i class="fa-solid fa-bell"></i></span></li>
                            <li @click="showLang"><span class="ticket">
                                <div class="eng" v-show="showLangText">Languages</div>
                                <img src="../assets/img/Flag_of_the_United_Kingdom_(1-2).svg.png" alt="" v-show="showEngRed">
                                <div class="eng"  v-show="showEngRed">Eng</div>
                                <img src="../assets/img/Flag_of_Cambodia.svg.png" alt="" v-show="showCamRed">
                                <div class="eng"  v-show="showCamRed">Cam</div>
                                <img src="../assets/img/Flag_of_the_People's_Republic_of_China.svg.png" alt="" v-show="showChiRed">
                                <div class="eng"  v-show="showChiRed">China</div>
                                <i v-if="iconUpDown==true" class="fa-solid fa-chevron-down"></i>
                                <i v-else class="fa-solid fa-chevron-up"></i>
                            </span></li>
                        </ul>      
                 </div>
             </div>
             <div class="buttom">
                  <div class="ulleft">
                      <ul >
                          <!-- <li @click="goToHome1" :class="{showRed : showHome}"><i class="fa-solid fa-house"></i>Home</li>
                          <li @click="goToCinemas" :class="{showRed : showCin}"><i class="fa-solid fa-location-dot"></i>Cinemas</li>
                          <li @click="goToOffer" :class="{showRed : showOff}"><i class="fa-solid fa-location-arrow"></i>Offers</li>
                          <li @click="goToFb" :class="{showRed : showFb}"><i class="fa-solid fa-trash-can-arrow-up"></i>F&B</li> -->
                          <li @click="goToHome1" ><i class="fa-solid fa-house"></i>Home</li>
                          <li @click="goToCinemas" ><i class="fa-solid fa-location-dot"></i>Cinemas</li>
                          <li @click="goToOffer" ><i class="fa-solid fa-location-arrow"></i>Offers</li>
                          <li @click="goToFb" ><i class="fa-solid fa-trash-can-arrow-up"></i>F&B</li>
                          <!-- <li @click="goToHome1"  v-show="showRedMenu[0]" style="color: red;"><i class="fa-solid fa-house"></i>Home</li>
                          <li @click="goToHome1"  v-show="showWhiteMenu[0]"><i class="fa-solid fa-house"></i>Home</li>
                          <li @click="goToCinemas" v-show="showRedMenu[1]" style="color: red;"><i class="fa-solid fa-location-dot"></i>Cinemas</li>
                          <li @click="goToCinemas" v-show="showWhiteMenu[1]" ><i class="fa-solid fa-location-dot"></i>Cinemas</li>
                          <li @click="goToOffer" v-show="showRedMenu[2]" style="color: red;"><i class="fa-solid fa-location-arrow"></i>Offers</li>
                          <li @click="goToOffer" v-show="showWhiteMenu[2]"><i class="fa-solid fa-location-arrow"></i>Offers</li>
                          <li @click="goToFb" v-show="showRedMenu[3]" style="color: red;"><i class="fa-solid fa-trash-can-arrow-up"></i>F&B</li>
                          <li @click="goToFb" v-show="showWhiteMenu[3]" ><i class="fa-solid fa-trash-can-arrow-up"></i>F&B</li> -->
                      </ul>
                  </div>
                  <div class="ulright">
                       <ul>
                           <li @click="showCinemas"><i class="fa-solid fa-location-dot"></i>All Cinemas<i v-if="iconUpDown1" class="fa-solid fa-chevron-down"></i><i v-else class="fa-solid fa-chevron-up"></i></li>
                       </ul>
                  </div>
             </div>
         </div>
         <span class="border"></span>
         <div class="lang" v-show="language">
             <ul>
                  <li @click="cambodia"><div class="cam"><img src="../assets/img/Flag_of_Cambodia.svg.png" alt=""></div>
                    <div style="color: crimson;" v-show="showCamRed">Khmer</div>
                    <div v-show="showCamWhite">Khmer</div>
                  </li>
                  <li @click="english"><div class="cam"><img src="../assets/img/Flag_of_the_United_Kingdom_(1-2).svg.png" alt=""></div>
                    <div style="color: crimson;" v-show="showEngRed">English</div>
                    <div v-show="showEngWhite">English</div>
                  </li>
                  <li @click="china"><div class="cam"><img src="../assets/img/Flag_of_the_People's_Republic_of_China.svg.png" alt=""></div>
                    <div style="color: crimson;" v-show="showChiRed">Chinese</div>
                    <div  v-show="showChiWhite">Chinese</div>
                  </li>
             </ul>
         </div>
         <div class="cinemas" v-show="cinema">
               <ul>
                  <li v-for="ele,i in cinemas" :key="i" ><i class="fa-solid fa-location-dot"></i>{{ ele.name }}</li>
               </ul>
         </div>
         <div class="note" v-show="showNote">
              <h1>Notifications</h1>
              <div class="top">
                 <span>Announcement</span>
                 <span>Orders</span>
              </div>
              <ul>
                <li class="li">
                     <img src="../assets/img/m1.jpeg" alt="">
                     <div class="down">
                        <ul>
                            <li>GORDEN PASS</li>
                            <li>17/July/2024</li>
                            <h6>GORDEN PASS</h6>
                        </ul>
                    </div>
                </li>
                <li class="li">
                     <img src="../assets/img/m1.jpeg" alt="">
                     <div class="down">
                        <ul>
                            <li>GORDEN PASS</li>
                            <li>17/July/2024</li>
                            <h6>GORDEN PASS</h6>
                        </ul>
                    </div>
                </li>
                <li class="li">
                     <img src="../assets/img/m1.jpeg" alt="">
                     <div class="down">
                        <ul>
                            <li>GORDEN PASS</li>
                            <li>17/July/2024</li>
                            <h6>GORDEN PASS</h6>
                        </ul>
                    </div>
                </li>
                <li class="li">
                     <img src="../assets/img/m1.jpeg" alt="">
                     <div class="down">
                        <ul>
                            <li>GORDEN PASS</li>
                            <li>17/July/2024</li>
                            <h6>GORDEN PASS</h6>
                        </ul>
                    </div>
                </li>
                <li class="li">
                     <img src="../assets/img/m1.jpeg" alt="">
                     <div class="down">
                        <ul>
                            <li>GORDEN PASS</li>
                            <li>17/July/2024</li>
                            <h6>GORDEN PASS</h6>
                        </ul>
                    </div>
                </li>
              </ul>
              <span class="buttom">No more announcements</span>
         </div>
         <div class="popupLang" v-show="showPopupLang" @click="closePopupLang"></div>
      </div>
</template>