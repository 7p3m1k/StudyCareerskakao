<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div class="footer_title">
        카카오의 다양한 소식을 확인하세요
      </div>
      <ul>
        <li class="kakao">
          <a href="" class="blind">카카오톡</a>
        </li>
        <li class="instar">
          <a href="" class="blind">인스타그램</a>
        </li>
        <li class="youtube">
          <a href="" class="blind">유튜브</a>
        </li>
        <li class="linked">
          <a href="" class="blind">링크드인</a>
        </li>
        <li class="facebook">
          <a href="" class="blind">페이스북</a>
        </li>
      </ul>
      <div class="info">
        <div class="info-left">
          <a href="" class="info01 active">개인정보처리방침</a>
          <a href="" class="info02">이용약관</a>
          <a href="" class="ko">한국어</a>
          <div class="copyright">
            © Kakao Corp. All rights reserved.
          </div>
        </div>
        <div class="info-right other-site">
         관련사이트
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer.vue"
}
</script>

<style scoped>
.footer-wrapper {
  border-top: 1px solid #ebebeb;
  background: #ffffff;
}

.footer {
  width: 1296px;
  padding: 59px 0 36px;
  margin: 0 auto;
}

.footer_title {
  font-size: 32px;
  font-weight: bold;
  line-height: 47px;
  letter-spacing: -0.8px;
  text-align: center;
}

.blind {
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  overflow: hidden;
}

ul {
  display: flex;
  justify-content: center;
  padding: 24px 0 48px;
}

.kakao {
  width: 60px;
  height: 60px;
  margin: 0 12px;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) -140px 0 no-repeat;
  background-size: 260px 251px;
}

.instar {
  width: 60px;
  height: 60px;
  margin: 0 12px;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) -140px -60px no-repeat;
  background-size: 260px 251px;
}

.youtube {
  width: 60px;
  height: 60px;
  margin: 0 12px;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) -140px -120px no-repeat;
  background-size: 260px 251px;
}

.linked {
  width: 60px;
  height: 60px;
  margin: 0 12px;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) -140px -180px no-repeat;
  background-size: 260px 251px;
}

.facebook {
  width: 60px;
  height: 60px;
  margin: 0 12px;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) 0  -191px no-repeat;
  background-size: 260px 251px;
}

.info {
  display: flex;
  justify-content: space-between;
}

/*info-left*/

.info-left > a{
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
  vertical-align: bottom;
  letter-spacing: -0.4px;
}

.info01 {
  color: black;
  font-weight: bold;
  padding-right: 20px;
}

.info02 {
  padding-right: 20px;
  color: #888;
}

.ko {
  color: #888;
}

.copyright {
  font-size: 14px;
  color: #888;
  line-height: 20px;
}

/*info-right*/

.other-site {
  width: 222px;
  padding: 10px 24px 11px;
  border-radius: 24px;
  font-size: 13px;
  color: #888;
  letter-spacing: -0.2px;
  background: #eee;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.other-site:after {
  display: inline-block;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) 0 -160px no-repeat;
  background-size: 260px 251px;
  vertical-align: top;
  content: '';
  width: 12px;
  height: 12px;
  margin-top: 5px;
}

</style>