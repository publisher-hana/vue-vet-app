<script setup>
import { useRoute } from 'vue-router';
import PageTitle from '../components/layout/PageTitle.vue'
import News from '../components/aside/BestNews.vue'
import BannerItem from '../components/aside/BannerItem.vue'
import AsideList from '../components/aside/AsideList.vue'
import banner1 from '@/assets/images/banner_right.jpg'
import banner2 from '@/assets/images/banner_topic.jpg'
import ImgAside from '@/assets/images/aside_img.jpg'
const route = useRoute(); 
</script>
<template>
  <aside>
    <div v-if="route.path === '/'">
      <section>
        <PageTitle title="베터빌 인기 뉴스" type="aside" />
        <News />
      </section>
      <section>
        <BannerItem :imageUrl="banner1" />
        <BannerItem :imageUrl="banner2" />
      </section>
    </div>
    <div v-else-if="route.path === '/class'">
      <section>
        <PageTitle title="추천 VOD" type="aside" />
        <AsideList 
          :imgAside="ImgAside" 
          title="Clinical Implication of Glycemic Variability Glycemic Variabilit"
          presenter="이정은 교수 (ㅇㅇㅇ병원 00내과)" 
        />
      </section>
      <section>
        <BannerItem :imageUrl="banner1" />
      </section>
    </div>
    <div v-else-if="route.path === '/class/vod'">
      <section>
        <PageTitle title="추천 VOD" type="aside" />
        <AsideList 
          :imgAside="ImgAside" 
          title="Clinical Implication of Glycemic Variability Glycemic Variabilit"
          presenter="이정은 교수 (ㅇㅇㅇ병원 00내과)" 
        />
      </section>
      <section>
        <BannerItem :imageUrl="banner1" />
      </section>
    </div>
    <div v-else-if="route.path === '/class/live'">
      <section>
        <PageTitle title="추천 VOD" type="aside" />
        <AsideList 
          :imgAside="ImgAside" 
          title="Clinical Implication of Glycemic Variability Glycemic Variabilit"
          presenter="이정은 교수 (ㅇㅇㅇ병원 00내과)" 
        />
      </section>
      <section>
        <BannerItem :imageUrl="banner1" />
      </section>
    </div>
    <section v-else-if="route.path === '/library'">
      <BannerItem :imageUrl="banner1" />
    </section>
    <div v-else-if="route.path === '/library/newsview'">
      <section>
        <PageTitle title="베터빌 인기 뉴스" type="aside" />
        <News />
      </section>
      <section>
        <BannerItem :imageUrl="banner1" />
      </section>
    </div>
    <div v-else-if="route.path === '/community'">
      <section>
        <BannerItem :imageUrl="banner2" />
      </section>
    </div>
    <div v-else-if="route.path === '/community/dignos_case'">
      <section>
        <PageTitle title="추천 VOD" type="aside" />
         <AsideList 
          :imgAside="ImgAside" 
          title="Clinical Implication of Glycemic Variability Glycemic Variabilit"
          presenter="이정은 교수 (ㅇㅇㅇ병원 00내과)" 
        />
      </section>
      <section>
        <BannerItem :imageUrl="banner2" />
      </section>
    </div>
   

  </aside>
</template>