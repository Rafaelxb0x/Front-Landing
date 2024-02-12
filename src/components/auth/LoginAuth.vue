<template>
  <div class="flex justify-center content-center" style="height: 800px">
    <div class="row">
      <q-card class="border-card" style="width: 300px; height: 485px">
        <q-card-section class="bg-deep-purple-7">
          <h4 class="text-h5 text-bold text-center text-white q-my-md">
            {{ isLogin ? "Softlabs" : "Registration" }}
          </h4>
          <div
            class="absolute-bottom-right q-pr-md cursor-pointer"
            style="transform: translateY(50%)"
          ></div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl q-pb-lg">
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
              v-if="!isLogin"
              v-model="username"
              type="username"
              label="Username"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
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
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg q-mt-lg">
          <q-btn
            unelevated
            rounded
            size="lg"
            color="purple-4"
            class="full-width text-white"
            :label="isLogin ? 'Sign In' : 'Get Started'"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLogin = ref(true);
const email = ref("");
const username = ref("");
const password = ref("");

const toggleAuthMode = () => {
  isLogin.value = !isLogin.value;
};
</script>

<style lang="scss" scope>
.border-card {
  border-radius: 30px;
}
</style>
