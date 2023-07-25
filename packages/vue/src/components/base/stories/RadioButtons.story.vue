<script lang="ts" setup>
import { ref } from "vue";
import RadioButtons from "../RadioButtons.vue";

const modelValue1 = ref("b");
const modelValue2 = ref("b");

const options1 = [
  { value: "a", label: "A" },
  { value: "b", label: "B" },
  { value: "c", label: "C", disabled: true },
  { value: "d", label: "D" },
  { value: "e", label: "E" },
];

const options2 = [
  { value: "a", label: "A" },
  { value: "b", label: "B" },
  { value: "c", label: "C", disabled: true },
  { value: "d", label: "D" },
  { value: "e", label: "E" },
];
</script>

<template>
  <Story title="Components/Radio Buttons">
    <Variant title="Default">
      <div style="margin-bottom: 5rem">
        <RadioButtons
          v-model="modelValue1"
          :options="options1"
          name="radio-button-group-1"
        />
      </div>

      <div>
        <RadioButtons
          v-model="modelValue2"
          :options="options2"
          name="radio-button-group-2"
        />
      </div>
    </Variant>
  </Story>
</template>
