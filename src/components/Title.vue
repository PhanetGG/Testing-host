<script setup>
import { showComing, showNow ,showBoxComing,showBoxNow, showWhite17,showRed17,showWhite18,showRed18,showRed19,
     showWhite19, showRed20,showWhite20,showRedJuly,showWhiteJuly,showRedAugust,showWhiteAugust,showRedSep,showWhiteSep
     ,showRedOct,showWhiteOct,showRedNov,showWhiteNov,showRedDec,showWhiteDec,showAug,
     showSep,
     showOct,
     showNov,
     showDec} from './data';

const showcoming=()=>{
      showComing.value=true;
      showNow.value=false;
      showBoxComing.value=true;
      showBoxNow.value=false;
      showRedJuly.value=true;
      showRedSep.value=false;
      showWhiteSep.value=true;
      showWhiteOct.value=true;
      showRedOct.value=false;
      showWhiteJuly.value=false;
      showNov.value=false;
      showWhiteNov.value=true;
      showRedNov.value=false;
      showWhiteDec.value=true;
      showRedDec.value=false;
      showWhiteAugust.value=true;
      showRedAugust.value=false;
}
const shownow=()=>{
      showNow.value=true;
      showComing.value=false;
      showBoxComing.value=false;
      showBoxNow.value=true;
      showSep.value=false;
      showAug.value=false;
      showOct.value=false;
      showNov.value=false;
      showDec.value=false;
}
const red17=()=>{
      showWhite17.value=false;
      showRed17.value=true;
}
const white17=()=>{
      showWhite17.value=false;
      showRed17.value=true;
      showWhite18.value=true;
      showRed18.value=false;
      showWhite19.value=true;
      showRed19.value=false;
      showWhite20.value=true;
      showRed20.value=false;
}
const white18=()=>{
      showWhite17.value=true;
      showRed17.value=false;
      showWhite18.value=false;
      showRed18.value=true;
      showWhite19.value=true;
      showRed19.value=false;
      showWhite20.value=true;
      showRed20.value=false;
}
const white19=()=>{
      showWhite17.value=true;
      showRed17.value=false;
      showWhite18.value=true;
      showRed18.value=false;
      showWhite19.value=false;
      showRed19.value=true;
      showWhite18.value=true;
      showRed18.value=false;
      showWhite20.value=true;
      showRed20.value=false;
}
const white20=()=>{
      showWhite17.value=true;
      showRed17.value=false;
      showWhite18.value=true;
      showRed18.value=false;
      showWhite19.value=true;
      showRed19.value=false;
      showWhite20.value=false;
      showRed20.value=true;
}
const whiteJuly=()=>{
     showRedJuly.value=true;
     showWhiteJuly.value=false;
     showRedAugust.value=false;
     showWhiteAugust.value=true;
     showRedSep.value=false;
     showWhiteSep.value=true;
     showRedOct.value=false;
     showWhiteOct.value=true;
     showRedNov.value=false;
     showWhiteNov.value=true;
     showRedNov.value=false;
     showWhiteNov.value=true;
     showRedDec.value=false;
     showWhiteDec.value=true;
     showBoxComing.value=true;
     showAug.value=false;
     showSep.value=false;
     showOct.value=false;
     showNov.value=false;
     showDec.value=false;
}
const whiteAug=()=>{
     showRedJuly.value=false;
     showWhiteJuly.value=true;
     showRedAugust.value=true;
     showWhiteAugust.value=false;
     showRedSep.value=false;
     showWhiteSep.value=true;
     showRedOct.value=false;
     showWhiteOct.value=true;
     showRedNov.value=false;
     showWhiteNov.value=true;
     showRedNov.value=false;
     showWhiteNov.value=true;
     showRedDec.value=false;
     showWhiteDec.value=true;
     showBoxComing.value=false;
     showBoxNow.value=false;
     showAug.value=true;
     showBoxComing.value=false;
     showBoxNow.value=false;
     showSep.value=false;
     showOct.value=false;
     showNov.value=false;
     showDec.value=false;
}
const whiteSep=()=>{
     showRedJuly.value=false;
     showWhiteJuly.value=true;
     showRedAugust.value=false;
     showWhiteAugust.value=true;
     showRedSep.value=true;
     showWhiteSep.value=false;
     showRedOct.value=false;
     showWhiteOct.value=true;
     showRedNov.value=false;
     showWhiteNov.value=true;
     showRedNov.value=false;
     showWhiteNov.value=true;
     showRedDec.value=false;
     showWhiteDec.value=true;
     showSep.value=true
     showAug.value=false;
     showBoxComing.value=false;
     showOct.value=false;
     showNov.value=false;
     showDec.value=false;
}
const whiteOct=()=>{
     showRedJuly.value=false;
     showWhiteJuly.value=true;
     showRedAugust.value=false;
     showWhiteAugust.value=true;
     showRedSep.value=false;
     showWhiteSep.value=true;
     showRedOct.value=true;
     showWhiteOct.value=false;
     showRedAugust.value=false;
     showWhiteAugust.value=true;
     showRedNov.value=false;
     showWhiteNov.value=true;
     showRedDec.value=false;
     showWhiteDec.value=true;
     showOct.value=true;
     showSep.value=false;
     showAug.value=false;
     showBoxComing.value=false;
     showBoxNow.value=false;
     showNov.value=false;
     showDec.value=false;
}
const whiteNov=()=>{
     showRedJuly.value=false;
     showWhiteJuly.value=true;
     showRedAugust.value=false;
     showWhiteAugust.value=true;
     showRedSep.value=false;
     showWhiteAugust.value=true;
     showRedOct.value=false;
     showWhiteOct.value=true;
     showRedNov.value=true;
     showWhiteNov.value=false;
     showRedDec.value=false;
     showWhiteDec.value=true;
     showOct.value=false;
     showSep.value=false;
     showAug.value=false;
     showBoxComing.value=false;
     showBoxNow.value=false;
     showNov.value=true;
     showDec.value=false;
}
const whiteDec=()=>{
     showRedJuly.value=false;
     showWhiteJuly.value=true;
     showRedAugust.value=false;
     showWhiteAugust.value=true;
     showRedSep.value=false;
     showWhiteAugust.value=true;
     showRedOct.value=false;
     showWhiteOct.value=true;
     showRedNov.value=false;
     showWhiteNov.value=true;
     showRedDec.value=true;
     showWhiteDec.value=false;
     showDec.value=true;
     showOct.value=false;
     showSep.value=false;
     showAug.value=false;
     showBoxComing.value=false;
     showBoxNow.value=false;
     showNov.value=false;
}
</script>
<template>
     <div class="container-fluid">
       <div class="title">
         <div class="show">
             <h2 class="now" @click="shownow" v-show="showNow">Now Showing</h2>
             <h2 class="now1" @click="shownow" v-show="showComing">Now Showing</h2>
             <h2 class="com" @click="showcoming" v-show="showNow">Coming Soon</h2>
             <h2 class="now2" @click="showcoming" v-show="showComing">Coming Soon</h2>
         </div>
         <div class="date" v-show="showNow">
             <ul class="ul">
                <li class="li" style="border: 0.1px solid rgba(255, 0, 0, 0.764);" v-show="showRed17" @click="red17">
                     <ul> 
                        <li>Today</li>
                        <li class="subDate"><b>17</b></li>
                        <li>July</li>
                     </ul>
                </li>
                <li class="li" v-show="showWhite17" @click="white17">
                     <ul> 
                        <li>Today</li>
                        <li class="subDate"><b>17</b></li>
                        <li>July</li>
                     </ul>
                </li>
                <li class="li" style="border: 0.1px solid rgba(255, 0, 0, 0.764); " v-show="showRed18" >
                     <ul> 
                        <li>Thu</li>
                        <li class="subDate"><b>18</b></li>
                        <li>July</li>
                     </ul>
                </li>
                <li class="li" v-show="showWhite18" @click="white18">
                     <ul> 
                        <li>Thu</li>
                        <li class="subDate"><b>18</b></li>
                        <li>July</li>
                     </ul>
                </li>
                <li class="li" style="border: 0.1px solid rgba(255, 0, 0, 0.764); " v-show="showRed19">
                     <ul> 
                        <li>Fri</li>
                        <li class="subDate"><b>19</b></li>
                        <li>July</li>
                     </ul>
                </li>
                <li class="li"  v-show="showWhite19" @click="white19">
                     <ul> 
                        <li>Fri</li>
                        <li class="subDate"><b>19</b></li>
                        <li>July</li>
                     </ul>
                </li>
                <li class="li" style="border: 0.1px solid rgba(255, 0, 0, 0.764); " v-show="showRed20">
                     <ul> 
                        <li>Sat</li>
                        <li class="subDate"><b>20</b></li>
                        <li>July</li>
                     </ul>
                </li>
                <li class="li"  v-show="showWhite20" @click="white20">
                     <ul> 
                        <li>Sat</li>
                        <li class="subDate"><b>20</b></li>
                        <li>July</li>
                     </ul>
                </li>
                <li class="li" style="opacity: 0.1;">
                     <ul> 
                        <li>Sun</li>
                        <li class="subDate"><b>21</b></li>
                        <li>July</li>
                     </ul>
                </li>
                <li class="li" style="opacity: 0.1;">
                     <ul> 
                        <li>Mon</li>
                        <li class="subDate"><b>22</b></li>
                        <li>July</li>
                     </ul>
                </li>
             </ul>
         </div>
         <div class="date" v-show="showComing">
          <ul class="ul">
                <li class="li" style="font-size: 18px; padding: 20px 40px; border: 0.1px solid rgba(255, 0, 0, 0.764);" v-show="showRedJuly">
                     <b>July</b>
                </li>
                <li class="li" v-show="showWhiteJuly" @click="whiteJuly">
                     <b>July</b>
                </li>
                <li class="li" style="font-size: 18px; padding: 20px 40px; border: 0.1px solid rgba(255, 0, 0, 0.764);" v-show="showRedAugust">
                     <b>August</b>
                </li>
                <li class="li" style="font-size: 18px; padding: 20px 40px;" v-show="showWhiteAugust" @click="whiteAug">
                     <b>August</b>
                </li>
                <li class="li" style="font-size: 18px; padding: 20px 40px; border: 0.1px solid rgba(255, 0, 0, 0.764);" v-show="showRedSep">
                     <b>September</b>
                </li>
                <li class="li" style="font-size: 18px; padding: 20px 40px; " v-show="showWhiteSep" @click="whiteSep">
                     <b>September</b>
                </li>
                <li class="li" style="font-size: 18px; padding: 20px 40px;border: 0.1px solid rgba(255, 0, 0, 0.764);" v-show="showRedOct">
                     <b>October</b>
                </li>
                <li class="li" style="font-size: 18px; padding: 20px 40px;" v-show="showWhiteOct" @click="whiteOct">
                     <b>October</b>
                </li>
                <li class="li" style="font-size: 18px; padding: 20px 40px; border: 0.1px solid rgba(255, 0, 0, 0.764);" v-show="showRedNov">
                     <b>November</b>
                </li>
                <li class="li" style="font-size: 18px; padding: 20px 40px; " v-show="showWhiteNov" @click="whiteNov">
                     <b>November</b>
                </li>
                <li class="li" style="font-size: 18px; padding: 20px 40px; border: 0.1px solid rgba(255, 0, 0, 0.764);" v-show="showRedDec">
                     <b>December</b>
                </li>
                <li class="li" style="font-size: 18px; padding: 20px 40px; " v-show="showWhiteDec" @click="whiteDec">
                     <b>December</b>
                </li>
             </ul>
         </div>
       </div>
      </div>
</template>