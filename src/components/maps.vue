<template>
  <yandex-map 
  :coords="coords"
  :center="true"
  :controls="[]"
  :show-all-markers="true"
  :cluster-options="clusterOptions"
  @boundschange="console($event)">
    <ymap-marker 
      v-for="(item, index) in getOff"
      :key="index"
      :marker-id="index" 
      :coords="item.coord"
      :icon="markerIcon"
      :balloon-template="balloonTemplate"
      :options="{ balloonCloseButton: true, balloonOffset:[8, 0], hideIconOnBalloonOpen: false }"
      @balloonopen="openAccordion(item.city_id)"
      cluster-name="1">
    </ymap-marker>
</yandex-map>

</template>

<script>
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
            filter: 0,
            markerIcon: {
                layout: 'default#imageWithContent',
                imageHref: '',
                imageSize: [30, 30],
                imageOffset: [0, 0],
                content: '',
                contentOffset: [-5, -5],
                contentLayout: '<div class="icon"></div>'
            },
            clusterOptions: {
                1: {
                    clusterDisableClickZoom: false,
                    clusterIcons: [
                        {
                            href: '',
                            size: [30, 30],
                            offset: [-20, -25]
                        }
                    ],
                    clusterLayout: '',
                    clusterContentLayout: '',
                    clusterIconContentLayout: '<div class="icon">$[properties.iconContent]</div>'
                }
            },
        }
    },

    computed: {
        getOff() {
            let newArray = JSON.parse(JSON.stringify(this.info));
            let arrOff = [];
            
            switch(true) {
                case(this.filter === 0):
                    newArray = newArray.filter(item => item.country === "Russia")
                    break;
                case(this.filter === 1):
                    newArray = newArray.filter(item => item.country === "Belarus")
                    break;
            }

            newArray.forEach(city => { 
                city.offices.forEach(item => {
                    arrOff.push(item)
                })
            });

            return arrOff;
        },
        balloonTemplate() {
            return `
            <div class="balloon">
                <h1>Hi, everyone!</h1>
                <p>I am here: ${this.coords}</p>
            </div>
            `
        }
    },
    methods: {
        openAccordion(event) {
            this.$root.$emit('openAccordion', event)
        },
        console(event) {
            console.log(event)
        }
    },
    mounted() {
        this.$root.$on('changeMarkers', event => {
            this.filter = event;
        })
    }
}
</script>

<style lang="scss">
.ymap-container {
  height: 100vh;
  width: 100%;
}
.ymaps-2-1-79-copyrights-pane {
    display: none;
}

.icon {
    background: #00325e; 
    width: 30px; 
    height: 30px; 
    color: #FFFFFF; 
    border-radius: 100%; 
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
}

.balloon {
    background: #00325e;
}
</style>