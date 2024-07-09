<template>
  <router-link :to="galleryLink">
    <div class="menu-item">
      <div class="image-container">
        <img :src="require(`@/assets/${imageSrc}`)" alt="Gallery Item" />
        <div class="overlay">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    imageSrc: String,
    galleryLink: String,
    id: String,
  },
};
</script>

<style scoped>
.menu-item {
  width: 500px;
  height: 500px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
  overflow: hidden;
  display: flex;
  max-width: 25rem;
  max-height: 25rem;
  object-fit: contain;
}
img {
  max-width: 100%;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

.text-content {
  text-align: center;
  padding: 15px;
}
</style>
