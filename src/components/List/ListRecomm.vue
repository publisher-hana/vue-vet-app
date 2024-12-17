  <script setup>
  import './list.css'
  import ListRecommData from '../../data/ListRecommData';
  import ListRecommItem from './ListRecommItem.vue'
   const props = defineProps({
    showCol: Boolean,
  });
  </script>
  <template>
    <div>

     <div v-if="showCol" class="list_style"> 
        <ul class="grid g_2col">
          <ListRecommItem 
             v-for="(item) in ListRecommData.slice(0, 4)" 
            :key="item.id" 
            :item="item" 
            :showCol="showCol"
          />
        </ul>
     </div>
      <div v-else class="list_style"> 
        <ul class="grid g_1col">
          <ListRecommItem 
             v-for="(item) in ListRecommData.slice(0, 4)" 
            :key="item.id" 
            :item="item" 
            :showCol="showCol"
          />
        </ul>
     </div>
    <button class="btn-more">더보기</button>
    </div>
  </template>
  