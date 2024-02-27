<template>
  <div class="flex full-height">
    <div class="col">
      <div class="flex justify-center content-center" style="height: 800px">
        <div class="row">
          <q-card class="border-card" style="width: 300px; height: 485px">
            <q-card-section class="bg-deep-purple-7">
              <h4 class="text-h5 text-bold text-center text-white q-my-md">
                {{ "Softlabs" }}
              </h4>
            </q-card-section>
            <q-card-section>
              <q-form class="q-px-sm q-pt-xl q-pb-lg" @submit="submitForm">
                <q-input
                  square
                  clearable
                  v-model="email"
                  type="email"
                  label="Email"
                >
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <q-input
                  square
                  clearable
                  v-model="password"
                  type="password"
                  label="Password"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                </q-input>

                <q-card-actions class="q-px-lg q-mt-lg">
                  <q-btn
                    unelevated
                    rounded
                    size="lg"
                    type="submit"
                    color="purple-4"
                    class="full-width text-white"
                    :label="'Inicia Sesion'"
                  />
                </q-card-actions>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!-- <div class="col">
      <q-img src="/src/assets/log3.png" />
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";
import { useRouter } from "vue-router";

const $q = useQuasar();

const isLogin = ref(true);
const email = ref("");
// const username = ref("");
const password = ref("");
const token = ref(null);
const router = useRouter();

const onSubmit = () => {
  if (accept.value !== true) {
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

const toggleAuthMode = () => {
  isLogin.value = !isLogin.value;
};

const submitForm = async () => {
  try {
    const apiUrl = "http://127.0.0.1:8000/api/login";

    const { data } = await axios.post(apiUrl, {
      email: email.value,
      password: password.value,
    });

    token.value = data.token;

    // Access router directly without the '$' prefix
    router.push({ name: "admin.dashboard" });

    console.log("Authentication Token:", token.value);
  } catch (error) {
    console.error("Error processing the request:", error.message);
  }
};
</script>

<style lang="scss" scope>
.my-card {
  max-width: 300px !important;
  width: 100%;
}
</style>
