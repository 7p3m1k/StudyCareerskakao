<template>
  <div>
    <Nav />
    <div class="recruit-wrapper">
      <div class="recruit">
        <div class="recruit-tab">
          <ul class="tab-lists">
            <li v-for="(list, i) in tabList" :key="i" :class="{active:currentTab === i}">
              <span @click.prevent="currentTab = i">{{list.tab}}</span>
              <span @click.prevent="currentTab = i" class="num">{{list.num}}</span>
            </li>
          </ul>
          <ul class="recruit-tab-sub">
            <li class="selected">카카오</li>
            <li class="selected">전체 직원유형</li>
            <li>
              <input type="text" placeholder="검색어를 입력하세요.">
            </li>
          </ul>
        </div>
        <div class="hashTag-wrapper">
          <div class="hashTag-desc">
            * 아래 관심 있는 #해시태그를 선택하시면, 해당 스킬셋과 관련된 공고를 확인하실 수 있습니다.
          </div>
          <ul>
            <li>#Android</li>
            <li>#iOS</li>
            <li>#Windows</li>
            <li>#Web</li>
            <li>front</li>
            <li>#DB</li>
            <li>#Cloud</li>
            <li>#System</li>
            <li>#Network</li>
            <li>#Security</li>
            <li>#Algorithm/ML</li>
            <li>#Algorithm/Ranking</li>
            <li>#Hadoop</li>
            <li>eco</li>
            <li>system</li>
            <li>#Server</li>
            <li>#Statistics/Analysis</li>
            <li>#NLP</li>
            <li>#NLP linguist</li>
            <li>#QA</li>
            <li>#기타</li>
          </ul>
        </div>
        <div class="recruit-lists">
            <ul class="recruit-list-wrapper" v-show="currentTab == 0">
              <li class="list">
                <div class="list-title">
                  카카오 데이터센터 운영 총괄
                </div>
                <div class="list-sub">
                  <div class="list-sub-left">
                    <span class="sub-text">영입종료시</span>
                    <span class="sub-location">판교</span>
                  </div>
                  <div class="list-sub-right">
                    <span class="company">카카오</span>
                    <span class="position">정규직</span>
                  </div>
                </div>
                <ul>
                  <li><span>#</span>기타</li>
                </ul>
              </li>
              <li class="list">
                <div class="list-title">
                  안산 데이터센터 설비 운영 엔지니어 모집
                </div>
                <div class="list-sub">
                  <div class="list-sub-left">
                    <span class="sub-text">영입종료시</span>
                    <span class="sub-location">장소 무관</span>
                  </div>
                  <div class="list-sub-right">
                    <span class="company">카카오</span>
                    <span class="position">정규직</span>
                  </div>
                </div>
                <ul>
                  <li><span>#</span>기타</li>
                </ul>
              </li>
              <li class="list">
                <div class="list-title">
                  카카오 전체의 계정 플랫폼을 만들 서버개발자 모집
                </div>
                <div class="list-sub">
                  <div class="list-sub-left">
                    <span class="sub-text">영입종료시</span>
                    <span class="sub-location">판교</span>
                  </div>
                  <div class="list-sub-right">
                    <span class="company">카카오</span>
                    <span class="position">정규직</span>
                  </div>
                </div>
                <ul>
                  <li><span>#</span>Server</li>
                </ul>
              </li>
              <li class="list">
                <div class="list-title">
                  메일서비스 iOS앱 개발자 모집 (경력)
                </div>
                <div class="list-sub">
                  <div class="list-sub-left">
                    <span class="sub-text">영입종료시</span>
                    <span class="sub-location">판교</span>
                  </div>
                  <div class="list-sub-right">
                    <span class="company">카카오</span>
                    <span class="position">정규직</span>
                  </div>
                </div>
                <ul>
                  <li><span>#</span>ios</li>
                </ul>
              </li>
              <li class="list">
                <div class="list-title">
                  데이터센터 운영 엔지니어 모집
                </div>
                <div class="list-sub">
                  <div class="list-sub-left">
                    <span class="sub-text">영입종료시</span>
                    <span class="sub-location">판교</span>
                  </div>
                  <div class="list-sub-right">
                    <span class="company">카카오</span>
                    <span class="position">정규직</span>
                  </div>
                </div>
                <ul>
                  <li><span>#</span>기타</li>
                </ul>
              </li>
              <li class="list">
                <div class="list-title">
                  카카오 데이터센터 운영 총괄
                </div>
                <div class="list-sub">
                  <div class="list-sub-left">
                    <span class="sub-text">영입종료시</span>
                    <span class="sub-location">판교</span>
                  </div>
                  <div class="list-sub-right">
                    <span class="company">카카오</span>
                    <span class="position">정규직</span>
                  </div>
                </div>
                <ul>
                  <li><span>#</span>기타</li>
                </ul>
              </li>
              <li class="list">
                <div class="list-title">
                  카카오 데이터센터 운영 총괄
                </div>
                <div class="list-sub">
                  <div class="list-sub-left">
                    <span class="sub-text">영입종료시</span>
                    <span class="sub-location">판교</span>
                  </div>
                  <div class="list-sub-right">
                    <span class="company">카카오</span>
                    <span class="position">정규직</span>
                  </div>
                </div>
                <ul class="last-border">
                  <li><span>#</span>기타</li>
                </ul>
              </li>
            </ul>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
export default {
  components: {Footer, Nav},
  data() {
    return {
      currentTab : 0,
      tabList : [
        {
          tab: '테크',
          num: 40,
          link : '#',
        },
        {
          tab: '서비스비즈',
          num: 18,
          link : '#',
        },
        {
          tab: '디자인/브랜드',
          num: 7,
          link : '#',
        },
        {
          tab: '스태프',
          num: 7,
          link : '#',
        },
      ]
    }
  }
}
</script>

<style scoped>
  .recruit-wrapper {
    width: 940px;
    margin: 0 auto;
    padding: 120px 0 159px;
  }

  .recruit {

  }

  .recruit-tab {
    background-color: #444;
  }

  .tab-lists {
    display: flex;
    font-size: 20px;
    color: #A1A1A1;
    border-bottom: 1px solid #4C4C4C;
  }

  .tab-lists > li {
    width: 25%;
    text-align: center;
    padding: 30px;
  }

  .tab-lists > li > span {
    cursor: pointer;
  }

  .num {
    font-size: 18px;
    color: #FFDC00;
    text-align: center;
    display: inline-block;
    padding-left: 5px;
  }

  .recruit-tab-sub {
    display: flex;
    justify-content: right;
    color: #ffffff;
    padding: 9px 10px;
  }

  .active {
    color: #ffffff;
  }

  .selected {
    height: 32px;
    line-height: 31px;
    padding: 0 14px 0 0;
    color: #fff;
    font-size: 14px;
  }

  input {
    width: 210px;
    height: 16px;
    line-height: 31px;
    padding: 7px 10px;
    font-size: 14px;
    border: 1px solid #646464;
    background-color: #5F5F5F;
  }

  input::placeholder {
    color: #A4A4A4;
  }

  .hashTag-wrapper {
    margin: 0;
    padding: 18px 40px 18px;
    border-bottom: 1px solid #E1E1E1;
    background-color: #fff;
  }

  .hashTag-wrapper > ul {
    display: flex;
    flex-wrap: wrap;
    width: 900px;
  }

  .hashTag-wrapper > ul > li {
    height: 26px;
    padding: 0 11px;
    margin: 4px 2px 0 0;
    line-height: 24px;
    font-size: 15px;
    background: #F9F9F9;
    color: #1e1e1e;
  }

  .hashTag-desc {
    margin-top: 0;
    padding: 0 0 10px;
    font-size: 15px;
  }

  .recruit-lists {
    margin-top: 10px;
    border-top: 1px solid #F0F0F0;
    border-bottom: 1px solid #E1E1E1;
    background-color: #fff;
  }

  .recruit-lists > .recruit-list-wrapper {
    display: flex;
    flex-direction: column;
  }

  .recruit-lists > .recruit-list-wrapper >li {
    padding: 20px 40px;
  }

  .list-title {
    max-width: 560px;
    font-size: 22px;
    font-weight: normal;
    line-height: 27px;
    text-indent: 1px;
    margin-bottom: 10px;
  }

  .list-sub {
    display: flex;
    justify-content: space-between;
  }

  .sub-text {
    display: inline-block;
    font-size: 15px;
  }

  .sub-text::after {
    display: inline-block;
    width: 1px;
    height: 12px;
    margin: 0 9px -2px 8px;
    background-color: #B9B9B9;
    content: '';
  }

  .list-sub-right {
    width: 180px;
    display: flex;
    justify-content: space-between;
  }

  .list {
  }

  .list > ul {
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E1E1E1;
  }

  .list > ul > li {
    display: inline-block;
    height: 26px;
    padding: 0 11px;
    margin: 4px 2px 0 0;
    line-height: 24px;
    font-size: 15px;
    background: #F9F9F9;
    color: #1e1e1e;
  }

  .list > ul > li > span {
    color: #B6B6B6;
  }

  .last-border {
    border-bottom: none !important;
  }
</style>