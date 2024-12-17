<script setup>
import Visual from '../../components/Layout/Visual.vue' 
import SchDataInput from '../../components/form/SchDataInput.vue'
import SchInput from '../../components/form/SchInput.vue'
import Aside from '../../common/Aisde.vue'
import '../../components/form/form.css'
import '../community/community.css'
</script>
<template>
  <div id="content">
    <Visual bgType="news" title="베터빌 뉴스" subTtitle="수의학계 각종 현안 및 관심사와 연관된 최신 뉴스를 제공합니다." />
    <div class="container community"> 
      <div class="contents">
        <ul class="sch-group news">
          <SchDataInput />
          <SchInput />
        </ul>
        <div class="community-tb news">
          <table>
            <caption>베터빌 뉴스 테이블</caption>
            <colgroup><col width="120px"><col width="auto"></colgroup>
            <tbody>
              <tr>
                <td>2022.05.06</td>
                <td class="title"><RouterLink to="/library/newsview">'길고양이 TNR, 마당개 중성화 문제 많다' 수의사회 보이콧 움직임</RouterLink></td>
              </tr>
              <tr>
                <td>2022.05.06</td>
                <td class="title"><RouterLink to="/library/newsview">NSIAD 사용에 따른 Ulcer 예방을 위한 처방증례 Ulcer 예방을 위한 처방증례 Ulcer 예방(정제, 캡슐제, 과립자) NSIAD 사용에 따른 Ulcer 예방을 위한 처방증례 Ulcer 예방을 위한 처방증례 Ulcer 예방(정제, 캡슐제, 과립자) NSIAD 사용에 따른 Ulcer 예방을 위한 처방증례</RouterLink></td>
              </tr>
              <tr>
                <td>2022.05.06</td>
                <td class="title"><RouterLink to="/library/newsview">'길고양이 TNR, 마당개 중성화 문제 많다' 수의사회 보이콧 움직임</RouterLink></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button class="btn-more">더보기</button>
      </div>
     <Aside />
    </div>
  </div>
</template>