<!-- 자운대 노선 -->
<template>
    <div>
        <h1 style="text-align: center;">자운대</h1>
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
            this.JaUn(); 
        },

        JaUn() {  // 자운대방면 마커
            const markerpositions = [
                new window.kakao.maps.LatLng(36.413721, 127.337130), //자운대쇼핑타운(자운상가버스정류장. 군인아파트 방면)
                new window.kakao.maps.LatLng(36.384285, 127.347308), //KT&G 연구소 버스정류장(럭키하나아파트 방면)
                new window.kakao.maps.LatLng(36.38586840, 127.37878694), //연구단지 네거리
                new window.kakao.maps.LatLng(36.37221257, 127.42838719), //대전지방국세청 앞
                new window.kakao.maps.LatLng(36.36737665, 127.43121036), //법동 우체국
                new window.kakao.maps.LatLng(36.36341072, 127.44251451), //송촌동 우체국
                new window.kakao.maps.LatLng(36.35438312, 127.44798651), //삼호아파트 버스정류장(삼호아파트 방면)
            ];
            markerpositions.forEach(position => {
                const message = '<div style="padding:5px;">자운대</div>';
                this.displayMarker(position, message);
            });
            const JaUnpath = [
                new window.kakao.maps.LatLng(36.413721, 127.337130), //자운대쇼핑타운(자운상가버스정류장. 군인아파트 방면)
                new window.kakao.maps.LatLng(36.40246216, 127.33711341),
                new window.kakao.maps.LatLng(36.40207882, 127.33723438),
                new window.kakao.maps.LatLng(36.40167194, 127.33771197),
                new window.kakao.maps.LatLng(36.40151804, 127.34583238),
                new window.kakao.maps.LatLng(36.40041410, 127.34583306),
                new window.kakao.maps.LatLng(36.39950815, 127.34592937),
                new window.kakao.maps.LatLng(36.39846648, 127.34621179),
                new window.kakao.maps.LatLng(36.39711042, 127.34691919),
                new window.kakao.maps.LatLng(36.39646687, 127.34742630),
                new window.kakao.maps.LatLng(36.39386651, 127.34990599),
                new window.kakao.maps.LatLng(36.39369521, 127.34993309),
                new window.kakao.maps.LatLng(36.39260132, 127.34881076),
                new window.kakao.maps.LatLng(36.39194386, 127.34790218),
                new window.kakao.maps.LatLng(36.39050426, 127.34556902),
                new window.kakao.maps.LatLng(36.38934055, 127.34442420),
                new window.kakao.maps.LatLng(36.38688688, 127.34293938),
                new window.kakao.maps.LatLng(36.38557622, 127.34274972),
                new window.kakao.maps.LatLng(36.38512996, 127.34281464),
                new window.kakao.maps.LatLng(36.38372978, 127.34320136),
                new window.kakao.maps.LatLng(36.384285, 127.347308), //KT&G 연구소 버스정류장(럭키하나아파트 방면)
                new window.kakao.maps.LatLng(36.38548046, 127.35547453),
                new window.kakao.maps.LatLng(36.38545379, 127.35686201),
                new window.kakao.maps.LatLng(36.38431598, 127.36361359),
                new window.kakao.maps.LatLng(36.38380650, 127.36666498),
                new window.kakao.maps.LatLng(36.38385230, 127.36788837),
                new window.kakao.maps.LatLng(36.38414102, 127.36923830),
                new window.kakao.maps.LatLng(36.38492935, 127.37075500),
                new window.kakao.maps.LatLng(36.38509240, 127.37120994),
                new window.kakao.maps.LatLng(36.38546850, 127.37414296),
                new window.kakao.maps.LatLng(36.38554033, 127.37494577),
                new window.kakao.maps.LatLng(36.38553302, 127.37869058),
                new window.kakao.maps.LatLng(36.38586840, 127.37878694), //연구단지 네거리
                new window.kakao.maps.LatLng(36.38852686, 127.37878591),
                new window.kakao.maps.LatLng(36.38852006, 127.38162805),
                new window.kakao.maps.LatLng(36.38856229, 127.38321653),
                new window.kakao.maps.LatLng(36.38869195, 127.38493084),
                new window.kakao.maps.LatLng(36.38885399, 127.38568119), 
                new window.kakao.maps.LatLng(36.38943783, 127.38766805),
                new window.kakao.maps.LatLng(36.38979534, 127.38857822),
                new window.kakao.maps.LatLng(36.39008251, 127.38963852),
                new window.kakao.maps.LatLng(36.39091008, 127.39353544),
                new window.kakao.maps.LatLng(36.39099347, 127.39420742),
                new window.kakao.maps.LatLng(36.39096424, 127.39487325),
                new window.kakao.maps.LatLng(36.39079744, 127.39557740),
                new window.kakao.maps.LatLng(36.39030920, 127.39674247),
                new window.kakao.maps.LatLng(36.39017254, 127.39719040),
                new window.kakao.maps.LatLng(36.38998190, 127.39828453),
                new window.kakao.maps.LatLng(36.38995968, 127.40489399),
                new window.kakao.maps.LatLng(36.38663198, 127.40493246), 
                new window.kakao.maps.LatLng(36.38521883, 127.40510067), 
                new window.kakao.maps.LatLng(36.38047831, 127.40653603), 
                new window.kakao.maps.LatLng(36.38011770, 127.40657873), 
                new window.kakao.maps.LatLng(36.37936807, 127.40838581), 
                new window.kakao.maps.LatLng(36.37925230, 127.40864153), 
                new window.kakao.maps.LatLng(36.37692155, 127.41162153), 
                new window.kakao.maps.LatLng(36.37667673, 127.41205765), 
                new window.kakao.maps.LatLng(36.37461850, 127.41827060), 
                new window.kakao.maps.LatLng(36.37434418, 127.41875946), 
                new window.kakao.maps.LatLng(36.37338111, 127.41970707), 
                new window.kakao.maps.LatLng(36.37288466, 127.42185511), 
                new window.kakao.maps.LatLng(36.37304955, 127.42427973), 
                new window.kakao.maps.LatLng(36.37437065, 127.42781947), 
                new window.kakao.maps.LatLng(36.37221257, 127.42838719), //대전지방국세청 앞
                new window.kakao.maps.LatLng(36.36737732, 127.42977295),
                new window.kakao.maps.LatLng(36.36728027, 127.42982256),
                new window.kakao.maps.LatLng(36.36720768, 127.42995866),
                new window.kakao.maps.LatLng(36.36721157, 127.43013139),
                new window.kakao.maps.LatLng(36.36737665, 127.43121036), //법동 우체국
                new window.kakao.maps.LatLng(36.36789926, 127.43371760), 
                new window.kakao.maps.LatLng(36.36810682, 127.43487761),
                new window.kakao.maps.LatLng(36.36809297, 127.43558789),  
                new window.kakao.maps.LatLng(36.36785607, 127.43629971), 
                new window.kakao.maps.LatLng(36.36647293, 127.43810266), 
                new window.kakao.maps.LatLng(36.36448290, 127.44074338), 
                new window.kakao.maps.LatLng(36.36373937, 127.44197876), 
                new window.kakao.maps.LatLng(36.36341072, 127.44251451), //송촌동 우체국
                new window.kakao.maps.LatLng(36.36282759, 127.44362542), //not sure from ~
                new window.kakao.maps.LatLng(36.35918382, 127.44866302),
                new window.kakao.maps.LatLng(36.35846169, 127.44778148),
                new window.kakao.maps.LatLng(36.35732338, 127.44673325),
                new window.kakao.maps.LatLng(36.35544402, 127.44563626),
                new window.kakao.maps.LatLng(36.35537408, 127.44566371),
                new window.kakao.maps.LatLng(36.35530405, 127.44571345),
                new window.kakao.maps.LatLng(36.35523614, 127.44579941),
                new window.kakao.maps.LatLng(36.35438312, 127.44798651), //삼호아파트 버스정류장(삼호아파트 방면)
                new window.kakao.maps.LatLng(36.35405034, 127.44901235),
                new window.kakao.maps.LatLng(36.35402242, 127.44924615),
                new window.kakao.maps.LatLng(36.35441193, 127.45467400),
                new window.kakao.maps.LatLng(36.35443102, 127.45498606),
                new window.kakao.maps.LatLng(36.35449740, 127.45530118),
                new window.kakao.maps.LatLng(36.35518433, 127.45653904), //혜원유치원 앞 버스정류장
                new window.kakao.maps.LatLng(36.35535301, 127.45720292), 
                new window.kakao.maps.LatLng(36.35536768, 127.45808036),
                new window.kakao.maps.LatLng(36.35527291, 127.45929139), 
                new window.kakao.maps.LatLng(36.35395613, 127.45957053),
                new window.kakao.maps.LatLng(36.35282940, 127.45963911),
                new window.kakao.maps.LatLng(36.35132023, 127.45956339),
                new window.kakao.maps.LatLng(36.35055830, 127.45967589),
                new window.kakao.maps.LatLng(36.34854603, 127.46036588),
                new window.kakao.maps.LatLng(36.34792385, 127.46046248),
                new window.kakao.maps.LatLng(36.34319584, 127.45964375),
                new window.kakao.maps.LatLng(36.34241868, 127.45961969),
                new window.kakao.maps.LatLng(36.34197675, 127.45971178),
                new window.kakao.maps.LatLng(36.34197675, 127.45971178),
                new window.kakao.maps.LatLng(36.34152089, 127.45990960),
                new window.kakao.maps.LatLng(36.34106683, 127.46022718),
                new window.kakao.maps.LatLng(36.34050545, 127.46091449),
                new window.kakao.maps.LatLng(36.33945562, 127.46265430),
                new window.kakao.maps.LatLng(36.33894671, 127.46317203),
                new window.kakao.maps.LatLng(36.33856728, 127.46341205),
                new window.kakao.maps.LatLng(36.33789946, 127.46365871),
                new window.kakao.maps.LatLng(36.33746683, 127.46367564),
                new window.kakao.maps.LatLng(36.33656355, 127.46363687),
                new window.kakao.maps.LatLng(36.33647060, 127.46262551),
                new window.kakao.maps.LatLng(36.33666174, 127.46213377),
                new window.kakao.maps.LatLng(36.33674346, 127.46204805),
                new window.kakao.maps.LatLng(36.33724088, 127.46210099), //대전대학교 운동장 뒤
            ];
            const polyline = new window.kakao.maps.Polyline({
            path: JaUnpath,
            strokeWeight: 5,
            strokeColor: '#808080',
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