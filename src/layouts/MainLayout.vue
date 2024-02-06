<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title>Quasar Framework</q-toolbar-title>

        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>
      <q-tabs v-model="tab">
        <q-tab name="Choose us" label="Choose us" />
        <q-tab name="Gallery" label="Gallery" />
        <q-tab name="Values" label="Values" />
        <q-tab name="Pricing" label="Pricing" />
        <q-tab name="Contact" label="Contact" />
      </q-tabs>
    </q-header>
    <q-page-container>
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
      <section>
        <Banner />
      </section>
      <section>
        <SectionOne />
      </section>
      <section>
        <SectionTwo />
      </section>
      <section>
        <SectionThree />
      </section>
      <section>
        <SectionFour />
      </section>
      <section>
        <SectionFive />
      </section>
      <section>
        <SectionSix />
      </section>
      <section>
        <Footer />
      </section>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import Banner from "src/components/landing/BannerSection.vue";
import SectionOne from "src/components/landing/SectionOne.vue";
import SectionTwo from "src/components/landing/SectionTwo.vue";
import SectionThree from "src/components/landing/SectionThree.vue";
import SectionFour from "src/components/landing/SectionFour.vue";
import SectionFive from "src/components/landing/SectionFive.vue";
import SectionSix from "src/components/landing/SectionSix.vue";
import Footer from "src/components/landing/FooterSection.vue";

import { ref } from "vue";

const tab = ref("images");
</script>
