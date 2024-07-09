<template>
  <div class="about-us">
    <HeaderComponent />

    <h1>About Us</h1>

    <p>
      Welcome to the Artistry Gallery, where art comes to life. Established in
      2005, we strive to showcase the finest artworks from around the world.
    </p>

    <h2>Mission Statement</h2>
    <p>
      Our mission is to promote emerging and established artists by providing a
      platform that celebrates creativity and cultural diversity.
    </p>
    <h2>Core Values</h2>
    <div style="display: flex; justify-content: center">
      <ol style="display: flex; flex-direction: column; text-align: left">
        <li>
          <strong>Quality:</strong> We believe in representing only the highest
          quality artworks.
        </li>
        <li>
          <strong>Inclusivity:</strong> We celebrate diversity in art and
          artists.
        </li>
        <li>
          <strong>Community:</strong> We foster a supportive community of
          artists, collectors, and enthusiasts.
        </li>
      </ol>
    </div>

    <h2>Our Sponsors</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Duration</th>
          <th>Link to their website</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="">John Doe</td>
          <td>since 2015</td>
          <td rowspan="2">JaneAndJohn.com<br /></td>
        </tr>

        <tr>
          <td>Jane Smith</td>
          <td>since 2015</td>
        </tr>
        <tr>
          <td>Google</td>
          <td>since 2010</td>
          <td><a href="https://www.google.co.uk/"> Google.com </a></td>
        </tr>
      </tbody>
    </table>

    <h2>History</h2>
    <p>
      Since our inception, Artistry Gallery has grown from a small exhibition
      space to a renowned gallery featuring diverse collections.
    </p>

    <h2>Our Meetups</h2>
    <div class="gallery-images">
      <a href="https://www.meetup.com/chicagomeetup/" target="_blank"
        ><img src="/src/assets/crtez1.jpg" alt="Chicago meetup"
      /></a>
      <a
        href="https://www.meetup.com/blabla-belgrade/events/299927579/"
        target="_blank"
        ><img src="/src/assets/crtez1.jpg" alt="Some other meetup"
      /></a>
      <a
        href="https://www.meetup.com/belgrade-js/events/302055207/"
        target="_blank"
        ><img src="/src/assets/crtez1.jpg" alt="Meetup #3"
      /></a>
    </div>

    <h2>Become an instant artist</h2>
    <iframe src="http://weavesilk.com/" width="60%" height="400"></iframe>
  </div>

  <h2>Visit Us</h2>
  <p>Come visit us at:</p>
  <address style="margin-bottom: 100px">
    Artistry Gallery<br />
    123 Art Street, Art City<br />
    Open Mon-Sat, 10 AM - 6 PM<br />
    Phone: (123) 456-7890
  </address>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutComponent",
  components: {
    HeaderComponent,
    FooterComponent,
  },
});
</script>

<style scoped>
.gallery-images {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.gallery-images img {
  margin-bottom: 10px;
}

table {
  width: 100%;
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
