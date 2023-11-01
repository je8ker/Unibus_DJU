<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 5vh;">
    <v-row justify="=center" align="center">
      <div class="menu">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn variant="text" v-bind="props">
              대전역 동광장,복합터미널 </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items1" :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn variant="text">
          시내통학버스
          <v-menu activator="parent">
            <v-list>
              <v-list-item v-for="(item, index) in items2" :key="index" :value="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>

        <v-btn id="menu-activator" variant="text">
          일반시내버스 </v-btn>

        <v-menu activator="#menu-activator">
          <v-list>
            <v-list-item v-for="(item, index) in items3" :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-row>
  </div>
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
.menu{
  margin: auto;
   }
</style>
