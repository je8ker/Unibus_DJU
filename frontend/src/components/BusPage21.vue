<template>
    <div>
        <h1 style="text-align: center;">대전역 동광장</h1>
        <div class="map-container">
            <div id="map" style="width: 100%; height: 100%;"></div>
            <div id="roadview" style="width: 100%; height: 100%;"></div>
        </div>
    </div>
</template>
  
<script>

export default {
    mounted() {
        // Kakao 지도 API 로드 여부 확인
        if (window.kakao && window.kakao.maps) {
            this.initializeMap();
        } else {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAO}&autoload=false`;
            document.head.appendChild(script);

            script.onload = () => {
                window.kakao.maps.load(() => {
                    this.initializeMap();
                });
            };
        }
    },
    methods: {
        initializeMap() {
            const mapContainer = document.getElementById('map');
            const roadviewContainer = document.getElementById('roadview');

            const mapOptions = {
                center: new window.kakao.maps.LatLng(36.3326, 127.4366),
                level: 2,
            };
            const map = new window.kakao.maps.Map(mapContainer, mapOptions);
            //마커 좌표
            const markerPosition = new window.kakao.maps.LatLng(36.3326, 127.4366);
            //마커 생성
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            //마커 지도에 추가
            marker.setMap(map)

            const roadview = new window.kakao.maps.Roadview(roadviewContainer);
            map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.ROADVIEW);

            // 위치 좌표
            const mapCenter = new window.kakao.maps.LatLng(36.3326, 127.4366)

            // RoadviewClient 객체 생성
            const roadviewClient = new window.kakao.maps.RoadviewClient();


            // 가까운 로드뷰의 Pano ID를 가져옴
            roadviewClient.getNearestPanoId(mapCenter, 50, (panoId) => {
                roadview.setPanoId(panoId, mapCenter); // panoId와 중심좌표를 통해 로드뷰 실행
            });

            let mapWalker = null;

            window.kakao.maps.event.addListener(roadview, 'init', () => {
                mapWalker = new MapWalker(mapCenter);
                mapWalker.setMap(map);

                window.kakao.maps.event.addListener(roadview, 'viewpoint_changed', () => {
                    const viewpoint = roadview.getViewpoint();
                    mapWalker.setAngle(viewpoint.pan);
                });

                window.kakao.maps.event.addListener(roadview, 'position_changed', () => {
                    const position = roadview.getPosition();
                    mapWalker.setPosition(position);
                    map.setCenter(position);
                });
            });
            // 특정 좌표로 로드뷰의 시점을 설정
            roadview.setViewpoint({
                pan: 180,  // 서쪽을 가리키는 시점
                tilt: 0,    // 수평으로 설정
                zoom: 1,
            });
            if (window.kakao.maps.event.addListener) {
                window.kakao.maps.event.addListener(roadview, 'init', () => {
                    const panoId = roadview.getPanoId();
                    console.log('Pano ID:', panoId);
                    // 여기에서 로드뷰의 panoId를 사용할 수 있습니다.
                });
            } else {
                console.error('addListenerOnce is not available in the Kakao Maps API.');
            }

        },
    },
};


function MapWalker(position) {
    const content = document.createElement('div');
    const figure = document.createElement('div');
    const angleBack = document.createElement('div');

    content.className = 'MapWalker';
    figure.className = 'figure';
    angleBack.className = 'angleBack';

    content.appendChild(angleBack);
    content.appendChild(figure);

    const walker = new window.kakao.maps.CustomOverlay({
        position: position,
        content: content,
        yAnchor: 1,
    });

    this.walker = walker;
    this.content = content;
}

MapWalker.prototype.setAngle = function (angle) {
    const threshold = 22.5;
    for (let i = 0; i < 16; i++) {
        if (angle > threshold * i && angle < threshold * (i + 1)) {
            const className = 'm' + i;
            this.content.className = this.content.className.split(' ')[0];
            this.content.className += ' ' + className;
            break;
        }
    }
};

MapWalker.prototype.setPosition = function (position) {
    this.walker.setPosition(position);
};

MapWalker.prototype.setMap = function (map) {
    this.walker.setMap(map);
};
</script>
  
<style scoped>
.map-container {
    width: 80%;
    height: 80%;
    /* display: flex; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>



<!-- <template>
    <div>
        <h1 style="text-align: center;">대전역 동광장</h1>
        <div class="map-container">
            <div id="map" style="width: 50%; height: 100%;"></div>
            <div id="roadview" style="width: 50%; height: 100%;"></div>
        </div>
    </div>
</template>
  
<script>

export default {
    mounted() {
        // Kakao 지도 API 로드 여부 확인
        if (window.kakao && window.kakao.maps) {
            this.initializeMap();
        } else {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAO}&autoload=false`;
            document.head.appendChild(script);

            script.onload = () => {
                window.kakao.maps.load(() => {
                    this.initializeMap();
                });
            };
        }
    },
    methods: {
        initializeMap() {
            const mapContainer = document.getElementById('map');
            const roadviewContainer = document.getElementById('roadview');

            const mapOptions = {
                center: new window.kakao.maps.LatLng(36.3326, 127.4366),
                level: 2,
            };
            const map = new window.kakao.maps.Map(mapContainer, mapOptions);
            //마커 좌표
            const markerPosition = new window.kakao.maps.LatLng(36.3326, 127.4366);
            //마커 생성
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            //마커 지도에 추가
            marker.setMap(map);

            const roadview = new window.kakao.maps.Roadview(roadviewContainer);
            map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.ROADVIEW);

            // 위치 좌표
            const mapCenter = new window.kakao.maps.LatLng(36.3326, 127.4366)

            // RoadviewClient 객체 생성
            const roadviewClient = new window.kakao.maps.RoadviewClient();

            // 가까운 로드뷰의 Pano ID를 가져옴
            roadviewClient.getNearestPanoId(mapCenter, 50, (panoId) => {
                roadview.setPanoId(panoId, mapCenter); // panoId와 중심좌표를 통해 로드뷰 실행
            });

            let mapWalker = null;

            window.kakao.maps.event.addListener(roadview, 'init', () => {
                mapWalker = new MapWalker(mapCenter);
                mapWalker.setMap(map);

                window.kakao.maps.event.addListener(roadview, 'viewpoint_changed', () => {
                    const viewpoint = roadview.getViewpoint();
                    mapWalker.setAngle(viewpoint.pan);
                });

                window.kakao.maps.event.addListener(roadview, 'position_changed', () => {
                    const position = roadview.getPosition();
                    mapWalker.setPosition(position);
                    map.setCenter(position);
                });
            });

            if (window.kakao.maps.event.addListener) {
                window.kakao.maps.event.addListener(roadview, 'init', () => {
                    const panoId = roadview.getPanoId();
                    console.log('Pano ID:', panoId);
                    // 여기에서 로드뷰의 panoId를 사용할 수 있습니다.
                });
            } else {
                console.error('addListenerOnce is not available in the Kakao Maps API.');
            }

        },
    },
};


function MapWalker(position) {
    const content = document.createElement('div');
    const figure = document.createElement('div');
    const angleBack = document.createElement('div');

    content.className = 'MapWalker';
    figure.className = 'figure';
    angleBack.className = 'angleBack';

    content.appendChild(angleBack);
    content.appendChild(figure);

    const walker = new window.kakao.maps.CustomOverlay({
        position: position,
        content: content,
        yAnchor: 1,
    });

    this.walker = walker;
    this.content = content;
}

MapWalker.prototype.setAngle = function (angle) {
    const threshold = 22.5;
    for (let i = 0; i < 16; i++) {
        if (angle > threshold * i && angle < threshold * (i + 1)) {
            const className = 'm' + i;
            this.content.className = this.content.className.split(' ')[0];
            this.content.className += ' ' + className;
            break;
        }
    }
};

MapWalker.prototype.setPosition = function (position) {
    this.walker.setPosition(position);
};

MapWalker.prototype.setMap = function (map) {
    this.walker.setMap(map);
};
</script>
  
<style scoped>
.map-container {
  width: 80%;
  height: 80%;
  display: flex;
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
}
</style> -->
