<script setup>
import Visual from '../../components/Layout/Visual.vue' 
import SchInput from '../../components/form/SchInput.vue'
import CaseBox from '../../components/community/CaseBox.vue'
import Aside from '../../common/Aisde.vue'
import './community.css'
import dogImg from '@/assets/images/dog_sample.jpg'
</script>
<template>
  <div id="content">
    <Visual bgType="case" title="진단 케이스" subTtitle="임상에 도움이 되는 다양한 진단케이스와 처방 노하우, 처방 가이드를 제공합니다." />
    <div class="container community"> 
      <div class="contents">
        <ul class="sch-group case">
          <SchInput />
        </ul>
        <div class="case-cont-wrap">
          <div class="flex-space top-opt">
              <strong>전체(10)</strong>
              <ul>
                <li><a href="#" class="on">최신순</a></li>
                <li><a href="#">조회순</a></li>
              </ul>
          </div>
          <div class="case-cont">
            <CaseBox 
              :img="dogImg"
               title = "반려동물 시술에 대한 교육자료 공유 반려동물 시술에 대한 교육자료 공유 반려동물 시술에 대한 교육자료 공유"
               text = "미국 항공우주국 홈페이지에 들어가면 누구나 허블 우주 망원경으로 관측해 촬영한 장엄한 우주 사진을 볼 수 있다. 장엄한 우주 사진을 볼 수 있다."
               hospital = "베터빌 병원"
               date = "2022-09-30"
               cnt = 5
            />
            <CaseBox 
              :img="dogImg"
               title = "반려동물 시술에 대한 교육자료 공유 반려동물 시술에 대한 교육자료 공유 반려동물 시술에 대한 교육자료 공유"
               text = "미국 항공우주국 홈페이지에 들어가면 누구나 허블 우주 망원경으로 관측해 촬영한 장엄한 우주 사진을 볼 수 있다. 장엄한 우주 사진을 볼 수 있다."
               hospital = "베터빌 병원"
               date = "2022-09-30"
               cnt = 5
            />
          </div>
        </div>
      </div>
      <Aside />
    </div>
  </div>
</template>