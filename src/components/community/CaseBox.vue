<script setup>
 const props = defineProps({
    img : String,
    title : String,
    text : String,
    hospital : String,
    date : String,
    cnt : Number,
  });
</script>
<template>
  <div class="case-box">
    <RouterLink to="/community/freeBoardview">
      <div class="flex">
          <figure><img :src="img" alt="" /></figure>
          <div class="info">
            <strong class="clamp title">{{title}}</strong>
            <p class="clamp-2line">{{text}}</p>
            <div className='post-details'>
              <span>{{hospital}}</span>
              <span>{{date}}</span>
              <span>조회수 {{cnt}}</span>
            </div>
          </div>
      </div>
    </RouterLink>
  </div>
</template>