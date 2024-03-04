<template>
  <q-card class="no-shadow" bordered>
    <q-card-section>
      <div class="text-h6 text-grey-8">
        Banner
        <q-btn
          label="Add"
          class="float-right text-capitalize text-indigo-8 shadow-3"
          icon="add"
        />
      </div>
    </q-card-section>

    <q-table
      :rows="banners"
      :columns="columns"
      row-key="id"
      hide-bottom
      class="no-shadow"
    >
      <template v-slot:body-cell-Action="props">
        <q-td :props="props">
          <q-btn icon="edit" size="sm" flat dense to="/form-banner" />
          <q-btn icon="delete" size="sm" class="q-ml-sm" flat dense />
          <q-checkbox size="sm" v-model="val" />
        </q-td>
      </template>
      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <q-card class="bg-grey-3 my-card q-pa-sm" flat bordered dark>
            <q-card-section horizontal>
              <div
                class="image-banner"
                v-bind:style="{
                  backgroundImage: `url(${$file_url + props.row.image})`,
                }"
              ></div>
            </q-card-section>
          </q-card>
        </q-td>
      </template>
    </q-table>
  </q-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getData } from "src/services/commonServices";
const val = ref(true);
const banners = ref([]);
const columns = [
  {
    name: "image",
    required: true,
    label: "Banner",
    align: "left",
    field: "image",
    // Asegúrate de que este slot personalizado se utilice para renderizar la imagen
    format: (val, row) => row.image,
  },

  {
    name: "description",
    required: true,
    label: "Description",
    align: "left",
    field: "description",
  },
  {
    name: "Action",
    required: true,
    label: "Action",
    align: "left",
    field: "Action",
  },
];

const getBanners = async () => {
  try {
    const responseData = await getData("banner");
    banners.value = responseData.banner;
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
};

onMounted(getBanners);
</script>

<style scoped>
.image-banner {
  width: 100%;
  max-width: 300px;
  min-width: 300px;
  height: 100px;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.my-card {
  width: 100%;
  max-width: 320px;
}
</style>
