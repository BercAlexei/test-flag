<template>
  <div class="aside">
      <div class="aside__contry">
        <div class="label" v-for="(country, index) in country" :key="index">
            <input type="radio" :id="index" :value="index" v-model="filter" @change="changeCountry()">
            <label :for="index">{{ country }}</label>
        </div>
      </div>

    <div class="aside__city">
        <City v-for="item in newArr"
        :office="item.offices"
        :key="item.id"
        :index="item.id"
        :city="item.name"
        :active="activeCity"
        @active="activeCityChange($event)"/>
    </div>
  </div>
</template>

<script>
import City from './city.vue';

export default {
    components: {
        City
    },    
    props: {
        info: {
            require: true,
            type: Array
        }
    },
    data() {
        return {
            filter: 0,
            activeCity: 0,
            country: ["Россия", "Беларусь"]
        };
    },
    computed: {
        newArr() {
            let newArray =  JSON.parse(JSON.stringify(this.info));
            switch(true) {
                case(this.filter === 0):
                    return newArray.filter(item => item.country === "Russia")
                case(this.filter === 1):
                    return newArray.filter(item => item.country === "Belarus")
            }
        }
    },
    methods: {
        activeChange(event) {
            this.filter = event
        },
        activeCityChange(event) {
            this.activeCity = event
        },
        changeCountry() {
            this.$root.$emit('changeMarkers', this.filter)
        }
    },
    mounted() {
        this.$root.$on('openAccordion', event => {
            this.activeCity = event;           
            if(this.activeCity > 4) {
                this.filter = 1
            } else {
                this.filter = 0
            };
        })
    }
}
</script>

<style lang="scss">
.aside {
    width: 395px;
    height: 100vh;
    background: #fafafa;
    &__contry {
        display: flex;
        justify-content: space-between;
    }
    &__city {
        padding: 50px 30px;
    }
}
.label {
    width: 100%;

    label {
        display: inline-block;
        color: #929292;
        font-size: 16px;
        padding: 5px 0;
        cursor: pointer;
        width: 100%;
        border: 1px solid #929292;
        transition: all .3s;
    }
    input {
        display: none;
        appearance: none;
        &:checked + label {
            color: white;
            font-weight: bold;
            background: #FF9E00;
            border: 1px solid #FF9E00;
        }
    }
}
</style>