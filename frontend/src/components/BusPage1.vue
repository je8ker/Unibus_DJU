//셔틀버스 페이지
<template>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="auto">
          <v-btn density="default" @click="gotobusroute1" >관저동</v-btn>
        </v-col>
  
        <v-col cols="auto">
          <v-btn density="default" @click="gotobusroute2">송강동</v-btn>
        </v-col>
  
        <v-col cols="auto">
          <v-btn density="default" @click="gotobusroute3">만년동</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default" @click="gotobusroute4">도룡동</v-btn>
        </v-col>
        
        <v-col cols="auto">
          <v-btn density="default" @click="gotobusroute5">테크노벨리</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default" @click="gotobusroute6">내동</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default" @click="gotobusroute7">자운대</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default" @click="gotobusroute8">도안</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn density="default" @click="gotobusroute9">오정동</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
<script>
export default {
  data() {

    return {
      username: "", //아이디
      password: "", //비밀번호
      visible: false,
    };
  },

  methods: {
    gotobusroute1() { // 관저동
      this.$router.push("/busroute1");
    },
    gotobusroute2() { // 송강동
      this.$router.push("/busroute2");
    },
    gotobusroute3() { // 만년동
      this.$router.push("/busroute3");
    },
    gotobusroute4() { // 도룡동
      this.$router.push("/busroute4");
    },
    gotobusroute5() { // 테크노벨리
      this.$router.push("/busroute5");
    },
    gotobusroute6() { // 내동
      this.$router.push("/busroute6");
    },
    gotobusroute7() { // 자운대
      this.$router.push("/busroute7");
    },
    gotobusroute8() { // 도안동
      this.$router.push("/busroute8");
    },
    gotobusroute9() { // 오정동
      this.$router.push("/busroute9");
    },
  },
}
</script>
  
<style scoped>
.menu {
    margin: auto;
}
</style>
  