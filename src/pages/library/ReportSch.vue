<script setup>
import Visual from '../../components/Layout/Visual.vue' 
import ReportItem from '../../components/community/ReportItem.vue' 
import '../community/community.css'
</script>
<template>
  <div id="content">
    <Visual bgType="report" title="논문검색" subTtitle="국내외 다양한 논문검색 채널을 제공합니다." />
    <div class="container community"> 
        <ul class="grid g_3col report">
          <ReportItem 
            titleText="PubMed"
            desc="미국 국립의학도서관(NLM)에서 제공하는 최대 규모 서지 데이터베이스인 MEDLINE 검색 엔진"
            bgClass= "logo1"
          />
          <ReportItem 
            titleText="Google Scholar" 
            desc="전 세계 학술 연구 관련 데이터 제공"
            bgClass= "logo2"
          />
          <ReportItem 
            titleText="NDSL" 
            desc="과학기술정보의 전자도서관으로 지식발견형 검색서비스 제공"
            bgClass= "logo3"
          />
          <ReportItem 
            titleText="RISS" 
            desc="한국교육학술정보원에서 제공하는 학술연구정보화 시스템"
            bgClass= "logo4"
          />
          <ReportItem 
            titleText="Cochrane Library" 
            desc="연구 및 임상에서 활용가능한 데이터 제공"
            bgClass= "logo5"
          />
          <ReportItem 
            titleText="NEJM" 
            desc="세계 최고 권위의 저널 제공"
            bgClass= "logo6"
          />
          <ReportItem 
            titleText="JAMA" 
            desc="미국의학협회에서 출판되는 9종의 전문 임상 학술지 제공"
            bgClass= "logo7"
          />
          <ReportItem 
            titleText="THE LANCET" 
            desc="영국 최고 권위의 저널 제공"
            bgClass= "logo8"
          />
      </ul>
    </div>
  </div>
</template>