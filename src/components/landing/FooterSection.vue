<template>
  <section
    class="bg-purple-10"
    style="height: auto; width: 100%; padding: 0 150px"
  >
    <div class="row q-pt-lg">
      <div class="col">
        <div class="flex content-center full-height">
          <div class="text-h2 text-bold text-white q-mb-lg">Softlabs</div>
          <div class="text-grey-5 text-start">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            ducimus vitae temporibus illo soluta provident obcaecati quos
            eligendi qui ut quaerat rem ipsam necessitatibus facilis laboriosam
            dolorem, quod modi cumque.
          </div>
          <div class="text-grey-5 q-mt-lg">© 2024 All rights reserved.</div>
        </div>
      </div>
      <div class="col">
        <div class="text-center text-white text-h6 q-mb-lg">
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
      <div class="col">
        <div class="text-h6 text-white">Contact</div>
        <div class="">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md q-my-md"
          >
            <q-input
              standout
              class="full-width"
              filled
              v-model="name"
              label="Name"
              :dense="dense"
              label-color="white"
              color="white"
            />
            <q-input
              standout
              class="full-width"
              v-model="email"
              label="Email"
              filled
              type="email"
              :dense="dense"
              label-color="white"
              color="white"
            />
            <q-input
              class="full-width"
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
                class="btn-form"
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
.main-footer {
  position: relative;
  // height: 100vh;
  width: 100%;
}

.main-footer .gallery-footer {
  position: relative;
  height: auto;
  width: 100%;
  margin: auto;
  padding: 15px 0;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2vh;
  grid-auto-flow: dense;
}
.main-footer .gallery-footer img {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
