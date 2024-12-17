  <script setup>
    import "./layout.css"
    const props = defineProps({
      title: {
        type: String,
        required: true,
      },
      type : String,
    });
  </script>
  <template>
     <h2 class="page-title" :class="type">{{title}}</h2>
  </template>
