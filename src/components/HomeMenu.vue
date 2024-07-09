<template>
  <div class="menu">
    <HomeMenuItem
      title="Paintings"
      description="Discover the beauty of paintings"
      imageSrc="slika1.jpg"
      galleryLink="/gallery"
    />
    <HomeMenuItem
      title="Drawings"
      description="Follow the subtle lines"
      imageSrc="crtez1.jpg"
      galleryLink="/gallery"
    />
    <HomeMenuItem
      title="Sculptures"
      description="Find yourself lost in shapes"
      imageSrc="skulptura1.jpg"
      galleryLink="/gallery"
    />
    <HomeMenuItem
      title="Prints"
      description="Find the perfect one"
      imageSrc="prints1.jpg"
      galleryLink="/gallery"
    />
    <HomeMenuItem
      title="Digital Art"
      description="It doesn't have to be real"
      imageSrc="digital1.jpg"
      galleryLink="/gallery"
    />
    <HomeMenuItem
      title="Sugest something"
      description="Whatever you feel is needed"
      imageSrc="question1.jpg"
      galleryLink="/gallery"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HomeMenuItem from "./HomeMenuItem.vue";

export default defineComponent({
  components: {
    HomeMenuItem,
  },
});
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
