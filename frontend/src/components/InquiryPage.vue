//문의사항 페이지
<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-container class="my-4">
                    <h1>문의사항 페이지</h1>
                    <v-form @submit.prevent="submitInquiries">
                        <v-text-field v-model="name" label="이름"></v-text-field>
                        <v-text-field v-model="email" label="이메일"></v-text-field>
                        <v-textarea v-model="message" label="문의 내용"></v-textarea>
                        <div>
                            <v-btn type="submit" color="primary" class="mr-2">문의 제출</v-btn>
                            <v-btn type="submit" color="primary" @click="gotolist">문의 확인</v-btn>
                        </div>
                    </v-form>
                </v-container>
            </v-col>
        </v-row>
    </div>
</template>
                                                                                                                                                                                                               
<script>
import axios from 'axios';

export default {
    data() {
        return {
            loading: false,
            inquiries: [],
            name: '',
            email: '',
            message: '',
        };
    },
    created() {
        // 컴포넌트가 생성되면 서버에서 데이터를 가져와 inquiries 배열에 저장
        this.fetchInquiries();
        console.log("데이터 불러오기 & 저장 성공");
    },
    methods: {
        gotolist() { //문의사항 리스트
            this.$router.push("/inquirieslist");
        },

        fetchInquiries() {
            console.log('데이터를 불러오는 중...');
            axios.get('/api/inquiries')  // API 경로 수정
                .then(response => {
                    console.log('데이터 불러오기 성공:', response.data);
                    this.inquiries = response.data;
                })
                .catch(error => {
                    console.error('문의사항을 불러오는 중 오류 발생:', error);
                });
        },

        submitInquiries() {
            this.loading = true; // 폼 제출 시 로딩 상태 설정
            axios.post('/api/inquiries', {  // API 경로 수정
                name: this.name,
                email: this.email,
                message: this.message,
            })
                .then(() => {
                    // 성공적으로 전송되면 새로운 문의를 inquiries 배열에 추가
                    this.inquiries.push({
                        name: this.name,
                        email: this.email,
                        message: this.message,
                    });

                    // 전송 후 입력 필드 초기화
                    this.name = '';
                    this.email = '';
                    this.message = '';
                    this.loading = false; // 성공 시 로딩 상태 해제
                    console.log("데이터 다시 불러오기 성공");
                    alert("문의가 성공적으로 제출되었습니다.")
                })
                .catch(error => {
                    console.error('문의사항 제출 중 오류 발생:', error);
                    this.loading = false; // 오류 발생 시에도 loading 상태 해제

                    if (error.response) {
                        console.error('응답 데이터:', error.response.data);
                        console.error('응답 상태 코드:', error.response.status);
                        console.error('응답 헤더:', error.response.headers);
                        // 서버 응답이 있으면 응답 데이터를 사용하여 에러 처리
                        // 예: 사용자에게 에러 메시지를 표시하는 등의 작업
                        alert('문의사항 제출 중 오류가 발생했습니다.');
                    } else if (error.request) {
                        console.error('요청을 보냈지만 응답이 없음:', error.request);
                    } else {
                        console.error('오류를 발생시킨 요청 설정 중 오류 발생:', error.message);
                    }
                });
        },
    },
};
</script>

<style>
.mr-2 {
  margin-right: 8px; /* 또는 다른 원하는 크기의 여백 설정 */
}
</style>