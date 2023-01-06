<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div class="footer_title">
        카카오의 다양한 소식을 확인하세요
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

</style>