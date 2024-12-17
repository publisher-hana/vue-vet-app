<script setup>
import EventItem from '../../components/community/EventItem.vue'
import evImg from '@/assets/images/ev_sample2.jpg'
</script>
<template>
  <div class="container" id="content"> 
    <ul class="grid g_3col promotion">
      <EventItem 
        :img = "evImg"
        alt="꽝없는 캐시뽑기"
        title="출석체크 이벤트 삭감제로 프로젝트 실시합니다."
        date="2022.06.01 ~ 2022.06.30"
      />
      <EventItem 
        :img = "evImg"
        alt="꽝없는 캐시뽑기"
        title="출석체크 이벤트 삭감제로 프로젝트 실시합니다."
        date="2022.06.01 ~ 2022.06.30"
        :end="true"
      />
      <EventItem 
        :img = "evImg"
        alt="꽝없는 캐시뽑기"
        title="출석체크 이벤트 삭감제로 프로젝트 실시합니다."
        date="2022.06.01 ~ 2022.06.30"
      />
      <EventItem 
        :img = "evImg"
        alt="꽝없는 캐시뽑기"
        title="출석체크 이벤트 삭감제로 프로젝트 실시합니다."
        date="2022.06.01 ~ 2022.06.30"
      />
      <EventItem 
        :img = "evImg"
        alt="꽝없는 캐시뽑기"
        title="출석체크 이벤트 삭감제로 프로젝트 실시합니다."
        date="2022.06.01 ~ 2022.06.30"
        :end="true"
      />
    </ul>
  </div>
</template>