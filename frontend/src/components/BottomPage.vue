<template>
  <v-navigation-drawer style="z-index: 1; width: 100%; background-color: white;" position: absolute v-model="drawer"
    temporary>
    <v-list density="compact" nav>
      <div class=right-btn>
        <v-btn icon="mdi-close" variant="text" value="close" @click.stop="drawer = false"></v-btn>
      </div>
      <v-list-item prepend-icon="mdi-login" value="4" @click="gotologin">
        <div class="list-text">로그인</div>
      </v-list-item>
      <v-list-item prepend-icon="mdi-bus-stop" value="1">
        <div class="list-text" @click="gotobus1">시내통학버스</div>
      </v-list-item>
      <v-list-item prepend-icon="mdi-bus-multiple" value="2">
        <div class="list-text" @click="gotobus2">대전역 동광장, 복합터미널 방면</div>
      </v-list-item>
      <v-list-item prepend-icon="mdi-bus-school" value="3">
        <div class="list-text" @click="gotobus3">일반시내버스</div>
      </v-list-item>
      <v-list-item prepend-icon="mdi-message-text" value="3">
        <div class="list-text" @click="gotoinquiries">문의사항</div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-container>
    <v-bottom-navigation class="no-margin">
      <v-btn value="menu" @click.stop="drawer = true">
        <v-icon>mdi-menu</v-icon>
        <span>menu</span>
      </v-btn>

      <v-btn value="home" class="nav-button" @click="gotomain">
        <v-icon>mdi-home</v-icon>
        <span>home</span>
      </v-btn>

      <v-btn value="bus" class="nav-button">
        <v-icon>mdi-bus</v-icon>
        <span>bus</span>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<style scoped>
.no-margin {
  margin: 0;
}

.nav-button {
  text-align: center;
  margin: 0;
}

.center-text {
  align-items: center;
}

.list-text {
  text-align: left;
}

.left-btn {
  float: left;
}

.right-btn {
  float: right;
}

.v-navigation-drawer__scrim {
  display: none;
}

.bottom-navigation {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: inherit;
  color: inherit;
}

.v-container {
  padding: 0;
}
</style>
<script>

export default {
  methods: {
    gotomain() { //메인페이지 링크
      this.$router.push("/");
    },
    gotosignup() { //회원가입 페이지 링크
      this.$router.push("/signup");
    },
    gotologin() {
      this.$router.push("/login");
    },
    gotobus1() {
      this.$router.push("/bus");
    },
    gotobus2() {
      this.$router.push("/businfo");
    },
    gotobus3() {
      this.$router.push("/businfoma");
    },
    gotoinquiries() {
      this.$router.push("/inquiries");
    }
  },

  data() {
    return {
      drawer: false,
    }
  },
}
</script>
