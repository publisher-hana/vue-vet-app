  <script setup>
  const props = defineProps({
    label: String,
    img: String,
    title: String,
    date: String,
  });
  </script>
  <template>
    <li>
       <RouterLink to="/class/vod/">
        <figure>
          <img :src="img" alt="" />
          <span class="label">{{label}}</span>
        </figure>
        <div class="caption">
          <strong class="title clamp-2line">{{ title }}</strong>
          <span class="desc">{{ date}}</span>
        </div>
      </RouterLink>
    </li>
  </template>