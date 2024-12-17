<script setup>
import Pagetitle from '../../components/layout/PageTitle.vue'
import ListVod from '../../components/list/ListVod.vue'
import ToggleBtns from '../../components/list/ToggleBtns.vue'
import RecommVod from '../../components/aside/RecommVod.vue'
import '../../components/Layout/layout.css'
import '../../components/form/form.css'
import SchDataInput from '../../components/form/SchDataInput.vue'
import SchSelectBox from '../../components/form/SchSelectBox.vue'
import SchInput from '../../components/form/SchInput.vue'
import Aside from "../../common/Aisde.vue"
import { ref } from 'vue'; 

const showCol = ref(true);
  // 상태 변경 함수
const toggleShowCol = () => {
  showCol.value = !showCol.value;
};
const selectList1 = [
    { label: "질환군", value: "disease" },
    { label: "피부", value: "skin" },
    { label: "호흡기질환", value: "respiratory" },
  ];
  const selectList2 = [
    { label: "연자명", value: "actor1" },
    { label: "장재원", value: "actor2" },
    { label: "이혜원", value: "actress" },
  ];

</script>
<template>
  <div class="container" id="content"> 
    <div class="contents">
       <ToggleBtns :showCol="showCol" :toggleShowCol="toggleShowCol" />
      <Pagetitle title="임상강좌 VOD" />
      <ul class="sch-group">
        <SchDataInput />
        <SchSelectBox :selectList="selectList1"  />
        <SchSelectBox :selectList="selectList2" />
        <SchInput />
      </ul>
      <ListVod :showCol="showCol" />
    </div>
    <Aside />
  </div>
</template>