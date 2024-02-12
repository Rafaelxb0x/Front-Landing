<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="header-content">
        <div class="navbar-text text-h3 q-py-md text-bold q-ml-lg">
          Softlabs
        </div>
        <q-tabs v-model="tab">
          <q-tab name="Choose us" label="Choose us" />
          <q-tab name="Gallery" label="Gallery" />
          <q-tab name="Values" label="Values" />
          <q-tab name="Pricing" label="Pricing" />
          <q-tab name="Contact" label="Contact" />
        </q-tabs>
        <q-btn class="q-mr-md" flat dense aria-label="Login" label="Login" />
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const tab = ref("images");
</script>

<style lang="scss" scope>
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}
</style>
