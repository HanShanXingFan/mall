<template>
  <div>
    <div class="footer">
      <div class="footer-logo">
        <img src="/imgs/logo-footer.png" alt="">
        <a href="javascript:;" style="display: block;
    color: #999;">小米商城</a>
      </div>
      <div class="footer-link">
        <a href="javascript:;">河畔一角主页</a><span>|</span>
        <a href="javascript:;">vue全栈课程</a><span>|</span>
        <a href="javascript:;">React全家桶课程</a><span>|</span>
        <a href="javascript:;">微信支付课程</a><span>|</span>
        <a href="javascript:;">河畔一角主页</a>
      </div>
      <div class="copyright">
        © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavFooter'
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/config.scss';
  .footer {
    // position: fixed;
    bottom: 0;
    width: 100%;
    height: 234px;
    border-top: 4px solid #ff6600;
    background-color: #333;
    color: #999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;
      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link {
      a {
        color: #999;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
    }
  }
</style>