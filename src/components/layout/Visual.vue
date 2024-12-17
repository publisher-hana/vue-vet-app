<script setup>
  import './layout.css'
  const props = defineProps({
    bgType: String,
    title: {
      type: String,
      required: true,
    },
    subTtitle: {
      type: String,
      required: true,
    },
  });
</script>
<template>
 <div class="visual_wrap">
  <div class="visual" :class="bgType">
    <div className="visual_inner">
      <h2>{{title}}</h2>
      <p>{{subTtitle}}</p>
    </div>
  </div>
 </div>
</template>