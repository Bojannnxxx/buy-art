<template>
  <div class="welcome-container" @click="navigateToHome">
    <LeavesAnimation />
    <h1>Welcome to Art Gallery</h1>
    <h2>
      Website for buying artwork from art student <br />
      (which can be much cheaper)
    </h2>
    <div class="bot">
      Click anywhere to begin your journey into <br />
      wonderul world of ARTS
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import LeavesAnimation from "./LeavesAnimation.vue";

export default defineComponent({
  methods: {
    navigateToHome() {
      this.$router.push("/home");
    },
  },
  components: { LeavesAnimation },
});
</script>
<style scoped>
.welcome-container {
  text-align: center;
  padding: 50px;
  cursor: pointer;
}
.bot {
  position: relative;
  font-size: 3em;
  top: 10rem;
  color: #ddb669;
}
.animated-title {
  animation: fadeInUp 1s ease-out 0.5s; /* Delay the title animation by 0.5 seconds */
  font-size: 2em;
  margin-bottom: 20px;
}

.animated-text {
  animation: fadeInUp 1s ease-out 1s; /* Delay the text animation by 1 second */
}

h1 {
  font-size: 3em;
  margin-bottom: 50px;
}
</style>
