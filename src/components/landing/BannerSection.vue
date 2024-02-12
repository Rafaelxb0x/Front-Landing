<template>
  <section class="q-pt-xl q-pb-xl bg-banner">
    <div class="row">
      <!-- Primera columna con título, subtítulo, descripción y botón -->
      <div class="col-md-4 col-12 text-white q-ml-lg">
        <h1 class="text-h3 text-bold">Título del Banner</h1>
        <h2 class="text-h4">Subtítulo</h2>
        <p class="text-body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolore
          dolorem illo debitis modi iusto ea! Accusantium ipsam possimus unde,
          laborum tenetur incidunt inventore quae. Rem adipisci quas eius
          consectetur!
        </p>
        <q-btn label="Acceder" color="primary" @click="accionBoton" />
      </div>

      <!-- Segunda columna con el carrusel de imágenes -->
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

function accionBoton() {
  // Acción a realizar al hacer clic en el botón
}
</script>

<style scoped>
.navbar-transparent {
  background: transparent !important;
}

.navbar-solid {
  background: #ffffff !important; /* Cambia esto al color que desees para el fondo sólido */
}
.bg-banner {
  height: 510px;
  background-image: url("/src/assets/bg4.png");
  background-size: cover;
  background-position: center;
}
</style>
