<!-- 오정동 노선 -->
<template>
    <div>
        <h1 style="text-align: center;">오정동</h1>
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
            this.Ojeong();
        },

        Ojeong() {  // 오정동방면 마커
            const markerpositions = [
                new window.kakao.maps.LatLng(36.376605, 127.420793), //회덕동 주민센터 맞은편
                new window.kakao.maps.LatLng(36.36253294, 127.41787165), //대전병원
                new window.kakao.maps.LatLng(36.36026189, 127.41596263), //삼익양지마을 아파트(101동)유미헤어 앞
                new window.kakao.maps.LatLng(36.35267010, 127.43229901), //용전동 전화국 앞
                new window.kakao.maps.LatLng(36.34945361, 127.43829136), //션샤인 웨딩홀 앞
                new window.kakao.maps.LatLng(36.34654115, 127.44488391), //가양네거리 버스정류장
                new window.kakao.maps.LatLng(36.34012289, 127.43618674), //형우카공업사 앞 성남네거리 버스정류장(대성여고 방면)
                new window.kakao.maps.LatLng(36.32074548, 127.44592306), //신흥마을 104동 앞
                new window.kakao.maps.LatLng(36.31676390, 127.45859490), //판암역 2번출구 버스정류장
            ];
            markerpositions.forEach(position => {
                const message = '<div style="padding:5px;">오정동</div>';
                this.displayMarker(position, message);
            });
            const OJeongpath = [
                new window.kakao.maps.LatLng(36.376605, 127.420793), //회덕동 주민센터 맞은편
                new window.kakao.maps.LatLng(36.37433282, 127.42006879),
                new window.kakao.maps.LatLng(36.37306222, 127.42005638),
                new window.kakao.maps.LatLng(36.37226448, 127.42011338),
                new window.kakao.maps.LatLng(36.37074962, 127.42036710),
                new window.kakao.maps.LatLng(36.36968176, 127.42036136),
                new window.kakao.maps.LatLng(36.36889862, 127.42010922),
                new window.kakao.maps.LatLng(36.36735330, 127.41941563),
                new window.kakao.maps.LatLng(36.36408834, 127.41826438),
                new window.kakao.maps.LatLng(36.36317632, 127.41814529),
                new window.kakao.maps.LatLng(36.36281390, 127.41805700),
                new window.kakao.maps.LatLng(36.36253294, 127.41787165), //대전병원
                new window.kakao.maps.LatLng(36.36191715, 127.41743939),
                new window.kakao.maps.LatLng(36.36026189, 127.41596263), //삼익양지마을 아파트(101동)유미헤어 앞
                new window.kakao.maps.LatLng(36.35963890, 127.41565292),
                new window.kakao.maps.LatLng(36.35944773, 127.41555998),
                new window.kakao.maps.LatLng(36.35874092, 127.41538353),
                new window.kakao.maps.LatLng(36.35862129, 127.41544696),
                new window.kakao.maps.LatLng(36.35852423, 127.41550215),
                new window.kakao.maps.LatLng(36.35846536, 127.41558540),
                new window.kakao.maps.LatLng(36.35843554, 127.41573844),
                new window.kakao.maps.LatLng(36.35849730, 127.41676378),
                new window.kakao.maps.LatLng(36.35893724, 127.43181837),
                new window.kakao.maps.LatLng(36.35882548, 127.43219378),
                new window.kakao.maps.LatLng(36.35861501, 127.43245723),
                new window.kakao.maps.LatLng(36.35825655, 127.43252488),
                new window.kakao.maps.LatLng(36.35691102, 127.43267063),
                new window.kakao.maps.LatLng(36.35594227, 127.43266805),
                new window.kakao.maps.LatLng(36.35267010, 127.43229901), //용전동 전화국 앞
                new window.kakao.maps.LatLng(36.34790445, 127.43186605),
                new window.kakao.maps.LatLng(36.34753033, 127.43190298),
                new window.kakao.maps.LatLng(36.34743062, 127.43206396),
                new window.kakao.maps.LatLng(36.34742972, 127.43231460),
                new window.kakao.maps.LatLng(36.34746494, 127.43254316),
                new window.kakao.maps.LatLng(36.34945361, 127.43829136), //션샤인 웨딩홀 앞
                new window.kakao.maps.LatLng(36.35064027, 127.44152315),
                new window.kakao.maps.LatLng(36.35076770, 127.44179124),
                new window.kakao.maps.LatLng(36.35074603, 127.44216711),
                new window.kakao.maps.LatLng(36.34654115, 127.44488391), //가양네거리 버스정류장
                new window.kakao.maps.LatLng(36.34564219, 127.44545508),
                new window.kakao.maps.LatLng(36.34533599, 127.44540321),
                new window.kakao.maps.LatLng(36.34317428, 127.44085163),
                new window.kakao.maps.LatLng(36.34220632, 127.43879657),
                new window.kakao.maps.LatLng(36.34133919, 127.43688414),
                new window.kakao.maps.LatLng(36.34090965, 127.43605468),
                new window.kakao.maps.LatLng(36.34073427, 127.43595902),
                new window.kakao.maps.LatLng(36.34063295, 127.43594174),
                new window.kakao.maps.LatLng(36.34050447, 127.43596052),
                new window.kakao.maps.LatLng(36.34012289, 127.43618674), //형우카공업사 앞 성남네거리 버스정류장(대성여고 방면)
                new window.kakao.maps.LatLng(36.34056780, 127.43589126),
                new window.kakao.maps.LatLng(36.33653361, 127.43874526),
                new window.kakao.maps.LatLng(36.33348452, 127.43959413),  
                new window.kakao.maps.LatLng(36.33254485, 127.43985897), 
                new window.kakao.maps.LatLng(36.33211298, 127.44007092), 
                new window.kakao.maps.LatLng(36.33117105, 127.44073666), 
                new window.kakao.maps.LatLng(36.32934718, 127.44290095), // 대동역 오거리
                new window.kakao.maps.LatLng(36.32421775, 127.44579250),
                new window.kakao.maps.LatLng(36.32386645, 127.44574874),
                new window.kakao.maps.LatLng(36.32178279, 127.44445620),
                new window.kakao.maps.LatLng(36.32164774, 127.44442203),
                new window.kakao.maps.LatLng(36.32151242, 127.44446024),
                new window.kakao.maps.LatLng(36.32138366, 127.44455138),
                new window.kakao.maps.LatLng(36.32074548, 127.44592306), //신흥마을 104동 앞
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
            path: OJeongpath,
            strokeWeight: 5,
            strokeColor: '#FF6666',
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