<template>
  <div>
<!--    <div class="head">-->
<!--      <a href="#" title="谷粒学院">-->
<!--        <img class="logo" src="~/assets/img/logo.png" lt="谷粒学院">-->
<!--      </a></div>-->
   <div >
      <div class="content">

      </div>
      <div class="video-wrap" style="width:100%;float:left;oveflow:hidden;">
        <iframe :src="Video.videoSourceId" frameborder='0'
                allow='autoplay;encrypted-media' allowfullscreen style='width:100%;height:500px;'>
        </iframe>
        <!-- <h3>{{this.Video.videoSourceId.videoOriginalName}}</h3> -->
      </div>
    </div>
  </div>
</template>

<script>
import course from "@/api/course";

export default {
  // asyncData({ params, error }) {
  //   return course.getVideoById(params.id).then(response => {
  //     console.log(response.data.data.item)
  //     return {
  //       Video: response.data.data.item,
  //     }
  //   })
  // },
  data(){
    return{
      Video: {}
    }
  },
  created() {
    console.log( this.$route.params.id);
    course.getVideoById(this.$route.params.id).then(response => {
        // console.log( response);
        this.Video=response.data.data.item
      })

  },
}
</script>

<style>
html,body{
  height:100%;
}
</style>
<style scoped>
.head {
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.head .logo{
  height: 50px;
  margin-left: 10px;
}
.body {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
