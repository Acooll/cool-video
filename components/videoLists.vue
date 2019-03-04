<template>
  <div class="videoLists">
    <ul>
      <li v-for="(item,idx) in searchInfo" :key="idx" @click="goPlay(item)">
        <img :src="getPic(item.content)" alt="">
        <p>{{item.time}}</p>
        <h5>{{item.title}}</h5>
      </li>

    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      searchInfo:'',
      pic:''
    },
    data(){
      return{
      }
    },
    mounted(){

    },
    methods:{
      goPlay:function (i) {
        this.$router.push({path:'/play',query:{vid:i.id}})
      },
      getPic(i){
        if(i.match(/http.(.*?).jpeg/)){
          return i.match(/http.(.*?).jpeg/)[0]
        }else if(i.match(/http.(.*?).png/)){
          return i.match(/http.(.*?).png/)[0]
        }else if( i.match(/http.(.*?).jpg/)){
          return i.match(/http.(.*?).jpg/)[0]
        }else{
          return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551531020027&di=50fe347633be3f9e56d8aa858ddb38be&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b887574ef5746ac72525ae7de24d.jpg'
        }
      }
    }
  }
</script>
<style lang="stylus">
  .videoLists
    width 100%
    ul
      display flex
      flex-wrap wrap
      justify-content space-around
      li
        width 220px
        height 300px
        list-style-type none
        color #fff
        margin-top 16px
        img
          width 220px
          height 250px
        p
          margin-top 5px
          font-size 15px
        h5
          margin-top 5px
@media screen and (max-width :480px)
  .videoLists
    ul
      padding 0 !important
      li
        width 180px !important
        justify-content space-between !important
        img
          width 180px !important


</style>
