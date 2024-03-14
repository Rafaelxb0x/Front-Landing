<template>
  <section class="bg-dark">
    <div class="row q-pt-lg q-px-md">
      <div
        class="col-12 col-md-4 col-lg-4"
        v-for="business in admin"
        :key="business.id"
      >
        <div
          class="text-h5 text-bold text-white q-mb-lg text-start q-ml-lg text-md-start"
        >
          {{ business.name }}
        </div>
        <div class="text-grey-5 text-start text-md-start q-mx-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          ducimus vitae temporibus illo soluta provident obcaecati quos eligendi
          qui ut quaerat rem ipsam necessitatibus facilis laboriosam dolorem,
          quod modi cumque.
        </div>
      </div>
      <div
        class="col-12 col-sm-6 col-lg-4 text-center"
        v-for="business in admin"
        :key="business.id"
      >
        <div class="text-white text-h5 text-bold q-mr-lg">Follow Us</div>
        <div class="flex justify-center">
          <q-list class="text-white">
            <q-icon
              class="icon-footer q-mt-xl q-mr-lg"
              v-for="icon in socialMediaIcons"
              :key="icon"
              :name="icon"
            />
          </q-list>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="text-h5 text-bold text-white">Contact</div>
        <div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-my-md q-pr-xl">
            <q-input
              standout
              class="full-width q-mb-md text-white"
              filled
              v-model="name"
              label="Name"
              :dense="dense"
              label-color="white"
              color="white"
              dark
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
              dark
            />
            <q-input
              class="full-width q-mb-md text-white"
              v-model="text"
              filled
              autogrow
              type="textarea"
              label="Message"
              :dense="dense"
              label-color="white"
              color="white"
              dark
            />
            <div class="flex justify-end">
              <q-btn
                class="q-mt-sm btn-contact"
                rounded
                unelevated
                no-caps
                label="Send"
                type="submit"
                color="warning"
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
    <div class="text-center text-white q-pb-md bg-black q-py-md">
      © 2024 All rights reserved, At.Code.
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { postData } from "src/services/commonServices";
import { getData } from "src/services/commonServices";

const name = ref("");
const email = ref("");
const text = ref("");
const admin = ref([]);

const accept = ref(false);
const socialMediaIcons = [
  "fab fa-instagram",
  "fab fa-facebook",
  "fa-brands fa-x-twitter",
];

const loadBusiness = async () => {
  try {
    const data = await getData("business");
    admin.value = data.businesses;
    console.log("🚀 ~ LoadBusiness ~ value:", admin.value);
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(loadBusiness);

const onReset = () => {
  name.value = "";
  email.value = "";
  text.value = "";
  accept.value = false;
};

const onSubmit = async () => {
  try {
    const sendMail = await postData("contacto/enviar-mensaje", {
      nombre: name.value,
      email: email.value,
      mensaje: text.value,
    });
    onReset();
  } catch (error) {
    console.error("Error al enviar datos al servidor:", error);
  }
};
</script>

<style lang="scss" scope>
.icon-footer {
  font-size: 1.8rem;
  cursor: pointer;
  color: white;
}
.btn-contact {
  width: 100%;
  max-width: 100px;
}
</style>
