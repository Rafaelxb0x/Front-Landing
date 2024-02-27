<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff">
      <q-header :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Administrador</q-toolbar-title>
          <q-btn color="primary" icon="logout" label="Logout" @click="logOut" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <EssentialLink
              v-for="(link, index) in linksList"
              :key="index"
              v-bind="link"
              :index="index"
            />
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container style="height: 100vh">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

import EssentialLink from "src/components/EssentialLink.vue";

const $q = useQuasar();

const drawer = ref(false);
const miniState = ref(true);

const onClick = () => {
  $q.notify({
    color: "red-5",
    textColor: "white",
    icon: "warning",
    message: "You need to log out first!",
  });
};

const linksList = [
  {
    id: "1",
    title: "Dashboard",
    icon: "admin_panel_settings",
    link: "/Admin-Table",
    color: "accent",
  },
  {
    id: "2",
    title: "Banner",
    icon: "person",
    link: "/Banner-Dashboard",
    color: "secondary",
  },
  {
    title: "Gallery",
    icon: "image",
    link: "/Form-Gallery",
    color: "negative",
  },
  {
    title: "Pricing",
    icon: "sell",
    link: "/Form-Pricing",
    color: "negative",
  },
  {
    title: "Settings",
    icon: "settings",
    link: "/form-settings",
    color: "positive",
  },
];
</script>

<style lang="scss" scope>
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}
</style>
