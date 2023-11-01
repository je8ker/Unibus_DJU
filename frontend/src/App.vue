<template>
  <v-app>
    <h1 class="center-text">UNIBUS<v-btn class="right-btn" @click="gotologin">로그인</v-btn>
    </h1>
    <v-main>
      <MenuMain />
      <KakaoMap />
    </v-main>
  </v-app>
</template>

<script>
import MenuMain from './components/MenuMain.vue';
import KakaoMap from './components/KakaoMap.vue';

export default {
  name: 'App',

  components: {
    MenuMain,
    KakaoMap,
  },

  data: () => ({
    //
  }
  ),
}
</script>
<style>
.center-text {
  text-align: center;
}

.main-page {
  text-align: center;
}

.right-btn {
  float: right;
}
</style>

