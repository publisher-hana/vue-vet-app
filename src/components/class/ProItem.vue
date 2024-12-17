<script setup>
import IntroImg from '@/assets/images/doctor_sample1.png'
import { ref } from 'vue';
  const isOpen = ref(false); // React의 useState 대체
  const handleToggle = () => {
    isOpen.value = !isOpen.value;
  };
</script>
<template>
  <li :class="{open : isOpen}">
    <figure><img :src="IntroImg" alt="" /></figure>
    <div class="pro-info">
        <strong>최원석 교수</strong>
        <span class="belong">서울대학교 소화기질환연구소</span>
        <ul className="info-list">
          <li><em>진료과</em> <span className="val">소화기 내과</span></li>
          <li><em>진료분야</em> <span className="val">협심증,심근경색,급성심정지,관상동맥질환,협심증,심근경색,금성심정지</span>
          <ul><li>- 現 분당서울대학교병원 내과 교수</li><li>- 現 Editorial board: Diabetes, Obesity and Metabolism</li><li>- Massachusetts General Hospital/Harvard Medical School</li></ul></li>
        </ul>
    </div>
    <button @click="handleToggle" :class="{open : isOpen}">더보기</button>
  </li>
</template>