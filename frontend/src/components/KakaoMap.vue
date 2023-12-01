// 메인 카카오맵 
<template>
  <div>
    <div class="map-container">
      <div id="map"></div>
    </div>
  </div>
</template>

<style scoped>
#map {
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
}

</style>

<script>
export default {
  name: "KakaoMap",
  data() {
    return {
      map: null,
      marker: null,
      isScriptLoaded: false, // 스크립트 로드 여부
    };
  },
  mounted() {
    if (typeof window !== "undefined" && window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  methods: {
    loadScript() {
      if (typeof window !== "undefined" && !this.isScriptLoaded) {
        this.$nextTick(() => {
          const script = document.createElement("script");
          script.async = true;
          script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAO}&autoload=false`;
          script.onload = () => {
            this.isScriptLoaded = true; // 스크립트가 로드된 상태로 표시
            window.kakao.maps.load(this.loadMap);
          };
          document.head.appendChild(script);
        });
      }
    },
    loadMap() {
      if (typeof window !== "undefined") {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(36.3363901486029, 127.46012170354679),
          level: 3,
        };
        this.map = new window.kakao.maps.Map(container, options);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              const locPosition = new window.kakao.maps.LatLng(lat, lon);

              if (!this.marker) {
                //마커 이미지 경로
                // const markerImageURL = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png';
                const markerImageURL = 'busbus.ico'
                this.createMarker(locPosition, markerImageURL);
              } else {
                this.updateMarker(locPosition);
              }
              //실시간 위치 추적
              navigator.geolocation.watchPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const locPosition = new window.kakao.maps.LatLng(lat, lon);
                this.updateMarker(locPosition);
              });
            },
            (error) => {
              console.error("Error getting geolocation:", error);
            }
          );
        } else {
          const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
          //마커 이미지 경로
          const markerImageURL = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png';
          this.createMarker(locPosition, markerImageURL);
        }
      }
    },
    createMarker(locPosition, markerImageURL) {
      // 마커 이미지 설정
      const markerImage = new window.kakao.maps.MarkerImage(
        markerImageURL,
        new window.kakao.maps.Size(50, 50) // 마커 이미지 크기 설정
      );

      this.marker = new window.kakao.maps.Marker({
        map: this.map,
        position: locPosition,
        image: markerImage, // 마커 이미지 설정
      });
      this.map.setCenter(locPosition);
    },
    updateMarker(locPosition) {
      this.marker.setPosition(locPosition);
      this.map.setCenter(locPosition);
    },
  },
};
</script>
