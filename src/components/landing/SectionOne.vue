<template>
  <div class="container-cards full-width">
    <div class="text-center text-h4 text-grey-8 q-mt-lg q-pt-lg">
      Why Choose Us
    </div>
    <div class="text-center text-body1 margin-banner">
      Our clients have been choosing softlabs for a number of reasons including
      reliability, lastest technologies and constant updates & support. Read
      more about other adventages below.
    </div>
    <div class="q-pa-md q-gutter-md">
      <div v-if="sections[0].cards" class="flex justify-around">
        <q-card
          v-for="card in sections[0].cards"
          :key="card.title"
          class="my-card flex justify-center items-center q-mt-md"
        >
          <q-card-section class="q-pt-xs q-pb-md text-center">
            <div
              class="img-card q-mt-md"
              v-for="card in cards"
              :key="card.id"
              v-bind:style="{
                backgroundImage: `url(${$file_url + card.image})`,
              }"
            ></div>
            <div class="text-h6 q-mx-xs q-mb-md q-mt-md">{{ card.title }}</div>
            <div class="text-body1 q-mx-xs">
              <p class="text-grey-8">{{ card.description }}</p>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getData } from "src/services/commonServices";

let cards = ref([]);

const sections = ref([
  {
    cards: [], // Inicialmente vacío, se llenará con los datos de la API
  },
]);

onMounted(async () => {
  try {
    const data = await getData("cards"); // Reemplaza "ruta/a/tus/datos" con la ruta correcta de tu API
    sections.value[0].cards = data.cards; // Asume que los datos de la API tienen una estructura similar a tu estado inicial
    console.log("🚀 ~ onMounted ~ cards:", cards);
  } catch (error) {
    console.error("Error al cargar los datos:", error);
    // Aquí puedes manejar el error como prefieras, por ejemplo, mostrando un mensaje al usuario
  }
});
</script>

<style lang="scss" scope>
.img-card {
  width: 100px !important;
  height: auto !important;
  max-height: 90px !important;
}
.margin-md {
  margin: 0 340px;
}

.my-card {
  width: 100%;
  max-width: 250px;
  border: none;
  box-shadow: none;
}

.container-cards {
  width: 100%;
  padding: 0 20%;
}
</style>
