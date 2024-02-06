<template>
  <section class="">
    <div class="text-center text-h4 text-grey-8 q-pt-lg">Our Values</div>

    <div>
      <q-splitter v-model="splitterModel" style="height: 250px">
        <template v-slot:before>
          <q-tabs v-model="tab" vertical class="text-teal">
            <q-tab name="Time" icon="account_circle" label="Customer Focus" />
            <q-tab
              name="Apps"
              icon="construction"
              label="Employee Empowerment"
            />
            <q-tab name="Money" icon="track_changes" label="Open & Honest" />
            <q-tab
              name="Support"
              icon="tips_and_updates"
              label="Innovative Ideas"
            />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="Time">
              <div class="text-h4 q-mb-md">Customer Focus</div>
              <p>
                Customers are our #1 priority and we focus on what they need in
                every project we work on.
              </p>
            </q-tab-panel>

            <q-tab-panel name="Apps">
              <div class="text-h4 q-mb-md">Employee Empowerment</div>
              <p>
                We empower our employees with necessary tools and resources to
                develop the best apps.
              </p>
            </q-tab-panel>

            <q-tab-panel name="Money">
              <div class="text-h4 q-mb-md">Open & Honest</div>
              <p>
                Softlabs is an open and highly honest team of developers who
                know what our clients need.
              </p>
            </q-tab-panel>
            <q-tab-panel name="Support">
              <div class="text-h4 q-mb-md">Innovative Ideas</div>
              <p>
                Our products are based on innovative and creative ideas
                delivered by our team.
              </p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
    <div class="text-h1 flex items-center justify-center full-height">
      <q-img src="/src/assets/sections/section4.png" />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("mails"),
      splitterModel: ref(20),
    };
  },
};
</script>

<style lang="scss" scope>
.margin-x-md {
  margin: 0 340px;
}
</style>
