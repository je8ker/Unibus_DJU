<!-- 관저동 노선 -->
<template>
    <div>
        <h1 style="text-align: center;">관저동</h1>
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
            this.Gwanjeo();
        },

        Gwanjeo() {  // 관저동방면 마커
            const markerpositions = [
                new window.kakao.maps.LatLng(36.2989574749240, 127.3241121682801), //관저동LG전자앞
                new window.kakao.maps.LatLng(36.3028731054038, 127.3434841508532), //건양대병원 네거리버스정류장
                new window.kakao.maps.LatLng(36.3044363832283, 127.3513320043803), //가수원육교 버스정류장
                new window.kakao.maps.LatLng(36.3044428186141, 127.3730068038457), //국방기술 품질원 유도탄약센터 앞
                new window.kakao.maps.LatLng(36.3137614386700, 127.4367469267822), //해피마트 문창점 앞
                new window.kakao.maps.LatLng(36.3139178850863, 127.4407731552262), //우성유통 앞
                new window.kakao.maps.LatLng(36.3060336802686, 127.4519407304987), //가오동 신흥교회 앞
                new window.kakao.maps.LatLng(36.3073120396452, 127.4564379705717), //가오동 할머니보쌈 앞
                new window.kakao.maps.LatLng(36.33724088, 127.46210099), //대전대학교 운동장 뒤
            ];
            markerpositions.forEach(position => {
                const message = '<div style="padding:5px;">관저동</div>';
                this.displayMarker(position, message);
            });
            const Gwanjeopath = [
                new window.kakao.maps.LatLng(36.2989574749240, 127.3241121682801), //관저동 LG전자 앞
                new window.kakao.maps.LatLng(36.29966893, 127.32511709),
                new window.kakao.maps.LatLng(36.30145629, 127.33059101),
                new window.kakao.maps.LatLng(36.30146171, 127.33671998),
                new window.kakao.maps.LatLng(36.3028731054038, 127.3434841508532), //건양대병원 네거리버스정류장
                new window.kakao.maps.LatLng(36.3044363832283, 127.3513320043803), //가수원육교 버스정류장
                new window.kakao.maps.LatLng(36.30696958, 127.36161465),
                new window.kakao.maps.LatLng(36.30722674, 127.36373690),
                new window.kakao.maps.LatLng(36.30896813, 127.36893087),
                new window.kakao.maps.LatLng(36.30526084, 127.37085069),
                new window.kakao.maps.LatLng(36.30473563, 127.37158028),
                new window.kakao.maps.LatLng(36.3044428186141, 127.3730068038457), //국방기술 품질원 유도탄약센터 앞
                new window.kakao.maps.LatLng(36.30416450, 127.37698023),
                new window.kakao.maps.LatLng(36.30453184, 127.38612287),
                new window.kakao.maps.LatLng(36.30728546, 127.39493526),
                new window.kakao.maps.LatLng(36.30830756, 127.39583952),
                new window.kakao.maps.LatLng(36.31096202, 127.40042931),
                new window.kakao.maps.LatLng(36.31116497, 127.40104555),
                new window.kakao.maps.LatLng(36.31225869, 127.40207834),
                new window.kakao.maps.LatLng(36.31378776, 127.40294917),
                new window.kakao.maps.LatLng(36.31774585, 127.41425557),
                new window.kakao.maps.LatLng(36.31820414, 127.41979803),
                new window.kakao.maps.LatLng(36.31772564, 127.42132662),
                new window.kakao.maps.LatLng(36.31784371, 127.42361565),
                new window.kakao.maps.LatLng(36.31699909, 127.42545402),
                new window.kakao.maps.LatLng(36.31710730, 127.42606706), //보문오거리
                new window.kakao.maps.LatLng(36.31372411, 127.42838424),
                new window.kakao.maps.LatLng(36.31309507, 127.43475282),
                new window.kakao.maps.LatLng(36.3137614386700, 127.4367469267822), //해피마트 문창점 앞
                new window.kakao.maps.LatLng(36.31515405, 127.44035140),
                new window.kakao.maps.LatLng(36.3139178850863, 127.4407731552262), //우성유통 앞
                new window.kakao.maps.LatLng(36.31267651, 127.44138415),
                new window.kakao.maps.LatLng(36.31221935, 127.44194110),
                new window.kakao.maps.LatLng(36.31154238, 127.44345161),
                new window.kakao.maps.LatLng(36.31177515, 127.44507862),
                new window.kakao.maps.LatLng(36.31082990, 127.44843036),
                new window.kakao.maps.LatLng(36.30963306, 127.44916952),
                new window.kakao.maps.LatLng(36.30784672, 127.45090178),
                new window.kakao.maps.LatLng(36.3060336802686, 127.4519407304987), //가오동 신흥교회 앞
                new window.kakao.maps.LatLng(36.30458799, 127.45353844),
                new window.kakao.maps.LatLng(36.30687793, 127.45684183),
                new window.kakao.maps.LatLng(36.3073120396452, 127.4564379705717), //가오동 할머니보쌈 앞
                new window.kakao.maps.LatLng(36.30814900, 127.45555210),
                new window.kakao.maps.LatLng(36.30897467, 127.45526741),
                new window.kakao.maps.LatLng(36.30963668, 127.45536033),
                new window.kakao.maps.LatLng(36.31516106, 127.45650042),
                new window.kakao.maps.LatLng(36.31681053, 127.45641817),
                new window.kakao.maps.LatLng(36.31686444, 127.45881263), // 판암역 출구
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
            path: Gwanjeopath,
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