<script setup>
     import Menu from '@/components/Menu.vue';
     import Bottom from '@/components/Bottom.vue';
import router from '@/router';
     const backSingle=()=>{
         router.push('/');
     }
</script>
<template>
        <Menu/>
         <div class="singlePage">
             <span class="backSingle" @click="backSingle">Back</span>
             <h1>This movie is exclusively for viewers who are in a relationship only.</h1>
         </div>
        <!-- <Bottom/> -->
</template>