  <script setup>
  const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
   showCol: Boolean,
});
  </script>
  <template>
      <li>
        <a href="#" class="flex">
          <figure class="flex_sh0">
            <img :src="item.img" :alt="item.alt">
          </figure>
          <div class="caption">
            <span class="category">{{item.classify}}</span>
            <strong class="title">{{ item.title }}</strong>
            <p v-if="!showCol" class="desc clamp-2line">{{ item.desc }}</p>
          </div>
          
        </a>
      </li>
  </template>
