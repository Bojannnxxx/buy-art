<template>
  <div>
    <HeaderComponent />
    <DropDownArtwork />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import HeaderComponent from "./HeaderComponent.vue";
import DropDownArtwork from "./DropDownArtwork.vue";

export default defineComponent({
  components: {
    HeaderComponent,
    DropDownArtwork,
  },
});
</script>
