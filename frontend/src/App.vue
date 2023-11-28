<template>
  <v-app>
    <HeaderPage />
    <RouterView />
    <div class="bottom">
    <BottomPage /></div>
  </v-app>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import BottomPage from './components/BottomPage.vue';
export default {
  name: 'App',

  components: {
    HeaderPage,
    BottomPage,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
#app {
  width: 100vw;
  height: 100%;
  position: relative;
  margin: 0;
  padding-bottom: 56px;
}
.bottom{
  padding-bottom: 56px;
}
</style>