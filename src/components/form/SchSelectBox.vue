  <script setup>
  const props = defineProps({
   selectList: {
    type: Array,
    required: true,
  },
});
  </script>
  <template>
     <li>
      <select class="sch-select">
         <option v-for="(item, index) in selectList" :key="index" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </li>
  </template>
