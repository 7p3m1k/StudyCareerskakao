<template>
  <div class="nav">
    <div class="logo">
      <img src="../assets/img_logo.png" alt="logo">
    </div>
    <ul class="list">
      <li>
        <a href="">카카오 생활</a>
      </li>
      <li>
        <a href="">크루 이야기</a>
      </li>
      <li>
        <a href="">진행중공고</a>
      </li>
      <li>
        <a href="">지원안내</a>
      </li>
      <li>
        <a href="">나의지원서</a>
      </li>
    </ul>
    <div class="login">
      <a href="">로그인</a>
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

.list > li > a{
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

.login > a {
  padding-right: 5px;
}

</style>