  <script setup>
  import './list.css'
  const props = defineProps({
    showCol: Boolean,
    toggleShowCol: Function, 
  });
  const setShowCol = (value) => {
    if (props.showCol !== value) {
      props.toggleShowCol(); // 상태가 다를 때만 부모의 toggleShowCol 실행
    }
  };
  </script>
  <template>
    <div class="toggle_btns">
      <button
        class="album"
        :class="{ on: showCol }"
         @click="() => setShowCol(true)"><span className='blind'>앨범형</span></button>
       <button
        class="list"
        :class="{ on: !showCol }"
         @click="() => setShowCol(false)"><span className='blind'>리스트형</span></button>
    </div>
  </template>
  