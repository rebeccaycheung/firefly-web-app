<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: 'Roboto';
  src: url('/assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  color: #FFFFFF;
  background-color: #282A37;
  margin: 5rem 10rem;
  font-size: 12px;
}

#app {
  font-family: BlinkMacSystemFont, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}
</style>
