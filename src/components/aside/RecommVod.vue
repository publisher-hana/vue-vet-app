  <script setup>
    import "./aside.css"
    import ImgAside from '@/assets/images/aside_img.jpg';
    const props = defineProps({
      presenter :{
        type: String,
        required : true
      }
    })
  </script>
  <template>
    <div class="vod-row">
      <a href="#">
        <span className="img">
          <img :src="ImgAside" alt="" />
        </span>
        <div className="cont">
          <strong className="title clamp-2line">
            Clinical Implication of Glycemic Variability Glycemic Variabilit
          </strong>
          <p v-if = "presenter" className="txt-small">{{presenter}}</p>
        </div>
      </a>
    </div>
  </template>
