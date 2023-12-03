<!-- 도안동 노선 -->
<template>
    <div>
        <h1 style="text-align: center;">도안동</h1>
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
            this.DoAn();
        },
       
        DoAn() {  // 도안방면 마커
            const markerpositions = [
                new window.kakao.maps.LatLng(36.34577971, 127.33744818), //도안 신도시 휴면시아아파트 4단지 정문맞은편
                new window.kakao.maps.LatLng(36.34144789, 127.33803379), //트리플시티아파트 9단지 첫 번째 버스정류장
                new window.kakao.maps.LatLng(36.33759751, 127.33807006), //도안고등학교 앞 버스정류장
                new window.kakao.maps.LatLng(36.33192685, 127.34044852), //목원네거리(하나은행 앞)
                new window.kakao.maps.LatLng(36.31937230, 127.34787727), //수목토아파트(103동)버스전용 승강장
                new window.kakao.maps.LatLng(36.30421975, 127.37945777), //초록마을 1단지 102동 앞 버스정류장
                new window.kakao.maps.LatLng(36.30455553, 127.38646257), //산성네거리지나 농혚 앞
                new window.kakao.maps.LatLng(36.30822878, 127.39581685), //대전중구보건소 맞은편 버스정류장
                new window.kakao.maps.LatLng(36.31042875, 127.39955251), //문화주공 아파트(302동)앞 버스정류장
                new window.kakao.maps.LatLng(36.31444957, 127.40511559), //동산 중,고등학교 맞은편 버스정류장 지나 준치과 의원 앞
                new window.kakao.maps.LatLng(36.322183, 127.442695), //동부경찰서 지나 우회전, 인동어진마을아파트 102동 앞
                new window.kakao.maps.LatLng(36.31676390, 127.45859490), //판암역 2번출구 버스정류장
            ];
            markerpositions.forEach(position => {
                const message = '<div style="padding:5px;">도안</div>';
                this.displayMarker(position, message);
            });
            const DoAnpath = [
                new window.kakao.maps.LatLng(36.34577971, 127.33744818), //도안 신도시 휴면시아아파트 4단지 정문맞은편
                new window.kakao.maps.LatLng(36.34577908, 127.34005487),
                new window.kakao.maps.LatLng(36.34524529, 127.33999963),
                new window.kakao.maps.LatLng(36.34458104, 127.33986864), 
                new window.kakao.maps.LatLng(36.34312937, 127.33934714),
                new window.kakao.maps.LatLng(36.34272913, 127.33907249),
                new window.kakao.maps.LatLng(36.34144789, 127.33803379), //트리플시티아파트 9단지 첫 번째 버스정류장
                new window.kakao.maps.LatLng(36.33967653, 127.33663099),
                new window.kakao.maps.LatLng(36.33847631, 127.33561778),
                new window.kakao.maps.LatLng(36.33825992, 127.33565583),
                new window.kakao.maps.LatLng(36.33818750, 127.33577248),
                new window.kakao.maps.LatLng(36.33813732, 127.33598946),
                new window.kakao.maps.LatLng(36.33811340, 127.33808342),
                new window.kakao.maps.LatLng(36.33759751, 127.33807006), //도안고등학교 앞 버스정류장
                new window.kakao.maps.LatLng(36.33242477, 127.33806163),
                new window.kakao.maps.LatLng(36.33222184, 127.33811922),
                new window.kakao.maps.LatLng(36.33206844, 127.33818817),
                new window.kakao.maps.LatLng(36.33200499, 127.33831877),
                new window.kakao.maps.LatLng(36.33197067, 127.33850517),
                new window.kakao.maps.LatLng(36.33192685, 127.34044852), //목원네거리(하나은행 앞)
                new window.kakao.maps.LatLng(36.33200533, 127.34450857),
                new window.kakao.maps.LatLng(36.33201888, 127.34761050),
                new window.kakao.maps.LatLng(36.33182447, 127.34783796),
                new window.kakao.maps.LatLng(36.31937230, 127.34787727), //수목토아파트(103동)버스전용 승강장
                new window.kakao.maps.LatLng(36.31735556, 127.34799637),
                new window.kakao.maps.LatLng(36.30521735, 127.35313363),
                new window.kakao.maps.LatLng(36.30514708, 127.35328084),
                new window.kakao.maps.LatLng(36.30507668, 127.35346980),
                new window.kakao.maps.LatLng(36.30508486, 127.35374818),
                new window.kakao.maps.LatLng(36.30696958, 127.36161465),
                new window.kakao.maps.LatLng(36.30722674, 127.36373690),
                new window.kakao.maps.LatLng(36.30896813, 127.36893087),
                new window.kakao.maps.LatLng(36.30526084, 127.37085069),
                new window.kakao.maps.LatLng(36.30473563, 127.37158028),
                new window.kakao.maps.LatLng(36.3044428186141, 127.3730068038457), //국방기술 품질원 유도탄약센터 앞
                new window.kakao.maps.LatLng(36.30416450, 127.37698023),
                new window.kakao.maps.LatLng(36.30421975, 127.37945777), //초록마을 1단지 102동 앞 버스정류장
                new window.kakao.maps.LatLng(36.30453184, 127.38612287),
                new window.kakao.maps.LatLng(36.30455553, 127.38646257), //산성네거리지나 농혚 앞
                new window.kakao.maps.LatLng(36.30559092, 127.38953788),
                new window.kakao.maps.LatLng(36.30728546, 127.39493526),
                new window.kakao.maps.LatLng(36.30822878, 127.39581685), //대전중구보건소 맞은편 버스정류장
                new window.kakao.maps.LatLng(36.31042875, 127.39955251), //문화주공 아파트(302동)앞 버스정류장
                new window.kakao.maps.LatLng(36.31096202, 127.40042931),
                new window.kakao.maps.LatLng(36.31116497, 127.40104555),
                new window.kakao.maps.LatLng(36.31225869, 127.40207834),
                new window.kakao.maps.LatLng(36.31378776, 127.40294917),
                new window.kakao.maps.LatLng(36.31444957, 127.40511559), //동산 중,고등학교 맞은편 버스정류장 지나 준치과 의원 앞
                new window.kakao.maps.LatLng(36.31774585, 127.41425557),
                new window.kakao.maps.LatLng(36.31820414, 127.41979803),
                new window.kakao.maps.LatLng(36.31772564, 127.42132662),
                new window.kakao.maps.LatLng(36.31784371, 127.42361565),
                new window.kakao.maps.LatLng(36.31699909, 127.42545402),
                new window.kakao.maps.LatLng(36.31710730, 127.42606706), //보문오거리
                new window.kakao.maps.LatLng(36.32127526, 127.43667748),
                new window.kakao.maps.LatLng(36.32204603, 127.43967744),
                new window.kakao.maps.LatLng(36.32243280, 127.44171200),
                new window.kakao.maps.LatLng(36.32253750, 127.44203276),
                new window.kakao.maps.LatLng(36.32239469, 127.44226860),
                new window.kakao.maps.LatLng(36.322183, 127.442695), //동부경찰서 지나 우회전, 인동어진마을아파트 102동 앞
                new window.kakao.maps.LatLng(36.32020446, 127.44721176),
                new window.kakao.maps.LatLng(36.31729714, 127.45346450),
                new window.kakao.maps.LatLng(36.31703236, 127.45437052),
                new window.kakao.maps.LatLng(36.31689351, 127.45533572),
                new window.kakao.maps.LatLng(36.31676485, 127.45716955),
                new window.kakao.maps.LatLng(36.31676390, 127.45859490), //판암역 2번출구 버스정류장
                new window.kakao.maps.LatLng(36.31725517, 127.46031823),
                new window.kakao.maps.LatLng(36.31827001, 127.46238987),
                new window.kakao.maps.LatLng(36.31923324, 127.46207541),
                new window.kakao.maps.LatLng(36.31953305, 127.46202985),
                new window.kakao.maps.LatLng(36.32109848, 127.46270726),
                new window.kakao.maps.LatLng(36.32141601, 127.46274254),
                new window.kakao.maps.LatLng(36.32235143, 127.46262557),
                new window.kakao.maps.LatLng(36.32418490, 127.46505862),
                new window.kakao.maps.LatLng(36.32621662, 127.46632359),
                new window.kakao.maps.LatLng(36.32971195, 127.46663956),
                new window.kakao.maps.LatLng(36.33062331, 127.46633871),
                new window.kakao.maps.LatLng(36.33265152, 127.46387821),
                new window.kakao.maps.LatLng(36.33333280, 127.46364835),
                new window.kakao.maps.LatLng(36.33648634, 127.46379513),
                new window.kakao.maps.LatLng(36.33647060, 127.46262551),
                new window.kakao.maps.LatLng(36.33666174, 127.46213377),
                new window.kakao.maps.LatLng(36.33674346, 127.46204805),
                new window.kakao.maps.LatLng(36.33724088, 127.46210099), //대전대학교 운동장 뒤
            ];
            const polyline = new window.kakao.maps.Polyline({
            path: DoAnpath,
            strokeWeight: 5,
            strokeColor: '#9933FF',
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