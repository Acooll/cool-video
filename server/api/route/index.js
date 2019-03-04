const Koa = require('koa');
const axios = require('axios');
const router = require('koa-router')()

router.get('/getPosts', async ctx=>{
  await axios.get('https://api.clicli.top/posts/type?status=public&page=1&pageSize=20').then(res=>{
    posts = res.data
  })


  ctx.body={
    code:200,
    msg:posts
  }
})
router.get('/getWeeks', async ctx=>{
  await axios.get('https://www.clicli.top/week/').then(res=>{
    weeks = res.data
  })
  ctx.body={
    code:200,
    msg:weeks
  }
})
router.get('/getCommons', async ctx=>{
  await axios.get('https://api.clicli.top/posts/both?status=public&type=tuijian&page=1&pageSize=5').then(res=>{
    commons = res.data
  })
  ctx.body={
    code:200,
    msg:commons
  }
})
router.post('/getVideos', async ctx=>{
  await axios.get('https://api.clicli.top/post/'+ctx.request.body.vid).then(res=>{
    videoInfo = res.data
  })
  await axios.get('https://api.clicli.top/videos?pid='+ctx.request.body.vid+'&page=1&pageSize=150').then(res=>{
    videos = res.data
  })
  ctx.body={
    code:200,
    msg:videoInfo,
    video:videos
  }
})
router.post('/getSearchInfo', async ctx=>{
  await axios.get('https://api.clicli.top/search/posts?key='+encodeURI(ctx.request.body.keyWords)).then(res=>{
    searchInfo = res.data
  })
  ctx.body={
    code:200,
    msg:searchInfo,
  }
})

module.exports = router
