<template>
  <div class="login_center">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="center-text">버스기사 관리 페이지 로그인</div>

      <div class="text-subtitle-1 text-medium-emphasis" style="text-align: left;"></div>

      <v-text-field density="compact" placeholder="아이디" prepend-inner-icon="mdi-email-outline" variant="outlined"
        v-model="username" :rules="[() => !!username || '아이디를 입력하세요']"></v-text-field>

      <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
        density="compact" placeholder="비밀번호" prepend-inner-icon="mdi-lock-outline" variant="outlined"
        @click:append-inner="visible = !visible" v-model="password"
        :rules="[() => !!password || '비밀번호를 입력하세요']"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        <a class="text-caption text-decoration-none text-blue" rel="noopener noreferrer" target="_blank">
          아이디와 비밀번호를 잃어버리셨을때 관리자에게 연락해주세요</a>
      </div>
      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          버스기사 노선관리 페이지</v-card-text>
      </v-card>

      <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="login">
        로그인
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {

    return {
      username: "", //아이디
      password: "", //비밀번호
      visible: false,
    };
  },

  methods: {
    gotomain() { //메인페이지 링크
      this.$router.push("/");
    },
    gotosignup() { //회원가입 페이지 링크
      this.$router.push("/signup");
    },
    async login() {

      try {
        const response = await axios.post("/api/login", {
          username: this.username,
          password: this.password,
        });
        // 로그인 성공 시 리다이렉트 또는 다른 작업 수행
        if (response.status === 200) {
          console.log("로그인 성공");
          this.$router.push("/userprofile");
          alert('로그인 성공.');
        } else {
          // 로그인 실패 시 오류 처리
          console.error("로그인 실패");
          alert('로그인 실패.');
        }
      } catch (error) {
        console.error("로그인 오류: ", error);
        alert('아이디와 비밀번호를 다시 확인하세요.');
      }
    },
  },
}
</script>
<style>
.login_center {
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  /* display: flex; */
  /* align-items: center;  */
  /* justify-content: center;  */
  height: 100%;
}
</style>

