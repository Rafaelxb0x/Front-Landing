<template>
  <div class="main">
    <h1>Our Gallery</h1>
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
</template>
<style lang="scss" scope>
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
  margin: 2% 0 2% 0;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 650;
  letter-spacing: 1.5px;
  color: purple;
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
