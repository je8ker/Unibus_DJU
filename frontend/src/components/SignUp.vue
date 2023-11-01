<template>
    <div> <v-img class="mx-auto my-6" max-width="228" src="@/assets/DJU_Uni_Bus_logo.jpeg"></v-img>
        회원가입
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">아이디</div>

            <v-text-field density="compact" placeholder="아이디" prepend-inner-icon="mdi-email-outline"
                variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                비밀번호

                <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
                    로그인,비밀번호를 잊어버리셨습니까?</a>
            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="비밀번호" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible"></v-text-field>

            <v-card class="mb-12" color="surface-variant" variant="tonal">
                <v-card-text class="text-medium-emphasis text-caption">
                    경고: 3회 연속 로그인 실패 시 계정이 3시간 동안 일시적으로 잠깁니다. 아이디와 비밀번호를 잊어버리셨을때는 "로그인 비밀번호를 잊어버리셨나요?"를 클릭하여 로그인 비밀번호를 재설정
                    하실수있습니다.
                </v-card-text>
            </v-card>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        visible: false,
    }),
}
</script>
  
  
  