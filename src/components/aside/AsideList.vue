<script setup>
const props = defineProps({
  imgAside:String,
  title:String,
  presenter:String
})
</script>
<template>
  <a href="#" class="vod-row">
    <figure><img :src="imgAside" alt="" /></figure>
    <div>
      <strong class="clamp-2line title">{{title}}</strong>
      <span class="txt-small">{{presenter}}</span>
    </div>
  </a>
</template>