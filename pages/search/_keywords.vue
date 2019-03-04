<template>
  <div class="home">
    <div class="main">
      <video-list :searchInfo="searchInfo" :pic="pic"/>
    </div>
  </div>
</template>
<script>
import axios from '../../plugins/axios'
import videoList from '../../components/videoLists'
  export default{
    data(){
      return{
        keyWords:'',
        searchInfo:'',
        info:[],
        infos:[],
        pic:[]

      }
    },
    components:{
      videoList
    },
    mounted(){
      this.keyWords =  this.$route.query.keyWords
      let that = this
      axios({
        method:'post',
        url:'getSearchInfo',
        data:{
          keyWords:that.keyWords
        }
      }).then(res=>{
        that.searchInfo=res.data.msg.posts
        console.log(that.searchInfo[1].content.match(/http.(.*?).jpg/)[0])
        for(let i = 0; i<that.searchInfo.length;i++) {
         that.infos[i]=(function(){
            let reg = /http(.*?).jpg/
            let pic = that.searchInfo[i].content.match(reg)
            return pic
          })(i)
        }
        for(let a=0; a<that.searchInfo.length;a++){
          that.info.push(that.infos[a][0])
          that.pic.push(that.info[a])
        }
      console.log(that.infos[0])
      })
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
      background #21243a
      margin-top 100px
      padding-top 30px
      padding-bottom 30px
  @media screen and (max-width: 480px)
    .main
      width 100% !important

</style>
