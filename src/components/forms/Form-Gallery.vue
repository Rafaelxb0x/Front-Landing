<template>
  <div class="flex justify-center items-center content-center full-height">
    <q-card class="my-card">
      <div class="text-h5 text-grey-9 q-ml-md q-mt-md text-bold">
        Edit Gallery
      </div>
      <q-card-section>
        <q-input class="q-mb-md" filled v-model="text" label="Titulo" />
        <q-input filled v-model="text" label="Descripcion" />
      </q-card-section>

      <q-card-section>
        <div>
          <q-uploader
            class="full-width full-heigh"
            style="height: 600px"
            url="http://localhost:4444/upload"
          />
        </div>
      </q-card-section>
      <div class="row justify-end q-pa-md">
        <q-btn
          rounded
          type="submit"
          label="Submit"
          class="q-mt-md"
          color="primary"
        >
        </q-btn>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");
</script>

<style lang="scss" scope>
.my-card {
  width: 100%;
  max-width: 700px;
  height: auto;
}
.q-uploader__file--img {
  color: #fff;
  height: 373px;
  min-width: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
}
</style>
