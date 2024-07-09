<template>
  <div id="#app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  margin: 0;
  margin-top: 100px;
  padding: 0;
  background-color: #2f9b51;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #555;
}
</style>
