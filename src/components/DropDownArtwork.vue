<template>
  <div class="artwork-type-dropdown">
    <label for="artworkType">Select Artwork Type:</label>
    <select id="artworkType" v-model="selectedType" @change="filterByType">
      <option value="painting">Paintings</option>
      <option value="drawing">Drawings</option>
      <option value="sculpture">Sculptures</option>
      <option value="print">Prints</option>
      <option value="digital">Digital Art</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedType: "",
    };
  },
  methods: {
    filterByType() {
      this.$emit("filter-by-type", this.selectedType);
    },
  },
};
</script>

<style scoped>
.artwork-type-dropdown {
  text-align: center;
  margin-bottom: 20px;
}

select {
  padding: 5px;
}
</style>
