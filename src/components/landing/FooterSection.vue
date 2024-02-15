<template>
  <section class="bg-purple-10 q-px-md">
    <div class="row q-pt-lg">
      <div class="col-12 col-md-4 order-last q-my-lg">
        <div
          class="text-h2 text-bold text-white q-mb-lg text-center text-md-start"
        >
          Softlabs
        </div>
        <div class="text-grey-5 text-center text-md-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          ducimus vitae temporibus illo soluta provident obcaecati quos eligendi
          qui ut quaerat rem ipsam necessitatibus facilis laboriosam dolorem,
          quod modi cumque.
        </div>
        <div class="text-white q-mt-lg text-center">
          © 2024 All rights reserved.
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="text-center text-white text-h5 text-bold">
          Contact information
        </div>
        <div class="flex justify-center">
          <div class="flex content-center full-height">
            <q-list class="text-white">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="white" name="phone" />
                </q-item-section>

                <q-item-section>1-800-1234-467</q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="white" name="mail" />
                </q-item-section>

                <q-item-section>Info@demonlink.org</q-item-section>
              </q-item>
              <div class="flex justify-center q-mt-md">
                <q-icon
                  class="icon-search q-mr-lg"
                  v-for="icon in socialMediaIcons"
                  :key="icon"
                  :name="icon"
                />
              </div>
            </q-list>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 order-first">
        <div class="text-h6 text-white">Contact</div>
        <div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-my-md">
            <q-input
              standout
              class="full-width q-mb-md"
              filled
              v-model="name"
              label="Name"
              :dense="dense"
              label-color="white"
              color="white"
            />
            <q-input
              standout
              class="full-width q-mb-md"
              v-model="email"
              label="Email"
              filled
              type="email"
              :dense="dense"
              label-color="white"
              color="white"
            />
            <q-input
              class="full-width q-mb-md"
              v-model="text"
              filled
              autogrow
              type="textarea"
              label="Message"
              :dense="dense"
              label-color="white"
              color="white"
            />
            <div>
              <q-btn
                class="btn-form q-mt-md"
                rounded
                unelevated
                no-caps
                label="Send"
                type="submit"
                color="primary"
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const name = ref("");
const email = ref("");
const text = ref("");
const accept = ref(false);
const socialMediaIcons = [
  "fab fa-instagram",
  "fab fa-facebook",
  "fab fa-twitter",
  "fab fa-facebook-messenger",
  "fab fa-snapchat",
];

const onReset = () => {
  name.value = "";
  email.value = "";
  text.value = "";
  accept.value = false;
};
</script>

<style lang="scss" scope>
.btn-form {
  width: 100%;
}
.icon-search {
  font-size: 1.8rem;
}
</style>
