<script>
import Vue from 'vue';
import VueCssLoader from '@/vue-css-loader.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueCssLoader
  }
});
</script>

<template>
  <div id="app">
    <vue-css-loader />
  </div>
</template>
