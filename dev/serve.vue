<script>
import Vue from "vue";
import VueCssLoader from "@/vue-css-loader.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    VueCssLoader,
  },
});
</script>

<template>
  <div id="app" class="container">
    <vue-css-loader animation="Dots" />
    <vue-css-loader animation="Circle" />
    <vue-css-loader animation="BouncingBars" />
     <vue-css-loader animation="Wave" />
     <vue-css-loader animation="TwinCircles" />
     <vue-css-loader animation="SpinnerDots" />
      
  </div>
</template>
<style scoped>
.container {
  display:flex;
  flex-direction: row;
  }
</style>