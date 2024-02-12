<template>
  <div>
    <!-- <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller> -->
    <Banner />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <div class="height-section">
      <SectionFive />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Banner from "src/components/landing/BannerSection.vue";
import SectionOne from "src/components/landing/SectionOne.vue";
import SectionTwo from "src/components/landing/SectionTwo.vue";
import SectionThree from "src/components/landing/SectionThree.vue";
import SectionFive from "src/components/landing/SectionFive.vue";
import Footer from "src/components/landing/FooterSection.vue";
</script>

<style lang="scss" scope>
.height-section {
  margin: 130px 0;
}
</style>
