<script setup>
import "./common.css"
import SearchBox from './SearchBox.vue'
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const toggleMenu = ref(true);
const handleToggle = () => {
  toggleMenu.value = !toggleMenu.value;
};
</script>
<template>
  <header>
      <div class="skip-nav">
         <a href="#content">본문 바로가기</a>
      </div>
      <div class="header_inner">
        <div class="nav-area">
          <h1 class="logo" aria-label="로고"><RouterLink to="/"></RouterLink></h1>
          <nav>
            <ul class="nav-list">
               <li>
                <RouterLink to="/class" :class="{ on: route.path.startsWith('/class') }">클래스룸</RouterLink>
                <ul class="sub-menu">
                  <li><RouterLink to="/class">임상강좌 VOD</RouterLink></li>
                  <li><RouterLink to="/class/live">Live 세미나</RouterLink></li>
                </ul>
              </li>
              <li>
                <RouterLink to="/library" :class="{ on: route.path.startsWith('/library') }">라이브러리</RouterLink>
                <ul class="sub-menu">
                  <li><RouterLink to="/library">베터빌 뉴스</RouterLink></li>
                  <li><RouterLink to="/library/reportsch">논문 검색</RouterLink></li>
                </ul>
              </li>
              <li>
                <RouterLink to="/community" :class="{ on: route.path.startsWith('/community') }">커뮤니티</RouterLink>
                <ul class="sub-menu">
                  <li><RouterLink to="/community">자유 게시판</RouterLink></li>
                  <li><RouterLink to="/community/dignos_case">진단 케이스</RouterLink></li>
                  <li><RouterLink to="/community/event">이벤트</RouterLink></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex">
          <span class="identify">김베터 닥터</span>
          <div class="member">
            <button aria-label="멤버">
                <span class="ico_alarm">알람</span>
            </button>
            <ul class="sub-menu">
               <li><a href="#">마이페이지</a></li>
                <li><a href="#">고객센터</a></li>
                <li><a href="#">1:1문의하기</a></li>
                <li><a href="#">공지사항</a></li>
                <li><a href="#">로그아웃</a></li>
            </ul>
          </div>
          <SearchBox />
          <button class="btn-all-menu" :class="{on : !toggleMenu}" @click="handleToggle">
            <span class="ico-menu">전체 메뉴</span>
          </button>
        </div>
      </div>
      <div class="all-menu" :class="{on : !toggleMenu}">
        <div class="inner">
            <div className="col">
              <h2>클래스룸</h2>
              <ul>
                <li>
                  <RouterLink to="/class">임상강좌 VOD</RouterLink >
                </li>
                <li>
                  <RouterLink to="/class/live">Live 세미나</RouterLink >
                </li>
              </ul>
            </div>
            <div className="col">
              <h2>라이브러리</h2>
              <ul>
                <li>
                  <RouterLink to="/library">베터빌 뉴스</RouterLink >
                </li>
                <li>
                  <RouterLink to="/library/reportsch">논문 검색</RouterLink >
                </li>
              </ul>
            </div>
            <div className="col">
              <h2>커뮤니티</h2>
              <ul>
                <li>
                  <RouterLink to="/community">자유 게시판</RouterLink >
                </li>
                <li>
                  <RouterLink to="/community/dignos_case">진단케이스</RouterLink >
                </li>
                <li>
                  <RouterLink to="/community/event">이벤트</RouterLink >
                </li>
              </ul>
            </div>
        </div>
      </div>
  </header>
</template>