<!-- 만년동 노선 -->
<template>
    <div>
        <h1 style="text-align: center;">만년동</h1>
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
            this.ManNyeon();
        },
    
        ManNyeon() {  // 만년동방면 마커
            const markerpositions = [
                new window.kakao.maps.LatLng(36.3690259935, 127.3793487963), //만년동 초원아파트 정문
                new window.kakao.maps.LatLng(36.36703667, 127.37934192), //상록수아파트 네거리
                new window.kakao.maps.LatLng(36.3618483076, 127.3793000297), //정부청사 서문 스타게이트
                new window.kakao.maps.LatLng(36.3525446602, 127.3789930860), //타임월드 버스승강장
                new window.kakao.maps.LatLng(36.3470080825, 127.3757774637), //경성큰마을 좌표이상??
                new window.kakao.maps.LatLng(36.3427627604, 127.3838218975), //한신아파트(괴정동)봉순당 앞
                new window.kakao.maps.LatLng(36.3400384660, 127.3909234883), //롯데백화점 앞 버스승강장
                new window.kakao.maps.LatLng(36.3261695262, 127.3970212612), //태평1동 행정복지센터 앞
                new window.kakao.maps.LatLng(36.3330308038, 127.4120170220), //목동 한사랑아파트 버스승강장
                new window.kakao.maps.LatLng(36.3291907490, 127.4277059935), //으능정이안경원 앞
                new window.kakao.maps.LatLng(36.3330196102, 127.4379737533), //대전역동광장(찌글이식당 앞)
            ];
            markerpositions.forEach(position => {
                const message = '<div style="padding:5px;">만년동</div>';
                this.displayMarker(position, message);
            });
            const ManNyeonpath = [
                new window.kakao.maps.LatLng(36.3690259935, 127.3793487963), //만년동 초원아파트 정문
                new window.kakao.maps.LatLng(36.36703667, 127.37934192), //상록수아파트 네거리
                new window.kakao.maps.LatLng(36.3618483076, 127.3793000297), //정부청사 서문 스타게이트
                new window.kakao.maps.LatLng(36.35350564, 127.37931525), 
                new window.kakao.maps.LatLng(36.3525446602, 127.3789930860), //타임월드 버스승강장
                new window.kakao.maps.LatLng(36.34871319, 127.37660724), 
                new window.kakao.maps.LatLng(36.3470080825, 127.3757774637), //경성큰마을 정문 농협 앞(좌표이상)
                new window.kakao.maps.LatLng(36.3427627604, 127.3838218975), //한신아파트(괴정동)봉순당 앞
                new window.kakao.maps.LatLng(36.34202747, 127.38756940), 
                new window.kakao.maps.LatLng(36.34140910, 127.38928175), 
                new window.kakao.maps.LatLng(36.3400384660, 127.3909234883), //롯데백화점 앞 버스승강장 
                /* 수침교 전 우회전 (확실하지 않음)
                new window.kakao.maps.LatLng(36.33498977, 127.39702981),
                new window.kakao.maps.LatLng(36.32935313, 127.39011833),
                new window.kakao.maps.LatLng(36.32850267, 127.38907554),
                new window.kakao.maps.LatLng(36.32802862, 127.38866668),
                new window.kakao.maps.LatLng(36.32787318, 127.38866312),
                new window.kakao.maps.LatLng(36.32772426, 127.38873199),
                new window.kakao.maps.LatLng(36.32763142, 127.38887909),
                new window.kakao.maps.LatLng(36.32680459, 127.39094925),
                new window.kakao.maps.LatLng(36.32571095, 127.39466906),
                new window.kakao.maps.LatLng(36.32570266, 127.39513398),
                */ 
                new window.kakao.maps.LatLng(36.33498977, 127.39702981), //확실하지 않음
                new window.kakao.maps.LatLng(36.33378425, 127.39844100),
                new window.kakao.maps.LatLng(36.33337946, 127.39821897),
                new window.kakao.maps.LatLng(36.32601236, 127.39481536),
                new window.kakao.maps.LatLng(36.32585688, 127.39482293),
                new window.kakao.maps.LatLng(36.32574384, 127.39494208),
                new window.kakao.maps.LatLng(36.32571165, 127.39513959),
                new window.kakao.maps.LatLng(36.3261695262, 127.3970212612), //태평1동 행정복지센터 앞
                new window.kakao.maps.LatLng(36.32691132, 127.39955312),
                new window.kakao.maps.LatLng(36.32823982, 127.40446027), 
                new window.kakao.maps.LatLng(36.32885148, 127.40612567), 
                new window.kakao.maps.LatLng(36.32918183, 127.40769218), 
                new window.kakao.maps.LatLng(36.33012289, 127.40920899), 
                new window.kakao.maps.LatLng(36.3330308038, 127.4120170220), //목동 한사랑아파트 버스승강장
                new window.kakao.maps.LatLng(36.33445009, 127.41333878), 
                new window.kakao.maps.LatLng(36.33623482, 127.41582092), 
                new window.kakao.maps.LatLng(36.33622167, 127.41636384), 
                new window.kakao.maps.LatLng(36.32856905, 127.42577863), 
                new window.kakao.maps.LatLng(36.3291907490, 127.4277059935), //으능정이안경원 앞
                new window.kakao.maps.LatLng(36.33024174, 127.43025670),
                new window.kakao.maps.LatLng(36.33107286, 127.43246089),  
                new window.kakao.maps.LatLng(36.33205040, 127.43562940), 
                new window.kakao.maps.LatLng(36.33293077, 127.43762241), 
                new window.kakao.maps.LatLng(36.3330196102, 127.4379737533), //대전역동광장(찌글이식당 앞)
                new window.kakao.maps.LatLng(36.33325165, 127.43859042),
                new window.kakao.maps.LatLng(36.33348452, 127.43959413),  
                new window.kakao.maps.LatLng(36.33254485, 127.43985897), 
                new window.kakao.maps.LatLng(36.33211298, 127.44007092), 
                new window.kakao.maps.LatLng(36.33117105, 127.44073666), 
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
            path: ManNyeonpath,
            strokeWeight: 5,
            strokeColor: '#99FF99',
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