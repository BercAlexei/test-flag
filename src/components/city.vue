<template>
<div class="city">
  <div class="city__head" :class="{'city__head_active': active === index}" @click="toggle()">
      {{city}}
      <img class="city__image" src="assets/arrow.png" alt="arrow">
  </div>
  <div class="city__offices">
      <Office v-for="item in office"
      :key="item.id"
      :data="item"/>
  </div>
</div>
</template>

<script>
import Office from './office.vue';

export default {
    components: {
        Office
    },
    props: {
        city: String,
        office: Array,
        index: String,
        active: String
    },
    methods: {
        toggle() {
            this.$emit('active', this.index)
        }
    }
}
</script>

<style lang="scss">
.city {
    border-bottom: 1px solid #ededed;
    padding: 15px 0;
    &__head {
        font-size: 20px;
        font-weight: bold;
        color: #00325e;
        text-transform: uppercase;
        text-align: left;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all .3s;

        &_active {
            color: #FF9E00;
            img {
                transform: rotate(180deg);
            }
        
        }
    }
    &__image {
        width: 20px;
        height: 20px;
    }
    &__offices {
        height: 0;
        opacity: 0;
        overflow: hidden;
        padding: 0;
        transition: all .3s;
        

        .city__head_active + & {
            height: auto;
            opacity: 1;
            overflow: visible;
            padding: 30px 0;
        }
    }
    &:first-child {
        border-top: 1px solid #ededed;
    }
}
</style>