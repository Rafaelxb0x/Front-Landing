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
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="flex justify-around"
      >
        <q-card
          v-for="(card, cardIndex) in section.cards"
          :key="cardIndex"
          class="my-card flex justify-center items-center q-mt-md"
        >
          <q-card-section class="q-pt-xs q-pb-md text-center">
            <img class="img-card q-mt-md" :src="card.image" />
            <div class="text-h6 q-mx-xs q-mb-md q-mt-md">{{ card.title }}</div>
            <div class="text-body1 q-mx-xs">
              <p class="text-grey-8">{{ card.text }}</p>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sections = ref([
  {
    cards: [
      {
        image: "/src/assets/results.png",
        title: "Quick Results",
        text: "We work quickly and eficently to provide the best results.",
      },
      {
        image: "/src/assets/app.png",
        title: "Powefull Apps",
        text: "Our team iffers a wude variety of poweful and sustainable apps ",
      },
      {
        image: "/src/assets/bag.png",
        title: "Money saving",
        text: "Our products cost less than their analogs by other companies",
      },
      {
        image: "/src/assets/support2.png",
        title: "Efficent Support",
        text: "Softable offers extensive support to its customers all over the world.",
      },
      {
        image: "/src/assets/innovate.png",
        title: "Innovate technologies",
        text: "Our developers use the latest technologies to deliver the best apps",
      },
      {
        image: "/src/assets/usability2.png",
        title: "Great Usability",
        text: "Improve usability and UX are distinctive features of our products",
      },
    ],
  },
]);
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
