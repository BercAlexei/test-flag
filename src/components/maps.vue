<template>
  <yandex-map 
  :coords="coords"
  :zoom="zoom">
    <ymap-marker 
      v-for="(item, index) in info"
      :key="index"
      :marker-id="index" 
      :coords="arrCoords[index]"
      />
</yandex-map>

</template>

<script>
import { loadYmap } from 'vue-yandex-maps'

export default {
    props: {
        info: {
            require: true,
            type: Array
        }
    },
    data() {
        return {
            coords: [54, 39],
            arrCoords: [],
            zoom: 4,
            markerIcon: {
                layout: 'default#imageWithContent',
                imageHref: '',
                imageSize: [43, 43],
                imageOffset: [0, 0],
                content: '',
                contentOffset: [0, 15],
                contentLayout: '<div style="background: #00325e; width: 50px; height: 50px; color: #FFFFFF; border-radius: 100%; font-weight: bold;">$[properties.iconContent]</div>'
            }
        };
    },
    computed: {

    },
    async mounted() {
        const settings = { lang: 'ru_RU' };
        await loadYmap({settings, debug: false});
        if (this.arrCoords) {
            this.info.forEach(item => {
                ymaps.geocode(item.name).then(res => { 
                    let firstGeoObject = res.geoObjects.get(0)
                    let arr = firstGeoObject.geometry.getCoordinates();
                    this.arrCoords.push(arr);
                });
            })
        }
    },
}
</script>

<style lang="scss">
.ymap-container {
  height: 100vh;
  width: 100%;
}
</style>