  <script setup>
  import Pagetitle from '../../components/layout/PageTitle.vue'
  import ListRecomm from '../../components/list/ListRecomm.vue'
  import ToggleBtns from '../../components/list/ToggleBtns.vue'
  import ListVod from '../../components/list/ListVod.vue'
  import ListLive from '../../components/list/ListLive.vue'
  import PickKeyword from './PickKeyword.vue'
  import Aside from '../../common/Aisde.vue'
  import { ref } from 'vue'; 
  import './main.css'
  const showCol = ref(true);
  // 상태 변경 함수
const toggleShowCol = () => {
  showCol.value = !showCol.value;
};

  </script>
  <template>
     <main>
      <section class="bg-gray">
        <div class="container" id="content"> 
          <div class="contents">
            <article>
              <PickKeyword />
              <Pagetitle title="임상강좌 VOD" />
              <ListVod type="main" :showCol="true" />
            </article>
             <article class="list-live">
              <Pagetitle title="Live 세미나" />
              <ListLive />
            </article>
          </div>
          <Aside />
        </div>
      </section>
      <section class="main-sec">
        <div class="container"> 
          <div class="contents">
            <article class="recomm">
              <ToggleBtns :showCol="showCol" :toggleShowCol="toggleShowCol" />
              <Pagetitle title="추천 콘텐츠" />
              <ListRecomm :showCol="showCol"/>
            </article>
          </div>
        </div>
      </section>
    </main>
  </template>

  