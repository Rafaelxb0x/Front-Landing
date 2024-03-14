<template>
  <div>
    <!-- <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller> -->
    <Navbar />
    <Banner />
    <ArrowUp />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <div class="height-section">
      <SectionFive />
    </div>
    <SectionSix />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Navbar from "src/components/landing/NavBarSection.vue";
import Banner from "src/components/landing/Banner-Section.vue";
import SectionOne from "src/components/landing/SectionOne.vue";
import SectionTwo from "src/components/landing/SectionTwo.vue";
import SectionThree from "src/components/landing/SectionThree.vue";
import SectionFive from "src/components/landing/SectionFive.vue";
import SectionSix from "src/components/landing/SectionSix.vue";
import Footer from "src/components/landing/FooterSection.vue";
import ArrowUp from "src/components/landing/Arrow-Up.vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style lang="scss" scope>
.height-section {
  margin: 130px 0;
}
</style>
