<template>
  <div class="leaves-container">
    <div
      v-for="(leaf, index) in leaves"
      :key="index"
      class="leaf"
      :style="leaf.style"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leaves: [],
    };
  },
  mounted() {
    this.initializeLeaves();
    window.addEventListener("mousemove", this.handleMouseMove);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  },
  methods: {
    initializeLeaves() {
      for (let i = 0; i < 35; i++) {
        this.leaves.push({
          style: {
            left: `${Math.random() * window.innerWidth}px`,
            top: `${Math.random() * window.innerHeight}px`,
          },
        });
      }
    },
    handleMouseMove(event) {
      this.leaves.forEach((leaf) => {
        const deltaX = event.clientX - parseInt(leaf.style.left);
        const deltaY = event.clientY - parseInt(leaf.style.top);

        const speed = 0.07;

        leaf.style.transform = `translate(${deltaX * speed}px, ${
          deltaY * speed
        }px)`;
      });
    },
  },
};
</script>

<style scoped>
.leaves-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.leaf {
  width: 15px;
  height: 15px;
  background-color: #a15322;
  border-radius: 35%;
  position: absolute;
  pointer-events: none;
}
</style>
