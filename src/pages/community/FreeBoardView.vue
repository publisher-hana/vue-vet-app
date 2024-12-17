<script setup>
import BoardView from '../../components/community/BoardView.vue'
import './community.css'
</script>
<template>
   <div class="container" id="content"> 
    <div class="contents">
      <BoardView 
        title="이미지 사이트 추천해주세요"
        writer="김가영"
        date="2022-10-12"
        :cnt=5
      />
    </div>
    <Aside />
   </div>
  
</template>