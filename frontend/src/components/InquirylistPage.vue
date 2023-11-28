//문의사항 리스트 페이지
<template>
    <v-row>
        <v-col cols="12">
            <v-container class="my-4">
                <h1>문의사항 리스트</h1>
                <v-list v-if="inquiries.length > 0">
                    <v-list-item-group v-for="inquiry in inquiries" :key="inquiry.id">
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title v-if="inquiry.name.length > 0">이름:{{ inquiry.name }}</v-list-item-title>
                                <v-list-item-subtitle v-if="inquiry.email.length > 0">이메일:{{ inquiry.email
                                }}</v-list-item-subtitle>
                                <v-list-item-subtitle v-if="inquiry.message.length > 0">문의내용:{{ inquiry.message
                                }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-container>
        </v-col>
    </v-row>
</template>
  


<script>
import axios from 'axios';


export default {
    data() {
        return {
            loading: true,
            inquiries: [],
            name: '',
            email: '',
            message: '',
        };
    },
    created() {
        // 컴포넌트가 생성되면 서버에서 데이터를 가져와 inquiries 배열에 저장
        // this.inquiries = [];
        this.fetchInquiries();
        console.log("데이터 불러오기 & 저장 성공");
    },
    methods: {
        fetchInquiries() {
            console.log('데이터를 불러오는 중...');
            axios.get('/api/inquiries')
                .then(response => {
                    console.log('데이터 불러오기 성공:', response.data);
                    this.inquiries = response.data;
                    this.loading = false;
                })
                .catch(error => {
                    console.error('문의사항을 불러오는 중 오류 발생:', error);
                    this.loading = false;
                });
        },

        submitInquiries() {
            this.loading = true; // 폼 제출 시 로딩 상태 설정
            axios.post('/api/inquiries', {
                name: this.name,
                email: this.email,
                message: this.message,
            })
                .then(() => {
                    this.fetchInquiries(); // 성공적으로 전송되면 다시 데이터를 불러옴
                    // 전송 후 입력 필드 초기화
                    this.name = '';
                    this.email = '';
                    this.message = '';
                    this.loading = false; // 성공 시 로딩 상태 해제
                    console.log("데이터 다시 불러오기 성공");
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
  
  
<style scoped>
.center-text {
    align-items: center;
}
</style>
  