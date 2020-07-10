<template>
<l-map style="height: 350px" :zoom="zoom" :center="center">
<l-tile-layer :url="url"></l-tile-layer>
<l-circle-marker
      :lat-lng="circle.center"
      :radius="circle.radius"
      :color="circle.color"
    />
</l-map>
</template>

<script>
import {LMap, LTileLayer, LCircleMarker} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LCircleMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [51.347670, 0.357530],
      circle: {
        center: [51.347670, 0.357530],
        radius: 6,
        color: 'red'
      },
    };
  }
}
</script>




