<script setup>
  const props = defineProps({
    titleText: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    bgClass: {
      type: String,
      required: true,
    },
  });
</script>
<template>
 <li class="grid-rd">
    <a href="#">
      <div class="info">
        <h3>{{titleText}}</h3>
        <p>{{desc}}</p>
      </div>
      <div class="logo-box">
          <span :class="['journal', bgClass]"></span>
      </div>
    </a>
 </li>
</template>