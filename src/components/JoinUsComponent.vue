<template>
  <div class="join-us">
    <HeaderComponent />

    <h2>Community</h2>
    <p>Our Community will help you explore your own dreams!!</p>
    <h3>Here you can join us:</h3>
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Name:</label>
              <input
                id="name"
                v-model="formData.name"
                class="form-control"
                type="text"
                required
                placeholder="Enter your name"
              />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input
                id="email"
                v-model="formData.email"
                class="form-control"
                type="email"
                required
                placeholder="Enter your email"
              />
            </div>

            <div class="mb-3">
              <label for="artType" class="form-label">Type of Art:</label>
              <select
                id="artType"
                v-model="formData.artType"
                class="form-select"
                required
              >
                <option value="">Select Type</option>
                <option value="painting">Painting</option>
                <option value="sculpture">Sculpture</option>
                <option value="photography">Photography</option>
                <option value="digital">Digital Art</option>
                <option value="mixed">Mixed Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="portfolioLink" class="form-label"
                >Portfolio Link:</label
              >
              <input
                id="portfolioLink"
                v-model="formData.portfolioLink"
                class="form-control"
                type="url"
                placeholder="https://example.com"
              />
              <div
                v-if="!isValidPortfolioLink(formData.portfolioLink)"
                class="invalid-feedback"
              >
                Please enter a valid portfolio link starting with "https://" or
                "http://".
              </div>
            </div>

            <button type="submit" class="btn btn-primary">
              Join Art Squad
            </button>
          </form>
        </div>
      </div>
    </div>

    <h2>Benefits of enjoying arts</h2>
    <div style="display: flex; justify-content: center">
      <ul style="display: flex; flex-direction: column; text-align: left">
        <li>
          Healing: Stay open to our emotions, experience surprise or novelty,
          think differently about life, embrace ambiguity, engage the senses,
          feel awe, and more. It may even help heal your soul.
        </li>
        <li>We celebrate diversity in art and artists.</li>
        <li>
          We foster a supportive community of artists, collectors, and
          enthusiasts.
        </li>
      </ul>
    </div>
    <p>Here is the article about what art does to you brain</p>

    <iframe
      src="https://greatergood.berkeley.edu/article/item/what_art_does_for_your_brain"
      width="80%"
      height="400"
    ></iframe>
  </div>
  <h2>Our Team</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Contact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">John Doe</td>
        <td>Founder</td>
        <td rowspan="2">
          Email: john.doe@artistrygallery.com<br />
          Phone: (123) 456-7890
        </td>
      </tr>
      <tr>
        <td>Curator</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>Art Consultant</td>
        <td>
          Email: jane.smith@artistrygallery.com<br />Phone: (123) 456-7891
        </td>
      </tr>
      <tr>
        <td>Michael Brown</td>
        <td>Marketing Manager</td>
        <td>
          Email: michael.brown@artistrygallery.com<br />Phone: (123) 456-7892
        </td>
      </tr>
    </tbody>
  </table>

  <h2>Our Meetups</h2>
  <div class="gallery-images">
    <a href="/path/to/image1.jpg" target="_blank"
      ><img src="/path/to/thumbnail1.jpg" alt="Gallery Image 1"
    /></a>
    <a href="/path/to/image2.jpg" target="_blank"
      ><img src="/path/to/thumbnail2.jpg" alt="Gallery Image 2"
    /></a>
    <a href="/path/to/image3.jpg" target="_blank"
      ><img src="/path/to/thumbnail3.jpg" alt="Gallery Image 3"
    /></a>
  </div>
  <FooterComponent />
</template>

<script>
import { defineComponent } from "vue";
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";

export default defineComponent({
  name: "JoinUsComponent",
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        artType: "",
        portfolioLink: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (!this.isValidPortfolioLink(this.formData.portfolioLink)) {
        alert(
          'Please enter a valid portfolio link starting with "https://" or "http://".'
        );
        return;
      }

      // Handle form submission logic here
      console.log("Form submitted with data:", this.formData);
      // Add further logic to handle submission to server or other actions
    },
    isValidPortfolioLink(link) {
      return /^https?:\/\//.test(link);
    },
  },
});
</script>
<style scoped>
/* Your CSS styles here */

.gallery-images {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.gallery-images img {
  width: 200px;
  height: 150px;
  margin-bottom: 10px;
}

table {
  width: 80%;
  border-collapse: collapse;
}

table,
th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}
</style>
