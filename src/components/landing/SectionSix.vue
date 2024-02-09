<template>
  <section class="">
    <div class="row">
      <div class="col">
        <div class="flex items-center full-height q-mx-lg">
          <div class="q-pa-md">
            <q-list>
              <q-item
                clickable
                v-ripple
                v-for="contact in contacts"
                :key="contact.label"
              >
                <q-item-section avatar>
                  <q-img :src="`/src/assets/${contact.icon}`"></q-img>
                </q-item-section>
                <q-item-section class="text-h6 text-grey-7">{{
                  contact.label
                }}</q-item-section>
              </q-item>
            </q-list>
            <div class="flex justify-center q-mt-md">
              <q-icon
                class="icon-search q-ml-md"
                v-for="icon in socialMediaIcons"
                :key="icon"
                :name="icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col q-mx-none q-px-none">
        <div class="q-ml-lg q-mt-lg q-pl-xs text-h6 text-grey-7">
          Get in Touch
        </div>
        <div class="q-pa-lg q-mx-lg">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              class="full-width"
              filled
              v-model="name"
              label="Name"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <q-input
              class="full-width"
              v-model="email"
              label="Email"
              filled
              type="email"
            />
            <q-input
              class="full-width"
              v-model="text"
              filled
              type="textarea"
              label="Message"
            />
            <div>
              <q-btn
                class="btn-form"
                rounded
                no-caps
                label="Send"
                type="submit"
                color="primary"
              />
            </div>
          </q-form>
        </div>
      </div>
      <div class="col">
        <template>
          <section class="">
            <div class="row">
              <div class="col">
                <div
                  class="q-pa-md q-mx-lg flex justify-center items-center full-height"
                >
                  <q-list>
                    <q-item
                      clickable
                      v-ripple
                      v-for="contact in contacts"
                      :key="contact.label"
                    >
                      <q-item-section avatar>
                        <q-img :src="`/src/assets/${contact.icon}`"></q-img>
                      </q-item-section>
                      <q-item-section class="text-h6 text-grey-7">{{
                        contact.label
                      }}</q-item-section>
                    </q-item>
                  </q-list>
                  <div class="flex justify-center q-mt-md">
                    <q-icon
                      class="icon-search"
                      v-for="icon in socialMediaIcons"
                      :key="icon"
                      :name="icon"
                    />
                  </div>
                </div>
              </div>
              <div class="col q-mx-none q-px-none">
                <div class="q-ml-lg q-mt-lg q-pl-xs text-h6 text-grey-7">
                  Get in Touch
                </div>
                <div class="q-pa-lg q-mx-lg">
                  <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
                  >
                    <q-input
                      class="full-width"
                      filled
                      v-model="name"
                      label="Name"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    />
                    <q-input
                      class="full-width"
                      v-model="email"
                      label="Email"
                      filled
                      type="email"
                    />
                    <q-input
                      class="full-width"
                      v-model="text"
                      filled
                      type="textarea"
                      label="Message"
                    />
                    <div>
                      <q-btn
                        class="btn-form"
                        rounded
                        no-caps
                        label="Send"
                        type="submit"
                        color="primary"
                      />
                    </div>
                  </q-form>
                </div>
              </div>
              <div class="col"></div>
            </div>
            <div class="text-h1 flex items-center justify-center full-height">
              <q-img src="/src/assets/sections/section6.png" />
            </div>
          </section>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();

const name = ref("");
const email = ref("");
const text = ref("");
const accept = ref(false);
const contacts = [
  {
    icon: "ubicacion2.svg",
    label: "2130 Fulton Street, San Diego, CA  94117-1080 USA",
  },
  { icon: "phone.svg", label: "1-800-1234-567" },
  { icon: "mail.svg", label: "Info@demolink.org" },
];

const socialMediaIcons = [
  "fab fa-instagram",
  "fab fa-facebook",
  "fab fa-twitter",
  "fab fa-facebook-messenger",
  "fab fa-snapchat",
];

const onSubmit = () => {
  if (!accept.value) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "You need to accept the license and terms first",
    });
  } else {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  }
};

const onReset = () => {
  name.value = "";
  email.value = "";
  text.value = "";
  accept.value = false;
};
</script>

<style lang="scss" scope>
.icon-search {
  font-size: 1.7rem;
  cursor: pointer;
}

.btn-form {
  width: 100%;
  max-width: 130px;
  height: 50px;
  font-weight: 600;
  letter-spacing: 1px;
}
</style>
