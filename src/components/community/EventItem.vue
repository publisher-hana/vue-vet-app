<script setup>
 const props = defineProps({
  img:String,
  alt:String,
  title : String,
  date:String,
  end:Boolean
 })
</script>
<template>
  <li class="grid-rd">
    <a href="#">
      <div v-if="end" class="cover">종료되었습니다</div>
      <figure><img :src="img" :alt="alt" /></figure>
      <figcaption>
        <strong class="title">{{title}}</strong>
        <sapn>{{date}}</sapn>
      </figcaption>
    </a>
  </li>
</template>