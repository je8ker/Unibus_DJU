<!-- 도룡동 노선 -->
<template>
    <div>
        <h1 style="text-align: center;">도룡동</h1>
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
            this.DoRyong();
        },
        
        DoRyong() {  // 도룡동방면 마커
            const markerpositions = [
                new window.kakao.maps.LatLng(36.379163, 127.390368), // 대전청년하우스 도룡동(미확인)
                new window.kakao.maps.LatLng(36.365068, 127.391936), // 평송청소년수련관 사거리(미확인)
                new window.kakao.maps.LatLng(36.36146676, 127.39004457), //정부대전청사 동문 버스정류장
                new window.kakao.maps.LatLng(36.35896518, 127.39509593), //삼천중학교 버스정류장
                new window.kakao.maps.LatLng(36.35500225, 127.39510097), //한밭초등학교 버스정류장
                new window.kakao.maps.LatLng(36.35115897, 127.39842647), //둔산훼미리타운 앞
                new window.kakao.maps.LatLng(36.33914318, 127.41262564), //중촌동 파출소 앞
                new window.kakao.maps.LatLng(36.34119431, 127.42520685), //한밭자이아파트 버스정류장 앞
                new window.kakao.maps.LatLng(36.338872, 127.432172), //우송솔브릿지(삼성동)
                new window.kakao.maps.LatLng(36.33040303, 127.44371718), //대동역 7번출구 앞 버스정류장
            ];
            markerpositions.forEach(position => {
                const message = '<div style="padding:5px;">도룡동</div>';
                this.displayMarker(position, message);
            });
            const DoRyongpath = [
                new window.kakao.maps.LatLng(36.379163, 127.390368), // 대전청년하우스 도룡동(미확인)
                new window.kakao.maps.LatLng(36.37900291, 127.39230806),
                new window.kakao.maps.LatLng(36.37849902, 127.39344504),
                new window.kakao.maps.LatLng(36.37662907, 127.39344956),
                new window.kakao.maps.LatLng(36.37459259, 127.39340030),
                new window.kakao.maps.LatLng(36.37427733, 127.39335413),
                new window.kakao.maps.LatLng(36.36965667, 127.39332530),
                new window.kakao.maps.LatLng(36.36666283, 127.39323223),
                new window.kakao.maps.LatLng(36.36515932, 127.39347816),
                new window.kakao.maps.LatLng(36.36497283, 127.39332680),
                new window.kakao.maps.LatLng(36.36500002, 127.39190627), // 평송청소년수련관 사거리(미확인)
                new window.kakao.maps.LatLng(36.36495828, 127.39020406), 
                new window.kakao.maps.LatLng(36.36146676, 127.39004457), //정부대전청사 동문 버스정류장
                new window.kakao.maps.LatLng(36.35971169, 127.39014722),
                new window.kakao.maps.LatLng(36.35967924, 127.39513018), 
                new window.kakao.maps.LatLng(36.35896518, 127.39509593), //삼천중학교 버스정류장
                new window.kakao.maps.LatLng(36.35500225, 127.39510097), //한밭초등학교 버스정류장
                new window.kakao.maps.LatLng(36.35120150, 127.39511518),
                new window.kakao.maps.LatLng(36.35115897, 127.39842647), //둔산훼미리타운 앞
                new window.kakao.maps.LatLng(36.35116445, 127.40149848),
                new window.kakao.maps.LatLng(36.35081071, 127.40150780),
                new window.kakao.maps.LatLng(36.34909776, 127.40172181),
                new window.kakao.maps.LatLng(36.34558350, 127.40162578),
                new window.kakao.maps.LatLng(36.34463715, 127.40165991),
                new window.kakao.maps.LatLng(36.34457064, 127.40401558),
                new window.kakao.maps.LatLng(36.34433596, 127.40545693),
                new window.kakao.maps.LatLng(36.34400883, 127.40625170),
                new window.kakao.maps.LatLng(36.34302141, 127.40773152),
                new window.kakao.maps.LatLng(36.33914318, 127.41262564), //중촌동 파출소 앞
                new window.kakao.maps.LatLng(36.33645036, 127.41603648),
                new window.kakao.maps.LatLng(36.34102181, 127.42175282),
                new window.kakao.maps.LatLng(36.34205743, 127.42323435),
                new window.kakao.maps.LatLng(36.34207330, 127.42384152),
                new window.kakao.maps.LatLng(36.34119431, 127.42520685), //한밭자이아파트 버스정류장 앞
                new window.kakao.maps.LatLng(36.33804504, 127.42952264),
                new window.kakao.maps.LatLng(36.33830157, 127.43023414),
                new window.kakao.maps.LatLng(36.338872, 127.432172), //우송솔브릿지(삼성동)
                new window.kakao.maps.LatLng(36.33910588, 127.43272807), //성남네거리
                new window.kakao.maps.LatLng(36.34056780, 127.43589126),
                new window.kakao.maps.LatLng(36.33653361, 127.43874526),
                new window.kakao.maps.LatLng(36.33348452, 127.43959413), // 대전역동광장 짜글이식당 넘어 사거리
                new window.kakao.maps.LatLng(36.33254485, 127.43985897), 
                new window.kakao.maps.LatLng(36.33211298, 127.44007092), 
                new window.kakao.maps.LatLng(36.33117105, 127.44073666), 
                new window.kakao.maps.LatLng(36.32934718, 127.44290095), // 대동역 오거리
                new window.kakao.maps.LatLng(36.33040303, 127.44371718), //대동역 7번출구 앞 버스정류장
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
            path: DoRyongpath,
            strokeWeight: 5,
            strokeColor: '#000000',
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