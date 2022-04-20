<template>
  <yandex-map 
  :coords="coords"
  :zoom="zoom">
    </yandex-map>

</template>

<script>
import { loadYmap } from 'vue-yandex-maps'

export default {
    data() {
        return {
        coords: [54, 39],
        zoom: 12,
        };
    },
    async mounted() {
        const settings = { lang: 'ru_RU' };
        await loadYmap({settings, debug: true});
        ymaps.geocode("Екатеринбург").then(res => { 
            let firstGeoObject = res.geoObjects.get(0)
            this.coords = firstGeoObject.geometry.getCoordinates();
            firstGeoObject.properties.get('boundedBy')
            myMap.geoObjects.add(firstGeoObject);
        });
    },
}
</script>

<style lang="scss">
.ymap-container {
  height: 100vh;
  width: 100%;
}
</style>