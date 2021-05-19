<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">YYZ</a><span>|</span>
      <a href="">Vue</a><span>|</span>
      <a href="">嘤嘤嘤</a><span>|</span>
      <a href="">呜呜呜呜</a>
    </div>
    <div class="copyright">CopyRight © <span>2010 - 2021</span> Xiaomi</div>
  </div>
</template>

<script>
export default {
 name: 'nav-footer',
}
</script>

<style lang="scss" scoped>
  .footer {
    height: 234px;
    border-top: 4px solid #FF6600;
    background-color: #333;
    color: #999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;
      img {
        width: 56px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link {
      margin-bottom: 5px;
      a {
        color: #999;
        display: inline-block;
        &:hover {
          color: #FF6600;
        }
      }
      span {
        margin:0px 20px;
      }
    }
    .copyright {
      span {
        color: #FF6600;
      }
    }
  }
</style>