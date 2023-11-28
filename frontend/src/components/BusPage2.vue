<template>
    <div>
        <v-btn @click="gotobusinfo1">대전역동광장</v-btn>
        <v-btn @click="gotobusinfo2">복합터미널</v-btn>
        <RouterView/>
    </div>
</template>
  
  
  s
<script>
export default {
    name: 'App',

    data() {
        return {
            drawer: false,

        };
    },
    methods: {
        gotobusinfo1() {
            this.$router.push("/businfo1");
        },
        gotobusinfo2() {
            this.$router.push("/businfo2");
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
  
  