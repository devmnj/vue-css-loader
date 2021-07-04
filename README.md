# @codehat/vue-css-loader

> CSS Loader component for `Vuejs` which includes 7 CSS loading animations. The CSS works were adapted from CodePen artists

[![NPM](https://img.shields.io/npm/v/@codehat/vue-css-loader.svg)](https://www.npmjs.com/package/@codehat/vue-css-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @codehat/vue-css-loader
```

## Usage

```
<template>
  <div class="home">
    <vue-css-loader animation="TwinCircles"/>
  </div>
</template>

<script>
// @ is an alias to /src
import VueCssLoader  from '@codehat/vue-css-loader'
export default {
  name: "Home",
  components: {
    VueCssLoader
  },

```

## Props

`animation props` allow us to use the following CSS animations.

<img src='./loaderss.png'/>
- Circles
- BouncingBar
- Wave
- Dots
- TwinCircles
- SpinnerDots
- Focus

## License

MIT © [manojap](https://github.com/manojap)
