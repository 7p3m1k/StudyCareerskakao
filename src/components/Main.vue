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
          <ul class="card-lists">
            <li>
              <a href="" class="story">
                <div class="card-desc">
                  100% 리얼 스토리 <br/>
                  카카오 크루 이야기
                </div>
                <div class="card-more">크루 이야기 살펴보기</div>
              </a>
            </li>
            <li>
              <a href="" class="support">
                <div class="card-desc">
                  휴가부터 의료지원까지 <br/>
                  크루 복지와 혜택
                </div>
                <div class="card-more">크루 이야기 살펴보기</div>
              </a>
            </li>
            <li>
              <a href="" class="apply">
                <div class="card-desc">
                  100% 리얼 스토리 <br/>
                  카카오 크루 이야기
                </div>
                <div class="card-more">크루 이야기 살펴보기</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="section_bottom">
          <div class="section_bottom_title">
            더 많은 크루 소식이 있어요
          </div>
        <ul class="section_bottom_card-list">
          <li class="section_bottom_card">
            <a href="">
              <img src="https://t1.kakaocdn.net/career_public/feedCard/20221129/pc/01_agit_banner_type_02.png">
              <div class="section_bottom_desc">
                사내 해커톤 ‘2022 24K <br/>
                Reunion’
              </div>
              <div class="section_bottom_hash">
                #성장 #유튜브
              </div>
            </a>
          </li>
          <li class="section_bottom_card">
            <a href="">
              <img src="https://t1.kakaocdn.net/career_public/feedCard/20230104/pc/recruiting.png">
              <div class="section_bottom_desc">
                Onboarding Day⭐카카오 인재영입팀이 신규입사자를 맞이하는 방법
              </div>
              <div class="section_bottom_hash">
                #문화 #유튜브
              </div>
            </a>
          </li>
          <li class="section_bottom_card">
            <a href="">
              <img src="https://t1.kakaocdn.net/career_public/feedCard/20211115/pc/tech_internship_review2.png">
              <div class="section_bottom_desc">
                인턴리더와 인턴크루들이 들려주는 테크 인턴십 스토리
              </div>
              <div class="section_bottom_hash">
                #테크블로그
              </div>
            </a>
          </li>
        </ul>
        <button type="button" class="section_bottom_more-btn">크루 콘텐츠 더보기</button>

        <div class="banner">
          <a href="http://www.kakaocorp.com" target="_blank">
            <div class="banner_title">오늘의 카카오가 궁금하다면?</div>
            <span class="banner_more">기업사이트 바로가기</span>
          </a>
        </div>

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
export default {
  components: {Footer, Nav},
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
  background: url(https://t1.kakaocdn.net/career_public/keyVisual/20210929/pc/KV_2x.jpeg) 0 0 no-repeat;
  background-size: cover;
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

/*section_top*/

.section_top_title {
  font-size: 36px;
  line-height: 54px;
  letter-spacing: -0.8px;
  font-weight: bold;
}

.section_top_title::before {
  width: 72px;
  height: 72px;
  margin: -8px 12px 0 0;
  display: inline-block;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) -55px -75px no-repeat;
  background-size: 260px 251px;
  vertical-align: top;
  content: '';
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
  box-sizing: border-box;
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

.card-lists {
  display: flex;
  justify-content: space-between;
  margin-bottom: 108px;
}

.card-lists > li {
  width: 408px;
  border-radius: 18px;
  background: #fff;
  box-shadow: 5px 5px 20px 2px rgba(0,0,0,0.24);
  text-align: left;
  border: 1px solid #fff;
  font-weight: bold;
  font-size: 26px;
  line-height: 1.4;
  letter-spacing: -0.6px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card-lists > li:hover {
  transform: scale(1.02);
  box-shadow: 5px 5px 20px 2px rgba(0,0,0,0.24);
}

.card-lists > li > a {
  display: block;
  padding: 24px;
}

.card-lists > li > .story::before {
  display: block;
  overflow: hidden;
  width: 50px;
  height: 50px;
  font-size: 0px;
  line-height: 0;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) 0 -104px;
  background-size: 260px 251px;
  vertical-align: top;
  content: '';
}

.card-lists > li > .support::before {
  display: block;
  overflow: hidden;
  width: 50px;
  height: 50px;
  font-size: 0px;
  line-height: 0;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) 0 -49px;
  background-size: 260px 251px;
  vertical-align: top;
  content: '';
}

.card-lists > li > .apply::before {
  display: block;
  overflow: hidden;
  width: 50px;
  height: 50px;
  font-size: 0px;
  line-height: 0;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) -58px -20px;
  background-size: 260px 251px;
  vertical-align: top;
  content: '';
}

.card-desc {
  margin: 12px 0 24px;
}

.card-more {
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: -0.5px;
}

.card-more::after {
  width: 20px;
  height: 20px;
  margin: 3px 0 0 5px;
  display: inline-block;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) -40px 0 no-repeat;
  background-size: 260px 251px;
  vertical-align: top;
  content: '';
}

/*section_bottom*/

.section_bottom {
  margin-bottom: 140px;
}

.section_bottom_title {
  font-size: 36px;
  line-height: 54px;
  letter-spacing: -0.8px;
  font-weight: bold;
}

.section_bottom_card-list {
  display: flex;
  margin-bottom: 72px;
}

.section_bottom_card {
  display: flex;
  flex-direction: column;
  width: 408px;
  height: 100%;
  margin: 36px 36px 0 0;
  border-radius: 18px;
  box-shadow: 4px 12px 40px 6px rgb(0 0 0 / 9%);
  background: #fff;
  text-align: left;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}


.section_bottom_card:hover {
  transform: scale(1.02);
  box-shadow: 5px 5px 20px 2px rgba(0,0,0,0.24);
}

.section_bottom_card > a > img {
  box-sizing: border-box;
  width: 100%;
  height: 224px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.section_bottom_desc {
  height: 114px;
  margin: 24px 24px 50px 24px;
  font-size: 26px;
  letter-spacing: -1.6px;
  line-height: 38px;
  font-weight: bold;
  text-align: left;
}

.section_bottom_hash {
  padding: 0 24px 36px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.2px;
  align-items: flex-end;
}

.section_bottom_more-btn {
  display: flex;
  margin: 0 auto 96px;
  padding: 15px 40px;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
  letter-spacing: -0.5px;
  background: #eee;
}

.section_bottom_more-btn:after {
  width: 14px;
  height: 14px;
  margin: 6px 0 0px 7px;
  display: inline-block;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) -65px 0;
  background-size: 260px 251px;
  content: '';
}

/*banner*/
.banner {
  width: 1296px;
  margin: 0 auto 140px;
  display: block;
  padding: 48px 96px;
  border-radius: 18px;
  background: #27348b;
}

.banner_title {
  margin: 4px 0 12px;
  font-size: 36px;
  line-height: 54px;
  letter-spacing: -0.8px;
  color: #ffffff;
}

.banner_more {
  margin-bottom: 13px;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  color: #ffffff;
}

.banner_more:after {
  width: 20px;
  height: 20px;
  margin: 3px 0 0 5px;
  display: inline-block;
  text-indent: -9999px;
  background: url(../assets/ico_jobs.png) 0 0 no-repeat;
  background-size: 260px 251px;
  vertical-align: top;
  content: '';
}

</style>
