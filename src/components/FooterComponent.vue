<template>
  <footer class="footer">
    <a :href="links.facebook" target="_blank" class="footer-link">facebook </a>
    <a :href="links.github" target="_blank" class="footer-link">github </a>
    <a :href="links.linkedin" target="_blank" class="footer-link"> linkedin</a>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: {
        facebook: "https://www.facebook.com/",
        github: "https://www.github.com/",
        linkedin: "https://www.linkedin.com/",
      },
    };
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 9%;
  background-color: #6ebac9;
  margin-top: 10px;
  text-align: center;
  padding: 10px 0;
}
.footer-link {
  padding: 15px;
}

.footer-link:hover {
  color: #ddd;
}
</style>
