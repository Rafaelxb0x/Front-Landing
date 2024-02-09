<template>
  <section class="">
    <div class="text-center text-h3 text-grey-8 q-mt-lg q-mb-lg">Pricing</div>
    <div class="flex justify-center items-center">
      <q-card class="my-card-1 bg-grey-2 text-white flex items-center">
        <q-card-section class="text-center">
          <div class="text-h4 q-mb-lg text-black text-bold">Silver</div>
          <div class="text-grey-6 q-mb-lg">{{ lorem }}</div>
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
      </q-card>
      <q-card
        class="my-card-1 bg-purple-9 text-white flex items-center"
        style="height: 470px"
      >
        <q-card-section class="text-center">
          <div class="text-h4 q-mb-lg text-bold">Gold</div>
          <div class="text-grey-4 q-mb-lg">{{ lorem }}</div>
          <div class="text-h4 q-mb-lg">$149.00/mo</div>
          <q-btn
            class="btn-cards"
            rounded
            no-caps
            color="primary"
            label="Buy Now"
          />
        </q-card-section>
      </q-card>
      <q-card class="my-card-1 bg-grey-2 text-white flex items-center">
        <q-card-section class="text-center">
          <div class="text-h4 q-mb-lg text-black q-mb-lg text-bold">
            Diamond
          </div>
          <div class="text-grey-6 q-mb-lg">{{ lorem }}</div>
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
      </q-card>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.",
    };
  },
};
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
}
</style>
