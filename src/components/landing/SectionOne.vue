<template>
  <div class="text-center text-h4 text-grey-8">Why Choose Us</div>
  <div class="text-center text-body1">
    Our clients have been choosing softlabs for a number of reasons including
    reliability, lastest technologies and constant updates & support. Read more
    about other adventages below.
  </div>
  <div class="q-pa-md q-gutter-md justify-center">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="row justify-center"
    >
      <q-card
        v-for="(card, cardIndex) in section.cards"
        :key="cardIndex"
        class="my-card"
      >
        <img class="img-card" :src="card.image" />

        <q-card-section>
          <div class="text-h6">{{ card.title }}</div>
          <div class="text-subtitle2">{{ card.author }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ card.text }}
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div class="text-h1 flex items-center justify-center full-height">
    <q-img src="/src/assets/sections/section1.png" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const sections = ref([
  {
    cards: [
      {
        image: "/src/assets/clock.png",
        title: "Our Changing Planet",
        author: "by John Doe",
        text: "hello",
      },
      {
        image: "/src/assets/cellphone.png",
        title: "Our Changing Planet",
        author: "by John Doe",
      },
      {
        image: "/src/assets/savemoney.png",
        title: "Our Changing Planet",
        author: "by John Doe",
      },
      {
        image: "/src/assets/helpdesk.png",
        title: "Our Changing Planet",
        author: "by John Doe",
      },
      {
        image: "/src/assets/innovate.png",
        title: "Our Changing Planet",
        author: "by John Doe",
      },
      {
        image: "/src/assets/usability.png",
        title: "Our Changing Planet",
        author: "by John Doe",
      },
    ],
  },
]);
</script>

<style lang="scss" scope>
.img-card {
  width: 90px !important;
}
.margin-x-md {
  margin: 0 340px;
}

.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
