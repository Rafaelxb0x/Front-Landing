<template>
  <div v-if="shouldShowBanners">
    <div
      class="q-pt-xl q-pb-xl bg-banner flex items-center"
      v-for="banner in banners"
      :key="banner.id"
      v-bind:style="{
        backgroundImage: `url(${$file_url + banner.image})`,
      }"
    >
      <div class="row">
        <div class="col-md-4 col-12 q-ml-lg text-black">
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

let banners = ref([]);

const settings = ref({ status: "true" }); // Valor por defecto

const fetchSettings = async () => {
  try {
    const result = await getData("settings");
    settings.value = result.settings;
  } catch (error) {
    console.error("Error al obtener la configuración:", error);
  }
};

const fetchBannerData = async () => {
  try {
    const result = await getData("banner");
    banners.value = result.banner;
  } catch (error) {
    console.error("Error al obtener los banners:", error);
  }
};

onMounted(async () => {
  await fetchSettings();
  await fetchBannerData();
});

// Determina si los banners deben mostrarse según la configuración
const shouldShowBanners = ref(true);

// Si la sección está desactivada en la configuración, oculta los banners
if (settings.value.status === "false") {
  shouldShowBanners.value = false;
}
</script>

<style scoped>
.bg-banner {
  background-position: center;
  height: 600px;
  background-size: cover;
}
</style>
