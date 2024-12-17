<script setup>
const props = defineProps({
  className: {
    type: Object,
    required: false,
  },
  handletoggle: {
    type: Function,
    required: true,
  },
});
</script>
<template>
  <button class="btn-heart" :class="className" @click="handletoggle"></button>
</template>