<template>
  <div>
    <Nav />
    <div class="main_banner"/>
    <div class="main">
      <div class="main_title_wrapper">
        <div class="main_title">Join the krew</div>
        <div class="main_title_desc">
          카카오 크루는 우리의 일상을 더 좋게 만들고 싶은 멋진 동료입니다. <br/>
          다양한 생각을 자유롭게 나누며, 언제나 놀라운 결과를 만들어내죠. <br/>
          당신도 세상을 바꾸고 싶나요? 카카오로 오세요!!
        </div>
      </div>
      <div class="section_top">
        <div class="section_top_title">관심있는 공고를 찾아보세요</div>
        <ul>
          <li>
            <a href=""># 테크</a>
          </li>
          <li>
            <a href=""># 서비스비즈</a>
            </li>
          <li>
            <a href=""># 디자인</a>
          </li>
          <li>
            <a href=""># 브랜드</a>
          </li>
          <li>
            <a href=""># 스태프</a>
          </li>
        </ul>
        <div class="section_top_list">
          <div class="big-card">
            <div class="card-text">기술과 사람으로 더 나은 세상을 만듭니다.</div>
            <button>
              카카오 문화 바로가기
              <i class="bi bi-arrow-right"></i>
            </button>
            <div class="big-card_img">
              <img src="https://t1.kakaocdn.net/career_public/images/img_culture.png" alt="">
            </div>
          </div>
          <ul>
            <li>
              100% 리얼 스토리 <br/>
              카카오 크루 이야기
            </li>
            <li>
              100% 리얼 스토리 <br/>
              카카오 크루 이야기
            </li>
            <li>
              100% 리얼 스토리 <br/>
              카카오 크루 이야기
            </li>
          </ul>
        </div>
      </div>
      <div class="section-bottom">

      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue"
export default {
  components: {Nav},
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.main {
  width: 1296px;
  margin: 0 auto;
}

.main_banner {
  width: 100%;
  height: 844px;
  background: url(https://t1.kakaocdn.net/career_public/keyVisual/20210929/pc/KV_2x.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
}

/**/
.main_title_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.main_title {
  font-size: 40px;
  font-weight: bold;
  margin-top: 36px;
  margin-bottom: 14px;
}

.main_title_desc {
  margin-bottom: 148px;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 148px;
}

/**/
.section-top {

}

.section_top_title {
  font-size: 36px;
  line-height: 54px;
  letter-spacing: -0.8px;
  font-weight: bold;
}

.section_top_title::before {

}

.section_top > ul {
  padding-bottom: 60px;
}

.section_top > ul > li {
  margin: 24px 12px 0 0;
  padding: 14px 24px 16px;
  border-radius: 31px;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.6px;
  line-height: 33px;
  background: #eee;
  cursor: pointer;
}

.section_top > ul > li:hover {
  background: #ffcd00 ;
}

.big-card {
  width: 100%;
  padding: 60px;
  text-align: center;
  margin-bottom: 36px;
  border-radius: 21px;
  border: 1px solid #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.big-card:hover {
  transform: scale(1.02);
  box-shadow: 5px 5px 20px 2px rgba(0,0,0,0.24);
}

.card-text {
  display: block;
  margin: 0;
  min-height: 0;
  font-size: 40px;
  line-height: 62px;
  letter-spacing: -3.5px;
  font-weight: bold;
}

.big-card > button {
  padding: 10px 19px 12px 20px;
  margin: 36px 0 54px;
  border-radius: 21px;
  font-size: 14px;
  color: #fff;
  line-height: 20px;
  letter-spacing: -0.2px;
  background: #000;
  cursor: pointer;
}

.big-card_img > img{
  width: 850px;
}

</style>
