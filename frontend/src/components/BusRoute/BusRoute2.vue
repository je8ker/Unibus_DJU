<!-- 송강동 노선 -->
<template>
    <div>
        <h1 style="text-align: center;">송강동</h1>
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
            this.SongGang();
        },
      
        SongGang() {  // 송강동방면 마커
            const markerpositions = [
                new window.kakao.maps.LatLng(36.4322025481, 127.3842143718), //한솔유치원 입구 102동 앞
                new window.kakao.maps.LatLng(36.4354036613, 127.3863909444), //송강프라자 건녀편 북대전농협
                new window.kakao.maps.LatLng(36.4488757126, 127.4120794346), //신탄진지구대(목상동)앞
                new window.kakao.maps.LatLng(36.4487459213, 127.4290947650), //신탄진역 한국 금거래소 앞
                new window.kakao.maps.LatLng(36.4340157519, 127.4242516480), //한일병원
                new window.kakao.maps.LatLng(36.4001911844, 127.4228108450), //신대동 주공APT앞 버스승강장
                new window.kakao.maps.LatLng(36.3570458512, 127.4346294565), //쌍용자동차(용전동)
                new window.kakao.maps.LatLng(36.3438909908, 127.4468431062), //가양동 신영주유소 앞
                new window.kakao.maps.LatLng(36.3356789537, 127.4486702063), //자양동 행정복지센터 앞
                new window.kakao.maps.LatLng(36.33710748, 127.46164074), //학교 운동장 뒤 도착
            ];
            markerpositions.forEach(position => {
                const message = '<div style="padding:5px;">송강동</div>';
                this.displayMarker(position, message);
            });
            const SongGangpath = [
                new window.kakao.maps.LatLng(36.4322025481, 127.3842143718), //한솔유치원 입구 102동 앞
                new window.kakao.maps.LatLng(36.43465910, 127.38533614),
                new window.kakao.maps.LatLng(36.4354036613, 127.3863909444), //송강프라자 건녀편 북대전농협
                new window.kakao.maps.LatLng(36.43741518, 127.38926439),
                new window.kakao.maps.LatLng(36.43614830, 127.39155828),
                new window.kakao.maps.LatLng(36.43934747, 127.39632277),
                new window.kakao.maps.LatLng(36.44044753, 127.39883783),
                new window.kakao.maps.LatLng(36.44561942, 127.40575186),
                new window.kakao.maps.LatLng(36.44787202, 127.40979586), 
                new window.kakao.maps.LatLng(36.4488757126, 127.4120794346), //신탄진지구대(목상동)앞
                new window.kakao.maps.LatLng(36.44945046, 127.41330667), 
                new window.kakao.maps.LatLng(36.44955070, 127.41558273), 
                new window.kakao.maps.LatLng(36.44882143, 127.41797145), 
                new window.kakao.maps.LatLng(36.44871350, 127.41919786), 
                new window.kakao.maps.LatLng(36.45010542, 127.42313176), 
                new window.kakao.maps.LatLng(36.45022182, 127.42461316), 
                new window.kakao.maps.LatLng(36.45090122, 127.42866881), 
                new window.kakao.maps.LatLng(36.44981410, 127.42900862), 
                new window.kakao.maps.LatLng(36.4487459213, 127.4290947650), //신탄진역 한국 금거래소 앞
                new window.kakao.maps.LatLng(36.44724871, 127.42945181), 
                new window.kakao.maps.LatLng(36.44461762, 127.42937039), 
                new window.kakao.maps.LatLng(36.44074571, 127.42851256), 
                new window.kakao.maps.LatLng(36.44025409, 127.42802191), 
                new window.kakao.maps.LatLng(36.43949903, 127.42685785), 
                new window.kakao.maps.LatLng(36.43565883, 127.42531729), 
                new window.kakao.maps.LatLng(36.4340157519, 127.4242516480), //한일병원
                new window.kakao.maps.LatLng(36.42963705, 127.42143990), 
                new window.kakao.maps.LatLng(36.42384729, 127.41946278), 
                new window.kakao.maps.LatLng(36.42321690, 127.41934232), 
                new window.kakao.maps.LatLng(36.42238552, 127.41935736), 
                new window.kakao.maps.LatLng(36.42106430, 127.41964574), 
                new window.kakao.maps.LatLng(36.42032181, 127.42001250), 
                new window.kakao.maps.LatLng(36.41687343, 127.42297093), 
                new window.kakao.maps.LatLng(36.41347270, 127.42391134), 
                new window.kakao.maps.LatLng(36.41015691, 127.42504165), 
                new window.kakao.maps.LatLng(36.40986425, 127.42497874), 
                new window.kakao.maps.LatLng(36.40671564, 127.42343984),
                new window.kakao.maps.LatLng(36.40596801, 127.42334102), 
                new window.kakao.maps.LatLng(36.40471885, 127.42364082), 
                new window.kakao.maps.LatLng(36.40254690, 127.42240835), 
                new window.kakao.maps.LatLng(36.40210990, 127.42238926), 
                new window.kakao.maps.LatLng(36.4001911844, 127.4228108450), //신대동 주공APT앞 버스승강장
                new window.kakao.maps.LatLng(36.39842111, 127.42324435),
                new window.kakao.maps.LatLng(36.39393933, 127.42153692),
                new window.kakao.maps.LatLng(36.39223909, 127.42069734),
                new window.kakao.maps.LatLng(36.39103597, 127.42071315),
                new window.kakao.maps.LatLng(36.38960183, 127.42107882),
                new window.kakao.maps.LatLng(36.38795333, 127.42217335),
                new window.kakao.maps.LatLng(36.38525295, 127.42511226),
                new window.kakao.maps.LatLng(36.38449937, 127.42541465),
                new window.kakao.maps.LatLng(36.35940496, 127.43206328),
                new window.kakao.maps.LatLng(36.3570458512, 127.4346294565), //쌍용자동차(용전동)
                new window.kakao.maps.LatLng(36.35133168, 127.44158833),
                new window.kakao.maps.LatLng(36.35066240, 127.44224183),
                new window.kakao.maps.LatLng(36.34563989, 127.44546899),
                new window.kakao.maps.LatLng(36.34513098, 127.44600358),
                new window.kakao.maps.LatLng(36.3438909908, 127.4468431062), //가양동 신영주유소 앞
                new window.kakao.maps.LatLng(36.34119829, 127.44876312),
                new window.kakao.maps.LatLng(36.33998824, 127.44882301),
                new window.kakao.maps.LatLng(36.33932390, 127.44874958),
                new window.kakao.maps.LatLng(36.33891894, 127.44859967),
                new window.kakao.maps.LatLng(36.33641210, 127.44721528),
                new window.kakao.maps.LatLng(36.3356789537, 127.4486702063), //자양동 행정복지센터 앞
                new window.kakao.maps.LatLng(36.33500839, 127.45025076),
                new window.kakao.maps.LatLng(36.33466674, 127.45063584),
                new window.kakao.maps.LatLng(36.33381783, 127.45111545),
                new window.kakao.maps.LatLng(36.33346441, 127.45163411),
                new window.kakao.maps.LatLng(36.33306187, 127.45263141),
                new window.kakao.maps.LatLng(36.33268513, 127.45513524), //대전대 서문 LG유플러스 앞 사거리
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
            path: SongGangpath,
            strokeWeight: 5,
            strokeColor: '#0009FF',
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