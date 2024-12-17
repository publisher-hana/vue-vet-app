<script setup>
import Aside from '../../common/Aisde.vue'
const props = defineProps({
  title:String,
  writer:String,
  date:String,
  cnt:Number
})
</script>
<template>
  
    <div class="view-wrap">
      <div class="view-header">
        <h2>{{title}}</h2>
        <div className='post-details'>
          <span>{{writer}}</span>
          <span>{{date}}</span>
          <span>조회수 {{cnt}}</span>
        </div>
      </div>
      <div class="view-body board">
        <p>안녕하세요. 베터빌입니다.</p>
        <p>벌써 23년도 4월이 시작되었습니다.^^</p>
        <p>4월 1일 새롭게 오픈한 닥터빌 서비스 안내드립니다.</p>
        <strong>베터빌 스터디룸</strong>
        <p>시간, 장소에 제한없이 닥터빌 온라인 스터디룸에서 지식을 나누세요!</p>
        <p>원하시는 날짜, 시간, 참여 인원을 설정 후 예약하시면 끝!</p>
        <p>무료로 진행되는 닥터빌 온라인 스터디룸, 많은 이용 바랍니다.</p>
      </div>
      <div class="btn-group">
        <button>목록</button>
        <button class='prev'>이전글</button>
        <button class='next'>다음글</button>
      </div>
    </div>
   
    
</template>