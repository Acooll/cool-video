<template>
  <div>
    <div class="nav-bar"></div>
    <div class="headerNav">
      <div class="wrap">
        <div class="logo">
          <a href="/">
            <img src="https://i.loli.net/2018/10/01/5bb1c251c2415.png" alt="">
          </a>
        </div>
        <ul class="menu">
            <a href="">
              <li>
                <img src="../static/images/iptv.png" height="20" width="20"/>
                主站
              </li>
            </a>
            <a href="">
              <li>原创</li>
            </a>
            <a href="">
              <li><span>留言报错</span></li>
            </a>
            <a href="">
              <li>
                使用说明
              </li>
            </a>
            <a href="">
              <li>
                投稿教程
              </li>
            </a>
            <a href="">
              <li>贴视频</li>
            </a>
            <a href=""><li>APP下载</li></a>
        </ul>
        <ul class="loginInfo">
          <a href="">
            <li>登录</li>
          </a>
          <a href="">
            <li>注册</li>
          </a>
          <a href="">
            <li>
              投稿
            </li>
          </a>
        </ul>
      </div>
    </div>
    <nuxt/>
    <div class="footer">
      <div class="wrap">
        <p ><span style="background: #ff005e;color: #fff;padding: 2px 5px 3px 5px">版权、合作 : admin@cli.moe</span></p>
        <p style="margin-top: 15px">
          <span>
            cool-video © 2019 Powered by
         </span>
         <span style="color: rgb(240, 208, 85);">
            Nuxt
         </span>
         <span>
           +
         </span>
         <span style="color: rgb(102, 178, 108);">
           Koa2
         </span>
         <span>
           +
         </span>
         <span style="color: rgb(89, 207, 220);">
           Vue
         </span>
         <span>
           +
         </span>
         <span style="color: rgb(255, 0, 94);">
           Bootstrap
         </span>
       </p>
      </div>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 100%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #151c2d;
}
a{
  text-decoration: none;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.nav-bar {
  width: 100%;
  height: 3px;
  background: #009cff;
  z-index: 99999;
  position: fixed;
  top: 0;
}
.headerNav{
  width: 100%;
  top: 0;
  background: #21243a;
  padding: 10px;
  position: fixed;
  z-index: 9999;
  overflow: hidden;

}
.wrap{
  width: 1120px;
  margin: 0 auto;
}
.logo{
 position: fixed;
}
.logo img{
  width: 52px;
  height: 40px;
  position: absolute;
  overflow: hidden;
  z-index: 999;
}
.menu{
  margin-left: 120px;
  list-style-type: none;
  height: 39px;
  line-height: 39px;
}
.menu a{
  display: inline-block;

}
.menu a li{
  display: inline-block;
  width: 80px;
  height: 19px;
  color: rgba(255,255,255,0.8);
  font-size: 15px;
  text-align: center;
  line-height: 19px;
}
.loginInfo{
  display: inline-block;
  margin-left: 10px;
  list-style-type: none;
  float: right;
  margin-top: -28px;
}
.loginInfo a{
  display: inline-block;
}
.loginInfo a li{
  width: 50px;
  height: 19px;
  color: rgba(255,255,255,0.8);
  font-size: 15px;
}
.footer{
  width: 100%;
  height: 112px;
  background: #131629;
}
.footer .wrap p{
  height: 20px;
  text-align: center;
  color: #fff;
}
@media screen and (max-width: 480px){
 .menu{
    width: 100%;
    margin-left: 60px !important;
    float: left;
    white-space:nowrap;
    box-sizing:border-box;
    overflow-x: scroll;
    padding-right: 60px;
  }
  .menu::-webkit-scrollbar {display:none}
 .loginInfo{
  display: none !important;
 }
.wrap{
  width: 100% !important;
}
.footer{
  width: 100%;
}
}
</style>
