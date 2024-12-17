  <script setup>
  const props = defineProps({
   id:Number,
   img:String,
   title: String,
   presenter:String,
   labels:Object,
   showCol:Boolean
});
  </script>
  <template>
      <li>
        <RouterLink to="/class/vod/" :class="{flex : !showCol }">
          <figure>
            <img :src="img" alt="" />
          </figure>
          <div class="caption">
            <div>
              <span 
                v-for="(label, index) in labels"
                :key="index"
                :class="{ line: label === '피부', orange: label === 'LIVE'  }"
              class="label">{{label}}</span>
            </div>
            <strong class="title clamp-2line">{{ title }}</strong>
            <span class="desc">{{ presenter}}</span>
          </div>
        </RouterLink>
      </li>
  </template>
