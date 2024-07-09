<template>
  <div class="home">
    <HeaderComponent />
    <div class="home-content">
      <h2>Welcome again</h2>
      <p>Would you like to buy something?</p>
      <br />
      <p>Here are some of the categories to choose from:</p>
      <HomeMenu />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HeaderComponent from "./HeaderComponent.vue";
import HomeMenu from "./HomeMenu.vue";

export default defineComponent({
  components: {
    HeaderComponent,
    HomeMenu,
  },
});
</script>

<style scoped>
.home-content {
  text-align: center;
  padding: 20px;
}

.home-content h2 {
  font-size: 2em;
}
.home {
  margin: 0;
  padding: 0;
}
.home-content p {
  font-size: 1.2em;
  color: #555;
}
</style>
