<!-- 테크노벨리 노선 -->
<template>
    <div>
        <h1 style="text-align: center;">테크노벨리</h1>
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
            this.techvalley();
        },
 

        techvalley() {  // 테크노밸리방면 마커
            const markerpositions = [
                new window.kakao.maps.LatLng(36.41837982, 127.39763226), //경남아너스빌 2단지 정문 앞
                new window.kakao.maps.LatLng(36.42100724, 127.38996022), //중일고등학교 정문 앞(테크노공인중개사무소 앞)
                new window.kakao.maps.LatLng(36.42005405, 127.38586330), //테크노밸리 4단지 버스정류장(406동 앞)
                new window.kakao.maps.LatLng(36.40048573, 127.40477023), //세종아파트 후문
                new window.kakao.maps.LatLng(36.39906637, 127.40477680), //전민동 혜민 온누리약국
                new window.kakao.maps.LatLng(36.37187207, 127.42847439), //대전지방국세청 앞
                new window.kakao.maps.LatLng(36.36830981, 127.43357502), //보람아파트 버스정류장
                new window.kakao.maps.LatLng(36.36637895, 127.44524176), //선비마을 4.5단지 사이
            ];
            markerpositions.forEach(position => {
                const message = '<div style="padding:5px;">테크노밸리</div>';
                this.displayMarker(position, message);
            });
            const techvalleypath = [
                new window.kakao.maps.LatLng(36.41837982, 127.39763226), //경남아너스빌 2단지 정문 앞
                new window.kakao.maps.LatLng(36.42024479, 127.39231749), 
                new window.kakao.maps.LatLng(36.42100724, 127.38996022), //중일고등학교 정문 앞(테크노공인중개사무소 앞)
                new window.kakao.maps.LatLng(36.42191529, 127.38715203), 
                new window.kakao.maps.LatLng(36.42005405, 127.38586330), //테크노밸리 4단지 버스정류장(406동 앞)
                new window.kakao.maps.LatLng(36.41867556, 127.38507318), 
                new window.kakao.maps.LatLng(36.41870454, 127.38725875), 
                new window.kakao.maps.LatLng(36.41800227, 127.38983370), 
                new window.kakao.maps.LatLng(36.41725306, 127.39227735), 
                new window.kakao.maps.LatLng(36.41588715, 127.39656312), 
                new window.kakao.maps.LatLng(36.41344189, 127.40287515), 
                new window.kakao.maps.LatLng(36.41288689, 127.40510493),
                new window.kakao.maps.LatLng(36.41273031, 127.40676256), 
                new window.kakao.maps.LatLng(36.41248037, 127.40672503), 
                new window.kakao.maps.LatLng(36.41219458, 127.40662598), 
                new window.kakao.maps.LatLng(36.41181472, 127.40636757),
                new window.kakao.maps.LatLng(36.40869648, 127.40243815), 
                new window.kakao.maps.LatLng(36.40849215, 127.40223363), 
                new window.kakao.maps.LatLng(36.40747359, 127.40163751), 
                new window.kakao.maps.LatLng(36.40709531, 127.40154254), 
                new window.kakao.maps.LatLng(36.40677748, 127.40162557), 
                new window.kakao.maps.LatLng(36.40643461, 127.40175201), 
                new window.kakao.maps.LatLng(36.40622905, 127.40191539),
                new window.kakao.maps.LatLng(36.40595306, 127.40225120), 
                new window.kakao.maps.LatLng(36.40545648, 127.40319624), 
                new window.kakao.maps.LatLng(36.40474265, 127.40442720), 
                new window.kakao.maps.LatLng(36.40410832, 127.40480016), 
                new window.kakao.maps.LatLng(36.40048573, 127.40477023), //세종아파트 후문
                new window.kakao.maps.LatLng(36.39906637, 127.40477680), //전민동 혜민 온누리약국
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
                new window.kakao.maps.LatLng(36.37187207, 127.42847439), //대전지방국세청 앞
                new window.kakao.maps.LatLng(36.37065623, 127.42889396),
                new window.kakao.maps.LatLng(36.37071523, 127.43065491), 
                new window.kakao.maps.LatLng(36.36991771, 127.43314379), 
                new window.kakao.maps.LatLng(36.36830981, 127.43357502), //보람아파트 버스정류장
                new window.kakao.maps.LatLng(36.36789926, 127.43371760), // not sure from ~
                new window.kakao.maps.LatLng(36.36810682, 127.43487761),
                new window.kakao.maps.LatLng(36.36809297, 127.43558789),  
                new window.kakao.maps.LatLng(36.36785607, 127.43629971), 
                new window.kakao.maps.LatLng(36.36647293, 127.43810266), 
                new window.kakao.maps.LatLng(36.36448290, 127.44074338), 
                new window.kakao.maps.LatLng(36.36373937, 127.44197876), //not sure
                new window.kakao.maps.LatLng(36.36637895, 127.44524176), //선비마을 5단지 502동 앞 버스정류장
                new window.kakao.maps.LatLng(36.36697572, 127.44591372), 
                new window.kakao.maps.LatLng(36.36621534, 127.44682308), 
                new window.kakao.maps.LatLng(36.36514699, 127.44754958),
                new window.kakao.maps.LatLng(36.36491465, 127.44762625), 
                new window.kakao.maps.LatLng(36.36391148, 127.44779042), 
                new window.kakao.maps.LatLng(36.36374255, 127.44778110), 
                new window.kakao.maps.LatLng(36.36361443, 127.44770237), 
                new window.kakao.maps.LatLng(36.36153192, 127.44550662), 
                new window.kakao.maps.LatLng(36.35858342, 127.44956204), 
                new window.kakao.maps.LatLng(36.35712446, 127.45348652), 
                new window.kakao.maps.LatLng(36.35672766, 127.45415548), 
                new window.kakao.maps.LatLng(36.35628705, 127.45449272), 
                new window.kakao.maps.LatLng(36.35537803, 127.45477989), 
                new window.kakao.maps.LatLng(36.35509656, 127.45474204),
                new window.kakao.maps.LatLng(36.35474823, 127.45569535), //  혜원유치원 삼거리
                new window.kakao.maps.LatLng(36.35518433, 127.45653904), 
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
            path: techvalleypath,
            strokeWeight: 5,
            strokeColor: '#9999FF',
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