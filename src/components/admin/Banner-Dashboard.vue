<template>
  <q-card class="no-shadow" bordered>
    <q-card-section>
      <div class="text-h6 text-grey-8">
        Banner
        <q-btn
          label="Add +"
          class="float-right text-capitalize text-indigo-8 shadow-3"
          icon="add"
          to="/form-banner"
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
          <q-btn icon="edit" size="sm" flat dense />
          <q-btn icon="delete" size="sm" class="q-ml-sm" flat dense />
        </q-td>
      </template>
    </q-table>
  </q-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getData } from "src/services/commonServices";

const banners = ref([]);
const columns = [
  {
    name: "title",
    required: true,
    label: "Title",
    align: "left",
    field: "title",
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

<style scoped></style>
