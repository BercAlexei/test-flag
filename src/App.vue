<template>
  <div id="app">
    <Aside :info="info"/>
  </div>
</template>

<script>
import Aside from './components/aside.vue';
import Maps from './components/maps.vue';

export default {
  name: 'App',
  components: {
    Aside,
    Maps
  },
  data() {
    return {
      info: {}
    };
  },
  created() {
    fetch('db.json')
      .then( async response => (this.info = await response.json()));
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
}
</style>
