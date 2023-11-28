<template>
  <h1 class="center-text">
    <div class="title">UNIBUS</div>
  </h1>

</template>

<style>
.title{
  align-items: center;
  /* padding-right: 48px; */
}
.center-text {
  align-items: center;
}
.list-text{
  text-align: left;
}

.left-btn {
  float: left;
}

.right-btn {
  float: right;
}
</style>

<script>
export default {

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    gotomain() { //메인페이지 링크
      this.$router.push("/");
    },
    gotosignup() { //회원가입 페이지 링크
      this.$router.push("/signup");
    },
    gotologin() {
      this.$router.push("/login");
    },
  },
  data() {
    return {
      drawer: false,
    }
  },
}
</script>