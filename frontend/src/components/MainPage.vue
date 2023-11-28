<template>
  <div class="map.container">
    <KakaoMap />
  </div>
</template>



<script>
import KakaoMap from './KakaoMap.vue';


export default {
  name: 'App',

  components: {
    KakaoMap
  },
  data() {
    return {
      drawer: false,

    };
  },
  methods: {
    gotomain() {
      this.$router.push("/");
    },
    gotologin() {
      this.$router.push("/login");
    },
    gotosign() {
      this.$router.push("/signup");
    },
  },
}
</script>
<style>
.map-container {
  text-align: center;
  margin: 0;
  padding: 0;
}

.center-text {
  text-align: center;
}

.main-page {
  text-align: center;
}

.right-btn {
  float: right;
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
</style>

