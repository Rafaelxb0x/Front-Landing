<template>
  <div class="main">
    <h1>MASONRY PORTFOLIO</h1>
    <P>Here Are Our Some Works :-</P>
    <div class="gallery">
      <div class="img">
        <img src="/src/assets/1.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/2.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/3.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/4.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/2.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/1.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/3.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/4.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/2.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/1.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/2.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/4.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/3.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/2.jpg" alt="" />
      </div>
      <div class="img">
        <img src="/src/assets/1.jpg" alt="" />
      </div>
    </div>
  </div>
  <!-- <div class="margin-md">
    <div class="text-center text-h3 q-mt-lg q-mb-md">Most seller</div>

    <div class="grid-container">
      <article
        v-for="(location, index) in locations"
        :key="index"
        class="location-listing"
      >
        <a class="location-title" :href="location.link">{{ location.name }}</a>

        <div class="location-image">
          <a :href="location.link">
            <img :src="location.image" :alt="location.name" />
          </a>
        </div>
      </article>
    </div>
  </div> -->
</template>

<script setup>
// const locations = [
//   {
//     name: "San Francisco",
//     link: "#",
//     image:
//       "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg",
//   },
//   {
//     name: "London",
//     link: "#",
//     image:
//       "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/london-768x432.jpg",
//   },
//   {
//     name: "New York",
//     link: "#",
//     image:
//       "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/new-york-768x432.jpg",
//   },
//   {
//     name: "Cape Town",
//     link: "#",
//     image:
//       "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/cape-town-768x432.jpg",
//   },
//   {
//     name: "Beijing",
//     link: "#",
//     image:
//       "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/beijing-768x432.jpg",
//   },
//   {
//     name: "Paris",
//     link: "#",
//     image:
//       "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/paris-768x432.jpg",
//   },
// ];
</script>

<style lang="scss" scope>
// img {
//   width: 100%; /* need to overwrite inline dimensions */
//   height: auto;
// }
// h2 {
//   margin-bottom: 0.5em;
// }
// .grid-container {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   grid-gap: 1em;
// }

// /* hover styles */
// .location-listing {
//   position: relative;
// }

// .location-image {
//   line-height: 0;
//   overflow: hidden;
// }

// .location-image img {
//   filter: blur(0px);
//   transition: filter 0.3s ease-in;
//   transform: scale(1.1);
// }

// .location-title {
//   font-size: 1.5em;
//   font-weight: bold;
//   text-decoration: none;
//   z-index: 1;
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   top: 0;
//   left: 0;
//   opacity: 0;
//   transition: opacity 0.5s;
//   background: rgba(90, 0, 11, 0.277);
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .location-listing:hover .location-title {
//   opacity: 1;
// }

// .location-listing:hover .location-image img {
//   filter: blur(2px);
// }

// /* for touch screen devices */
// @media (hover: none) {
//   .location-title {
//     opacity: 1;
//   }
//   .location-image img {
//     filter: blur(2px);
//   }
// }

.main {
  position: relative;
  // height: 100vh;
  width: 100%;
}
.main h1 {
  position: relative;
  height: auto;
  width: 550px;
  left: 50%;
  transform: translateX(-50%);
  margin: 5% 0 2% 0;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 650;
  letter-spacing: 1.5px;
  color: purple;
  border-left: 5px solid blue;
  border-right: 5px solid blue;
  background: rgba(0, 0, 0, 0.05);
}
.main p {
  position: relative;
  height: auto;
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 1.5em;
  letter-spacing: 1px;
  color: #777;
}
.main .gallery {
  position: relative;
  height: auto;
  width: 90%;
  margin: auto;
  padding: 45px 0;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 2vh;
  grid-auto-flow: dense;
}
.main .gallery img {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.main .gallery .img:first-child {
  grid-column-start: span 2;
  grid-row-start: span 2;
}
.main .gallery .img:nth-child(2n + 3) {
  grid-row-start: span 2;
}
.main .gallery .img:nth-child(4n + 5) {
  grid-column-start: span 2;
  grid-row-start: span 2;
}
.main .gallery .img:nth-child(6n + 7) {
  grid-row-start: span 1;
}
.main .gallery .img:nth-child(8n + 9) {
  grid-column-start: span 1;
  grid-row-start: span 1;
}

.main .gallery .img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.5) grayscale(100);
  transition: 0.3s ease-in-out;
}
.main .gallery .img:hover img {
  filter: brightness(1) grayscale(0);
}
</style>
