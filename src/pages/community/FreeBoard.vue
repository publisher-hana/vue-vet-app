<script setup>
import Visual from '../../components/Layout/Visual.vue' 
import SchSelectBox from '../../components/form/SchSelectBox.vue'
import SchInput from '../../components/form/SchInput.vue'
import Aside from '../../common/Aisde.vue'
import '../../components/form/form.css'
import './community.css'
const selectList = [
    { label: "제목" },
    { label: "제목+내용"},
    { label: "내용" },
  ];
</script>
<template>
  <div id="content">
    <Visual bgType="freeboard" title="자유게시판" subTtitle="회원들과 자유롭게 이야기를 나누고, 함께 만들어가는 공간입니다." />
    <div class="container community"> 
      <div class="contents">
        <ul class="sch-group board">
          <SchSelectBox :selectList="selectList" />
          <SchInput />
        </ul>
        <div class="community-tb">
          <table>
            <caption>번호,제목, 작성자, 작성일, 추천으로 구성된 테이블</caption>
            <colgroup><col width="80px"><col width="auto"><col width="185px;"><col width="100px"><col width="80px"></colgroup>
            <thead><tr><th scope="col">번호</th><th scope="col" class="align_left">제목</th><th scope="col">작성자</th><th scope="col">작성일</th><th scope="col">추천</th></tr></thead>
            <tbody><tr><td>215</td><td class="title"><RouterLink to="/community/freeBoardview">이미지 사이트 추천해주세요</RouterLink><span class="comm-cnt">[13]</span><i class="ico_new"></i></td><td>홍길동</td><td>2022-10-04</td><td>406</td></tr><tr><td>214</td><td class="title"><RouterLink to="/community/freeBoardview">세미나 수강 및 설문조사</RouterLink><span class="comm-cnt">[2]</span></td><td>김사무엘라</td><td>2023-10-04</td><td>406</td></tr><tr><td>213</td><td class="title"><RouterLink to="/community/freeBoardview">이미지 사이트 추천해주세요</RouterLink></td><td>동물사랑협회</td><td>2022-10-04</td><td>406</td></tr></tbody>
          </table>
        </div>
        <button class="btn-more">더보기</button>
      </div>
      <Aside />
    </div>
  </div>
</template>