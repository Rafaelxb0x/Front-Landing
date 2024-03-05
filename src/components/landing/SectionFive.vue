<template>
  <section>
    <div class="container-plans">
      <div class="text-center text-h3 text-grey-8 q-mt-lg q-mb-lg">
        Nuestros Planes
      </div>
      <div
        class="flex justify-center items-center"
        v-for="promotion in sections"
        :key="promotion.id"
      >
        <!-- <q-card class="my-card-1 bg-grey-2 text-white flex items-center">
          <q-card-section class="text-center">
            <div class="text-h4 q-mb-lg text-black text-bold">Silver</div>
            <div class="text-grey-6 q-mb-lg">{{ msg }}</div>
            <div class="text-h4 text-black q-mb-lg">$100.00/mo</div>
            <q-btn
              class="btn-cards"
              outline
              rounded
              no-caps
              color="primary"
              label="Buy Now"
            />
          </q-card-section>
        </q-card> -->
        <q-card
          class="my-card-1 bg-purple-9 text-white flex items-center"
          style="height: 470px"
        >
          <q-card-section class="text-center">
            <div class="text-h4 q-mb-lg text-bold">{{ promotion.title }}</div>
            <div class="text-grey-4 q-mb-lg">{{ promotion.description }}</div>
            <div class="text-h4 q-mb-lg">${{ promotion.price }}/mo</div>
            <q-btn
              class="btn-cards"
              rounded
              no-caps
              color="primary"
              label="Contratar"
            />
          </q-card-section>
        </q-card>
        <!-- <q-card class="my-card-1 bg-grey-2 text-white flex items-center">
          <q-card-section class="text-center">
            <div class="text-h4 q-mb-lg text-black q-mb-lg text-bold">
              Diamond
            </div>
            <div class="text-grey-6 q-mb-lg">{{ msg }}</div>
            <div class="text-h4 text-black q-mb-lg">$199.00/mo</div>
            <q-btn
              class="btn-cards"
              outline
              rounded
              no-caps
              color="primary"
              label="Buy Now"
            />
          </q-card-section>
        </q-card> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getData } from "src/services/commonServices";

const sections = ref([]);

const loadPromotions = async () => {
  try {
    const data = await getData("promotions");
    sections.value = data.promotions;
    console.log("🚀 ~ loadPromotionss ~ value:", sections.value);
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(loadPromotions);

const msg = ref(
  "Lorem ipsum dolor sit amet, cssssonsectetur adipiscing elit lorem..Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem.."
);
</script>

<style lang="scss" scope>
.btn-cards {
  width: 100%;
  max-width: 180px;
  height: 60px;
  font-size: 1.2rem;
}
.my-card-1 {
  height: 400px;
  max-width: 450px;
  border-radius: 10px;
  box-shadow: none;
  margin-bottom: 5px;
}
.container-plans {
  width: 100%;
  padding: 0 5%;
}
</style>
