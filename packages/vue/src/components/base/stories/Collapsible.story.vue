<script lang="ts" setup>
import { ref } from "vue";
import Collapsible from "../Collapsible.vue";
const speed = ref(200);

const accordion1 = ref();
const accordion2 = ref();
const accordion3 = ref();

const handleAccordion = (openEntry: string) => {
  if (openEntry !== "accordion1") {
    accordion1.value.close();
  }
  if (openEntry !== "accordion2") {
    accordion2.value.close();
  }
  if (openEntry !== "accordion3") {
    accordion3.value.close();
  }
};
</script>

<template>
  <Story title="Components/Collapsible">
    <Variant title="Default">
      <template #controls>
        <HstNumber v-model="speed" title="Speed" />
      </template>
      <Collapsible :speed="speed">
        <template #header> Header </template>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, sit.
          Deserunt dignissimos libero excepturi. Non, ut eveniet laudantium sint
          totam, nihil distinctio facere molestiae provident voluptates laborum.
          Sit, fuga illum?
        </div>
      </Collapsible>
    </Variant>

    <Variant title="Accordion">
      <template #controls>
        <HstNumber v-model="speed" title="Speed" />
      </template>
      <Collapsible
        ref="accordion1"
        :speed="speed"
        @open="handleAccordion('accordion1')"
      >
        <template #header> Header </template>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, sit.
          Deserunt dignissimos libero excepturi. Non, ut eveniet laudantium sint
          totam, nihil distinctio facere molestiae provident voluptates laborum.
          Sit, fuga illum?
        </div>
      </Collapsible>
      <Collapsible
        ref="accordion2"
        :speed="speed"
        @open="handleAccordion('accordion2')"
      >
        <template #header> Header </template>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, sit.
          Deserunt dignissimos libero excepturi. Non, ut eveniet laudantium sint
          totam, nihil distinctio facere molestiae provident voluptates laborum.
          Sit, fuga illum?
        </div>
      </Collapsible>
      <Collapsible
        ref="accordion3"
        :speed="speed"
        @open="handleAccordion('accordion3')"
      >
        <template #header> Header </template>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, sit.
          Deserunt dignissimos libero excepturi. Non, ut eveniet laudantium sint
          totam, nihil distinctio facere molestiae provident voluptates laborum.
          Sit, fuga illum?
        </div>
      </Collapsible>
    </Variant>
  </Story>
</template>
