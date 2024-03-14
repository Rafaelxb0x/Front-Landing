<template>
  <div class="container-cards full-width">
    <div class="text-center q-mt-lg q-pt-lg text-plans-title">
      Why Choose Us
    </div>
    <div class="text-center text-body1 margin-banner q-mb-lg">
      Our clients have been choosing softlabs for a number of reasons including
      reliability, lastest technologies and constant updates & support. Read
      more about other adventages below.
    </div>
    <div class="q-pa-md q-gutter-md q-mb-lg">
      <div v-if="sections" class="flex no-wrap justify-around">
        <q-card
          v-for="card in sections"
          :key="card.id"
          class="flex justify-center items-center q-mr-md"
        >
          <q-card-section class="q-pt-xs q-pb-md text-center">
            <q-img
              class="img-card"
              v-if="card.image"
              :src="$file_url + card.image"
              :ratio="16 / 9"
            />
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

const sections = ref([]);

const loadCards = async () => {
  try {
    const data = await getData("cards");
    sections.value = data.cards;
    console.log("🚀 ~ loadCards ~ sections.value:", sections.value);
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(loadCards);
</script>

<style lang="scss" scope>
.img-card {
  width: 120px !important;
  height: 120px !important;
  background-position: cover;
  background-repeat: no-repeat;
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

.text-plans-title {
  font-size: 2.8rem;
  font-weight: 650;
  margin-bottom: 50px;
}
</style>
