<template>
  <div v-if="ShowBanners">
    <div
      class="q-pt-xl q-pb-xl bg-banner flex items-center"
      v-for="banner in banners"
      :key="banner.id"
      v-bind:style="{
        backgroundImage: `url(${$file_url + banner.image})`,
      }"
    >
      <div class="row">
        <div class="col-md-4 col-12 q-ml-lg text-white">
          <div class="text-start q-mt-md q-mb-lg text-h3 text-bold">
            {{ banner.title }}
          </div>
          <div class="text-h6 q-mb-lg">
            {{ banner.description }}
          </div>
          <div class="">
            <q-btn label="Acceder" color="primary" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getData } from "src/services/commonServices";

const banners = ref([]);
const ShowBanners = ref(true);

const bannerData = async () => {
  try {
    const result = await getData("banner");
    console.log(result);
    banners.value = result.banner;
  } catch (error) {
    console.error("Error al obtener los banners:", error);
  }
};

onMounted(async () => {
  await bannerData();
});
</script>

<style lang="scss" scope>
.bg-banner {
  background-position: center;
  height: 600px;
  background-size: cover;
}
</style>
