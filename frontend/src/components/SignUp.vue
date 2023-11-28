<template>
    <div class="login_center">
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="center-text">회원가입</div>
            <div class="text-subtitle-1 text-medium-emphasis"></div>

            <v-text-field density="compact" placeholder="아이디" prepend-inner-icon="mdi-email-outline"
                variant="outlined"></v-text-field>
            <div class="text-subtitle-1 text-medium-emphasis"></div>

            <v-text-field density="compact" placeholder="이름" prepend-inner-icon="mdi-email-outline"
                variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">

            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="비밀번호" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible"></v-text-field>

            <v-card class="mb-12" color="surface-variant" variant="tonal">
                <v-card-text class="text-medium-emphasis text-caption">
                    관리자 회원가입 페이지 
                </v-card-text>
            </v-card>
            <v-btn block class="mb-8" color="blue" size="large" variant="tonal">
                회원가입
            </v-btn>
        </v-card>
    </div>
</template>
<script>
export default {
    methods: {
        gotomain() { //메인페이지 링크
            this.$router.push("/");
        },
    },

    data: () => ({
        visible: false,
    }),
}
</script>

<style>
.center-text {
    text-align: center;
}

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
  
  
  