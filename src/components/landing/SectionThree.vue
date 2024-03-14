<template>
  <div class="main">
    <h1>Galeria</h1>
    <p>Here Are Some of Our Works:</p>
    <div class="gallery" v-if="sections">
      <div class="img" v-for="gallery in sections" :key="gallery.id">
        <div>
          <q-img
            v-if="gallery.image"
            :src="$file_url + gallery.image"
            :ratio="16 / 9"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getData } from "src/services/commonServices";

const sections = ref([]);

const loadGallery = async () => {
  try {
    const data = await getData("gallery");
    sections.value = data.galleries;
    console.log("🚀 ~ loadGallery ~ value:", sections.value);
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(loadGallery);
</script>

<style lang="scss" scope>
.main {
  position: relative;
  width: 100%;
  text-align: center;
  padding: 20px;
}

.main h1 {
  font-size: 2.8rem;
  font-weight: 650;
  margin-bottom: 20px;
}

.main p {
  font-size: 1.5em;
  font-weight: 500;
  letter-spacing: 1px;
  color: #777;
  margin-bottom: 20px;
}

.main .gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.main .img {
  flex: 0 0 calc(25% - 20px);
  margin: 10px;
}

.main .img q-img {
  width: 100%;
  height: auto;
}

.main .img img {
  width: 100%;
  height: auto;
}
</style>
