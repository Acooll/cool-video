<template>
   <div class="homeWrap">
    <div class="main">
      <div class="searchBox">
        <div class="search">
          <input type="text" placeholder="搜索一下菊花又不会坏......" ref="value">
          <div class="searchIcon">
            <img src="../static/images/search.png" height="30" width="30" @click="goSearch" />
          </div>
        </div>
      </div>
      <div class="week-list">
        <ul class="day">
          <li v-for="(item,idx) in days" @click="chooseDay(idx)" :key="idx" :class="activeIdx===idx? 'activeClass' :''">{{item}}</li>
        </ul>
        <ul class="content">
          <li v-for="item in day" @click="goPlay(item)"><a href="#"><img :src="item.suo" alt=""><div class="title">{{item.title}}</div></a></li>
        </ul>
      </div>
      <div class="rec-title">
        <span>推荐</span>
      </div>
      <div class="rec-wrap">
        <div class="recommend">
          <ul>
            <li v-for="item in commons" @click="toPlay(item)"><a href="#"><img :src="getPic(item.content)">
              <div class="info">
                <div>{{item.time}}</div>
                <h5>{{item.title}}</h5>
              </div>
            </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="rec-title">
        <span>最近更新</span>
      </div>
      <div class="post-list">
        <ul class="post-content">
          <li  v-for="item in posts" @click="toPlay(item)"><a href="#">
            <img :src="getPic(item.content)">
            <div class="info">
              <div>
                {{item.time}}
              </div>
              <h5>{{item.title}}</h5>
            </div>
          </a>
          </li>
        </ul>
      </div>
    </div>
   </div>
</template>

<script>
import axios from '../plugins/axios'

export default {
  data(){
    return{
      posts:'',
      weeks:'',
      commons:'',
      day:'',
      days:['周一','周二','周三','周四','周五','周六','周日'],
      activeIdx:0

    }
  },
  components: {

  },
  mounted(){
    let that = this
    axios.get('getPosts').then(res=>{
      that.posts = res.data.msg.posts
      that.pic = that.posts[3].content.match(/http(.*?).jpg/)
      console.log(that.pic)
    });
    axios.get('getWeeks').then(res=>{
      that.weeks = res.data.msg.data
      that.day = res.data.msg.data[0].content
      console.log(that.weeks)
    });
    axios.get('getCommons').then(res=>{
      that.commons = res.data.msg.posts
      console.log(that.commons)
      // that.pic = that.commons[1].content.match(/http(.*?).jpg/)
      // console.log(that.pic[0])
    })
  },
  methods:{
    goPlay:function (i) {
      console.log(i.av)
      // location.href='/play/av'+i.av
      this.$router.push({path:'/play',query:{vid:i.av}})
    },
    chooseDay:function (i) {
      this.day = this.weeks[i].content
      this.activeIdx = i
    },
    goSearch:function () {
      if(this.$refs.value.value) {
        this.$router.push({path: '/search', query: {keyWords: this.$refs.value.value}})
      }
    },
    getPic:function (i) {
      if (i.match(/http.(.*?).ye81/)) {
        return i.match(/http.(.*?).ye81/)[0]
      } else if (i.match(/http.(.*?).jpg/)) {


      return i.match(/http.(.*?).jpg/)[0]
    }else{
        return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551531020027&di=50fe347633be3f9e56d8aa858ddb38be&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b887574ef5746ac72525ae7de24d.jpg'
      }
    },
    toPlay(i){
      this.$router.push({path:'/play',query:{vid:i.id}})
    }

  }

}
</script>

<style lang="stylus">
.homeWrap
  width 100%
  /*height 2500px*/
  overflow hidden
  background #151c2d
  margin-top 59px
  .main
    width 1120px;
    margin 0 auto
    /*background orange*/
    overflow hidden
    color #fff
    .searchBox
      width 100%
      height 100px
      position relative
      margin-top 50px
      overflow hidden
      .search
        position absolute
        top 50%
        left 35%
        border-radius 20px
        input
          width 400px
          height 38px
          border-radius 20px
          color rgba(255,255,255,0.8)
          background #21243a
          padding-left 10px
          border none
        .searchIcon
          display inline-block
          position absolute
          margin-top -34px
          right 0
    .week-list
      width 100%
      /*height 329px*/
      .day
        width 100%
        height 59px
        list-style-type none
        color #fff
        text-align center
        font-weight bold
        line-height 59px
        margin-top 50px
        padding-left 120px
        li
          width 80px
          height 29px
          text-align center
          line-height 29px
          cursor pointer
          float left
          border-radius 5px
          background #21243a
          margin-left 40px
        .activeClass
          background #009cff
      .content
        width 100%
        overflow hidden
        background #21243a
        list-style-type none
        position relative
        li
          width 200px
          height 120px
          float left
          cursor pointer
          a
            display flex
            align-items center
            color #fff
            img
              width 100px
              height 100px
              border-radius 50%
              margin-top 15px
            .title
              width 100px
              display inline-block
              flex 1
              padding 0 10px
              font-size 13px
    .rec-title
      width 100%
      height 40px
      line-height 40px
      background #21243a
      margin-top 10px
     span
      width 150px
      height 19px
      text-align center
      border-left #f52323 3px solid
      font-size 15px
      padding-left 30px
    .rec-wrap
      width 100%
      position relative
      height 399px
      overflow hidden
      .recommend
        /*width 2240px*/
        height 395px
        background  #21243a
        ul
          /*width 2200px*/
          li
            float left
            width 216px
            height 355px
            list-style-type none
            a
              font-size 15px
              color #fff
              img
                width 200px
                height 300px
              info
                font-size 15px
    .post-list
      width 100%
      height 1460px
      background  #21243a
      ul
        width 100%
        height 1420px
        list-style-type none
        margin 0 auto
        li
          width 210px
          height 355px
          float left
          a
            display inline-block
            img
              width 186px
              height 250px
            .info
              font-size 15px
              color #fff

@media screen and (max-width: 480px)
  .homeWrap
    /*height 5000px!important*/
    .main
      width 100% !important
      .search
        width 80%;
        margin-left -92px
        input
          width 100% !important
      .week-list
        /*height 480px !important*/
        .day
          height 200px !important
          padding-left 15px !important
          margin-top 10px !important
          li
            margin-top 20px
            margin-left 25px !important
      .content
        width 100%
        /*height 300px !important*/
        overflow hidden
        margin-top -20px !important
        li
          width 160px !important
          height 100px !important
          img
            width 70px!important
            height 70px !important
          .title
            width 70px !important
      .rec-wrap
        width 100%
        height 980px !important
        .recommend
          ul
            margin-left -35px
            li
              width 170px!important
              height 320px !important
              margin-top 10px
              margin-left 5px
              img
                width 170px !important
                height 260px !important
      .post-list
        width 100%
        height 3300px!important
        ul
          padding 0 !important
          li
            width 170px!important
            height 320px !important
            margin-top 10px
            margin-left 5px
            img
              width 170px !important
              height 260px !important

</style>
