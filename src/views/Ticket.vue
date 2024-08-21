<script setup>
     import Menu from '@/components/Menu.vue';
     import Bottom from '@/components/Bottom.vue';
</script>
<template>
      <Menu/>
      <div class="ticketRoute">
           <div class="txt">
              <h1>Upcoming</h1>
              <h1>|</h1>
              <h1>History</h1>
           </div>
           <div class="img">
                <h1>No Upcoming Tickets</h1>
           </div>
      </div>
      <Bottom/>
</template>