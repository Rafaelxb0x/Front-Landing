<template>
  <section>
    <div class="text-center q-mt-lg q-mb-lg text-plans-title">
      Nuestros Planes
    </div>
    <div class="container-plans flex justify-center no-wrap items-center">
      <div v-for="(promotion, index) in sections" :key="promotion.id">
        <q-card
          :class="{
            'my-card-1': index === 1,
            'bg-grey-3': index !== 1,
          }"
          class="bg-purple-9 text-white flex items-center"
        >
          <q-card-section class="text-center">
            <div
              :class="{
                'text-h4': index !== 1,
                'text-h2': index === 1,
                'q-mb-lg': true,
                'text-bold': true,
                'title-gold': index === 0,
                'title-diamante': index === 2,
              }"
            >
              {{ promotion.title }}
            </div>
            <div class="q-mb-lg q-mx-lg">{{ promotion.description }}</div>
            <div
              :class="{
                'text-h4': index !== 1,
                'text-h2': index === 1,
                'q-mb-lg': true,
              }"
            >
              ${{ promotion.price }}/mo
            </div>

            <q-btn
              class="btn-cards"
              rounded
              no-caps
              color="primary"
              label="Contratar"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getData } from "src/services/commonServices";

const sections = ref([]);
const error = ref(null);

const loadPromotions = async () => {
  try {
    const data = await getData("promotions");
    const duplicado = data.promotions;
    console.log("duplicado: ", duplicado);
    sections.value = data.promotions.concat(duplicado);
    console.log("sections.value: ", sections.value);
  } catch (error) {
    console.error(error.message);
    error.value =
      "Error al cargar las promociones. Por favor, inténtalo de nuevo más tarde.";
  }
};

onMounted(loadPromotions);
</script>

<style lang="scss" scope>
.title-diamante {
  color: #61c7cb;
}
.title-gold {
  color: #da9100;
  text-shadow: 1px solid;
}
.btn-cards {
  width: 100%;
  max-width: 180px;
  height: 60px;
  font-size: 1.2rem;
}

.my-card-1 {
  height: 430px;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: none;
  margin-bottom: 5px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
}

.my-card-1:hover {
  transform: scale(1.05);
}
.container-plans {
  width: 100%;
  padding: 0 5%;
}

.bg-grey-3 {
  max-width: 400px;
  height: 400px;
  color: rgb(61, 61, 61) !important;
  transition: transform 0.3s ease-in-out;
}
.bg-grey-3:hover {
  transform: scale(1.05);
}

.text-h2 {
  font-size: 2rem;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 20px;
}

.text-plans-title {
  font-size: 2.8rem;
  font-weight: 650;
  margin-bottom: 50px;
}
</style>
