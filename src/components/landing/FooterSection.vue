<template>
  <section
    class="bg-purple-10"
    style="height: 400px; width: 100%; padding: 0 150px"
  >
    <div class="row q-pt-lg">
      <div class="col flex items-center">
        <div class="text-h2 text-bold text-white q-mb-lg">Softlabs</div>
        <div class="text-grey-5 text-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          ducimus vitae temporibus illo soluta provident obcaecati quos eligendi
          qui ut quaerat rem ipsam necessitatibus facilis laboriosam dolorem,
          quod modi cumque.
        </div>
        <div class="text-grey-5 q-mt-lg">© 2024 All rights reserved.</div>
      </div>
      <div class="col">
        <div class="text-start text-white text-h6">Contact information</div>
        <div>
          <div class="q-pa-md">
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
        <div class="text-white text-h6">gallery</div>
        <div class="main-footer">
          <div class="gallery-footer">
            <div class="img-footer">
              <img src="/src/assets/1.jpg" alt="" />
            </div>
            <div class="img-footer">
              <img src="/src/assets/2.jpg" alt="" />
            </div>
            <div class="img-footer">
              <img src="/src/assets/3.jpg" alt="" />
            </div>
            <div class="img-footer">
              <img src="/src/assets/4.jpg" alt="" />
            </div>
            <div class="img-footer">
              <img src="/src/assets/2.jpg" alt="" />
            </div>
            <div class="img-footer">
              <img src="/src/assets/1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="col q-ml-lg">
        <div class="text-white text-h6">Newsletter</div>
        <div class="text-grey-5 text-start q-mt-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          ducimus vitae temporibus illo soluta provident obcaecati quos eligendi
          qui ut quaerat rem ipsam necessitatibus facilis laboriosam dolorem,
          quod modi cumque.
        </div>
        <q-input
          class="q-mt-lg"
          v-model="email"
          filled
          type="email"
          label="Enter your e-mail"
        />
        <q-btn
          class="btn-form q-mt-lg"
          rounded
          no-caps
          label="Suscribe"
          type="submit"
          color="primary"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const email = ref("");

const socialMediaIcons = [
  "fab fa-instagram",
  "fab fa-facebook",
  "fab fa-twitter",
  "fab fa-facebook-messenger",
  "fab fa-snapchat",
];
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
