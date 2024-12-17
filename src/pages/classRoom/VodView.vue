<script setup>
import Aside from "../../common/Aisde.vue"
import Pagetitle from '../../components/layout/PageTitle.vue'
import FavIco from '../../components/layout/FavIco.vue'
import PrIotem from '../../components/class/ProItem.vue'
import  '../../components/List/list.css'
import './class.css'
import ProfilImg from '@/assets/images/profile_img.jpg'
import { ref } from 'vue';
import ListVodData from '@/data/ListVodData'
import { useRoute } from 'vue-router';
const route = useRoute();
const id = Number(route.params.id); 

// 해당 id에 해당하는 데이터를 찾음
const item = ref(ListVodData.find((vod) => vod.id === id));
if (!item.value) {
  console.error(`VOD with id ${id} not found`);
}
const isActive = ref(false); 
const handletoggle = () => {
  isActive.value = !isActive.value;
};
</script>
<template>
  <div class="container" id="content"> 
    <div class="contents">
      <Pagetitle title="임상강좌 VOD" />
      <div class="vod-video">
          <iframe src="https://www.youtube.com/embed/MjS4x2JOEYQ" />
      </div>
      <div class="vod-video-cont">
          <div class="vod-header">
            <span class="label line">심혈관 질환</span>
            <h3 class="clamp_line2">순환기(인터벤션)반려동물의 아토바스타틴/에제티미브 효능 및 임상적 데이터 데이터 리뷰와 효능에 관한 강좌</h3>
            <div className="hash"><span>#협심증</span><span>#심근경색</span><span>#동맥경색</span></div>
            <div class="live-state">
              <span>비공개</span>
              <span class="purple">대기중</span>
              <span class="skyblue">라이브</span>
            </div>
          </div>
          <ul class="cont">
            <li>
              <em>영상 제공기간</em>
              <span>2022.01.26~2023.01.26</span>
            </li>
            <li>
              <em>강의자료</em>
              <span className='file'><a href='#'>첨부파일명.pdf</a>/<a href='#'>첨부파일명.pdf</a></span>
            </li>
            <li>
              <em>다시보기</em>
              <span>제공하지 않음</span>
            </li>
          </ul>
      </div>
      <ul class="pro-lists">
        <PrIotem />
        <PrIotem />
      </ul>
      <div class="program-box">
        <ul class="program-list">
          <li>
            <em className='time'>00:25</em><span>강의 소개</span>
          </li>
          <li><span className="time">00:46</span><span>Idiopathic 란?</span></li>
          <li><span className="time">02:36</span><span>Outflow tract of Ventricle</span></li>
          <li><span className="time">03:21</span><span>Bundle branch block pattern</span></li>
          <li><span className="time">04:10</span><span>Axis</span></li>
        </ul>
        <div>
          <img :src="ProfilImg" alt="" />
        </div>
      </div>
      <div class="fav-row">
        <FavIco :className="{on :isActive }" :handletoggle="handletoggle" />
        <span class="num">15</span>
      </div>
      <div class="vod-guide-box">
        <strong>화면이 자꾸 끊기시나요?</strong>
        <p>- 네트워크 상태가 불안정할 경우, 화면이 끊길 수 있습니다.</p>
      </div>
    </div>
    <Aside />
   </div>
</template>