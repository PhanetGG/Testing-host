<script setup>
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';
    const router = useRouter();
    const isLogin = ref(true);
    const ToSignUp=ref(true);
    const MainLoginSetup=ref(true);
    const showSetup=()=>{
        isLogin.value=false;
    };
    const showLogin=()=>{
        isLogin.value=true;
        
    };
    const clickToSignUp=()=>{
        ToSignUp.value=false;
        MainLoginSetup.value=false;
    }
    const clickToLogin=()=>{
        ToSignUp.value=true;
        MainLoginSetup.value=true;
    }
    const goToHome=()=>{
    router.push('/');
    }
    const gotoGuest=()=>{
        router.push('/movie/love/booking');
    }
</script>
<template>
        <div>
        <div class="main-login">
               <img src="../assets/img/login-banner.png" alt="">
               <div class="loginArea">
                   <div class="txt">
                      <ul>
                         <li @click="goToHome" class="firstHome">Home</li>
                         <li>/</li>
                         <li >Login</li>
                      </ul>
                   </div>
                   <div class="frm">
                        <div class="left1">
                              <img src="../assets/img/login-banner.png" alt="">
                        </div>
                        <div class="right">
                              <div class="loginAndSetup">
                                  <div @click="clickToLogin">
                                       <h2  :style="{opacity: ToSignUp ? 1 : 0.7 }">Log In</h2>
                                       <div class="redLine" :style="{display: ToSignUp ? 'block':'none'}"></div>
                                   </div>
                                   <div @click="clickToSignUp">
                                       <h2 :style="{opacity: ToSignUp ? 0.7 : 1}">Sign Up</h2>
                                       <div class="redLine" :style="{display: ToSignUp ? 'none':'block'}"></div>
                                    </div>
                              </div>
                              <div class="mainLoginSetup" v-show="MainLoginSetup">
                              <!-- <span class="phoneNumber">You can use your phone number or username</span> -->
                              <div class="phoneNumber" >You can use your phone number or username</div>
                              <div class="loginSetup">
                                  <div class="loginBox" style="background-color: crimson;" v-show="isLogin" >
                                        UserName
                                  </div>
                                  <div class="loginBox" v-show="!isLogin" @click="showLogin">
                                        UserName
                                  </div>
                                   <div class="setupBox" v-show="isLogin" @click="showSetup">
                                      Phone Number
                                  </div>
                                  <div class="setupBox"  style="background-color: crimson; " v-show="!isLogin">
                                      Phone Number
                                  </div> 
                              </div>
                              <form action="" v-show="isLogin">
                                  <label for="user">UserName</label><br>
                                  <input type="text" name="" id="user"><br>
                                  <label for="pass">Password</label><br>
                                  <input type="password" name="" id="pass" ><br>
                                  <i class="fa-solid fa-lock"></i>
                                  <i class="fa-solid fa-user"></i>
                              </form>
                              <form action="" v-show="!isLogin">
                                  <label for="user">Phone Number</label><br>
                                  <input type="text" name="" id="user" value="+885  "><br>
                                  <img src="../assets/img/Flag_of_Cambodia.svg.png" alt="" style="opacity: 1;">
                              </form>
                              <form action="" v-show="isLogin">
                                  <label for="" style="opacity: 1;">Forgot Password?</label>
                              </form></div>
                              <div class="phoneNumber" v-show="!ToSignUp">Enter your phone number to get verification code</div>
                              <form action="" v-show="!ToSignUp" >
                                  <label for="user">Phone Number</label><br>
                                  <input type="text" name="" id="user" value="+885  "><br>
                                  <img src="../assets/img/Flag_of_Cambodia.svg.png" alt="" style="opacity: 1;">
                              </form>
                              <div class="con" >Contince</div>
                            </div>
                   </div>
               </div>
         </div>      
        <div class="containerLogin">
                    <div class="containerInLogin">
                          <h1></h1>
                          <h1>
                              <div class="img">
                                  <img src="../assets/img/legend-cinema-logo.png" alt="">
                              </div>
                          </h1>
                          <ul>
                             <li>
                                <img src="../assets/img/Flag_of_the_United_Kingdom_(1-2).svg.png" alt=""> 
                             </li>
                             <li style="margin-left: 8px;"><span>Eng</span></li>
                             <li style="margin-left: 8px;"><i class="fa-solid fa-chevron-down"></i></li>
                          </ul>
                 </div>
        </div>
        <!-- <ul> 
             <li>Cambodia</li>
             <li>Eng</li>
             <li>Chi</li>
        </ul> -->
        <div class="linkGuest">
              <h1 style="cursor: pointer;" @click="gotoGuest"><u>Continue As Guest</u></h1>
        </div>
    </div>  
</template>