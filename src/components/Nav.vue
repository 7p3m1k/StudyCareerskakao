<template>
  <div class="nav">
    <div class="logo">
      <img src="../assets/img_logo.png" alt="logo">
    </div>
    <ul class="list">
      <li>카카오 생활</li>
      <li>크루 이야기</li>
      <li>진행중공고</li>
      <li>지원안내</li>
      <li>나의지원서</li>
    </ul>
    <div class="login">
      로그인
      <i class="bi bi-caret-down-fill"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav.vue"
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 0;
  width: 1296px;
  margin: 0 auto;
  background: #fff;
  text-align: center;
}

.logo > img {
  width: 107px;
}

.list {
  display: flex;
  margin-right: 100px;
}

.list > li {
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #000;
}

.list > li + li {
  padding-left: 40px;
}

.login {
  font-size: 14px;
  font-weight: 700;
}
.login::after {
  content: '';
}


</style>