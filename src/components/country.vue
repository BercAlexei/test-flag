<template>
  <div class="country" :class="{'country_active': active === index}" @click="toggle()">
      {{ nameCountry }}

  </div>
</template>

<script>
export default {
    props: {
        nameCountry: String,
        index: Number,
        active: Number,
    },
    methods: {
        toggle() {
            this.$emit('active', this.index)
        }
    }
}
</script>

<style lang="scss">
.country {
    color: #929292;
    font-size: 16px;
    width: 100%;
    padding: 5px 0;
    border: 1px solid #929292;
    cursor: pointer;
    transition: all .3s;

    &_active {
        color: white;
        font-weight: bold;
        background: #FF9E00;
        border: 1px solid #FF9E00;
    }
}
</style>