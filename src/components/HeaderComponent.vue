<template>
  <header ref="header">
    <nav>
      <div class="link">
        <router-link to="/home" style="text-decoration: none; color: inherit"
          >Home</router-link
        >
      </div>
      <div class="link">
        <router-link to="/gallery" style="text-decoration: none; color: inherit"
          >Gallery</router-link
        >
      </div>
      <div class="link">
        <router-link to="/join" style="text-decoration: none; color: inherit"
          >Join Us</router-link
        >
      </div>
      <div class="link">
        <router-link to="/about" style="text-decoration: none; color: inherit"
          >About</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isHeaderBlurred: false,
      scrollTimeout: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const header = this.$refs.header;
      const scrollPosition = window.scrollY;
      this.isHeaderBlurred = scrollPosition > 0;

      const blurIntensity = Math.min(scrollPosition / 10, 10); // Adjust the divisor to control blur speed
      if (this.isHeaderBlurred) {
        header.style.filter = `blur(${blurIntensity}px)`;
        this.scrollTimeout = setTimeout(() => {
          this.isHeaderBlurred = false;
          header.style.filter = `blur(0px) `;
        }, 200);
      }
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  transition: filter 0.3s ease-out;
}
nav {
  background-color: #6ebac9;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 20%;
}
.link {
  padding: 1rem;
}
.link:hover {
  color: palegoldenrod;
  font-weight: bold;
}
router-link {
  color: rgb(213, 24, 24);
}
</style>
