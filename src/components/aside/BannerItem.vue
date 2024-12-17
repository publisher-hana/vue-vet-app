<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    required: true
  } 
})
</script>
<template>
   <a href="#" class="banner">
      <img :src="imageUrl" alt="" />
  </a>
</template>