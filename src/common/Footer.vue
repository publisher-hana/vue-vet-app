<script setup>
import "./common.css"
import { ref } from 'vue';
const toggleMenu = ref(true);

const handleToggle = () => {
  toggleMenu.value = !toggleMenu.value;
};
</script>
<template>
  <footer>
    <div class="footer_inner">
      <div>
        <h1 class="logo" aria-label="로고"><RouterLink to="/"></RouterLink></h1>
        <div class="site-links">
          <a href="#">회사소개</a>
          <a href="#">고객센터</a>
          <a href="#">제휴문의</a>
          <a href="#">이용약관</a>
          <a href="#" className="point">
            개인정보처리방침
          </a>
        </div>
        <address>
          <span>서울 강남구 봉은사로 114길 12 (삼성동)</span>
          <span>대표전화 : 1522-0209</span>
          <span>Fax : 02-563-8399</span>
        </address>
        <div class="copy">
          Copyright (c)Mcircle Corp. All rights reserved.
        </div>
      </div>
       <div class="family-sites" :class="{open : !toggleMenu}">
          <div class="sites">
            <a href="#" target="_blank">
              하이닥
            </a>
            <a href="#" target="_blank">
              더샵
            </a>
            <a href="#" target="_blank">
              클릭메디
            </a>
            <a href="#" target="_blank">
              해피케어
            </a>
            <a href="#" target="_blank">
              시셀
            </a>
            <a href="#" target="_blank">
              닥터빌
            </a>
        </div>
        <button class="site_box" @click="handleToggle">
          Family Site
        </button>
      </div>
    </div>
  </footer>
</template>