//셔틀버스 페이지
<template>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="auto">
          <v-btn density="default">관저동</v-btn>
        </v-col>
  
        <v-col cols="auto">
          <v-btn density="default">송강동</v-btn>
        </v-col>
  
        <v-col cols="auto">
          <v-btn density="default">만년동</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default">도룡동</v-btn>
        </v-col>
        
        <v-col cols="auto">
          <v-btn density="default">테크노벨리</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default">내동</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default">자운대</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default">도안</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
<script>
export default {
    data: () => ({
        //대전역 동광장, 복합터미널 방면
        items1: [
            { title: '대전역(동광장)' },
            { title: '복합터미널' },
        ],
        //시내통학버스
        items2: [
            { title: '관저동 방면' }, //1코스
            { title: '송강동 방면' }, //2코스
            { title: '만년동(갤러리아) 방면' },//3코스
            { title: '도룡동 누리관 방면' },//4코스
            { title: '테크노벨리 방면' },//5코스
            { title: '내동 방면' },//6코스
            { title: '자운대 방면' },//7코스
            { title: '도안 방면' },
        ],
        //일반시내버스
        items3: [
            { title: '603번' },
            { title: '608번' },
            { title: '611번' },
            { title: '619번' },
            { title: '605번' },
        ],
    }),
}
</script>
  
<style scoped>
.menu {
    margin: auto;
}
</style>
  