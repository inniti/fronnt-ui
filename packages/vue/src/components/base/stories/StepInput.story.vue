<script lang="ts" setup>
import { ref } from "vue";
import StepInput from "../StepInput.vue";
import { logEvent } from "histoire/client";

const modelValue = ref(10);
const min = ref(10);
const max = ref(100);
const step = ref(5);

const disabled = ref(false);
</script>

<template>
  <Story title="Components/Step Input">
    <Variant title="Default">
      <StepInput
        v-model="modelValue"
        :disabled="disabled"
        :min="min"
        :max="max"
        :step="step"
        @update:model-value="logEvent('Model value update', $event)"
        @fixed="logEvent('Fixed input', $event)"
      />
    </Variant>

    <template #controls>
      <HstCheckbox v-model="disabled" title="Disabled" />
      <HstNumber v-model="min" title="Min" />
      <HstNumber v-model="max" title="Max" />
      <HstNumber v-model="step" title="Step" />
    </template>
  </Story>
</template>
