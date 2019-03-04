<template>
  <div class="home">
     <div class="main">
       <div class="post-detail">
         <div class="post">
            <h1>{{videoInfo.title}}</h1>
            <p>{{videoInfo.time}}</p>
           <img :src="pic" class="mobilePic">
            <p class="detail">  {{  detail}}</p>
         </div>
       </div>
       <div class="video-player" ref="video">
         <video autoplay controls="controls" :src="videoLink">

         </video>
       </div>
       <div class="video-list">
         <ul>
           <li v-for="(item,idx) in videos" :key="idx" @click="play(idx)">第{{idx+1}}话</li>
         </ul>
       </div>
     </div>
  </div>
</template>
<script>
import axios from '../../plugins/axios'
  export default{
    data(){
      return{
        vid:'',
        pic:'',
        detail:'',
        videoInfo:'',
        videos:'',
        videoLink:''
      }
    },
    mounted(){
      this.vid =  this.$route.query.vid
      let that = this
      axios({
        method:'post',
        url:'getVideos',
        data:{
          vid:that.vid
        }
      }).then(res=>{
        if(res.data.msg.result.content.match(/http.(.*?).jpg/)) {
          that.pic = res.data.msg.result.content.match(/http.(.*?).jpg/)[0]
        }
        that.videoInfo = res.data.msg.result
         that.detail = res.data.msg.result.content.substring(77)

        that.videos = res.data.video.videos
        console.log(that.videos)
      })
    },
    methods:{
      play:function (i) {
        this.$refs.video.style.display='block'
        this.videoLink = this.videos[i].content
        console.log(i)
      }

    }
  }
</script>
<style lang="stylus">
  .home
    width 100%
    overflow hidden
    background #151c2d
    color #fff
    padding-bottom 50px
    .main
      width 1120px
      margin 0 auto
      overflow hidden
      .post-detail
        width 70%
        margin 0 auto
        overflow hidden
        background #21243a
        margin-top 150px
        .post
          text-align center
          overflow hidden
          h1
            text-align center
            margin-top 20px
          p
            text-align center
            margin-top 20px
          img
            margin-top 40px
          .detail
            text-align left
            color #ddd
            font-size 14px
            padding-left 10px
            padding-right 10px
      .video-list
        width 70%
        margin 0 auto
        margin-top 50px
        ul
          display flex
          flex-wrap wrap
          align-items center
          justify-content space-around
          padding 0
          li
            background #21243a
            width 49%
            height 40px
            list-style-type none
            text-align center
            cursor pointer
            line-height 40px
            margin-top 10px
      .video-player
        width 70%
        margin 0 auto
        display none
        z-index 9
        video
          width 100%
          height 500px
          z-index 9
@media screen and (max-width: 480px)
  .main
    width 100% !important
    .video-player
      width 70%
      margin 0 auto
      display none
      video
        width 100%
        height 300px !important
  
  .mobilePic
    width 200px
</style>
