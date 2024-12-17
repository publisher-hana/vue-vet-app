  <script setup>
  import './list.css'
  import ListVodItem from './ListVodItem.vue'
  const props = defineProps({
    type: String, 
    showCol: Boolean,
  });
  const isMain = props.type === "main";
  import ListVodData from '@/data/ListVodData'
  </script>
  <template>
    <div>
     <div class="list_style col">        
        <ul v-if="showCol" class="grid g_3col">
          <ListVodItem
            v-for="(item) in (type === 'main' ? ListVodData.slice(0, 3) : ListVodData)"
            :key="item.id"
            :id="item.id"
            :labels="item.labels"
            :img="item.img"
            :title="item.title"
            :presenter="item.presenter"
            :showCol="showCol"
          />
        </ul>
        <ul v-else class="grid gd_1col">
        <ListVodItem
          v-for="(item) in (type === 'main' ? ListVodData.slice(0, 3) : ListVodData)"
          :key="item.id"
          :id="item.id"
          :labels="item.labels"
          :img="item.img"
          :title="item.title"
          :presenter="item.presenter"
            :showCol="showCol"
        />
        </ul>
     </div>
     <button class="btn-more" v-if="!isMain">더보기</button>
    </div>
  </template>
  