<!-- 내동 노선 -->
<template>
    <div>
        <h1 style="text-align: center;">내동</h1>
        <div id="map"></div>
    </div>
</template>

<style scoped>
#map {
  width: 80%;
  height: 70%;
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
}
</style>

<script>
export default {
    components: {
    },
    name: "KakaoMap", // 컴포넌트 이름 지정
    data() {
        return {
            // map 객체 설정
            map: null,
        };
    },
    mounted() {
        // api 스크립트 소스 불러오기 및 지도 출력
        if (window.kakao && window.kakao.maps) {
            this.loadMap();
        } else {
            this.loadScript();
        }
    },
    methods: {
        // api 불러오기
        loadScript() {
            const script = document.createElement("script");
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAO}&autoload=false`;
            script.onload = () => window.kakao.maps.load(this.loadMap);

            document.head.appendChild(script);
        },
        // 맵 출력하기
        loadMap() {
            const container = document.getElementById("map");
            const options = {
                center: new window.kakao.maps.LatLng(36.3547,127.3868),
                level: 9
            };
            
            this.map = new window.kakao.maps.Map(container, options);
            this.NeDong();
        
        },
        
        NeDong() {  // 내동방면 마커
            const markerpositions = [
                new window.kakao.maps.LatLng(36.339146, 127.375021), //KT인재개발원 앞
                new window.kakao.maps.LatLng(36.33243608, 127.38286628), //내동 맑은아침 공인중개사 앞
                new window.kakao.maps.LatLng(36.32837133, 127.38088903), //변동 오거리 하나은행 앞
                new window.kakao.maps.LatLng(36.32005933, 127.37761356), //구 농도원네거리 버스정류장 앞(버스정류장위치 상이)
                new window.kakao.maps.LatLng(36.31360106, 127.38157714), //도마동 네거리 버스정류장 앞
                new window.kakao.maps.LatLng(36.31656014, 127.39104007), //유천동 롯데하이마트
                new window.kakao.maps.LatLng(36.31841325, 127.39818737), //유천네거리 스타벅스 대전유천DT점 앞
                new window.kakao.maps.LatLng(36.32160985, 127.41027810), //세이백화점 KB국민은행 앞 글꽃초, 중 간판 앞
                new window.kakao.maps.LatLng(36.32309550, 127.41780578), //대흥동 한민내과 앞
                new window.kakao.maps.LatLng(36.32292358, 127.42440042), //대전고등학교 정문 앞
                new window.kakao.maps.LatLng(36.32513211, 127.43114455), //대전 회관 앞(구 대전예식원)
            ];
            markerpositions.forEach(position => {
                const message = '<div style="padding:5px;">내동</div>';
                this.displayMarker(position, message);
            });
            const Nedongpath = [
                new window.kakao.maps.LatLng(36.339146, 127.375021), //KT인재개발원 앞
                new window.kakao.maps.LatLng(36.33669177, 127.37795001),
                new window.kakao.maps.LatLng(36.33402105, 127.38109753),
                new window.kakao.maps.LatLng(36.33277958, 127.38253661),
                new window.kakao.maps.LatLng(36.33243608, 127.38286628), //내동 맑은아침 공인중개사 앞
                new window.kakao.maps.LatLng(36.33137281, 127.38423380),
                new window.kakao.maps.LatLng(36.32891490, 127.38140399),
                new window.kakao.maps.LatLng(36.32837133, 127.38088903), //변동 오거리 하나은행 앞
                new window.kakao.maps.LatLng(36.32562188, 127.37903250),
                new window.kakao.maps.LatLng(36.32229588, 127.37781367),
                new window.kakao.maps.LatLng(36.32005933, 127.37761356), //구 농도원네거리 버스정류장 앞(버스정류장위치 상이)
                new window.kakao.maps.LatLng(36.31920103, 127.37758994),
                new window.kakao.maps.LatLng(36.31613162, 127.37858568),
                new window.kakao.maps.LatLng(36.31298198, 127.38000965),
                new window.kakao.maps.LatLng(36.31360106, 127.38157714), //도마동 네거리 버스정류장 앞
                new window.kakao.maps.LatLng(36.31501483, 127.38472697),
                new window.kakao.maps.LatLng(36.31656014, 127.39104007), //유천동 롯데하이마트
                new window.kakao.maps.LatLng(36.31841325, 127.39818737), //유천네거리 스타벅스 대전유천DT점 앞
                new window.kakao.maps.LatLng(36.32160985, 127.41027810), //세이백화점 KB국민은행 앞 글꽃초, 중 간판 앞
                new window.kakao.maps.LatLng(36.32248979, 127.41317260),
                new window.kakao.maps.LatLng(36.32269251, 127.41448777),
                new window.kakao.maps.LatLng(36.32283008, 127.41639283),
                new window.kakao.maps.LatLng(36.32309550, 127.41780578), //대흥동 한민내과 앞
                new window.kakao.maps.LatLng(36.32394324, 127.42019632),
                new window.kakao.maps.LatLng(36.32261492, 127.42249442),
                new window.kakao.maps.LatLng(36.32251402, 127.42299501),
                new window.kakao.maps.LatLng(36.32292358, 127.42440042), //대전고등학교 정문 앞
                new window.kakao.maps.LatLng(36.32513211, 127.43114455), //대전 회관 앞(구 대전예식원)
                new window.kakao.maps.LatLng(36.32582575, 127.43308618),
                new window.kakao.maps.LatLng(36.32676128, 127.43541342),
                new window.kakao.maps.LatLng(36.32934718, 127.44290095), // 대동역 오거리
                new window.kakao.maps.LatLng(36.33627649, 127.44733146), //우송 삼거리
                new window.kakao.maps.LatLng(36.3356789537, 127.4486702063), //송강동코스(자양동 행정복지센터 앞)
                new window.kakao.maps.LatLng(36.33500839, 127.45025076),
                new window.kakao.maps.LatLng(36.33466674, 127.45063584),
                new window.kakao.maps.LatLng(36.33381783, 127.45111545),
                new window.kakao.maps.LatLng(36.33346441, 127.45163411),
                new window.kakao.maps.LatLng(36.33306187, 127.45263141),
                new window.kakao.maps.LatLng(36.33268513, 127.45513524), //대전대서문 LG유플러스앞 사거리
                new window.kakao.maps.LatLng(36.33529771, 127.45653435),
                new window.kakao.maps.LatLng(36.33461956, 127.45889167),
                new window.kakao.maps.LatLng(36.33463878, 127.45916745),
                new window.kakao.maps.LatLng(36.33480871, 127.45950259),
                new window.kakao.maps.LatLng(36.33508982, 127.45963511),
                new window.kakao.maps.LatLng(36.33621703, 127.45944124),
                new window.kakao.maps.LatLng(36.33645082, 127.45957628),
                new window.kakao.maps.LatLng(36.33661418, 127.45986405),
                new window.kakao.maps.LatLng(36.33710748, 127.46164074), //학교 운동장 뒤 도착
                
            ];
            const polyline = new window.kakao.maps.Polyline({
            path: Nedongpath,
            strokeWeight: 5,
            strokeColor: '#66FFFF',
            strokeOpacity: 0.7,
            strokeStyle: 'solid'
            });
            polyline.setMap(this.map);
        },
        
        // 지도에 마커와 인포윈도우를 표시하는 함수
        displayMarker(locPosition, message) {
            const marker = new window.kakao.maps.Marker({
                map: this.map,
                position: locPosition
            });
            window.kakao.maps.event.addListener(marker, 'click', () => { // 마커 클릭시 설명
                this.openInfoWindow(locPosition, message);
            });
        },
        openInfoWindow(locPosition, message) {
            const infowindow = new window.kakao.maps.InfoWindow({
                content: message,
                removable: true
            });
            infowindow.open(this.map, new window.kakao.maps.Marker({ position:locPosition}));
        }
    }
};
</script>