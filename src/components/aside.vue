<template>
  <div class="aside">
      <div class="aside__contry">
            <Country 
            v-for="(item, country, index) in info" 
            :key="index"
            :index="index"
            :city="item"
            :nameCountry="countryName[index]"
            :active="activeTab"
            @active="activeChange($event)"/>

      </div>
    <div class="aside__city" v-if="activeTab === 0">
        <City v-for="(item, i, index) in info.russia"
        :office="item"
        :key="index"
        :index="index"
        :active="activeCityRussia"
        @active="activeCityRussiaChange($event)"
        :city="russiaCity[index]"/>
    </div>

    <div class="aside__city" v-if="activeTab === 1">
        <City v-for="(item, nameCity, index) in info.belarus"
        :office="item"
        :key="index"
        :city="belarusCity[index]"
        :index="index"
        :active="activeCityBelarus"
        @active="activeCityBelarusChange($event)"/>
    </div>
  </div>
</template>

<script>
import Country from "./country.vue";
import City from './city.vue';

export default {
    components: {
        Country,
        City
    },    
    data() {
        return {
            activeTab: 0,
            activeCityRussia: 0,
            activeCityBelarus: 0,
            countryName: ["Россия", "Беларусь"],
            russiaCity: ["Москва", "Санкт-Петербург", "Екатеринбург", "Тюмень", "Челябинск" ],
            belarusCity: ["Минск", "Гомель", "Витебск", "Могилёв", "Гродно"]
        };
    },
    props: {
        info: {
            require: true,
            type: Object
        }
    },
    methods: {
        activeChange(event) {
            this.activeTab = event
        },
        activeCityRussiaChange(event) {
            this.activeCityRussia = event
        },
        activeCityBelarusChange(event) {
            this.activeCityBelarus = event
        }
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
</style>